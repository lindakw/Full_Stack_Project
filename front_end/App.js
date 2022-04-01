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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "white" },
            headerTitleAlign: "center",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: "News",
            headerStyle: { backgroundColor: "white" },
            headerTitleAlign: "center",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{
            title: "Weather",
            headerStyle: { backgroundColor: "white" },
            headerTitleAlign: "center",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
