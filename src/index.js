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

// Show modal

document.getElementById('addTask').addEventListener('click', () =>{
    let newTaskModal = document.getElementById('modalBG');
    newTaskModal.classList.remove('hidden');
});

document.getElementById('newProject').addEventListener('click', () =>{
    let newProjModal = document.getElementById('projectBG');
    newProjModal.classList.remove('hidden');
})
    

function buildCard(todoitem) {
    
    const location = document.getElementById('todobox');
    
    for (const [key, value] of Object.entries(todoitem)) {
        let keytext = document.createElement('p');
        keytext.classList.add('toDoKey')
        keytext.textContent = key;
        let valuetext = document.createElement('p');
        valuetext.classList.add('toDoValue')
        valuetext.textContent = value;
        location.appendChild(keytext);
        location.appendChild(valuetext);
    }
}

initModal();
projectModal();

export {buildCard, toDoList};