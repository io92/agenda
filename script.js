// Function to update the date
function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = formattedDate;
}

// Function to add a task to the agenda
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        
        const taskTextElement = document.createElement('div');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskElement.remove();
        };
        
        taskElement.appendChild(taskTextElement);
        taskElement.appendChild(deleteButton);

        document.getElementById('agenda').appendChild(taskElement);
        taskInput.value = '';
    }
}

// Update the date when the page loads
updateDate();

// Update the date every second (simulating real-time)
setInterval(updateDate, 1000);
