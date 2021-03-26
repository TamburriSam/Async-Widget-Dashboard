let lsItems = JSON.parse(localStorage.getItem("projects"));

const persistToLs = () => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

const convertItems = () => {
  if (lsItems) {
    projects = lsItems;
  }
};

const ifPageLoaded = () => {
  const main = document.querySelector('.main');
  if (localStorage.getItem("projects") !== null) {
//projects for each attach to main 
    projects.forEach((element => console.log(element)))
  }

};

export { persistToLs, convertItems, ifPageLoaded };
