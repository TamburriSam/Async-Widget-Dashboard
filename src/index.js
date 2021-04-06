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

console.log("d33");
