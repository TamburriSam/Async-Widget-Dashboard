import { deleteTask2 } from "./DOMProjectsSidebar.js";
import { newTask } from "./DOMtoDo.js";

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

    taskModal.setAttribute("class", "task-modal");

    taskModal.value = this.parentElement.parentElement.childNodes[0].textContent;

    let label = document.createElement("div");
    label.innerHTML = '<div class="task-label">Task</div>';

    let date = document.createElement("div");
    date.innerHTML = '<div class="date-label">Date</div>';

    let prio = document.createElement("div");
    prio.innerHTML = '<div class="prio-label">Prio</div>';

    dateModal = document.createElement("input");
    dateModal.value = this.parentElement.parentElement.childNodes[2].textContent;
    /*  dateModal.innerHTML = `<input type="date" id="start" name="trip-start"
    value="2018-03-22"
    min="2021-27-03" max="2030-12-31" class="date">`; */
    dateModal.setAttribute("class", "date-modal");

    //make radio btn instead
    priorityModal = document.createElement("div");

    /*   priorityModal.value = this.parentElement.parentElement.childNodes[4].textContent; */
    priorityModal.setAttribute("class", "prio-modal");
    priorityModal.innerHTML = `  <select name="cars" id="prio">
    <option value="high-priority">High</option>
    <option value="medium-priority">Medium</option>
    <option value="low-priority">Low</option>
  </select>`;

    notesModal = document.createElement("input");
    notesModal.setAttribute("class", "notes-modal");

    modalContent.innerHTML = "";

    modalContent.appendChild(label);
    modalContent.appendChild(date);
    modalContent.appendChild(prio);
    modalContent.appendChild(taskModal);
    modalContent.appendChild(dateModal);
    modalContent.appendChild(priorityModal);

    //modalContent.appendChild(notesModal);

    let modalSubmit = document.createElement("btn");
    modalSubmit.setAttribute("class", "modal-submit");
    modalSubmit.innerHTML = "Submit";

    modalContent.appendChild(modalSubmit);

    modalSubmit.addEventListener("click", function () {
      deleteTask2(target.textContent, complete);
      console.log(complete);
      let secondPrio = document.getElementById("prio");
      newTask(taskModal.value, dateModal.value, secondPrio.value);
      modal.style.display = "none";
    });
  };
};

export { openModal };
