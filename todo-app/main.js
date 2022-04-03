const ulElement = document.querySelector('#list');
let tasklists;

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
    constructor(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
}

function findTasks(query) {
    return tasklists.getAll().filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}

function createTask(name, time) {
    const id = tasklists.count() + 1;
    return new Task(id, name, false);
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

    liElement.innerText = `${task.id}. ${task.name}`;
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

function initTasks(tasklists) {
    for (const index in tasklists.getAll()) {
        renderTask(tasklists.getAll()[index]);
    }
}

function updateView(tasks) {
    clearView();
    for (const index in tasks) {
        renderTask(tasks[index]);
    }
}

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

/**
 * 
 * Pobierz listę todosów i wyświetl w aplikacji za pomocą fetch ()
 * URL : https://jsonplaceholder.typicode.com/todos
 * 
 * 1. Zmień strukturę TODO na { id, name, completed }
 * 2. Pobierz za pomocą fetch listę TODOs
 * 3. Wyświetl pobrane TODOs jako listę w HTML
 * 
 */



async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    const tasks = data.map(item => {
        return new Task(item.id, item.title, item.completed);
    });
    tasklists = new TasksList(tasks);

    clearView();
    initTasks(tasklists);
}


fetchData();