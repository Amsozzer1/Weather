import React,{useEffect,useState} from "react";
import { View, StyleSheet, Text,ScrollView,Dimensions,Image,Card } from "react-native";
import {city} from "./SearchScreen.js";
import ForecastData from "./ForecastData.js";
import {ForecastDataOBJ} from "./ForecastData.js";
//import{Name} from "./WeatherScripts/Name.js";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const About = () => {
  ForecastData(city);
    console.log(ForecastDataOBJ.forecast);
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
        <View>
            <Image style={{ height: height, width: width, position: 'absolute', top:0, left:0 }} source= {require("./ICONS/64x64/day/DAYbg1.jpg")} />
        </View>
        <ScrollView style={{ flex:1 }}>
        <View>

{data ? (
  <View >
      <Text style={[styles.center, styles.title, ]}>{data.location.name}</Text>
      <Text style={[styles.center, styles.WEATHER]}>{data.current.temp_f} F</Text>
      <Text style={styles.center}>{data.location.region}</Text>
      {/*Card 1*/}
      <View style={styles.Cardcontainer}>
      <Text style={styles.Cardtitle}>title</Text>
      <Text style={styles.Cardcontent}>content</Text>
    </View>
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
  title:{

    fontSize: 18,
    color: 'white',
    paddingTop:'15%',
    
  },
  WEATHER:{
    fontSize:32,
    color:'white',
    paddingTop:-200
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
    opacity: 0.5,
    boxShadow: '0 0 20px rgba(0,0,0,0.15)',
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

export {About};