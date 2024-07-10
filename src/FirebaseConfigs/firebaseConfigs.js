import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDA0HvCd0lEj2QuD_yYl9V4E8Fb1fWAhiI",
 
   authDomain: "mystore-eca03.firebaseapp.com",
 
   projectId: "mystore-eca03",
 
   storageBucket: "mystore-eca03.appspot.com",
 
   messagingSenderId: "499170427666",
 
   appId: "1:499170427666:web:2cca505d9be00a0e0329cb",
 
   measurementId: "G-SXFNSZ5VGF"
 
   };
   
 const app=initializeApp(firebaseConfig) ;

 export const auth=getAuth(app);
 export const storage=getStorage(app);
 export const db=getFirestore(app);