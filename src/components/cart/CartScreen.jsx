import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StartCartEmpty, startDeletingToCart, startUpdatingItem } from '../../actions/cart';
import { Navbar } from '../navbar/Navbar';
import { CartEmpty } from './CartEmpty';
import { CartItem } from './CartItem';

export const CartScreen = () => {
    
    const dispatch = useDispatch();
    const {items, quantity, cart} = useSelector(state => state.cart);
    const {formatted_with_symbol} = cart.subtotal;


    if (!items || items.length === 0) {
            
        return( <CartEmpty /> )
    }

    const handleCartEmpty = () => {
        dispatch(StartCartEmpty())
    }

    return (

        <div>

            <Navbar />

            <div className='w-full h-full flex flex-col justify-center items-center m-0'>


                {
                    items.map(cartItem => {

                        const cartDelete = () => {
                            dispatch(startDeletingToCart(cartItem.id));
                        }
                        const handleUpdateQuantity = () => {
                             dispatch(startUpdatingItem(cartItem.id, quantity + 1))
                        }

                        const handleUpdateQuantityRest = () => {

                            if (quantity <= 1) {
                                dispatch(startDeletingToCart(cartItem.id));
                            }else{
                                dispatch(startUpdatingItem(cartItem.id, quantity - 1))
                            }
                        }

                        return (
                            <CartItem 
                                key={cartItem.product_id} 
                                handleDelete={cartDelete}
                                handleUpdateQuantity={handleUpdateQuantity}
                                handleUpdateQuantityRest={handleUpdateQuantityRest}
                                {...cartItem}
                            />

                        )

                    })
                }

                <div className='w-100 h-56 flex items-center flex-col'>
                    
                    
                    <div className='flex text-xl'>Subtotal: {formatted_with_symbol}</div>

                    <div className='w-full flex justify-between mt-4'>
                        <button className='p-1.5 bg-blue-500 text-white rounded focus:outline-none cursor-pointer hover:bg-blue-600'>
                            Checkout    
                        </button>
                        
                        <button 
                            className='p-1.5 bg-yellow-500 text-white rounded focus:outline-none cursor-pointer hover:bg-yellow-600'
                            onClick={handleCartEmpty}
                        >
                            Empty
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
