
export interface TodosProps {
    todo: string,
    id?:string,
    todoDelete(id:string):void
}

const Todo = ({todo,id,todoDelete}:TodosProps ) => {

    return(
        <li key={id} id={id}>
            {todo}
            <button onClick={()=>todoDelete(todo)} >X</button>
        </li>
    )
}

export default Todo;