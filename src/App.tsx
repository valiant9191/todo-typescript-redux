import React from 'react';

import TodoList from './components/todoList'
import InputAddTodo from './components/input/input';


const App = () => {

  // const todos=useSelector<Todos, Todos['todo']>((state)=>state.todo)
  
  return(
    <div className='App'>

      <InputAddTodo />

      <TodoList />

      {/* {todos.map(todo=>{
        return <p key={todo}>{todo}</p>
      })} */}
    </div>
  )
} 



export default App;