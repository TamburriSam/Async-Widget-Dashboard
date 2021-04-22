import { projects, titles, projectName } from "./index.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

import { openModal } from "./modal.js";

const todoList = document.querySelector(".ls-todos");

export class Project {
  constructor(name, id, list = [], date = []) {
    this.name = name;
    this.id = id;
    this.list = list;
    this.date = date;
  }

  static makeActive(activated) {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    projectName.innerHTML = activated.innerHTML;
    activated.className += " active";
  }

  static findTask(tasked) {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name.includes(tasked.textContent)) {
        todoList.innerHTML = "";

        projects[i].list.forEach((element) => {
          let formattedDate = format(new Date(element.date), "MMM dd yyyy");

          //clear whatever is in this pane
          const div = document.createElement("div");
          div.setAttribute("class", "list-styling");

          div.innerHTML = `<input type="radio" id="radio" name="checklist" value="checked">
          <div class ="taskName">${element.task}</div> 
          <span class ="dueDate">${formattedDate}</span>
          <span class="priorityLevel">${element.priority} </span>   
          <div id="icons">
          <button class = "ex"><i class="fas fa-trash"></i></button> 
           <button class ="edit"><i class="fas fa-edit"></i></button>
           </div> `;

          todoList.prepend(div);

          let x = document.querySelector(".fa-trash");

          x.addEventListener("click", function () {
            //delete item
            Project.deleteTask(this);
          });

          const checked = document.querySelector("#radio");
          checked.addEventListener("click", function () {
            //this isnt actually where its throwing the error
            console.log(this);
            checkedTask(this);
          });

          openModal();
        });
      }
    }
  }

  static projectAdd() {
    const input = document.createElement("input");
    const submit = document.createElement("button");
    const h2 = document.querySelector(".main");

    h2.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("class", "bookInput");
    h2.appendChild(submit);
    submit.innerHTML = "Submit";
    submit.setAttribute("id", "projectsubmit");

    submit.addEventListener("click", function () {
      const div = document.createElement("div");

      div.setAttribute("class", "projecttitles");

      //PROBLEM RIGHT HERE. PROJECT NAME IS GRABBING WHOLE VALUE INCLUDING THE EX
      div.innerHTML = input.value;
      /*     div.innerHTML = `<span class ="exit"><i class="far fa-window-close">   </i></span>${input.value}`; */

      /* testing project object */
      const newProj = new Project(`${input.value}`, `${projects.length}`);

      projects.push(newProj);

      localStorage.setItem("projects", JSON.stringify(projects));

      input.style.display = "none";
      submit.style.display = "none";
      h2.appendChild(div);

      let sideBar = document.querySelectorAll(".projecttitles");
      let last = sideBar[sideBar.length - 1];

      div.addEventListener("click", function () {
        Project.makeActive(this);

        todoList.innerHTML = "";

        Project.findTask(this);
      });

      return last.click();
    });
  }
  static activeProject() {
    titles.forEach((item) => {
      item.addEventListener("click", function () {
        Project.makeActive(this);
        Project.findTask(this);

        console.log(this.textContent);
      });
    });
  }

  static deleteTask(task) {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name.includes(projectName.textContent)) {
        let targ =
          task.parentElement.parentElement.parentElement.firstChild.textContent;

        var removedIndex = projects[i].list
          .map(function (x) {
            return x.task;
          })
          .indexOf(targ);

        projects[i].list.splice(removedIndex, 1);

        localStorage.setItem("projects", JSON.stringify(projects));

        task.parentElement.parentElement.parentElement.style.display = "none";
      }
      console.log(projects[i].list);
    }
  }
}

const deleteTask2 = (task, other) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name.includes(projectName.textContent)) {
      var removedIndex = projects[i].list
        .map(function (x) {
          return x.task;
        })
        .indexOf(task);

      projects[i].list.splice(removedIndex, 1);

      localStorage.setItem("projects", JSON.stringify(projects));

      other.innerHTML = "";
      other.style.display = "none";
    }
  }
};

function checkedTask(task) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name.includes(projectName.textContent)) {
      let targ =
        task.parentElement.parentElement.parentElement.firstChild.textContent;

      var removedIndex = projects[i].list
        .map(function (x) {
          return x.task;
        })
        .indexOf(targ);

      projects[i].list.splice(removedIndex, 1);

      localStorage.setItem("projects", JSON.stringify(projects));

      let box = task.parentElement;
      setTimeout(() => {
        let str = task.parentElement.childNodes[2].innerHTML;
        task.parentElement.innerHTML = `${str.strike()} Completed!`;
      }, 100);

      setTimeout(() => {
        box.style.display = "none";
      }, 2500);
    }
  }
}

export { deleteTask2, checkedTask };
