import { Project } from "./DOMProjectsSidebar.js";
import { ifPageLoaded, lsItems } from "./localStorageItems";
import { newTask, addList } from "./DOMtoDo.js";
import { today } from "./namebox.js";
import { getWeather } from "./WeatherBox.js";
import { format, compareAsc } from "date-fns";

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

console.log(`3`);

//weather

const clear = () => {};

const weatherBox = document.querySelector("#weatherbox");
weatherBox.innerHTML = `<div id="weather-title">Weather </div><input type="text" id="zip-code" placeholder="Zip Code"> <br> <div class="weatherInfoContainer"</div> <button id ="zipbutton">Get Weather</button> `;

let zipBtn = document.getElementById("zipbutton");
let zip;
let zipInput = document.querySelector("#zip-code");

zipBtn.addEventListener("click", function () {
  let w1 = document.querySelector(".weather-info");
  zip = zipInput.value;

  zipInput.style.position = "absolute";
  zipInput.style.right = "0px";
  zipInput.style.top = "10px";

  return getWeather(zip);
});

//due soon logic

export let projectList = [];

projects.forEach((project) => {
  let x = project.list;
  projectList.push(x);
});

export let other = projectList.flat().sort(function (a, b) {
  return new Date(b.date) - new Date(a.date);
});

const dueBox = document.querySelector("#duebox");

for (let i = 0; i < 3; i++) {
  /* dueBox.innerHTML = `${other[i]}`; */
  let div = document.createElement("div");
  div.setAttribute("class", "due-styling");
  div.innerHTML = `Task: ${other[i].task} Due: ${other[i].date}`;

  dueBox.appendChild(div);
}

console.log(other);
