// 🎯 STEP 1: Setup Event Listener for Page Load
// This is like waiting for your room to be ready before you start organizing
document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 Page loaded! Setting up To-Do List...");
    
    // 🎯 STEP 2: Select DOM Elements
    // Think of this like getting the tools you need: pen, paper, eraser
    const addButton = document.getElementById('add-task-btn');     // The "Add Task" button
    const taskInput = document.getElementById('task-input');       // Where users type tasks
    const taskList = document.getElementById('task-list');         // The list that shows all tasks
    
    // 🎯 STEP 3: Create the addTask Function
    // This is our main "recipe" for adding new tasks
    function addTask() {
        console.log("🚀 addTask function called!");
        
        // Get the text from input and remove extra spaces (like trimming paper edges)
        const taskText = taskInput.value.trim();
        
        // Check if user actually typed something
        if (taskText === "") {
            alert("⚠️ Please enter a task!");
            return; // Stop here - don't add empty tasks
        }
        
        // 🎯 STEP 4: Task Creation and Removal
        // Within the addTask function, if taskText is not empty:
        console.log("✨ Creating new task:", taskText);
        
        // Create a new li element. Set its textContent to taskText.
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create a new button element for removing the task
        // Set its textContent to "Remove", and give it a class name of 'remove-btn'
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Assign an onclick event to the remove button that, when triggered, 
        // removes the li element from taskList
        removeButton.onclick = function() {
            console.log("🗑️ Removing task:", taskText);
            taskList.removeChild(listItem);
        };
        
        // Append the remove button to the li element, 
        // then append the li to taskList
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear the task input field by setting taskInput.value to an empty string
        taskInput.value = "";
        
        console.log("✅ Task added successfully!");
    }
    
    // 🎯 STEP 5: Attach Event Listeners
    // Add an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', function() {
        console.log("🖱️ Add button clicked!");
        addTask();
    });
    
    // Add an event listener to taskInput for the 'keypress' event to allow tasks 
    // to be added by pressing the "Enter" key. Inside this event listener, 
    // check if event.key is equal to 'Enter' before calling addTask
    taskInput.addEventListener('keypress', function(event) {
        console.log("⌨️ Key pressed:", event.key);
        if (event.key === 'Enter') {
            console.log("↩️ Enter key detected! Adding task...");
            addTask();
        }
    });
    
    console.log("🎉 To-Do List app is ready!");
});