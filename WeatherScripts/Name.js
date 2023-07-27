async function Name(city)
{
const URL = 'http://api.weatherapi.com/v1/current.json?key=98f5b2c716714f4b9b581625231207&q='+city+'&aqi=no';

const response = await fetch(URL).then((response) => response.json()).then((json) => {
        if(json.length == 0)
        {
            console.log("EMPTY");
        }
        else
        {
            console.log(json);
            console.log(json.location.name);
        }
        
    }).catch((error) => {
        console.error(error);
    }
    );
}
Name('Chicago');
export {Name};
