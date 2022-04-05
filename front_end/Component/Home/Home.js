import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./HomeStyle"
import Weather from "../Weather/Weather";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.weatherImg}
        source={require("../Home/bgi.png")}
      />
      <TouchableOpacity style={styles.newsContainer}>
        <Text style={styles.buttonText} onPress={() => props.navigation.navigate("News")}>Daily News</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={()=> props.navigation.navigate("Weather")}>
        <Image style= {styles.weather} source={require("../Home/cloud.png")} />
        <Text style={styles.buttonText}>Weather</Text>      
        
      </TouchableOpacity>


    </View>
  );
};

export default Home;
