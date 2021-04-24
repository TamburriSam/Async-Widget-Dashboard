import { Project } from "./DOMProjectsSidebar.js";
import { ifPageLoaded, lsItems } from "./localStorageItems";
import { newTask, addList } from "./DOMtoDo.js";
import { today, todaysDate } from "./namebox.js";
import { getWeather } from "./WeatherBox.js";
import { getQuote } from "./quoteBox.js";

export let projects = [];

const projectAdd = document.querySelector("#projectadd");

if (lsItems) {
  projects = lsItems;
}

document.addEventListener("DOMContentLoaded", ifPageLoaded());

//ADD COLOR PICKER BACKGROUND
//ADD COLOR PICKER BACKGROUND
//ADD COLOR PICKER BACKGROUND

projectAdd.addEventListener("click", function () {
  Project.projectAdd();
});

addList.addEventListener("click", function () {
  let inp = document.querySelector(".task-input");

  if (inp.value !== "") {
    newTask(taskField.value, dateField.value, priorityField.value);
  } else {
    alert("Please Enter a Task Name");
  }
});

export const titles = document.querySelectorAll(".projecttitles");
export const projectName = document.querySelector("#project-name");

//active tab switching
Project.activeProject();

const taskField = document.querySelector(".task-input");
const dateField = document.querySelector("#start");
const priorityField = document.querySelector("#priority");

let nameField = document.querySelector("#namebox");

nameField.innerHTML = `${today}<br>${todaysDate}`;

//weather
const weatherBox = document.querySelector("#weatherbox");
weatherBox.innerHTML = `<div id="weather-title">Weather </div><input type="text" id="zip-code" placeholder="Zip Code"> <br> <div class="weatherInfoContainer"</div> <button id ="zipbutton">Get Weather</button> `;

let zipBtn = document.getElementById("zipbutton");
let zip;
let zipInput = document.querySelector("#zip-code");

zipBtn.addEventListener("click", function () {
  zip = zipInput.value;

  zipInput.style.position = "absolute";
  zipInput.style.right = "0px";
  zipInput.style.top = "10px";

  return getWeather(zip);
});

//async quote fetcher
getQuote();

const project = (title = "test") => {
  const input = document.createElement("input");
  const br = document.createElement("br");
  const submit = document.createElement("button");
  const h2 = document.querySelector(".main");

  const div = document.createElement("div");

  div.setAttribute("class", "projecttitles");

  div.innerHTML = title;

  /* testing project object */
  const newProj = new Project(`${title}`, `${projects.length}`);

  projects.push(newProj);

  localStorage.setItem("projects", JSON.stringify(projects));

  input.style.display = "none";
  submit.style.display = "none";
  h2.appendChild(div);

  div.addEventListener("click", function () {
    Project.makeActive(this);

    todoList.innerHTML = "";

    Project.findTask(this);
  });
};
const todoList = document.querySelector(".ls-todos");

window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    project("Welcome To My App");
    document.querySelector(".projecttitles").click();

    localStorage.setItem("hasCodeRunBefore", true);
    newTask(
      "Create a new project folder by hitting NEW PROJECT on the sidebar"
    );
    newTask(
      "Enjoy your custom dashboard featuring the openWeather API and inspirational quotes from FITquotes API"
    );
  } else {
    let sideBar = document.querySelectorAll(".projecttitles");
    let last = sideBar[sideBar.length - 1];
    return last.click();
  }
};
