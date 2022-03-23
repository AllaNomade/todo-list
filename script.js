const newTaskForm = document.getElementById('new-task-form');

const tasks = [];


const handleSubmit = (event) => {
  event.preventDefault();

 const formData = new FormData(newTaskForm);
 const formEntries = Object.fromEntries(formData);

 const newTask = {

  id: tasks.length,
  title: formEntries.title,
  description: formEntries.description,
  isDone: false

 }
 tasks.push(newTask);

 console.log(tasks);
}

newTaskForm.addEventListener('submit', handleSubmit);
