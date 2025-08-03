// Wait for HTML to load
document.addEventListener('DOMContentLoaded', function () {
  // Select key elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define how to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // When clicked, remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Put everything together
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  // When Add button is clicked
  addButton.addEventListener('click', addTask);

  // When Enter key is pressed
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
