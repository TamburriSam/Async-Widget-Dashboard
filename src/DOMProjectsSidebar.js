import {projects} from './index.js'

const projectAdd = () => {
    const input = document.createElement('input');
    const br = document.createElement('br');
    const submit = document.createElement('button');
    const projectAdd = document.querySelector('#projectadd');
const projectSub = document.querySelector('#projectsubmit');
const projectInput = document.querySelector('.bookInput');
const h2 = document.querySelector('.main');


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
}

export {projectAdd}