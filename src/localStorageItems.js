 import {projects} from './index.js'



export let lsItems = JSON.parse(localStorage.getItem("projects"));

const ifPageLoaded = () => {
    const h2 = document.querySelector('.main');
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

  export {ifPageLoaded} 