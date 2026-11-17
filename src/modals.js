import {createElement, addTaskListener} from './helpers.js'
import {buildCard, toDoList, projList} from './index.js'
// Function to initialise 'Modal', used to create tasks.
function initModal(Loc) {
    const drawLocation = document.getElementById('pagecontainer');
    const modalBG = createElement('div', ['modalBG', 'hidden'],{id:"modalBG"});
    const modalContainer = createElement('div', ['modalContainer'], {});
    const modalClose = createElement('button', ['closeBtn'],{textContent:"X"});
    
    const inputContainer = createElement('form', ['inputContainer'],{ID:"taskForm"});
    modalContainer.append(modalClose, inputContainer);
    const titleLabel = createElement('label', ['label'], {for:"titleInput", textContent:"Task Title: "});
    const titleInput = createElement('input', ['input'], {name:"titleInput", type:"text"});
    const descLabel = createElement('label', ['label'], {for:"descInput", textContent:"Description: "});
    const descInput = createElement('input', ['input'], {name:"descInput", type:"text"});
    const deadLabel = createElement('label', ['label'], {for:"deadInput", textContent:"Deadline: "});
    const deadInput = createElement('input', ['input'], {name:"deadInput", type:"date"});
    const prioLabel = createElement('label', ['label'], {for:"select", textContent:"Priority: "});
    const prioDropdown = createElement('select', ['select'], {name:"priority"});
    const defaultSel = createElement('option', ['option'], {value:"", textContent: "--Assign Priority--", selected:""});
    const High = createElement('option', ['option'], {value:"high", textContent:"High"});
    const Medium = createElement('option', ['option'], {value:"medium", textContent:"Medium"});
    const Low = createElement('option', ['option'], {value:"low", textContent:"Low"});
    const submitBtn = createElement('input', ['submitbtn'], {type:"submit", value:"Create Task", ID:"taskSubmit"});
    
    modalClose.addEventListener("click", () =>{
        modalBG.classList.add('hidden');
        inputContainer.reset();
    });
    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        let taskTitle = titleInput.value;
        let taskDesc = descInput.value;
        let taskDead = deadInput.value;
        let taskPrio = prioDropdown.value;
        const test2 = new toDoList(taskTitle, taskDesc, taskDead, taskPrio);
        buildCard(test2,Loc);
        modalBG.classList.add('hidden');
        inputContainer.reset();
    });

    prioDropdown.append(defaultSel,High,Medium,Low);
    modalBG.append(modalContainer);
    inputContainer.append(titleLabel, titleInput, descLabel, descInput, deadLabel, deadInput, prioLabel, prioDropdown, submitBtn);
    drawLocation.append(modalBG);
}

function projectModal(){
    const drawLocation = document.getElementById('pagecontainer');
    const projectBG = createElement('div', ['modalBG', 'hidden'],{id:"projectBG"});
    const projInputContainer = createElement('form', ['inputContainer'],{ID:"projForm"});

    const projContainer = createElement('div', ['modalContainer'], {});
    const projClose = createElement('button', ['closeBtn'],{textContent:"X"});
    const projtitleLabel = createElement('label', ['label'], {for:"projtitleInput", textContent:"Project Title: "});
    const projtitleInput = createElement('input', ['input'], {name:"titleInput", type:"text"});

    const projSubmitBtn = createElement('input', ['submitbtn'], {type:"submit", value:"Create Project", ID:"projSubmit"});


    projClose.addEventListener("click", () =>{
        projectBG.classList.add('hidden');
        projInputContainer.reset();
    });

    projSubmitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        let projID = crypto.randomUUID();
        let taskID = crypto.randomUUID();
        let projTasksID = crypto.randomUUID();
        const newProject = createElement('div', ['project'], {id: projID});
        const newTask = createElement('button', ['addTask'],{textContent:"New Task", id:taskID});
        const projTasks = createElement('div',['tasks'],{id:projTasksID});
        addTaskListener(newTask);
        document.getElementById('organiser').appendChild(newProject);
        let projTitle = projtitleInput.value;
        const projTest = new projList(projTitle);
        buildCard(projTest,projID);
        newProject.append(newTask,projTasks);
        projectBG.classList.add('hidden');
    })


    projectBG.append(projContainer);
    projContainer.append(projClose, projInputContainer);
    projInputContainer.append(projtitleLabel,projtitleInput,projSubmitBtn);
    drawLocation.append(projectBG);

}

export {initModal,projectModal}