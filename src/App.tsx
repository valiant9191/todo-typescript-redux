import React from 'react';
import { useSelector } from 'react-redux';
import { Todos } from './store/reducer';


const App = () => {
  
  const todos=useSelector<Todos, Todos['todo']>((state)=>state.todo)
  console.log(todos)
  
  return(
    <div className='App'>
      {todos.map(todo=>{
        return <p key={todo}>{todo}</p>
      })}
    </div>
  )
} 



export default App;