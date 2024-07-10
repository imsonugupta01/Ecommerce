import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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

