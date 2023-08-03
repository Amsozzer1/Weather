import {city} from "./SearchScreen.js";
let ForecastDataOBJ = [];
let icon = '';
const ForecastData= async function(city){
if(city == ''){
    city = 'London';
}
//console.log(city);

fetch("http://api.weatherapi.com/v1/forecast.json?key=98f5b2c716714f4b9b581625231207&q="+city+"&days=7&aqi=yes&alerts=yes")
.then(response => response.json())
.then(data => {
    //console.log(data.forecast.forecastday[0].day.condition.icon.split("weather")[2]);
    icon = data.forecast.forecastday[0].day.condition.icon.split("weather")[2];
    ForecastDataOBJ = data;
    //return data;
})
.catch(err => {
    console.log(err);
});



}
export default ForecastData;export {ForecastDataOBJ,icon};