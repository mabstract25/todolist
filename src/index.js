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
    let taskID = crypto.randomUUID();
    const taskContainer = createElement('div', ['taskContainer'], {id: taskID});
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

function updateCard(todoitem,locID) {
    let cardToUpdate = document.getElementById(locID);
    let cardTextFields = cardToUpdate.childNodes;

    const deletebtn = createElement('button', ['deletebtn'], {textContent:'X'});
    const editbtn = createElement('button', ['editbtn'], {textContent:'E'})
    addDeleteListener(deletebtn);
    addEditListener(editbtn);

    cardTextFields[3].textContent = todoitem.Title;
    cardTextFields[5].textContent = todoitem.Description;
    cardTextFields[7].textContent = todoitem.Deadline;
    cardTextFields[9].textContent = todoitem.Priority;

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

export {buildCard, buildProject, toDoList, projList,updateCard};


document.getElementById('contractallbtn').addEventListener('click', collapseAll);
document.getElementById('expandallbtn').addEventListener('click', expandAll);

