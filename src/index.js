import "./styles.css"

class toDoList {
    constructor (title, description, duedate, priority){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}

function buildCard(location, todoitem) {
    
    // Declare location as document.getelementbyID

    // For each card key > generate something in the DOM location specified above.
    for (const [key, value] of Object.entries(todoitem)) {
        console.log(value);
    }
}

const test = new toDoList("test","thisisatest","01012026","Priority 1")



console.log(Object.entries(test))