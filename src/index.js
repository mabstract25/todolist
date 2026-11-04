import "./styles.css"

class toDoList {
    constructor (title, description, duedate, priority){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}

const test = new toDoList("test","thisisatest","01012026","Priority 1")

console.log(test)