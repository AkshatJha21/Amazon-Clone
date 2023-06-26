import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9uU589lCqo8PaB-gQRXGsf0ebfgghTNk",
    authDomain: "clone-e159e.firebaseapp.com",
    projectId: "clone-e159e",
    storageBucket: "clone-e159e.appspot.com",
    messagingSenderId: "85096852310",
    appId: "1:85096852310:web:b1e024657ce744579744f7",
    measurementId: "G-9W13ZYJ6Y2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };