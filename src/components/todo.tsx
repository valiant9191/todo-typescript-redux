import React from 'react';

export interface TodosProps {
    todo: string,
    id:string
}

const TodoTask = ({todo,id}:TodosProps ) => {

    const createKey: string = id + Date.now().toString()

    return(
        <li key={createKey} id={createKey}>
            {todo}
            <button style={{borderRadius:'50%'}}>X</button>
        </li>
    )
}

export default TodoTask;