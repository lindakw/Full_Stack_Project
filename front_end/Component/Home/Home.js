import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
<<<<<<< HEAD
import styles from "./HomeStyle"
=======
import styles from "./HomeStyle";
>>>>>>> d04c7607bba46cbff2282039152630721a8d67f4

const Home = (props) => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      
      <TouchableOpacity style={styles.newsContainer}>
        <Text style={styles.buttonText} onPress={() => props.navigation.navigate("News")}>Check the News!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.buttonText} onPress={()=> props.navigation.navigate("Weather")}>Check the Weather!</Text>
=======
      <TouchableOpacity style={styles.newsContainer}>
        <Text
          style={styles.buttonText}
          onPress={() => props.navigation.navigate("News")}
        >
          Check the News!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <Text
          style={styles.buttonText}
          onPress={() => props.navigation.navigate("Weather")}
        >
          Check the Weather!
        </Text>
>>>>>>> d04c7607bba46cbff2282039152630721a8d67f4
      </TouchableOpacity>

   
    </View>
  );
};

export default Home;
