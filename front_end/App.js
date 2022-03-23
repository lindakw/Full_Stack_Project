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
        <Stack.Screen name="Home">{Home}</Stack.Screen>
        <Stack.Screen name="News" component={News}></Stack.Screen>
        <Stack.Screen name="Weather" component={Weather}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
