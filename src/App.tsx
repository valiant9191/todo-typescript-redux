import React from 'react';
// components 
import TodoList from './components/todoList'
import InputAddTodo from './components/input/input';
import Navbar from './components/navigation/navbar';
import { Route, Routes } from 'react-router';


const App = () => {

  
  return(
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<InputAddTodo />}/>
        <Route path="/List" element={<TodoList  />}/>      
      </Routes>
    </div>
  )
} 



export default App;