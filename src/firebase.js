// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd5Q9dLff9VGOFFmwILsbn7rYVJkObYqs",
  authDomain: "realtime-chatapp-4cbc1.firebaseapp.com",
  projectId: "realtime-chatapp-4cbc1",
  storageBucket: "realtime-chatapp-4cbc1.appspot.com",
  messagingSenderId: "120062834364",
  appId: "1:120062834364:web:619592e4c47b9a44d382b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();