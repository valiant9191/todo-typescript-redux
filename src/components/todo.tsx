import React from 'react';

export interface TodosProps {
    todo: string
}


const TodoTask = ({todo}:TodosProps) => {

    return(
        <li key={todo}>
            {todo}
        </li>
    )
}

export default TodoTask;