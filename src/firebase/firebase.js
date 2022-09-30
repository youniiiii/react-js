// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDByRJdgVw0rEx9kSB8Frvlt-OD1PkvMXo",
    authDomain: "db-store-b5d5a.firebaseapp.com",
    projectId: "db-store-b5d5a",
    storageBucket: "db-store-b5d5a.appspot.com",
    messagingSenderId: "569512110301",
    appId: "1:569512110301:web:08966744310b18e786d334",
    measurementId: "G-N8YQ97ZVX1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
