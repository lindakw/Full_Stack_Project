import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.newsContainer}>
        <Text style={styles.buttonText}>Check the News!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.weatherContainer}>
        <Text style={styles.buttonText}>Check the Weather!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
