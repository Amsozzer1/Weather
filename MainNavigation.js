import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home.js";
//import {HelpScreen} from "./Home.js";
import {About} from "./About.js";
import {WeatherScreen} from "./WeatherScreen.js";
import HelpScreen from "./HelpScreen.js";


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
        <Stack.Group>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Help"  component={HelpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown: false}}/>
        <Stack.Screen name="Weather" component={WeatherScreen} options={{headerShown: false}}/>
        
        </Stack.Group>
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