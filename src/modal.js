import { deleteTask2 } from "./DOMProjectsSidebar.js";
import { newTask } from "./DOMtoDo.js";
import { projects } from "./index.js";

const openModal = () => {
  //list styling
  let trigger = document.querySelector(".edit");

  //modal box appear
  let modal = document.getElementById("myModal");

  //modal box close
  let span = document.getElementsByClassName("close")[0];

  //list styling
  trigger.onclick = function () {
    let target = this.parentElement.parentElement.childNodes[0];

    let complete = this.parentElement.parentElement;

    modal.style.display = "block";

    let taskModal, dateModal, priorityModal, notesModal;

    let modalContent = document.querySelector(".modal-content");

    taskModal = document.createElement("input");
    taskModal.value = this.parentElement.parentElement.childNodes[2].textContent;
    taskModal.setAttribute("class", "task-modal");

    let label = document.createElement("div");
    label.setAttribute("class", "task-label");
    label.innerHTML = "Task";

    let date = document.createElement("div");
    date.setAttribute("class", "date-label");
    date.innerHTML = "Date";

    let prio = document.createElement("div");
    prio.setAttribute("class", "prio-label");
    prio.innerHTML = "Prio";

    let dateDiv = document.createElement("input");
    dateDiv.setAttribute("class", "date-div");
    dateDiv.value = this.parentElement.parentElement.childNodes[4].textContent;

    dateModal = document.createElement("input");
    dateModal.value = this.parentElement.parentElement.childNodes[4].textContent;
    dateModal.setAttribute("class", "date-modal");

    priorityModal = document.createElement("div");
    priorityModal.setAttribute("class", "prio-modal");
    priorityModal.innerHTML = `  <select name="cars" id="prio">
    <option value="high-priority">High</option>
    <option value="medium-priority">Medium</option>
    <option value="low-priority">Low</option>
  </select>`;

    notesModal = document.createElement("input");
    notesModal.setAttribute("class", "notes-modal");

    modalContent.innerHTML = "";

    modalContent.appendChild(span);
    modalContent.appendChild(label);
    modalContent.appendChild(date);
    modalContent.appendChild(prio);
    modalContent.appendChild(taskModal);
    modalContent.appendChild(dateDiv);
    modalContent.appendChild(priorityModal);

    //modalContent.appendChild(notesModal);

    let modalSubmit = document.createElement("btn");
    modalSubmit.setAttribute("class", "modal-submit");
    modalSubmit.innerHTML = "Submit";

    modalContent.appendChild(modalSubmit);

    modalSubmit.addEventListener("click", function () {
      /*  deleteTask2(target.textContent, complete);

      let secondPrio = document.getElementById("prio");

      newTask(taskModal.value, dateDiv.value, secondPrio.value);
      localStorage.setItem("projects", JSON.stringify(projects)); */

      if (taskModal.value === "") {
        alert("Please Enter All Fields");
      } else if (taskModal.value !== "") {
        deleteTask2(target.textContent, complete);

        let secondPrio = document.getElementById("prio");

        newTask(taskModal.value, dateDiv.value, secondPrio.value);
        localStorage.setItem("projects", JSON.stringify(projects));
        modal.style.display = "none";
        console.log(taskModal.value);
      }
    });

    span.addEventListener("click", function () {
      modal.style.display = "none";

      return console.log(this.parentElement);
    });
  };
};

export { openModal };
