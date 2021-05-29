 
//lo mismo que imp firebase from 'firebase'
import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyBwuGMGllSFnGPONChbPVH6q-MSS7PuKT8",
    authDomain: "ecommerce-react-56a4c.firebaseapp.com",
    projectId: "ecommerce-react-56a4c",
    storageBucket: "ecommerce-react-56a4c.appspot.com",
    messagingSenderId: "690199871889",
    appId: "1:690199871889:web:a752664ade111b37b5da30",
    measurementId: "G-87VRQQ2EVJ"
  };
  // Initialize Firebase

    firebase.initializeApp(firebaseConfig);


    const db = firebase.firestore();

    const googleProvider = new firebase.auth.GoogleAuthProvider();



    export {
        db,
        firebase,
        googleProvider   
    }
