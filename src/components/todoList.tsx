import React from 'react';
// state 
import { useSelector, useDispatch } from 'react-redux';
import { Todos } from '../store/reducer';

// components 
import TodoTask from './todo';



const TodoList = () => {
    const dispatch=useDispatch()

    const todos=useSelector <Todos, Todos['todo']> ((state)=>state.todo)

    const todoDelete = (idTask:string):void => {
        dispatch({type:"DELETE_TODO", payload:idTask})
    }

    return(
        <ul> 
           {todos.map((task,id)=>{
               return <TodoTask todo={task} /*id={task+ Date.now().toString()}*/ key={task+id+ Date.now().toString()} todoDelete={todoDelete}/>
           })} 
        </ul>
    )
}

export default TodoList;