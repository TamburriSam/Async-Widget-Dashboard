import { projects } from "./index.js";

export let lsItems = JSON.parse(localStorage.getItem("projects"));

const ifPageLoaded = () => {
  const h2 = document.querySelector(".main");
  if (localStorage.getItem("projects") !== null) {
    projects.forEach((element) => {
      const div = document.createElement("div");
      div.setAttribute("class", "projecttitles");
      div.innerHTML = element.name;
      h2.appendChild(div);
      console.log(element);
    });
  }
};

export { ifPageLoaded };
