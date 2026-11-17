import "./styles.css"
import {createElement} from './helpers.js'
import {initModal,projectModal} from './modals.js'

class toDoList {
    constructor (title, description, deadline, priority){
        this.Title = title;
        this.Description = description;
        this.Deadline = deadline;
        this.Priority = priority;
    }
}

class projList {
    constructor(title) {
        this.Project_Title = title;
    }
}



document.getElementById('newProject').addEventListener('click', () =>{
    let newProjModal = document.getElementById('projectBG');
    newProjModal.classList.remove('hidden');
})
    

function buildCard(todoitem,locID) {
    const location = document.getElementById(locID);
    const taskContainer = createElement('div', ['taskContainer'], {});
    location.append(taskContainer);
    for (const [key, value] of Object.entries(todoitem)) {
        let keytext = document.createElement('p');
        keytext.classList.add('toDoKey')
        keytext.textContent = key;
        let valuetext = document.createElement('p');
        valuetext.classList.add('toDoValue')
        valuetext.textContent = value;
        taskContainer.appendChild(keytext);
        taskContainer.appendChild(valuetext);
    }
}

function buildProject(projectitem,locID) {
    const location = document.getElementById(locID);
    const projTitleContainer = createElement('div',['projTitleContainer'], {});
    location.append(projTitleContainer);
    for (const [value] of Object.entries(projectitem)) {
        let projTitleText = createElement('h4',['projTitleText'],{textContent: value});
        projTitleContainer.appendChild(projTitleText);
    }
}

// initModal();
projectModal();

export {buildCard, buildProject, toDoList, projList};