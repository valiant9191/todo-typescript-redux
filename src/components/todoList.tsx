import React from 'react';
// state 
import { useSelector } from 'react-redux';
import { Todos } from '../store/reducer';
// components 
import TodoTask from './todo';




const TodoList = () => {
    
    const todos=useSelector <Todos, Todos['todo']> ((state)=>state.todo)
    console.log(todos)

    return(
        <ul> 
           {todos.map((task)=>{
               return <TodoTask todo={task} key={task+Date.now.toString()}/>
           })} 
        </ul>
    )
}

export default TodoList;