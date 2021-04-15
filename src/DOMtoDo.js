import { projectName, projects, other } from "./index";
import { Project } from "./DOMProjectsSidebar";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { openModal } from "./modal.js";
export const addList = document.querySelector("#todoadd");

function newTask(task, date = "4/15/2021", priority = "") {
  const input = document.createElement("div");
  const todoList = document.querySelector(".ls-todos");

  todoList.prepend(input);

  input.setAttribute("class", "list-styling");
  //clear input?
  input.innerHTML = "";
  input.innerHTML = `<input type="radio" id="radio" name="checklist" value="checked">
  <div class ="taskName">${task}</div> 
  <span class ="dueDate">${date}</span>
  <span class="priorityLevel">${priority} </span>   
  <div id="icons">
  <button class = "ex"><i class="fas fa-trash"></i></button> 
   <button class ="edit"><i class="fas fa-edit"></i></button>
   </div> `;

  const checked = document.querySelector("#radio");
  checked.addEventListener("click", function () {
    checkedTask(this);
  });

  projects.forEach((item) => {
    if (item.name.includes(projectName.textContent)) {
      let newO = {
        task: `${task}`,
        date: `${date}`,
        priority: `${priority}`,
      };
      item.list.push(newO);
      item.date.push(date);

      console.log(format(new Date(date), "MMM do yyyy"));
      //right here

      localStorage.setItem("projects", JSON.stringify(projects));

      let x = document.querySelector(".fas");
      x.addEventListener("click", function () {
        //delete item
        Project.deleteTask(this);
      });

      //openModal();
    }
  });
}

export { newTask };
