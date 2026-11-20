import {initModal} from './modals.js'

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

function addTaskListener(btn) {
    btn.addEventListener('click', (e) =>{
    console.log(e);
    console.log(e.target.nextSibling.id);
    initModal(e.target.nextSibling.id);
    let newTaskModal = document.getElementById('modalBG');
    newTaskModal.classList.remove('hidden');
})};

function collapseAll() {
    const taskContainerList = document.getElementsByClassName('taskContainer');
    for (const task of taskContainerList){
        let nodes = task.childNodes;
        nodes.forEach((node) => {
            if(node === nodes[1] || node === nodes[0]) {
                return;
            } else {
                node.classList.add('hidden')
            }
            
        })
        
    }
}

function expandAll() {
    const taskContainerList = document.getElementsByClassName('taskContainer');
        for (const task of taskContainerList){
        let nodes = task.childNodes;
        nodes.forEach((node) => {
            if(node === nodes[1] || node === nodes[0]) {
                return;
            } else {
                node.classList.remove('hidden')
            }
            
        })
        
    }

}

export {createElement,addTaskListener,collapseAll,expandAll};