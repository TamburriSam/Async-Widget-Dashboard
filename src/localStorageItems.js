import { projects } from "./index.js";

export let lsItems = JSON.parse(localStorage.getItem("projects"));

const ifPageLoaded = () => {
  const h2 = document.querySelector(".main");
  if (localStorage.getItem("projects") !== null) {
    //add mock main page here

    //projects for each attach to main
    projects.forEach((element) => {
      /* probably put this in a domcontroller */
      const div = document.createElement("div");
      div.setAttribute("class", "projecttitles");
      div.innerHTML = `<span class ="exit"><i class="far fa-window-close">   </i></span>&nbsp ${element.name}`;
      h2.appendChild(div);
      console.log(element);
    });
  }
};

export { ifPageLoaded };

//put here
