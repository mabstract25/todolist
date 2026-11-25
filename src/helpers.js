import { forEach } from 'lodash';
import {initModal,updateModal} from './modals.js'

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
    initModal("",e.target.nextSibling.id);
    let newTaskModal = document.getElementById('modalBG');
    newTaskModal.classList.remove('hidden');
})};

function addDeleteListener(btn) {
    btn.addEventListener('click', (e) =>{
        console.log("Test");
        btn.parentNode.remove();
    })
}

function flipDate(string){
    let date = string.split('-').reverse().join('-');
    return date;
}


function addEditListener(btn) {
    btn.addEventListener('click', (e) =>{
        let thisTask = e.target.parentNode;
        let taskElements = thisTask.childNodes;
        let taskID = thisTask.id;
        let taskArr = [];
        taskElements.forEach((element) => {
            if(element.classList.contains("toDoValue")){
                taskArr.push(element.textContent);
            }
        });

        taskArr.splice(2,1,flipDate(taskArr[2]));
        
        updateModal(taskArr,taskID);
        let newTaskModal = document.getElementById('modalBG');
        newTaskModal.classList.remove('hidden');
        
        
    })
}

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

export {createElement,addTaskListener,addDeleteListener,addEditListener,collapseAll,expandAll,flipDate};