import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.login:
            //Payload is the information that provides the action
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
   
        case types.update_profile:
            return{
                ...state,
                name: action.payload.newDisplayName
            }
        
        case types.update_file:
            return{
                ...state,
                file: action.payload.file
            }
        

        case types.logout:
            return { /* Clean */}

        default:
            return state;
    }

}