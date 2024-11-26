import React from 'react';
import { TodoProvider } from './context/todocontext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App=()=>{
  return(
    <TodoProvider>
        <div>
          <AddTodo/>
          <TodoList/>
        </div>
    </TodoProvider>
  );
};
export default App;