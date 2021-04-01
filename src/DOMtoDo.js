import { projectName, projects, titles } from "./index";
import { deleteTask } from "./DOMProjectsSidebar";

export const addList = document.querySelector("#todoadd");

function newTask() {
  let count = 0;

  const input = document.createElement("div");
  const todoList = document.querySelector(".ls-todos");
  const taskField = document.querySelector(".task-input").value;
  const dateField = document.querySelector("#start").value;
  const priorityField = document.querySelector("#priority").value;

  todoList.prepend(input);


  input.setAttribute("class", "list-styling");
  input.innerHTML = `<div class ="taskName">${taskField}</div> <span class="dueDate"> Due: ${dateField} </span>
    <div id="icons">
    <button class = "ex"><i class="fas fa-trash"></i></button> 
     <button class ="edit"><i class="fas fa-edit"></i></button>
     </div>`;

 
  projects.forEach((item) => {
    if (item.name.includes(projectName.textContent)) {

      let newO = {
        task: `${taskField}`,
        date: `${dateField}`,
        priority: `${priorityField}`,
      };
      item.list.push(newO);
      item.date.push(dateField);
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
