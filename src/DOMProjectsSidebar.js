import { projects, titles, projectName } from "./index.js";
import { Project } from "./createProject.js";

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

        div.innerHTML = `<div class ="taskName">${element.task}</div> <span class ="dueDate">Due: ${element.date}</span>   
        <div id="icons">
        <button class = "ex"><i class="fas fa-trash"></i></button> 
         <button class ="edit"><i class="fas fa-edit"></i></button>
         </div>`;
        div.setAttribute("class", "list-styling");

        todoList.prepend(div);

        //////working on delete logic
        //////
        //////
        //////
        ////

        let x = document.querySelector('.fas')
        let taskName = document.querySelector('.taskName');

        x.addEventListener('click', function(){


          for(i=0 ; i < projects.length ; i++){
            

            let targ = this.parentElement.parentElement.parentElement.firstChild.textContent;

            console.log(projects[i].list.includes(targ));


         
          }

        })
///////
/////
////////
//////////////////////////////////////////////////////////////////

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

      console.log("here");

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

export { projectAdd, activeProject, makeActive };
