import "./styles.css"
import {createElement} from './helpers.js'
import {initModal} from './modals.js'

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

const test = new toDoList("test","thisisatest","01012026","Priority 1")
initModal();

buildCard(test);




// Function to dynamically create elements in one line.

