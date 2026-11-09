import {createElement} from './helpers.js'

// Function to initialise 'Modal', used to create tasks.
function initModal(location) {
    const drawLocation = document.getElementById(location);
    const modalBG = createElement('div', ['modalBG'],{});
    const modalContainer = createElement('div', ['modalContainer'], {});
    const titleLabel = createElement('label', ['label'], {for:"titleInput", textContent:"Task Title: "});
    const titleInput = createElement('input', ['input'], {name:"titleInput"});
    const descLabel = createElement('label', ['label'], {for:"descInput", textContent:"Description: "});
    const descInput = createElement('input', ['input'], {name:"descInput"});
    const deadLabel = createElement('label', ['label'], {for:"deadInput", textContent:"Deadline: "});
    const deadInput = createElement('input', ['input'], {name:"deadInput", type:"date"});
    const prioLabel = createElement('label', ['label'], {for:"select", textContent:"Priority: "});
    const prioDropdown = createElement('select', ['select'], {name:"priority"});
    const High = createElement('option', ['option'], {value:"high", textContent:"High"});
    const Medium = createElement('option', ['option'], {value:"medium", textContent:"Medium"});
    const Low = createElement('option', ['option'], {value:"low", textContent:"Low"});
    prioDropdown.append(High,Medium,Low);
    modalBG.append(modalContainer);
    modalContainer.append(titleLabel, titleInput, descLabel, descInput, deadLabel, deadInput, prioLabel, prioDropdown);
    drawLocation.append(modalBG);
}

export {initModal}