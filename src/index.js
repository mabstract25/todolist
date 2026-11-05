import "./styles.css"

class toDoList {
    constructor (title, description, deadline, priority){
        this.Title = title;
        this.Description = description;
        this.Deadline = deadline;
        this.Priority = priority;
    }
}

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


buildCard(test);

// Function to initialise 'Modal', used to create tasks.
function initModal() {
    const location = document.getElementById('navbar');
    const modalContainer = createElement('input', ['test','test2'], {name:"test", ID: "test2"})
    location.appendChild(modalContainer)
}


// Function to dynamically create elements in one line.
function createElement(type, elclass = [], elattribute = {}) {
    const element = document.createElement(type);

    elclass.forEach(_class => {
        element.classList.add(_class);
    });

    for (const [key, value] of Object.entries(elattribute)) {
        if (key === 'textContent') {
            element.textContent = value;
        }
        else {
            element.setAttribute(key, value);
        }
    }
    return element;
}
