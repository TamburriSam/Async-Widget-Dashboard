const weatherBox = document.querySelector("#weatherbox");

async function getWeather(zip) {
  try {
    /* weatherBox.innerHTML = `<div id="weather-title">Weather </div><input type="text" id="zip-code" placeholder="Zip Code"> <br> <button id ="zipbutton">Get Weather</button> `; */
    let weatherInfoContainer = document.querySelector(".weatherInfoContainer");

    let weatherInfo = document.createElement("div");
    weatherInfo.setAttribute("class", "weather-info");

    weatherInfoContainer.lastChild.innerHTML = "";
    //weatherInfo.innerHTML = "";
    //weatherBox.lastChild.textContent = "";

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

    //let weatherIcon = document.querySelector(".weather-icon");

    iconHolder.innerHTML = `<div class="weather-icon"><img class = "icon"src="icons/${weatherIcon}.png" /></div>
  `;

    weatherInfoContainer.appendChild(weatherInfo);
    //weatherInfo.innerHTML = "";
    weatherInfo.innerHTML = `${weatherSky} in ${weatherLocation}<br>Temperature: ${weatherTemp} <span>&#8457;</span><br>Feels Like: ${weatherFeelsLike}<span>&#8457;</span>`;

    weatherBox.appendChild(iconHolder);
    weatherBox.appendChild(weatherInfoContainer);

    console.log(weatherBox.lastChild);

    /////IMPORTANT MIGHT BEHERE
    //////
    //////
    //weatherBox.lastChild.innerHTML = "";
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
