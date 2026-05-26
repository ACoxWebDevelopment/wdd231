
// delcare needed variables
const temp = document.querySelector("#current-temp");
const weathimage = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector("figcaption");
const description = document.querySelector("#weathDesc")
const highTemp = document.querySelector("#tempHigh");
const loTemp = document.querySelector("#tempLo");
const relHumidity = document.querySelector("#humidity");
const localSunrise = document.querySelector("#sunrise");
const localSunset = document.querySelector("#sunset");
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=45.89&lon=-111.56&appid=530b32a0545eb744d5c32d0febcdd87c&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=45.89&lon=-111.56&appid=530b32a0545eb744d5c32d0febcdd87c&units=imperial";
const myTown = document.querySelector("#town")
let tempHighToday = document.querySelector("#todayTempHigh");
const tempHighTomorrow = document.querySelector("#tomorrowTempHigh");
const tempHighDayAfter = document.querySelector("#dayAfterTempHigh");

// addition declare variables due to issues with scope and passing parameters to functions
let scopeTodayArray = [];
let scopeForecastData =[];
let scopeTomorrowArray =[];
let scopeDayAfterTomorrowArray =[];

// function to get current weather data based on location
async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log (data);
      displayResults(data); 

    //error handling
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(); //calls current weather function
forecastFetch(); //call 3 day forecast weather function

// function for displaying current weather and icon
function displayResults(data) {
  temp.innerHTML = `${Math.floor(data.main.temp)}&degF`; //steps temp down to nearest whole number
  const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
  myTown.innerHTML = `City of ${data.name} Montana`;
  weathimage.src = iconsrc;
  weathDesc.innerHTML = data.weather[0].description;

let apiSunrise = data.sys.sunrise; //time conversion assisted by chatgpt
let sunriseTime= new Date(apiSunrise * 1000);
localSunrise.innerHTML = `sunrise: ${sunriseTime.toLocaleTimeString()}`;

let apiSunset = data.sys.sunset;
let sunsetTime = new Date(apiSunset * 1000);
localSunset.innerHTML = `sunset: ${sunsetTime.toLocaleTimeString()}`;

relHumidity.innerHTML = `Rel Humidity: ${data.main.humidity} %`;

}
  

// function for getting 3 day forecast
async function forecastFetch() {
  try {
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      scopeForecastData = forecastData
      findForecastedHighs(forecastData);
  
      //error handling
    } else {
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
    console.log(error);
  }
  

}

// function designed to loop through all the returned arrays from forecastFetch and find the high for each day
// relied on chatgpt for date comparison syntax and day of week spelled out
function findForecastedHighs(forecastData) {
  const todayArray=[];
  const tomorrowArray = [];
  const dayafterTomorrowArray = [];
  let todayDate = (new Date().toDateString());
  let tomorrow = new Date();
  tomorrow.setDate (tomorrow.getDate()+1);
  let tomorrowName = tomorrow.toLocaleDateString("en-US", { weekday: "long" });
  let tomorrowDate = tomorrow.toDateString();
  let dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate (dayAfterTomorrow.getDate()+2);
  let dayAfterTomorrowName = dayAfterTomorrow.toLocaleDateString("en-US", { weekday: "long" });
  let dayAfterTomorrowDate = dayAfterTomorrow.toDateString();

forecastData.list.forEach((item, index) => {
  let apiDate = new Date (item.dt_txt).toDateString();
 
    if(apiDate === todayDate)// if api date === today's date add the max temp to the today array ditto for tommorow and day after tomorrow
    {
      todayArray.push(item.main.temp_max);
      scopeTodayArray = todayArray;
    }
    else if (apiDate === tomorrowDate)
    {
      tomorrowArray.push(item.main.temp_max);
      scopeTomorrowArray = tomorrowArray;
    }
    else if (apiDate === dayAfterTomorrowDate)
    {
      dayafterTomorrowArray.push(item.main.temp_max);
      scopeDayAfterTomorrowArray = dayafterTomorrowArray;
    }
    
});



let mytempHighToday = sortHightemps(scopeTodayArray); //call the sort high temps function on the today array ditto for tomorrow and day after tomorrow arrays
if (mytempHighToday === null) //error handling if the today array is empty ditto for tommorw and day after tomorrow arrays
  {tempHighToday.innerHTML = "Today's Forecast high temp not available"}
else
tempHighToday.innerHTML = `Today's Forecast high temp ${Math.floor(mytempHighToday)}&degF`;

let mytempHighTomorrow = sortHightemps(scopeTomorrowArray);

if (mytempHighTomorrow === null) {
  tempHighTomorrow.innerHTML = `${tomorrowName}'s Forecast high temp not available`;
} else {
  tempHighTomorrow.innerHTML = `${tomorrowName}'s Forecast high temp ${Math.floor(mytempHighTomorrow)}°F`;
}


let myHighTempDayAfterTomorrow = sortHightemps(scopeDayAfterTomorrowArray);
if (myHighTempDayAfterTomorrow === null) {
  tempHighDayAfter.innerHTML = `${dayAfterTomorrowName}'s Forecast high temp not available`;
} else {
  tempHighDayAfter.innerHTML = `${dayAfterTomorrowName}'s Forecast high temp ${Math.floor(myHighTempDayAfterTomorrow)}°F`;
}

}

function sortHightemps(tempArray)
{
  let maxTemp = -100; //start maxTemp at a unreallistically low number
  if (tempArray.length === 0)//error handling
  {return null}
  else
  tempArray.forEach(element => {
if (element > maxTemp) // if temperature array element is higher than max temp use it as the new max temp
{
  maxTemp = element
}
    
  });

  return maxTemp
}




