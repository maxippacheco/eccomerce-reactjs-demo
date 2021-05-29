import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'

export const CartEmpty = () => {
    return (
        <div>
            <Navbar />

            <div className='h-80 w-100 flex justify-center items-center flex-col'>


                <h1 className='text-6xl text-gray-800 mb-5'>Cart Empty</h1>

                <Link to='/' className='text-base cursor-pointer hover:text-blue-300 hover:underline'> See our products! </Link>

            </div>

        </div>
    )
}
