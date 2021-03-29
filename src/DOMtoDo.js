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
   
    input.textContent = taskField + dateField + priorityField;

    //match
    projects.forEach((item) => {
        if(item.name.includes(projectName.textContent)){
            item.list.push(taskField);
            item.date.push(dateField);
            localStorage.setItem('projects', JSON.stringify(projects));
            console.log(projects)
        }
    })


}

export {newTask}