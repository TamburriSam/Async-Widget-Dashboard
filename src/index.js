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

console.log("5");

//waiting to verify api key
const weatherBox = document.querySelector("#weatherbox");
weatherBox.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={641629d9803f70eee81a8b3336c55851}`,
    { mode: "cors" }
  );
});

/* async function getWeather() {
  const response = await fetch(
    `https://fcc-weather-api.glitch.me/api/current?lat=20&lon=60`
  );
  const weatherData = await response.json();

  console.log(weatherData);
}

getWeather(); */

let num = 0;

let p = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
  });
  if (num === 0) {
    resolve("Success");
  } else {
    reject("failed");
  }
}).then((result) => console.log(result));

let d = new Promise((resolve, reject) => {
  if (p) {
    resolve("Success again");
  } else {
    reject("failed");
  }
});

console.log(d);

/* const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

promise
  .then((position) => {
    return position.coords.longitude;
  })
  .catch((error) => console.log(error));

console.log(promise);

 */

/* let latitude = navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.longitude);
});

console.log(latitude); */
