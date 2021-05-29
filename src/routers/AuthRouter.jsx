import React from 'react'
import {
    Switch,
    Route,
    Redirect} from 'react-router'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
    
    return (
            <div className='w-screen h-screen bg-gray-50 flex justify-center items-center'>
                
                    <Switch>

                    <Route
                            path='/auth/login'
                            component={LoginScreen}
                        />

                        <Route
                            path='/auth/register'
                            component={RegisterScreen}
                        />

                        <Redirect to='/auth/login' />
                    
                        </Switch>
            </div>



    )
}
