import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAccf3oq-yM8u193eyFaq8LDx-3X-f0c84",
    authDomain: "login-facebook-7e579.firebaseapp.com",
    projectId: "login-facebook-7e579",
    storageBucket: "login-facebook-7e579.appspot.com",
    messagingSenderId: "1097282526838",
    appId: "1:1097282526838:web:8786246d425632ee110957",
    measurementId: "G-TQLY5K0CF3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}
// https://login-facebook-7e579.firebaseapp.com/__/auth/handler
