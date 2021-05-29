import React, { useState }  from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startAddingtToCart } from '../../actions/cart';

export const CardItem = ({
    name,
    description,
    price,
    media,
    id
}) => {
    

    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();


    const handleAddToCart = () => {
        
        dispatch(startAddingtToCart(id, counter))

    }


    const counterAdd = () => {
        setCounter(counter + 1);
    }

    const counterRest = () => {
        
        if (counter <= 1) {
            setCounter(1);
        }else{
            setCounter(counter - 1);
        }
    }
    
    return (
        <div className='w-screen h-screen grid grid-cols-2 items-center px-40 animate__animated animate__fadeIn bg-gray-100'>
            
                <div className='flex justify-center'>
                    <img src={media.source} alt={name} className='shadow-sm rounded' />
                </div>

                <div className='text-center'>
                    <div className='text-5xl mb-20'>
                        {name}
                    </div>
                    
                    <div className='flex row justify-center items-center mb-20'>
                        <div className='mr-16 text-lg font-semibold'>
                            {price.formatted_with_symbol}
                        </div>

                        <div>

                            <button 
                                className='p-3 bg-green-500 rounded text-white text-lg hover:bg-green-700 cursor-pointer'
                                // onClick={() => addCart(id, counter)}
                                onClick={handleAddToCart}
                            >
                                <i className="fas fa-cart-plus"></i> Add to cart
                            </button>


                        </div>
                        
                        
                            <div className='flex flex-row ml-10 text-base'>
                                <button 
                                    className='mr-5 rounded-full h-10 w-10 bg-blue-500 p-2 text-white cursor-pointer hover:bg-blue-700'
                                    onClick={counterAdd}    
                                >+1</button>
                                <div className='p-2'>{counter}</div>
                                <button 
                                    className= 'mx-5 rounded-full h-10 w-10 bg-blue-500 p-2 text-white cursor-pointer hover:bg-blue-700'
                                    onClick={counterRest}
                                > -1 </button>
                            </div>                        
                    </div>

                    <div className='text-base text-gray-400'>{description.slice(3, -4)}</div>


                    <div className='mt-20 cursor-pointer hover:text-blue-300 hover:underline'>
                        <Link to='/'>
                            <i className="fas fa-arrow-left mr-1"></i> Go back
                        </Link>
                    
                    </div>
                </div>
            

        </div>
    )
}
