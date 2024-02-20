console.log("JavaScript working!");

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTask);

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = ''; // Limpiar el campo de entrada
    }
}

function toggleTask(event) {
    const taskText = event.target.nextElementSibling;
    taskText.classList.toggle('completed');
}

function deleteTask(event) {
    const li = event.target.parentElement;
    li.remove();
}