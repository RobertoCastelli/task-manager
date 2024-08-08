// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBA4lny7wUgQX_aDzxYBUEgExpkxLzrto",
  authDomain: "task-manager-poli.firebaseapp.com",
  projectId: "task-manager-poli",
  storageBucket: "task-manager-poli.appspot.com",
  messagingSenderId: "823134339353",
  appId: "1:823134339353:web:a15308e71cae998d988588",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
