import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from 'react-router-dom';
import { EcommerceScreen } from '../components/ecommerce/EcommerceScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../database/firebase.config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ViewProductScreen } from '../components/view-product/ViewProductScreen';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { CartScreen } from '../components/cart/CartScreen';
import { UserSettings } from '../components/user-settings/UserSettings';


export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);


    useEffect(() => {
        

        firebase.auth().onAuthStateChanged((user) => {
            
            if (user?.uid) {
                
                //Hacemos el login
                dispatch(login(user.uid, user.displayName));
                
                //Lo mostramos como autenticado
                setIsLoggedIn(true);

                //Dejamos de checkear
                setChecking(false);
            
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);

        })

 
        
    }, [dispatch, setChecking, setIsLoggedIn, checking]);

    
       if (checking) {
            return (
                <LoadingScreen />
            )
        }

    return (
        <Router>
            <div>
            <Switch>
                <PrivateRoute 
                    exact path = '/'
                    component={ EcommerceScreen }
                    isAuthenticated={isLoggedIn} 
                />

                <PublicRoute
                    path = '/auth'
                    component={ AuthRouter } 
                    isAuthenticated={isLoggedIn}
                />

                <PrivateRoute 
                    exact path ='/view/:id'
                    component={ViewProductScreen}
                    isAuthenticated={isLoggedIn}
                />

                <PrivateRoute 
                    exact path='/cart'
                    component={CartScreen}
                    isAuthenticated={isLoggedIn}
                />

                <PrivateRoute 
                    exact path= '/user-settings'
                    component={ UserSettings }
                    isAuthenticated={isLoggedIn}
                />

                <Redirect to ='/' />
            </Switch>   

    
            </div>
     
        </Router>
    )
}
