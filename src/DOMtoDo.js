import {projectName, projects, titles} from './index';

export const addList = document.querySelector('#todoadd');


function newTask(){
    const input = document.createElement('div');
    const todoList = document.querySelector('.ls-todos');
    const taskField = document.querySelector('.task-input').value;
    const dateField = document.querySelector('#start').value;
    const priorityField = document.querySelector('#priority').value

    todoList.prepend(input);

    //const input = new Task(task, date, priority) maybe make into object
   
    input.setAttribute('class', 'list-styling')
    input.innerHTML = `${taskField} <span class="dueDate"> Due: ${dateField} </span>
    <div id="icons">
    <button class = "ex"><i class="fas fa-trash"></i></button> 
     <button class ="edit"><i class="fas fa-edit"></i></button>
     </div>`;

    //match
    //maybe tie this logic into activeProject function in DOMProjectsSidebar module
    projects.forEach((item) => {
        if(item.name.includes(projectName.textContent)){
            /* item.list.push(`${taskField} ${dateField}`) ; */
            let newO = {task: `${taskField}`, date: `${dateField}`, priority: `${priorityField}`};
            item.list.push(newO)
            console.log(item)
            //right here
            item.date.push(dateField);
            
            localStorage.setItem('projects', JSON.stringify(projects));
            console.log(projects)

           

        }
    })


}



export {newTask}