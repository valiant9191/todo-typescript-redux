import { Action } from "./actions"

export interface Todos {
    todo: string[]
}




const initialState = {
    todo:[]
}

export function reducer(state: Todos=initialState, action:Action){
    switch (action.type) {
        case 'ADD_TODO':{
            return{...state, todo:[...state.todo, action.payload]}
        }    
        default:
            return state
        
    }
}
