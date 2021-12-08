import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { ChangeEvent } from 'hoist-non-react-statics/node_modules/@types/react';
// import { store } from '../../store/store';



const InputAddTodo = () => {
    
    const [state,setState]=useState <string>('')
    
    const inputUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }
    
    const dispatch = useDispatch()

    const addTodoSubmit = () =>{
        dispatch({type:"ADD_TODO", payload:state})
        setState('')        
    }

    return(
        <div>
            <input onChange={inputUpdate} type='text' value={state} name="note" placeholder='write your task/todo'></input>
            <button onClick={addTodoSubmit}  type='submit'>Add task</button>
        </div>
    )
}

export default InputAddTodo;