import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { ChangeEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import './input.scss'


const InputAddTodo = () => {
    
    const [state,setState]=useState <string>('')
    
    const inputUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }
    
    const dispatch = useDispatch()

    const addTodoSubmit = () =>{
        if(state){
        dispatch({type:"ADD_TODO", payload:state})
        setState('')
        }
        else{
            alert('You forget to write your task)')
        }        
    }

    return(
        <div className='input-wrapper'>
            <input onChange={inputUpdate} type='text' value={state} name='note' placeholder='write your task/todo'></input>
            <button onClick={addTodoSubmit}  type='submit'>Add task</button>
        </div>
    )
}

export default InputAddTodo;