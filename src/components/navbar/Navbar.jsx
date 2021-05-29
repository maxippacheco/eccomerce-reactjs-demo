import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {  startLogout } from '../../actions/auth';
import userDefault from '../../img/userDefault.png';

export const Navbar = () => {

    const dispatch = useDispatch();

    const img = null;
    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div className='w-full h-16 bg-gray-900 m-0'>
            
        <nav className='h-full flex items-center grid grid-cols-3'>
                
                <div>
                    <h1 className='text-white ml-4 font-semibold text-xl'>
                        <Link to='/'> E-commerce App </Link>
                    </h1>
                </div>

                <div>
                    <form className='flex justify-center items-center bg-white rounded'>
                        <input type="text" className="w-full p-1 rounded focus:outline-none" />

                        <button type="submit" className='text-black h-full'>
                            <i className="fas fa-search bg-white text-black pr-3 text-base"></i>
                        </button>
                    </form>
                </div>

                <div className='flex justify-end text-white items-center'>

                    <div className='w-1/6 flex justify-end '>
                        
                        <Link to='/cart' className='hover:text-gray-600'>
                            <i className="fas fa-shopping-cart text-lg"></i>
                        </Link>
                        
                    </div>

                    <div 
                        className='w-3/12 flex justify-center items-center'
                    >
                       <div className='mr-2'>

                            <Link 
                                to='/user-settings'
                                className='cursor-pointer'
                            >{name}</Link>
                           
                        </div> 


                        {
                            (!img) 
                                   ? <img 
                                        src={userDefault} 
                                        alt={name}
                                        className='w-10 h-10 rounded-full' 
                                     /> : null
                        }
                    </div>

                    <div>
                        <button className='bg-red-500 p-2 text-white hover:bg-red-700 cursor-pointer mr-4 rounded-full p-2' onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i> Log out
                        </button>
                    </div>

                </div>
            </nav>
        </div>




    )
}
