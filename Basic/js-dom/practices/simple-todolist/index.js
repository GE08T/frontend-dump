// Selector

const inputTask = document.getElementById('task')
const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')

addTask.addEventListener('click', () => {

  let task = document.createElement('ul')
  task.classList.add('task')
  
  let listTask = document.createElement('p')
  task.innerText = `${inputTask.value}`
  task.appendChild(listTask)
  
  let checkButton = document.createElement('button')
  checkButton.innerHTML =  '<i class="fa-solid fa-check"></i>'
  checkButton.classList.add('checkTask')
  task.appendChild(checkButton)
  
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML =  '<i class="fa-solid fa-trash"></i>'
  deleteButton.classList.add('deleteTask')
  task.appendChild(deleteButton)
  
  taskContainer.appendChild(task)
})