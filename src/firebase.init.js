// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfMxs5DcWixbqwYZ8r3xh-bF_UkyPxrus",
    authDomain: "project-sunshine-adeb0.firebaseapp.com",
    projectId: "project-sunshine-adeb0",
    storageBucket: "project-sunshine-adeb0.appspot.com",
    messagingSenderId: "3949232383",
    appId: "1:3949232383:web:2097f8860f4d6879074cca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;