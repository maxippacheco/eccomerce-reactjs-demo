import { types } from "../types/types";
import {commerce} from '../lib/commerce';

export const startCreatingCart = () => {

    return async(dispatch) => {
        
        const cartData = await commerce.cart.retrieve();

        dispatch(createCart(cartData));
    }

}

export const startAddingtToCart = (productId, quantity) => {
    
    return async(dispatch) => {
        const item = await commerce.cart.add(productId, quantity);
        dispatch(addtoCart(item, quantity));
    
    }

}

export const startUpdatingItem = (item_id, newQuantity) => {
    
    return async(dispatch) => {
        const response = await commerce.cart.update(item_id, {newQuantity});
        
        //Finish the update
        
        console.log(newQuantity);

        dispatch(updateCartItem( response.cart, response.cart.line_items , newQuantity ))
    }

}


export const startDeletingToCart = (id) => {
    
    return async(dispatch) => {
        
        const response = await commerce.cart.remove(id);

        dispatch(cartDelete(response.cart, response.cart.line_items))
    }

}

export const StartCartEmpty = () => {
    return async(dispatch) => {
        
        const resp = await commerce.cart.empty();

        dispatch(cartEmpty(resp.cart, resp.cart.line_items));

    }
}



const createCart = (cart) => ({
    type: types.createCart,
    payload: {
        cart
    }  
})

const addtoCart = ( item, quantity) => ({
    type: types.cartAdd,
    payload:{
       item, quantity
    }

});

const updateCartItem = (cart, items, quantity) => ({
    type: types.cartUpdate,
    payload:{
        cart, items, quantity
    }

});


const cartDelete = (cart, items) => ({
    type: types.cartDelete,
    payload:{
        cart,
        items
    }
})

const cartEmpty = (cart) => ({
    type: types.cartEmpty,
    payload:{
        cart
    }

})