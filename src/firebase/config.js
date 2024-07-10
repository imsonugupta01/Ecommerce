import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
   apiKey: "AIzaSyDA0HvCd0lEj2QuD_yYl9V4E8Fb1fWAhiI",

  authDomain: "mystore-eca03.firebaseapp.com",

  projectId: "mystore-eca03",

  storageBucket: "mystore-eca03.appspot.com",

  messagingSenderId: "499170427666",

  appId: "1:499170427666:web:2cca505d9be00a0e0329cb",

  measurementId: "G-SXFNSZ5VGF"

  };
  
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
 
  


  /**
   // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0HvCd0lEj2QuD_yYl9V4E8Fb1fWAhiI",
  authDomain: "mystore-eca03.firebaseapp.com",
  projectId: "mystore-eca03",
  storageBucket: "mystore-eca03.appspot.com",
  messagingSenderId: "499170427666",
  appId: "1:499170427666:web:2cca505d9be00a0e0329cb",
  measurementId: "G-SXFNSZ5VGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   */