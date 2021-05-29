import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui';


export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    // const { msgError } = useSelector(state => state.ui)

    const [formValues, inputChange] = useForm({
        name: 'test',
        email: 'test@test.com',
        password: '12345678',
        password2: '12345678'
    })

    const {name, email, password, password2} = formValues;

    const registerSubmit = (e) => {
        e.preventDefault();


        if (formValidated()) {
            //Dispatch de la accion de registro
            dispatch(startRegister(email, password, name));

        }

    }

    
     const formValidated = () => {
            

        if (name.trim().length === 0) {
            
            dispatch( setError('Name is required') );
            Swal.fire('Error' , 'Name is required', 'error');
            
            return false;

        }else if( !validator.isEmail(email) ){
            
            dispatch( setError('Email is required') );
            Swal.fire('Error' , 'Email is required', 'error');
            
            return false;

        }else if( password !== password2 || password.length < 5 ){
            
            dispatch( setError('Password should be equal and have 6 or more characters') );
            Swal.fire('Error' , 'Password should be equal and have 6 or more characters', 'error');
            
            return false;
        }

        dispatch(removeError());
        Swal.fire('User created', 'Your user account has been created succesfully', 'success')

        return true;

    }



    
    return (
        <div className=' h-4/6  w-5/12 bg-white border border-gray-100 justify-center items-center flex shadow' onSubmit={registerSubmit}>
            <form className='justify-center'>
                <h1 className='text-center text-3xl mb-16'>Register</h1>
                
                <label htmlFor="name" className='w-full'>Name: </label>
                <input 
                    type="text" 
                    className='w-96 block border border-gray-200 mb-4 p-1' 
                    onChange={inputChange}
                    name='name'
                    value={name}
                />

                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    className='w-96 block border border-gray-200 mb-4 p-1' 
                    onChange={inputChange}
                    name='email'
                    value={email}
                />

                <label htmlFor="password">Password: </label>
                <input 
                    type="password"  
                    className='w-96 block border border-gray-200 mb-4 p-1'
                    onChange={inputChange}
                    name='password'
                    value={password}
                />


                <label htmlFor="password">Confirm your password: </label>
                <input 
                    type="password"  
                    className='w-96 block border border-gray-200 mb-6 p-1'
                    onChange={inputChange}
                    value={password2}
                    name='password2'
                />

                <input 
                    type="submit" 
                    className='w-96 block bg-blue-500 hover:bg-blue-600 cursor-pointer text-white p-1.5' value='Submit' 
                />
            </form>
        </div>
    )
}
