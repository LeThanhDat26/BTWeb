import React, { useContext } from 'react';
import { TodoContext } from '../context/todocontext';
import TodoItem from './todoitem';

const TodoList=()=>{
    const{todos,removeTodo}=useContext(TodoContext);
    return(
        <ul>
            {todos.map((todo)=>(
                <TodoItem key={todo.id}todo={todo} removeTodo={removeTodo}></TodoItem>
            ))}
        </ul>
    );
};
export default TodoList;