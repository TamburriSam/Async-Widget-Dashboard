import { Project } from "./createProject.js";
import { projectAdd as projectDom1 } from "./DOMProjectsSidebar.js";
import { ifPageLoaded, lsItems } from "./localStorageItems";

export let projects = [];

let user = new Project("Crap");
console.log(user.sayName());

const projectAdd = document.querySelector("#projectadd");

if (lsItems) {
  projects = lsItems;
}

document.addEventListener("DOMContentLoaded", ifPageLoaded());

projectAdd.addEventListener("click", function () {
  projectDom1();
});

console.log(projects);
