// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  taskList.removeChild(taskItem);
}

// Function to update a task
function updateTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  const taskText = taskItem.querySelector('.task-text');
  const updatedTaskText = prompt('Enter updated task:', taskText.textContent);
  if (updatedTaskText !== null && updatedTaskText !== '') {
    taskText.textContent = updatedTaskText;
  }
}

// Function to complete a task
function completeTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  taskItem.classList.toggle('done');
}

// Add a new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const taskItem = document.createElement('li');

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskTextElement.className = 'task-text';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex items-center';

    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.className = 'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2';
    updateButton.addEventListener('click', updateTask);

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.className = 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2';
    completeButton.addEventListener('click', completeTask);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
    deleteButton.addEventListener('click', deleteTask);

    buttonContainer.appendChild(updateButton);
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(buttonContainer);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});
