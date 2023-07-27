import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {Home} from "./Home.js";
import {About} from "./About.js";
import {WeatherScreen} from "./WeatherScreen.js";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9AC4F8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        
      </Stack.Navigator>
    );
  }
  const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, ContactStackNavigator };