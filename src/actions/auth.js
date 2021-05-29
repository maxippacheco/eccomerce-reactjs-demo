import { types } from "../types/types";
import { firebase } from '../database/firebase.config'
import 'firebase/storage';
import Swal from "sweetalert2";

export const startLoginWithEmailAndPassword = (email, password) => {

    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
                .then(({user}) => {
                    dispatch(login(user.uid, user.displayName))
                })
                .catch(error => console.log(error))    
    }

}

export const startRegister = (email, password, name) => {
    
    return (dispatch) => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user}) => {

            await user.updateProfile({displayName: name});

            dispatch(login( user.uid, user.displayName ));

        })
        .catch(error => {
            console.log(error);
            Swal.fire('Error', error.message, 'error');
        })
    }

}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})




export const startUpdatingProfile = (newDisplayName) => {
    
    return async(dispatch) => {
        
        await firebase.auth().currentUser.updateProfile({
            
            displayName: newDisplayName
        })
        .then(() => {

            dispatch(updateProfile(newDisplayName));
        })
        .catch(error => {
            console.log(error);
        })

    }

}

const updateProfile = (newDisplayName) => ({
    type: types.update_profile,
    payload: {
        newDisplayName
    }
})


export const startUpdatingProfileImage = (image) => {
    
    return (dispatch) => {
        
        const imageRef = firebase.storage().ref()
    
                
    }

}



const updateFile = (image) => ({
    type: types.update_file,
    payload: {
        image
    }
})

export const startLogout = () => {

    return async(dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
        
    }


}


export const logout = () => ({
    type: types.logout
})