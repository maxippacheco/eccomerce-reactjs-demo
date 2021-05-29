import React, {  useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startUpdatingProfile, startUpdatingProfileImage } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import userDefault from '../../img/userDefault.png';
import { Navbar } from '../navbar/Navbar';

export const UserSettings = () => {
    
    const inputFile = useRef();
    const inputTxt = useRef();

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const [ formValues, handleInputChange ] = useForm({
        displayName: ''
    })
    const [ fileValues, handleInputChange2 ] = useForm({
        file: ''
    })


    const {file} = fileValues;
    const {displayName} = formValues;

    

    const handleUpdateUsername = (e) => {
        e.preventDefault();
        
        isFormValid() && dispatch(startUpdatingProfile(displayName));

        inputTxt.current.value = ''
        
    }
    
    const isFormValid = () => {
        
        if (displayName.trim().length < 3) {
            Swal.fire('Error', 'Name must be 3 characters or more', 'error');
            dispatch(setError('Name must be 3 characters or more'));
            
            return false;
        
        }else if(displayName.trim() === name){
            Swal.fire('Error', 'This is the same name to your before username', 'error');
            dispatch(setError('This is the same name to your before username'));
            
            return false;

        }
        else{
            dispatch(removeError());

            return true;
        }
    }


    const handleSubmitFile = (e) => {

        // e.preventDefault()

        // inputFile.current.click();

        // dispatch(startUpdatingProfileImage())

        Swal.fire('Error', "Doesn't work by the moment", 'info');
    }




    return (
        <div>
            <Navbar />

            <div className='w-screen h-90vh flex justify-center items-center'>

                <div className='h-full bg-gray-100 w-2/4'>
                    <div className='w-full h-2/6 flex justify-center items-end'>
                        <img 
                            src={userDefault} 
                            alt="default" 
                            className='rounded-full w-56 h-56 absolute'
                        />

                        <div className='relative ml-24'>
                            <div 
                                className='h-14 w-14 bg-purple-500 rounded-full cursor-pointer hover:bg-purple-600 text-white flex justify-center items-center text-xl'
                            >
                                     <button 
                                         className='far fa-images focus:outline-none'
                                         onClick={handleSubmitFile}
                                       >
                                          <input 
                                              type="file" 
                                              className='hidden' 
                                              ref={inputFile}
                                              value={file}
                                              name='file'
                                              onChange={handleInputChange2}
                                          />
                                     </button>
                            </div>

                        </div>

                    </div>

                    <div className='flex justify-center mt-5'>
                        <form className=' w-2/5 h-40 text-center' onSubmit={handleUpdateUsername}>
                            
                            <h2 className='my-2 text-xl'>Change your username</h2>
                            <input 
                                type="text" 
                                className='w-full p-1.5 border border-gray-200 mt-2 focus:outline-none text-gray-400' 
                                name='displayName'
                                value={displayName.name}
                                onChange={handleInputChange}
                                ref = {inputTxt}
                            />

                            <input type="submit" value="Update" className='mt-5 w-2/5 p-1.5 rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-600' />

                        </form>
                    </div>

                </div> 

            </div>
        </div>
    )
}
