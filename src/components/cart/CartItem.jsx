import React from "react";
import { useSelector } from "react-redux";

export const CartItem = ({media, name, price, handleDelete, handleUpdateQuantity, handleUpdateQuantityRest ,id }) => {

    const {quantity} = useSelector(state => state.cart) 


  return (

      <div className="flex flex-row my-5"> 
            <div className="border">
              <img
                src={media.source}
                className="h-40 w-40"
                alt={name}
              />
            </div>

            <div className="h-42 w-72 border flex flex-col">
              <div className="text-center py-2 text-xl">{name}</div>

              <div className="flex flex-row justify-center items-center mt-2">
                <div className="pr-3 text-gray-400">
                  {price.formatted_with_symbol}
                </div>

                <div>
                  <button
                    className="border border-red-500 p-1 rounded bg-red-500 text-white hover:bg-red-700 cursor-pointer"
                    onClick={() => handleDelete(id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                </div>
              </div>

              <div className="flex h-3/4 pr-2 pb-2 flex-col w-100">

                <div className='mt-2 flex justify-center items-center'>
                  <button 
                    className='mr-4 bg-blue-500 rounded-full p-1 text-white cursor-pointer hover:bg-blue-700'
                    onClick={() => handleUpdateQuantity(id, quantity + 1)}
                >+1</button>

                  <p>{quantity}</p>
                  
                  <button 
                    className='ml-4 bg-blue-500 rounded-full p-1 text-white cursor-pointer hover:bg-blue-700'
                    onClick={() => handleUpdateQuantityRest(id, quantity - 1)}
                  >-1</button>
                </div>

                <div className='flex justify-end'>
                  <p className="text-gray-400 hover:underline hover:text-blue-300 cursor-pointer">
                      Buy Now!
                  </p>
                </div>
              </div>

            </div>



    </div>


  );
};
