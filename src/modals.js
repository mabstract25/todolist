import {createElement} from './helpers.js'

// Function to initialise 'Modal', used to create tasks.
function initModal() {
    const location = document.getElementById('navbar');
    const modalContainer = createElement('div', ['modalContainer'], {});
    const label1 = createElement('label', ['label'], {for:"input1", textContent:"test: "});
    const input1 = createElement('input', ['input'], {name:"input1", ID: "input1"});
    location.append(modalContainer);
    modalContainer.append(label1, input1)
}

export {initModal}