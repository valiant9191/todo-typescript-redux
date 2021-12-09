import React from 'react';
// state 
import { useSelector, useDispatch } from 'react-redux';
import { Todos } from '../../store/reducer';
// components 
import Todo from './todo';
// style 
import './todoList.scss'



const TodoList = () => {
    const dispatch=useDispatch()

    const todos=useSelector <Todos, Todos['todo']> ((state)=>state.todo)

    const todoDelete = (idTask:string):void => {
        dispatch({type:"DELETE_TODO", payload:idTask})
    }

    return(
        <ul className='list-todo'> 
           {todos.map((task,id)=>{
               return <Todo todo={task} key={task+id+ Date.now().toString()} todoDelete={todoDelete}/>
           })} 
        </ul>
    )
}

export default TodoList;