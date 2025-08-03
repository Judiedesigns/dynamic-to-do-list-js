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
        console.log("✨ Creating new task:", taskText);
        
        // Create a new list item (like getting a new sticky note)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create a remove button (like adding a trash icon to each note)
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Make the remove button work (when clicked, delete this task)
        removeButton.onclick = function() {
            console.log("🗑️ Removing task:", taskText);
            taskList.removeChild(listItem);
        };
        
        // Put the remove button inside the task item
        listItem.appendChild(removeButton);
        
        // Add the complete task to our task list
        taskList.appendChild(listItem);
        
        // Clear the input field for next task (like erasing the whiteboard)
        taskInput.value = "";
        
        console.log("✅ Task added successfully!");
    }
    
    // 🎯 STEP 5: Attach Event Listeners
    // These are like setting up "automatic responses"
    
    // Listen for button clicks
    addButton.addEventListener('click', function() {
        console.log("🖱️ Add button clicked!");
        addTask();
    });
    
    // Listen for Enter key presses in the input field
    taskInput.addEventListener('keypress', function(event) {
        console.log("⌨️ Key pressed:", event.key);
        if (event.key === 'Enter') {
            console.log("↩️ Enter key detected! Adding task...");
            addTask();
        }
    });
    
    console.log("🎉 To-Do List app is ready!");
});