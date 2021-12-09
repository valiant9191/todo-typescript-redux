import React from 'react';
import { Route, Routes } from 'react-router';
// components 
import TodoList from './components/todoList/todoList'
import InputAddTodo from './components/inputAddTodo/input';
import Navbar from './components/navigation/navbar';
// styles 
import './App.scss'


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