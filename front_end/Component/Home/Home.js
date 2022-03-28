import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./HomeStyle"

const Home = (props) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.newsContainer}>
        <Text style={styles.buttonText} onPress={() => props.navigation.navigate("News")}>Check the News!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.buttonText} onPress={()=> props.navigation.navigate("Weather")}>Check the Weather!</Text>
      </TouchableOpacity>

   
    </View>
  );
};

export default Home;
