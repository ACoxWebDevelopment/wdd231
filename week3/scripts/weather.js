const temp = document.querySelector("#current-temp");
const weathimage = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const weathDesc = document.querySelector("#description")
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=530b32a0545eb744d5c32d0febcdd87c&units=imperial";
const myTown = document.querySelector("#town")
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults (data)
{
  temp.innerHTML = `${data.main.temp}&degF`;
  const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
  myTown.innerHTML = data.name;
  weathimage.src = iconsrc;
  weathDesc.innerHTML = data.weather[0].description;
}