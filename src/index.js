import "./styles.css"
import {createElement,collapseAll,expandAll,addDeleteListener,addEditListener} from './helpers.js'
import {projectModal} from './modals.js'

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
    const deletebtn = createElement('button', ['deletebtn'], {textContent:'X'});
    const editbtn = createElement('button', ['editbtn'], {textContent:'E'})
    addDeleteListener(deletebtn);
    addEditListener(editbtn);
    location.append(taskContainer);
    taskContainer.append(deletebtn,editbtn);
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
    const projDeleteBtn = createElement('button', ['deletebtn'], {textContent:'X'});
    addDeleteListener(projDeleteBtn);
    location.append(projTitleContainer,projDeleteBtn);
    let projTitleText = createElement('h4',['projTitleText'],{textContent: projectitem.Project_Title});
    projTitleContainer.append(projTitleText);
}

projectModal();

export {buildCard, buildProject, toDoList, projList};


document.getElementById('contractallbtn').addEventListener('click', collapseAll);
document.getElementById('expandallbtn').addEventListener('click', expandAll);

