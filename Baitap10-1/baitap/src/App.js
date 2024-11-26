import React from 'react';
import TodoProvider from './TodoProvider';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
function app(){
  return(
    <TodoProvider>
      <h1>TodoList</h1>
      <TodoForm/>
      <TodoList/>
    </TodoProvider>
  )
}
export default app;