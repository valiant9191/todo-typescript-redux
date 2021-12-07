import React from 'react';
import { useSelector } from 'react-redux';
import { Todos } from './store/reducer';

import TodoList from './components/todoList'


const App = () => {

  // const todos=useSelector<Todos, Todos['todo']>((state)=>state.todo)
  
  return(
    <div className='App'>

      <TodoList />

      {/* {todos.map(todo=>{
        return <p key={todo}>{todo}</p>
      })} */}
    </div>
  )
} 



export default App;