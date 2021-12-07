
export interface Todos {
    todo: string[]
}

const initialState = {
    todo:["1",'2','3']
}

type Action = {
    type:'ADD_TODO',
    payload: string
}

export function reducer(state: Todos=initialState, action:Action){
    switch (action.type) {
        case 'ADD_TODO':{
            return{...state, todos:[...state.todo, action.payload]}
        }    
        default:
            return state
        
    }
}
