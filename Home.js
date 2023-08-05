import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image,ScrollView,FlatList,Switch } from 'react-native';
import React, { useEffect, useState,Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { ListItem, SearchBar } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
//import {DATA} from './CITIES.js';

import { MainStackNavigator } from "./MainNavigation.js";

import {BottomTabNavigator} from "./TabNavigator.js";
import { WeatherScreen } from "./WeatherScreen.js";
import {ExampleAsyncStorage} from "./HelpScreen.js";


const Home = ({ navigation }) => {
  return (

        <ScrollView style= {{backgroundColor: 'lightblue' }} >

<TouchableOpacity onPress={()=>{navigation.navigate('Help')}}>
<View style={styles.Cardcontainer}>
      <Text style={styles.Cardtitle}>title</Text>
      <Text style={styles.Cardcontent}>content</Text>
</View>
<View style={styles.Cardcontainer}>
      <Text style={styles.Cardtitle}>title</Text>
      <Text style={styles.Cardcontent}>content</Text>
</View>
<View style={styles.Cardcontainer}>
      <Text style={styles.Cardtitle}>title</Text>
      <Text style={styles.Cardcontent}>content</Text>
</View>
</TouchableOpacity>


</ScrollView>

  );
};


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
    container: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 10,
      backgroundColor: '#F5F5F5',
    },
    item: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 8,
      borderRadius: 5,
    },
    title: {
      fontSize: 18,
    },
    
    loadingText: {
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 18,
      color: '#666666',
    },
    noResultsText: {
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 18,
      color: '#666666',
    },
    containerSettings: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    titleSettings: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    settingLabel: {
      fontSize: 18,
    },
    settingValue: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      marginRight: 10,
    },
    optionText: {
      fontSize: 16,
      color: '#333333',
    },
    selectedOption: {
      backgroundColor: '#007AFF',
      borderColor: '#007AFF',
    },
    selectedOptionText: {
      color: '#FFFFFF',
    },
    themeLabel: {
      fontSize: 16,
      marginHorizontal: 8,
    },
    Cardcontainer: {
      backgroundColor: '#fff',
      borderRadius: 25,
      padding: 16,
      margin: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    Cardtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    Cardcontent: {
      fontSize: 16,
    },
  });
  
export default Home;