// Date: 2021/09/09
import { StyleSheet} from 'react-native';
import React, { useEffect, useState,Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { MainScreen } from './SearchScreen.js';
import {BottomTabNavigator} from "./TabNavigator.js";


  export default function App() {
    
  
    return (
      <NavigationContainer>
      {/*<MainScreen />*/}
      
      <BottomTabNavigator />
    </NavigationContainer>
      
      
    );
  }
  
  const styles = StyleSheet.create({
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
  });
  