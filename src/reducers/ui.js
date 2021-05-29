import { types } from "../types/types";


export const uiReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.setError:
            //Payload is the information that provides the action
            return{
                ...state,
                msgError: action.payload
            }
    
        case types.removeError:
            return { 
                /* Clean */
                ...state,
                msgError: null
            }

        default:
            return state;
    }

}