let city = 'London';

let Current_Data = async function CurrentData(city) {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=98f5b2c716714f4b9b581625231207&q=' + city + '&aqi=no');
    const data = await response.json();
    //console.log(data);
    return data;
}

// Using an async function to handle the asynchronous behavior
/*
async function fetchDataAndLog() {
    const data = await Current_Data(city);
    console.log(data);
}

fetchDataAndLog(); // Call the function to fetch data and log the result
*/
export {Current_Data};