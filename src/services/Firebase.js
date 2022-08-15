// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBAL75T5iIPROG5Xrn8VHIJujqeHYVEF44",
    authDomain: "chat-webapp-4344a.firebaseapp.com",
    projectId: "chat-webapp-4344a",
    storageBucket: "chat-webapp-4344a.appspot.com",
    messagingSenderId: "518778015113",
    appId: "1:518778015113:web:b2fd77f93c908d8d97e558",
    measurementId: "G-LSK6NH3RL6"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };