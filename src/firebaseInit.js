// import { initializeApp } from "firebase-admin";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyDA0HvCd0lEj2QuD_yYl9V4E8Fb1fWAhiI",
 
//    authDomain: "mystore-eca03.firebaseapp.com",
 
//    projectId: "mystore-eca03",
 
//    storageBucket: "mystore-eca03.appspot.com",
 
//    messagingSenderId: "499170427666",
 
//    appId: "1:499170427666:web:2cca505d9be00a0e0329cb",
 
//    measurementId: "G-SXFNSZ5VGF"
 
//    };
   
// const app=initializeApp(firebaseConfig);
// export const {db}=getFirestore(app);
  
  
// //    firebase.initializeApp(firebaseConfig);



import { initializeApp } from "firebase/app"; // Import from firebase/app for client-side SDK
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA0HvCd0lEj2QuD_yYl9V4E8Fb1fWAhiI",
  authDomain: "mystore-eca03.firebaseapp.com",
  projectId: "mystore-eca03",
  storageBucket: "mystore-eca03.appspot.com",
  messagingSenderId: "499170427666",
  appId: "1:499170427666:web:2cca505d9be00a0e0329cb",
  measurementId: "G-SXFNSZ5VGF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
