import { filter, liveFilter, reset } from "./actionType"

//Actions to do
export const View = (InputValue) => {

    return{
        type : filter,
        payload: {
            InputValue
        }

    }

    
} 


export const liveView = (InputValue) => {

    return{
        type : liveFilter,
        payload: {
            InputValue
        }

    }

    
}

export const resettab = (InputValue) => {

    return{
        type : reset,
        payload: {
            InputValue
        }

    }

    
} 