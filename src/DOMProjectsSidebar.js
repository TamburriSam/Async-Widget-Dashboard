import { projects, titles, projectName } from "./index.js";
import { Project } from "./createProject.js";
import {openModal} from './modal.js'



const todoList = document.querySelector(".ls-todos");

const makeActive = (activated) => {
  var current = document.getElementsByClassName("active");

  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }

  projectName.innerHTML = activated.innerHTML;
  activated.className += " active";
};

const findTask = (tasked) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name.includes(tasked.textContent)) {
      todoList.innerHTML = "";


      projects[i].list.forEach((element) => {
        //clear whatever is in this pane
        const div = document.createElement("div");

        div.innerHTML = `<div class ="taskName">${element.task}</div> 
        <span class ="dueDate">${element.date}</span>
        <span class="priorityLevel">${element.priority} </span>   
        <div id="icons">
        <button class = "ex"><i class="fas fa-trash"></i></button> 
         <button class ="edit"><i class="fas fa-edit"></i></button>
         </div>`;
        div.setAttribute("class", "list-styling");

        todoList.prepend(div);

        let x = document.querySelector(".fa-trash");
        

        x.addEventListener("click", function () {
          //delete item
          deleteTask(this);
        });

       
        openModal();


        let edit = document.querySelector('.fa-edit').addEventListener('click', function(){
          console.log('e')
        })



      });
    }
  }
};

//add project folder
const projectAdd = () => {
  const input = document.createElement("input");
  const br = document.createElement("br");
  const submit = document.createElement("button");
  const h2 = document.querySelector(".main");

  h2.appendChild(br);
  h2.appendChild(input);
  input.setAttribute("type", "text");
  input.setAttribute("class", "bookInput");
  h2.appendChild(submit);
  submit.innerHTML = "Submit";
  submit.setAttribute("id", "projectsubmit");

  submit.addEventListener("click", function () {
    const div = document.createElement("div");

    div.setAttribute("class", "projecttitles");

    div.innerHTML = input.value;

    /* testing project object */
    const newProj = new Project(`${input.value}`, `${projects.length}`);

    projects.push(newProj);

    localStorage.setItem("projects", JSON.stringify(projects));

    input.style.display = "none";
    submit.style.display = "none";
    h2.appendChild(div);

    div.addEventListener("click", function () {
      makeActive(this);

      /// find out how to edit and populate upon new folder creation. ri ght now app only works as intended on reload not when folder is created. cant edit folder properly upon first creation.

      

  

      console.log("here now");

      todoList.innerHTML = "";

      findTask(this);
    });
  });
};

//active project + populate task items
const activeProject = () => {
  titles.forEach((item) => {
    item.addEventListener("click", function () {
      makeActive(this);
      findTask(this);
      console.log(this.textContent);
    });
  });
};

const deleteTask = (task) => {
  for (let i = 0; i < projects.length; i++) {
    
    let targ = task.parentElement.parentElement.parentElement.firstChild
      .textContent;

    var removedIndex = projects[i].list
      .map(function (x) {
        return x.task;
      })
      .indexOf(targ);

    projects[i].list.splice(removedIndex, 1);

    localStorage.setItem("projects", JSON.stringify(projects));

    task.parentElement.parentElement.parentElement.style.display =
      "none";
  }
};

const deleteTask2 = (task, other) => {
  for (let i = 0; i < projects.length; i++) {
    
   

    var removedIndex = projects[i].list
      .map(function (x) {
        return x.task;
      })
      .indexOf(task);

    projects[i].list.splice(removedIndex, 1);

    localStorage.setItem("projects", JSON.stringify(projects));

    other.innerHTML = '';
    other.style.display='none'; 

 

   
  }
};

export { projectAdd, activeProject, makeActive, deleteTask, findTask, deleteTask2 };
