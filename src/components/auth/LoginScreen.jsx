import React from 'react'
import { useDispatch } from 'react-redux';
import { startLoginWithEmailAndPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    
    const dispatch = useDispatch();

    const [ formValues, inputChange ] = useForm({
        email: 'test3@test.com',
        password: '123456'
    })

    const {email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginWithEmailAndPassword(email, password))
    }

        
    return (
            <div className=' h-3/6  w-4/12 bg-white border border-gray-100 justify-center items-center flex shadow'>

                <form onSubmit={handleSubmit}>
                    <h1 className='text-center text-3xl mb-16'>Log In</h1>
                    
                    <input 
                        type="email" 
                        className='w-full mb-10 border border-gray-200 p-1.5 rounded'    
                        placeholder='Put your email'
                        name= 'email'
                        value={email}
                        onChange={inputChange}
                    />
                    
                    <input 
                        type="password" 
                        className='w-full mb-12 border border-gray-200 p-1.5 rounded'
                        placeholder='Put your password' 
                        name= 'password'
                        value={password}
                        onChange={inputChange}
                    />
                    

                    <input 
                        type="submit" 
                        className='w-full p-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'    
                    />

                </form>
            </div>

    )
}
