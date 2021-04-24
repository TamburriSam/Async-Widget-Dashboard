const weatherBox = document.querySelector("#weatherbox");

async function getWeather(zip) {
  try {
    let weatherInfoContainer = document.querySelector(".weatherInfoContainer");
    let zipInput = document.querySelector("#zip-code");

    let weatherInfo = document.createElement("div");
    weatherInfo.setAttribute("class", "weather-info");

    weatherInfoContainer.lastChild.innerHTML = "";

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=7cc8db0ccac4de49d0b84f2e17a789d4`
    );
    const weatherData = await response.json();

    const weatherLocation = weatherData.name;
    const weatherTemp = Math.round((weatherData.main.temp - 273.15) * 1.8 + 32);
    const weatherFeelsLike = Math.round(
      (weatherData.main.feels_like - 273.15) * 1.8 + 32
    );
    const weatherSky = weatherData.weather[0].main;
    const weatherIcon = weatherData.weather[0].icon;

    let iconHolder = document.createElement("div");
    iconHolder.innerHTML = `<div class="weather-icon"><img class = "icon"src="icons/${weatherIcon}.png" /></div>
  `;

    weatherInfoContainer.appendChild(weatherInfo);
    weatherInfo.innerHTML = `${weatherSky} in ${weatherLocation}<br>Temperature: ${weatherTemp} <span>&#8457;</span><br>Feels Like: ${weatherFeelsLike}<span>&#8457;</span>`;

    weatherBox.appendChild(iconHolder);
    weatherBox.appendChild(weatherInfoContainer);

    zipInput.setAttribute("placeholder", "New Zip");
    zipInput.value = ``;
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
