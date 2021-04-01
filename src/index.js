import { projectAdd as projectDom1, activeProject, makeActive } from "./DOMProjectsSidebar.js";
import { ifPageLoaded, lsItems } from "./localStorageItems";
import { newTask, addList } from "./DOMtoDo.js";

export let projects = [];

/* test for now- fix later so that main page is 'active' */

const projectAdd = document.querySelector("#projectadd");

if (lsItems) {
  projects = lsItems;
}

document.addEventListener("DOMContentLoaded", ifPageLoaded());







projectAdd.addEventListener("click", function () {
  projectDom1();
});

addList.addEventListener("click", function () {
  newTask(taskField.value, dateField.value, priorityField.value);
});

export const titles = document.querySelectorAll(".projecttitles");
export const projectName = document.querySelector("#project-name");

//active tab switching
activeProject();

//when clicked grab innerhtml of folder and match it to array

console.log(projects)

const taskField = document.querySelector(".task-input")
const dateField = document.querySelector("#start")
const priorityField = document.querySelector("#priority")



