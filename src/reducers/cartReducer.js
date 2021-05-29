import { types } from "../types/types";


export const cartReducer = (state = {}, action) => {
    
    switch (action.type) {

       case types.createCart:
            return{
                ...state,
                cart: action.payload.cart,
            }

        case types.cartAdd:
            return{
                ...state,
                cart: action.payload.item.cart,
                items: action.payload.item.cart.line_items,
                quantity: action.payload.quantity,
            }

        case types.cartUpdate:
            return{
                ...state,
                cart: action.payload.cart,
                items: action.payload.items,
                quantity: action.payload.quantity

            }

        case types.cartDelete:
            return{
                ...state,
                cart: action.payload.cart,
                items: action.payload.cart.line_items
            }
    
        case types.cartEmpty:
            return{
                ...state,
                cart: action.payload.cart,
                items: action.payload.cart.line_items
            }

        default:
            return state;
    }


}