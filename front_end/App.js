import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Weather from "./Component/Weather/Weather";
import Home from "./Component/Home/Home";
import News from "./Component/News/News";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="News" component={News}></Stack.Screen>
        <Stack.Screen name="Weather" component={Weather}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9967A",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    marginTop: 25,
    height: 30,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 25,
    marginLeft: 20,
  },
  title: {
    fontFamily: "fantasy",
    fontSize: 30,
    fontWeight: 800,
    color: "white",
  },
  textArticle: {
    color: "white",
    fontSize: 15,
    fontFamily: "",
  },
});
