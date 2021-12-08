export type Action={ type: 'ADD_TODO'|"DELETE_TODO", payload: string}

export const addTodo = (todo: string):Action =>({
    type:"ADD_TODO",
    payload: todo,
})
export const deleteTodo = (todo: string):Action =>({
    type:"DELETE_TODO",
    payload: todo,
})