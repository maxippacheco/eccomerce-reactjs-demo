import { commerce } from "../lib/commerce";
import { types } from "../types/types"


export const startLoadingProducts = () => {
    
    return async(dispatch) => {
        
        const products = await commerce.products.list();
        dispatch(getProductsData(products.data));

    }

}


const getProductsData = (products) => ({
    type: types.getProducts,
    payload: {
        products
    }
})  