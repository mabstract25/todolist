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
    let projTitleText = createElement('h4',['projTitleText'],{textContent: projectitem.Project_Title});
    projTitleContainer.appendChild(projTitleText);
}

projectModal();

export {buildCard, buildProject, toDoList, projList};


document.getElementById('contractallbtn').addEventListener('click', collapseAll);

function collapseAll() {
    const taskContainerList = document.getElementsByClassName('taskContainer');
    for (const task of taskContainerList){
        let nodes = task.childNodes;
        nodes.forEach((node) => {
            console.log(node);
        })
        
    }
}
