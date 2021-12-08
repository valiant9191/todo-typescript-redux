import React from 'react';

import TodoList from './components/todoList'
import InputAddTodo from './components/input/input';


const App = () => {

  
  return(
    <div className='App'>
      
      <InputAddTodo />

      <TodoList />

    </div>
  )
} 



export default App;