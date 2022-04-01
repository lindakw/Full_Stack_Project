import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import React, { useState, useEffect } from "react";
import styles from "./WeatherStyle";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const Weather = () => {
  const [info, setInfo] = useState({});
  const [place, setPlace] = useState("");
  const [isSearching, setIsSearching] = useState(true);
  const [showWeatherInfo, setShowWeatherInfo] = useState(false);
  let forecast = info.list;
  let data = [
    forecast?.[4],
    forecast?.[12],
    forecast?.[20],
    forecast?.[28],
    forecast?.[36],
  ];

  const dayname = (date) => {
    //dayname = new Date(info.list[0].dt * 1000).getDay()
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(date * 1000);
    const day = d.getDay();
    return days[day];
  };

  const searchWeather = () => {
    (async () => {
      try {
        const weatherResponse = await axios.get(
          // `http://localhost:3000/api/weather?q=${place}`

          // for simulator
          `http://10.0.2.2:3000/api/weather?q=${place}`
        );
        setInfo(weatherResponse.data);
        setShowWeatherInfo(true);
        //console.log("This is the weather data ==>", weatherResponse.data);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.weatherImg}
        source={require("../Weather/cloud.png")}
      />

      <View style={styles.searchContainer}>
        <TextInput
          placeholderTextColor="gray"
          style={styles.input}
          placeholder=" search for a city"
          value={place}
          onChangeText={setPlace}
        />
        <TouchableOpacity
          onPress={() => {
            searchWeather(), setIsSearching(!isSearching), setPlace("");
          }}
        >
          <AntDesign
            style={styles.icon}
            name="search1"
            size={28}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {showWeatherInfo ? (
        <View style={styles.displayInfo}>
          <Text style={styles.cityText}>{info.city?.name}</Text>
          <Text style={styles.tempText}>
            {Math.round(info.list[0].main?.temp)}°F
          </Text>
          <Text style={styles.infoText}>{info.list[0].weather?.[0].main}</Text>
          <View style={styles.highLow}>
            <Text style={styles.highText}>
              H: {Math.round(info.list[0].main?.temp_max)}°F
            </Text>
            <Text style={styles.lowText}>
              L: {Math.round(info.list[0].main?.temp_min)}°F
            </Text>
          </View>

          <FlatList
            data={data.splice(0, 5)}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.forcastView}>
                <Text style={styles.infoStyle}>{dayname(item.dt)}</Text>
                <Text style={styles.infoStyle}>
                  {Math.round(item.main.temp)} °F
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Weather;
