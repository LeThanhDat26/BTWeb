import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/todocontext';
const AddTodo = () => {
 const [todoText, setTodoText] = useState('');
 const { addTodo } = useContext(TodoContext);
 const handleSubmit = (e) => {
 e.preventDefault();
 if (!todoText) return;
 addTodo({ id: Date.now(), text: todoText });
 setTodoText('');
 };
 return(
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={todoText}
        onChange={(e)=>setTodoText(e.target.value)}
        placeholder='them todo moi'></input>
        <button type='submit'>them</button>
    </form>
 )
};  
export default AddTodo;