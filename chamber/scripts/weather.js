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
let scopeTodayArray = [];
let scopeForecastData =[];
let scopeTomorrowArray =[];
let scopeDayAfterTomorrowArray =[];
async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
forecastFetch();

function displayResults(data) {
  temp.innerHTML = `${Math.floor(data.main.temp)}&degF`;
  const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
  myTown.innerHTML = `City of ${data.name} Montana`;
  weathimage.src = iconsrc;
  weathDesc.innerHTML = data.weather[0].description;
}

async function forecastFetch() {
  try {
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      scopeForecastData = forecastData
      findForecastedHighs(forecastData);
  
    } else {
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
    console.log(error);
  }
  

}


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
 
    if(apiDate === todayDate)
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



let mytempHighToday = sortHightemps(scopeTodayArray);
if (mytempHighToday === null) 
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

function sortHightemps(tempArray, data)
{
  let maxTemp = -100;
  if (tempArray.length === 0)
  {return null}
  else
  tempArray.forEach(element => {
if (element > maxTemp)
{
  maxTemp = element
}
    
  });

  return maxTemp
}




