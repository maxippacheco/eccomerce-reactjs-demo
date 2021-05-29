import { types } from "../types/types";



export const productsReducer = (state = {}, action) => {
    
    switch (action.type) {

        case types.getProducts:
            return {
                products: action.payload.products
            }


   
        default:
            return state;
    }

}