// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-JsCFJ7N-h3NjkXAYzSnd1KlQ0t05WwQ",
    authDomain: "syncmeets.firebaseapp.com",
    projectId: "syncmeets",
    storageBucket: "syncmeets.appspot.com",
    messagingSenderId: "915043770421",
    appId: "1:915043770421:web:d0c8ec5b0a83bb43a2917c",
    measurementId: "G-5E6ZWLCZST"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export default firebase;