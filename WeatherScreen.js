import React,{useEffect,useState} from "react";
import { View, StyleSheet, Text,ScrollView,Dimensions,Image,Card,TouchableOpacity, } from "react-native";
import {city} from "./SearchScreen.js";
import ForecastData from "./ForecastData.js";
import {ForecastDataOBJ,icon} from "./ForecastData.js";
import { Current_Data } from "./WeatherScripts/ImportingAllData.js";
import { Entypo } from '@expo/vector-icons';
//import{Name} from "./WeatherScripts/Name.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


let SotredCities = ['Chicago'];
//let IconImgRoute = require("./ICONS"+icon);
const WeatherScreen = () => {
   // Call the function to fetch data and log the result
  ForecastData(city);
    //console.log(ForecastDataOBJ.forecast);
    const [data, setData] = useState(null); // Assuming your data is an object or an array
    //const[currentWeather, setcurrentWeather] = useState(null);
    console.log("./ICONS"+icon);
    

    async function fetchDataAndLog() {
      const data = await Current_Data(city);
      //console.log(data);
      //setcurrentWeather(data);
      
  }
  
  fetchDataAndLog();
  //console.log(currentWeather);
  const saveArray = async (key, array) => {
    try {
      const jsonValue = JSON.stringify(array);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Array saved successfully');
    } catch (error) {
      console.error('Error saving array:', error);
    }
  };
  const getArray = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        const array = JSON.parse(jsonValue);
        return array;
      }
    } catch (error) {
      console.error('Error retrieving array:', error);
    }
    console.log(array);
  };
  // Save an array
  /*
  const retrievedArray = await getArray('myArrayKey');
  console.log(retrievedArray);
  */
  



  let IconImgRoute = require("./ICONS/64x64/day/302.png");
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
  <View>
  <TouchableOpacity
    onPress={() => {
      console.log('Pressed');
      SotredCities.push(city);
      saveArray('CitiesArray', SotredCities);
       getArray('CitiesArray');
      // Add your logic here
    }}
    style={styles.iconContainer}
  >
    <Entypo name="plus" size={30} color="black" />
  </TouchableOpacity>

    
{/*<TouchableOpacity onPress={console.log('ADD PRESSED')}><Entypo name="add-to-list" size={30} color="black" style= {styles.Entypo_btn} /></TouchableOpacity>*/}
      <Text style={[styles.center, styles.title, ]}>{data.location.name}</Text>
      <Text style={[styles.center, styles.WEATHER]}>{data.current.temp_f} F</Text>
      <Text style={styles.center}>{data.location.region}</Text>
      {/*Card 1*/}
      <View style={styles.Cardcontainer}>
        
        <View style= {{flexDirection:'row', }}>
          <TouchableOpacity onPress={()=>{console.log("pressed");
}}>
          <View style={{flexDirection:'column'}}>
           
          <Image source= {require(`./ICONS/64x64/day/302.png`)} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View>
          </TouchableOpacity>
          <View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/176.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View><View style={{flexDirection:'column'}}>
          <Image source= {require(`./ICONS/64x64/day/302.png`)} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View><View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 25, fontWeight:'bold'}}>  69°</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 25, fontWeight:'bold'}}>  69°</Text>
          </View>
        </View>
      </View>
            {/*Card 2*/}
            <View style={[styles.Cardcontainer, styles.card2]}>
        <View style= {{flexDirection:'row', }}>
          <View style={{flexDirection:'column'}}>
          <Image  source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View><View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View><View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>  69°</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 25, fontWeight:'bold'}}>  69°</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image  source= {require("./ICONS/64x64/day/113.png")} style={{width:40,height:40}}></Image>
            <Text style={{paddingEnd: 20, fontWeight:'bold'}}>Today</Text>
            <Text style={{paddingEnd: 25, fontWeight:'bold'}}>  69°</Text>
          </View>
        </View>
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
    backgroundColor: 'white',
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
    height: 100,
  },
  Cardtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  Cardcontent: {
    fontSize: 16,
    
  },
  card2: {
    height:200,
  },
  Entypo_btn:{
    position:"absolute",
    left:325,
    top:50

  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  iconContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1, // Make sure it's above other components
  },



});

export {WeatherScreen};