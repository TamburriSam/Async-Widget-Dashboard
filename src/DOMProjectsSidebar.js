import {projects, titles, projectName} from './index.js'
import { Project } from "./createProject.js";


const todoList = document.querySelector('.ls-todos');

const projectAdd = () => {
    const input = document.createElement('input');
    const br = document.createElement('br');
    const submit = document.createElement('button');
    const h2 = document.querySelector('.main');


    h2.appendChild(br);
    h2.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute('class', 'bookInput')
    h2.appendChild(submit);
    submit.innerHTML = 'Submit'
    submit.setAttribute('id', 'projectsubmit');

    let projectFolder = [];

    
     submit.addEventListener('click', function(){
        const div = document.createElement('div');

        div.setAttribute('class', 'projecttitles')

        div.innerHTML = input.value;
        /* projects.push(input.value) */

        /* localStorage.setItem('projects', JSON.stringify(projects)) */
        
        /* testing project object */
         const newProj = new Project(`${input.value}`, `${projects.length}`)

      
         projects.push(newProj)

         localStorage.setItem('projects', JSON.stringify(projects));

         projectFolder.push(newProj.name)

        console.log(newProj.id)
        console.log(newProj) 




        console.log(projects)
        console.log(newProj.name)

        input.style.display = 'none';
        submit.style.display = 'none';
        h2.appendChild(div);

        div.addEventListener('click', function(){
            var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
          projectName.innerHTML = this.innerHTML;
          this.className += " active";
        })
})
}

const activeProject = () => {
    titles.forEach((item) => {
        item.addEventListener("click", function () {
          console.log(item);
      
          var current = document.getElementsByClassName("active");
      
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
     
          projectName.innerHTML = this.innerHTML;
          this.className += " active";

          //populate todosection w list array
          //// we are right here working through this
          ///this is the most important logic

          for(let i = 0; i < projects.length; i++){
              if(projects[i].name.includes(this.textContent)){
              projects[i].list.forEach((element) => {
                  console.log(element);
                  const div = document.createElement('div');
                 
                  div.innerHTML = element;
                  todoList.prepend(div)
              })
          }
        };

        console.log(this.textContent)

        });
      });
}






export {projectAdd, activeProject}