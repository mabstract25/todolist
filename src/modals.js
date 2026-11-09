import {createElement} from './helpers.js'

// Function to initialise 'Modal', used to create tasks.
function initModal() {
    const location = document.getElementById('navbar');
    const modalContainer = createElement('input', ['test','test2'], {name:"test", ID: "test2"})
    location.appendChild(modalContainer)
}

export {initModal}