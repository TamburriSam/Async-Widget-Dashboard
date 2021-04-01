import { projectName, projects, titles } from "./index";
import { deleteTask } from "./DOMProjectsSidebar";

export const addList = document.querySelector("#todoadd");

function newTask(task, date, priority) {


  const input = document.createElement("div");
  const todoList = document.querySelector(".ls-todos");


  todoList.prepend(input);


  input.setAttribute("class", "list-styling");
  //clear input?
  input.innerHTML = '';
  input.innerHTML = `<div class ="taskName">${task}</div> <span class="dueDate"> ${date} </span>
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
