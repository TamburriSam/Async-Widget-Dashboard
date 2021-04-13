import { Project } from "./DOMProjectsSidebar.js";
import { ifPageLoaded, lsItems } from "./localStorageItems";
import { newTask, addList } from "./DOMtoDo.js";
import { today } from "./namebox.js";

export let projects = [];

/* test for now- fix later so that main page is 'active' */

const projectAdd = document.querySelector("#projectadd");

if (lsItems) {
  projects = lsItems;
}

document.addEventListener("DOMContentLoaded", ifPageLoaded());

//ADD COLOR PICKER BACKGROUND
//ADD COLOR PICKER BACKGROUND
//ADD COLOR PICKER BACKGROUND

//ADD COLOR PICKER BACKGROUND

//ADD COLOR PICKER BACKGROUND

//ADD COLOR PICKER BACKGROUND

//checklist - circle next to task - set timeout strikethrough then set timeout deletetask function

projectAdd.addEventListener("click", function () {
  Project.projectAdd();
});

addList.addEventListener("click", function () {
  newTask(taskField.value, dateField.value, priorityField.value);
});

export const titles = document.querySelectorAll(".projecttitles");
export const projectName = document.querySelector("#project-name");

//active tab switching
Project.activeProject();

//when clicked grab innerhtml of folder and match it to array

console.log(projects);

const taskField = document.querySelector(".task-input");
const dateField = document.querySelector("#start");
const priorityField = document.querySelector("#priority");

let nameField = document.querySelector("#namebox");

nameField.innerHTML = today;

console.log(`<span>&#8457;</span>`);

//waiting to verify api key
/* const weatherBox = document.querySelector("#weatherbox");
weatherBox.addEventListener("click", function () {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7cc8db0ccac4de49d0b84f2e17a789d4`,
    { mode: "cors" }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
  console.log("clicked");
}); */

let locationIcon = document.querySelector(".weather-icon");

const weatherBox = document.querySelector("#weatherbox");

weatherBox.innerHTML = `<div id="weather-title">Weather </div><input type="text" id="zip-code" placeholder="Zip Code"> <br> <button id ="zipbutton">Get Weather</button> `;

let zip = "";

let zipInput = document.querySelector("#zip-code");
document.getElementById("zipbutton").addEventListener("click", function () {
  zip = zipInput.value;

  getWeather(zip);

  zipInput.style.bottom = "53px";
  zipInput.style.left = "100px";
  zipInput.style.position = "relative";
});

async function getWeather(zip) {
  try {
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

    let weatherInfo = document.createElement("div");
    weatherInfo.innerHTML = "";
    weatherInfo.innerHTML = `${weatherSky} in ${weatherLocation}<br>Temperature: ${weatherTemp} <span>&#8457;</span><br>Feels Like: ${weatherFeelsLike}<span>&#8457;</span>`;

    weatherBox.appendChild(iconHolder);
    weatherBox.appendChild(weatherInfo);

    console.log(weatherData);
  } catch (err) {
    console.log(err);
  }
  /*   console.log(weatherLocation);
  console.log(weatherTemp);
  console.log(weatherFeelsLike);
  console.log(weatherSky);
  console.log(weatherIcon); */
}

var detectCapitalUse = function (word) {
  let isTrue;
  let allCap = [];
  let allLow = [];
  for (let i = 0; i < word.length; i++) {
    allCap.push(word[i].toUpperCase());
    allLow.push(word[i].toLowerCase());
  }
  allCap = allCap.join("");
  allLow = allLow.join("");
  if (allCap === word) {
    return true;
  } else if (
    word[0] === word[0].toUpperCase() &&
    word.substring(1).toLowerCase() === word.substring(1)
  ) {
    return true;
  } else if (allLow === word) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse("FlaG"));
