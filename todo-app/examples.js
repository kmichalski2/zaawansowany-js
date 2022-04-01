const addFormElement = document.querySelector('#add-form');

// Przykład #1
const nameInputElement = document.querySelector('#name');
const timeInputElement = document.querySelector('#time');

addFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTask = createTask(nameInputElement.value, timeInputElement.value);
    addTask(newTask);
});

// Przykład #2
// Add const formData = new FormData(addFormElement) to submit;

addFormElement.addEventListener('formdata', (event) => {
    event.preventDefault();

    const newTask = createTask(nameInputElement.value, timeInputElement.value);
    addTask(newTask);
});

// Ćwiczenie #3 - Mouse events
<div class="ball"></div>

mouse.move

// Ćwiczenie #4
function findTasks(query) {
    return tasks.filter(item => item.name.includes(query));
}