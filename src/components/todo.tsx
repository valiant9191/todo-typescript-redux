import React from 'react';

export interface TodosProps {
    todo: string,
    id?:string,
    todoDelete(id:string):void
}

const TodoTask = ({todo,id,todoDelete}:TodosProps ) => {

    return(
        <li key={id} id={id}>
            {todo}
            <button onClick={()=>todoDelete(todo)} style={{borderRadius:'50%'}}>X</button>
        </li>
    )
}

export default TodoTask;