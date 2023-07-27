import React,{useEffect,useState} from "react";
import { View, StyleSheet, Text,ScrollView,Dimensions,Image } from "react-native";
import {city} from "./SearchScreen.js";
//import{Name} from "./WeatherScripts/Name.js";

let width = Dimensions.get('window').width

const WeatherScreen = () => {
    const [data, setData] = useState(null); // Assuming your data is an object or an array

  // Your async function that fetches data
  const fetchData = async () => {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=98f5b2c716714f4b9b581625231207&q='+city+'&aqi=no');
      const data = await response.json();
      setData(data); // Save the fetched data in the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Use useEffect to run the async function when the component is mounted
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once on mount


  return (
    <View style={{ flex:1, backgroundColor: 'transparent' }}>
        
        <ScrollView style={{ flex:1 }}>
        <View>

{data ? (
  <View >
      <Text style={[styles.center, styles.title]}>{data.location.name}</Text>
      <Text style={styles.center}>{data.location.region}</Text>
      <Text style={[styles.center, styles.title]}>WEATHER: {data.current.temp_f}</Text>

  </View>
  



) : (
  <Text>Loading...</Text>
)}
</View>
        </ScrollView>
      </View>

  );
};

const styles = StyleSheet.create({
    BackGroungImg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title
    : {
        fontSize: 18,
        color: 'white',
        },

});

export {WeatherScreen};