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


export {createElement};