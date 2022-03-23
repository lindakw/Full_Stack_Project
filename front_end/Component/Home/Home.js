import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyles from "./Home"

const Home = ({navigation}) => {
  return (
    <View style={HomeStyles.container}>
      <TouchableOpacity style={HomeStyles.newsContainer} onPress={()=>{navigation.navigate('News')}}>
        <Text style={HomeStyles.buttonText}>Check the News!</Text>
      </TouchableOpacity >
      <TouchableOpacity style={HomeStyles.weatherContainer} onPress={()=>{navigation.navigate('Weather')}}>
        <Text style={HomeStyles.buttonText}>Check the Weather!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
