import {Project} from './createProject.js'


let projects = [];


let user = new Project('Crap')
console.log(user.sayName())

const projectAdd = document.querySelector('#projectadd');
const projectSub = document.querySelector('#projectsubmit');
const projectInput = document.querySelector('.bookInput');
const h2 = document.querySelector('.main');
let lsItems = JSON.parse(localStorage.getItem("projects"));

if(lsItems){
    projects = lsItems;
}

const ifPageLoaded = () => {
    const main = document.querySelector('.main');
    if (localStorage.getItem("projects") !== null) {
  //projects for each attach to main 
      projects.forEach((element) => {
          const div = document.createElement('div');
          div.innerHTML = element;
          h2.appendChild(div)
          console.log(element)
      })
    }
  
  };
document.addEventListener("DOMContentLoaded", ifPageLoaded()); 


projectAdd.addEventListener('click', function(){
    const input = document.createElement('input');
    const br = document.createElement('br');
    const submit = document.createElement('button');

    h2.appendChild(br);
    h2.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute('class', 'bookInput')
    h2.appendChild(submit);
    submit.innerHTML = 'Submit'
    submit.setAttribute('id', 'projectsubmit');

    
     submit.addEventListener('click', function(){
        const div = document.createElement('div');
        div.innerHTML = input.value;
        projects.push(input.value)

        localStorage.setItem('projects', JSON.stringify(projects))
        console.log(projects)

        input.style.display = 'none';
        submit.style.display = 'none';
        h2.appendChild(div);

     
    })

})

console.log(projects)
