// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjwc1065jZP2Du5oKp3pSqcNj02v8HVco",
  authDomain: "pomodro-85828.firebaseapp.com",
  projectId: "pomodro-85828",
  storageBucket: "pomodro-85828.appspot.com",
  messagingSenderId: "320098606921",
  appId: "1:320098606921:web:8268a337ac7c94bf1a4498",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
