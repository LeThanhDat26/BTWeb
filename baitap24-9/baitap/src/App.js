import React, { useState } from 'react';

function ToDoApp() {
const [tasks, setTasks] = useState([]); // Quản lý danh sách công việc
const [newTask, setNewTask] = useState(''); // Quản lý giá trị ô nhập liệu
const toggleTaskCompletion = (index) => {
  const updatedTasks = tasks.map((task, i) =>
  i === index ? { ...task, completed: !task.completed } : task
  );  setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    };

const handleAddTask = (e) => {
e.preventDefault();
if (newTask.trim() !== '') {
setTasks([...tasks, { task: newTask, completed: false }]);
setNewTask('');
} };
return (
<div>
<h1>To-Do List</h1>
<form onSubmit={handleAddTask}>
<input
type="text"
placeholder="Enter new task"
value={newTask}
onChange={(e) =>
setNewTask(e.target.value)}
/> <button type="submit">Add Task</button>
</form>
{<TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
} </div>
);}
function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
  <ul>
  {tasks.map((task, index) => (        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
  <span
  style={{
  textDecoration: task.completed ? 'line-through' : 'none',
  cursor: 'pointer'
  }}            onClick={() =>
  toggleTaskCompletion(index)}
  >            {task.task}
  </span>
  <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>Delete</button>
  </li>
  ))}    </ul>
  );}
 
  
  

  
export default ToDoApp