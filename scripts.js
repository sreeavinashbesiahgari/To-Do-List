function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskListContainer = document.getElementById('taskListContainer');

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
        taskItem.classList.toggle('completed');
        filterTasks(document.querySelector('input[name="filter"]:checked').value);
    };

    const taskDescription = document.createElement('p');
    taskDescription.textContent = taskText;

    const editButton = document.createElement('span');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = () => editTask(taskItem, taskDescription);

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => taskItem.remove();

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskListContainer.appendChild(taskItem);
    taskInput.value = '';
}

function editTask(taskItem, taskDescription) {
    const newTaskText = prompt('Edit your task:', taskDescription.textContent);
    if (newTaskText !== null) {
        taskDescription.textContent = newTaskText.trim();
    }
}

function toggleFilterOptions() {
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.style.display = filterOptions.style.display === 'flex' ? 'none' : 'flex';
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task-item');
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
            case 'uncompleted':
                task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                break;
        }
    });
}
