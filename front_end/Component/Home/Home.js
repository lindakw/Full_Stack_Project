import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./HomeStyle.js";
const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Home Page!</Text>
      <TouchableOpacity
        style={styles.newsContainer}
        onPress={() => props.navigation.navigate("News")}
      >
        <Text style={styles.buttonText}>Check the News!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.weatherContainer}>
        <Text style={styles.buttonText}>Check the Weather!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
