import {createElement} from './helpers.js'
import {buildCard, toDoList} from './index.js'
// Function to initialise 'Modal', used to create tasks.
function initModal() {
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
        buildCard(test2);
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

    projClose.addEventListener("click", () =>{
        projectBG.classList.add('hidden');
        projInputContainer.reset();
    });


    projectBG.append(projContainer);
    projContainer.append(projClose, projInputContainer);
    projContainer.append(projtitleLabel,projtitleInput);
    drawLocation.append(projectBG);

}

export {initModal,projectModal}