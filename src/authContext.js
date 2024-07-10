import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

import { db } from "./firebaseInit";
import { collection,addDoc ,onSnapshot} from "firebase/firestore";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const authContext=createContext();

export function useAuthValue(){
    const value=useContext(authContext);
    return value;
}


export function AuthContext({children})
{
   const[isLoggedIn,setLoggedIn]=useState(false);

   const[userLoggedIn,setUserLoggedIn]=useState(null);

   const[userList,setUserList]=useState([]);

   useEffect(()=>{
    const unsubs=onSnapshot(
        collection(db,"myStore"),
        (snapshot)=>{
            const users=snapshot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                   
                }
            })
            setUserList(users);
            console.log(userList);
            
        }
    )

   },[isLoggedIn])


  async function createUser(data)
  {
    const index=userList.findIndex((user)=>user.email===data.email);

    if(index!==-1)
    {
         toast.error("Email address already exist, Try again or signIn instead");
         return;
    }
    const docRef=await addDoc(collection(db,"myStore"),{
        name:data.name,
        email:data.email,
        password:data.password,
        cart:[],
        orders:[]

    });
    toast.success("New user Created,Please Login to Continue");
  }

  async function signIn(data)
  { const index=userList.findIndex((user)=>user.email===data.email);
    if(index===-1)
        {
             toast.error("Email address not exist, Try again or signUp instead");
             return;
        }
    
    if(userList[index].password===data.password)
    {
        toast.success("SignIn Successfull");
        setLoggedIn(true)
        setUserLoggedIn(userList[index]);

        window.localStorage.setItem("token",true);
        window.localStorage.setItem("index",JSON.stringify(userList[index]))
        return true;
    }
    else{
        toast.error("wrong password, try again");
        return false
    }
    
  }

  async function signOut(){
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("index")

    setLoggedIn(false);
    setUserLoggedIn(null)
    toast.success("signout successfull")
  }


  return(
    <>
        <authContext.Provider value={{createUser,signIn,signOut,isLoggedIn,setLoggedIn,setUserLoggedIn}}>
        <ToastContainer/>
            {children}
        </authContext.Provider>
    </>
  )
}
