const ulElement = document.querySelector('#list');

// Model
class TasksList {
    constructor(items) {
        this.items = items;
    }

    add(item) {
        this.items.set(item.id, item);
    }

    getAll() {
        return this.items;
    }
    
    count() {
        return this.items.length;
    }
}

class Task {
    constructor(id, name, time, done) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.done = done;
    }
}

const tasks = [
    new Task(1, "Wyrzucić śmieci", "20:00", false),
    new Task(2, "Zrobić zakupy", "18:00", false),
    new Task(3, "Trening", "19:00", false),
    new Task(4, "Przygotować prezentację", "15:00", false)
];

const tasklists = new TasksList(tasks);

function findTasks(query) {
    return tasklists.getAll().filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}

function createTask(name, time) {
    const id = tasklists.count() + 1;
    return new Task(id, name, time, false);
}

// View
function clearView() {
    const items = document.querySelectorAll('li');
    items.forEach(item => {
        ulElement.removeChild(item);
    })
}


function renderTask(task) {
    const liElement = document.createElement('li');

    liElement.innerText = `${task.id}. ${task.name} (${task.time})`;
    liElement.id = task.id;
    liElement.className = 'list-group-item';

    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Remove';
    buttonElement.className = 'btn btn-warning ms-2';

    buttonElement.addEventListener('click', (event) => {
        const target = event.target;
        target.parentNode.remove();
    });

    liElement.append(buttonElement);

    ulElement.append(liElement);
}

function initTasks() {
    for (const index in tasklists.getAll()) {
        renderTask(tasks[index]);
    }
}

function updateView(tasks) {
    clearView();
    for (const index in tasks) {
        renderTask(tasks[index]);
    }
}

clearView();

initTasks();

const clearButtonElement = document.querySelector('#clear-button');
const formElement = document.querySelector('#add-form');
const searchInputElement = document.querySelector('[name="query"]');

clearButtonElement.addEventListener('click', (event) => {
    const targetButton = event.target;
   targetButton.classList.add('disabled');

    clearView();
})
 
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);

    const name = formData.get('name');
    const time = formData.get('time');

    if (formElement.reportValidity()) {
        const task =  createTask(formData.get('name'), formData.get('time'));

        tasks.push(task);
        renderTask(task);

        formElement.reset();
    } else {
        alert('Twój formularz jest niepoprawny');
    }
});

searchInputElement.addEventListener('keyup', (event) => {
    const query = event.target.value;
    
    const results = findTasks(query);

    updateView(results);
});