document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Load existing tasks from Local Storage
    loadTasks();

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText); // Save is true by default
            input.value = '';
        }
    });

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't re-save to avoid duplication
    }

    // Add task to the list (and optionally save)
    function addTask(taskText, save = true) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.classList.add('task-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', () => {
            taskItem.remove();
            removeTaskFromStorage(taskText);
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
});
