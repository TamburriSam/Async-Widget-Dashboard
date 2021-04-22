import { projectName, projects, other } from "./index";
import { Project, checkedTask } from "./DOMProjectsSidebar";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { openModal } from "./modal.js";
export const addList = document.querySelector("#todoadd");

function newTask(
  task = "Unnamed Task",
  date = "Mar 29 2018",
  priority = "low"
) {
  let formattedDate = format(new Date(date), "MMM dd yyyy");

  const input = document.createElement("div");
  const todoList = document.querySelector(".ls-todos");

  todoList.prepend(input);

  input.setAttribute("class", "list-styling");
  //clear input?
  input.innerHTML = "";
  input.innerHTML = `<input type="radio" id="radio" name="checklist" value="checked">
  <div class ="taskName">${task}</div> 
  <span class ="dueDate">${formattedDate}</span>
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
    if (item.name === projectName.textContent) {
      let newO = {
        task: `${task}`,
        date: `${formattedDate}`,
        priority: `${priority}`,
      };
      item.list.push(newO);
      item.date.push(date);

      localStorage.setItem("projects", JSON.stringify(projects));

      let x = document.querySelector(".fas");
      x.addEventListener("click", function () {
        //delete item
        Project.deleteTask(this);
      });

      let edit = document.querySelector(".edit");
      edit.addEventListener("click", function () {
        return openModal();
      });
    }
  });
}

export { newTask };
