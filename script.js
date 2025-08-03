document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        // Show alert if input is empty
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}


    addButton.addEventListener('click', addTask); // ✅ required

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // ✅ required
        }
    });
});
