import React from 'react'
import Loader from 'react-loader-spinner'

export const LoadingScreen = () => {
    return (
        <div className='flex w-screen h-screen justify-center items-center'>
           
           <Loader
               type="Bars"
                color="#696969"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />

        </div>
    )
}
