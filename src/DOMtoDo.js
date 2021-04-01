import { projectName, projects, titles } from "./index";
import { deleteTask } from "./DOMProjectsSidebar";

export const addList = document.querySelector("#todoadd");

function newTask(task, date, priority) {


  const input = document.createElement("div");
  const todoList = document.querySelector(".ls-todos");
/*   const task = document.querySelector(".task-input").value;
  const date = document.querySelector("#start").value;
  const priority = document.querySelector("#priority").value; */

  todoList.prepend(input);


  input.setAttribute("class", "list-styling");
  input.innerHTML = `<div class ="taskName">${task}</div> <span class="dueDate"> Due: ${date} </span>
  <span class="priorityLevel">${priority}
  </span>
    <div id="icons">
    <button class = "ex"><i class="fas fa-trash"></i></button> 
     <button class ="edit"><i class="fas fa-edit"></i></button>
     </div>`;

 
  projects.forEach((item) => {
    if (item.name.includes(projectName.textContent)) {

      let newO = {
        task: `${task}`,
        date: `${date}`,
        priority: `${priority}`,
      };
      item.list.push(newO);
      item.date.push(date);
      //right here


      localStorage.setItem("projects", JSON.stringify(projects));

      let x = document.querySelector(".fas");
      x.addEventListener("click", function () {
        //delete item
        deleteTask(this);
      });
    }
  });
}

export { newTask };
