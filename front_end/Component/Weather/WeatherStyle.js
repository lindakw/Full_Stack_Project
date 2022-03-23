import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import React, { useState } from "react";
import styles from "./WeatherStyle";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const Weather = () => {
  const [info, setInfo] = useState({});
  const [place, setPlace] = useState("");
  const [isSearching, setIsSearching] = useState(true);

  const searchWeather = () => {
    (async () => {
      try {
        const weatherResponse = await axios.get(
          `http://localhost:3000/api/weather?q=${place}`
        );
        setInfo(weatherResponse.data);
        console.log("This is the weather data ==>", weatherResponse.data);
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

      {isSearching ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="search for a city"
            value={place}
            onChangeText={setPlace}
          />
          <TouchableOpacity
            onPress={() => {
              searchWeather(), setIsSearching(!isSearching);
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
      ) : (
        <View>{/* // <Text>{info?.main.temp}</Text> */}</View>
      )}
    </View>
  );
};

export default Weather;
