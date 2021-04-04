import { da } from 'date-fns/locale';
import { divide } from 'lodash';
import {deleteTask2} from './DOMProjectsSidebar.js'
import {newTask} from './DOMtoDo.js';

const openModal = () => {
//list styling
let trigger = document.querySelector('.list-styling');

//modal box appear
let modal = document.getElementById("myModal");

//modal box close
let span = document.getElementsByClassName('close')[0];


//list styling
trigger.onclick = function(){


    let target = this.childNodes[0];

    let complete = this;




    modal.style.display='block';
    
    let taskModal,
    dateModal,
    priorityModal,
    notesModal;

    let modalContent = document.querySelector('.modal-content');

    /* modalContent.innerHTML = `<label for="task-input>
    <input type ` */


taskModal = document.createElement('input');

taskModal.setAttribute('class', 'task-modal');


taskModal.value = this.childNodes[0].textContent;



let label = document.createElement('div');
label.innerHTML = '<div class="task-label">Task</div>'

let date = document.createElement('div');
date.innerHTML = '<div class="date-label">Date</div>'

let prio = document.createElement('div');
prio.innerHTML = '<div class="prio-label">Prio</div>'





dateModal = document.createElement('input')
dateModal.value = this.childNodes[2].textContent;
dateModal.setAttribute('class', 'date-modal');




//make radio btn instead 
priorityModal = document.createElement('input')
priorityModal.value = this.childNodes[4].textContent
priorityModal.setAttribute('class', 'prio-modal');


notesModal = document.createElement('input');
notesModal.setAttribute('class', 'notes-modal');


modalContent.innerHTML = '';

modalContent.appendChild(label);
modalContent.appendChild(date);
modalContent.appendChild(prio);
modalContent.appendChild(taskModal)
modalContent.appendChild(dateModal);
modalContent.appendChild(priorityModal);



let modalSubmit = document.createElement('btn');
modalSubmit.setAttribute('class', 'modal-submit')
modalSubmit.innerHTML = 'Submit';

modalContent.appendChild(modalSubmit)

modalSubmit.addEventListener('click', function(){
  

    

    deleteTask2(target.textContent, complete)

    newTask(taskModal.value, dateModal.value, priorityModal.value);

    modal.style.display = 'none';
    
 

    
})





}

//modal box close
span.onclick = function(){
    modal.style.display="none";
}

//if clicked outside modal, close window
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display="none";
    }
}

}

export {openModal}