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
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=45.89&lon=-111.56&appid=530b32a0545eb744d5c32d0febcdd87c&units=imperial&cnt=18";
const myTown = document.querySelector("#town")
const tempHighToday = document.querySelector("#todayTempHigh");
const tempHighTomorrow = document.querySelector("#tomorrowTempHigh");
const tempHighDayAfter = document.querySelector("#dayAfterTempHigh")
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

function displayResults (data)
{
  temp.innerHTML = `${data.main.temp}&degF`;
  const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
  myTown.innerHTML = `City of ${data.name} Montana`;
  weathimage.src = iconsrc;
  weathDesc.innerHTML = data.weather[0].description;
}

async function forecastFetch()
{
    try {
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      console.log(forecastData); // testing only
      displayForecastResults(forecastData); // uncomment when ready
    } else {
        throw Error(await forecastResponse.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecastResults(forecastData)
{
  tempHighToday.innerHTML = `Today's Forecast high temp ${forecastData.list[0].main.temp_max}&degF`;
  tempHighTomorrow.innerHTML = `Tomorrow's Forecast high temp ${forecastData.list[8].main.temp_max}&degF`;
  tempHighDayAfter.innerHTML = `Day after Tomorrow's Forecast high temp ${forecastData.list[16].main.temp_max}&degF`;
}
