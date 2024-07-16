import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'
import { auth, db } from '../FirebaseConfigs/firebaseConfigs'
import { collection, getDocs, query, where ,addDoc,deleteDoc} from 'firebase/firestore'
import CartCard from './CartCard'
import './Cart.css'

const Cart = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState("");
        // const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        // console.log(q);
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();


    const [cartdata, setcartdata] = useState([]);
    if (loggeduser) {
        const getcartdata = async () => {
            const cartArray = [];
            const path = `cart-${loggeduser[0].uid}`
            // console.log(path)
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    cartArray.push({ ...doc.data(), id: doc.id })
                });
                setcartdata(cartArray)
                // console.log('done')
            }).catch('Error error error')

        }
        getcartdata()
    }
  
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    // const buyProduct = async () => {
    //     if (loggeduser) {
    //         try {
    //             console.log(loggeduser[0].uid);
                
    //             await addDoc(collection(db, "sold"), {
    //                 cartdata: cartdata,
    //                 buyer: loggeduser[0].uid,
    //                 // quantity:cartdata.quantity
    //             });
    
    //             setSuccessMsg('Purchased');
    
    //             await deleteDoc(collection(db, `cart-${loggeduser[0].uid}`));
    //             console.log('doc deleted');
                
    //         } catch (error) {
    //             setErrorMsg(error.message);
    //         }
    //     } else {
    //         setErrorMsg('You need to login first');
    //     }
    // };\


    const now = new Date();
    const formattedDate = String(now.getDate()).padStart(2, '0') + '/' + 
        String(now.getMonth() + 1).padStart(2, '0') + '/' + 
        now.getFullYear();

    const buyProduct = async () => {
        if (loggeduser) {
            try {
                console.log(loggeduser[0].uid);
                
                await addDoc(collection(db, "sold"), {
                    cartdata: cartdata,
                    buyer: loggeduser[0].uid,
                    date: formattedDate

                    // quantity: cartdata.quantity
                });
    
                setSuccessMsg('Purchased');
                
                // Reference to the collection to be deleted
                const cartCollectionRef = collection(db, `cart-${loggeduser[0].uid}`);
                
                // Fetch all documents in the collection
                const querySnapshot = await getDocs(cartCollectionRef);
                
                // Delete each document in the collection
                querySnapshot.forEach(async (doc) => {
                    await deleteDoc(doc.ref);
                    console.log(`Document ${doc.id} deleted`);
                });
                
            } catch (error) {
                setErrorMsg(error.message);
            }
        } else {
            setErrorMsg('You need to login first');
        }
    };
    


    return (
        <div>
            <Navbar />

            {cartdata ?
                <div>
                    <div className='cart-head'>Your Cart Items</div>
                    {successMsg && <>
                            <div className='success-msg'>{successMsg}</div>
                        </>}
                        {errorMsg && <>
                            <div className='error-msg'>{errorMsg}</div>
                        </>}
                    <div className='allcartitems'>
                        {cartdata.map((item) => (
                            <CartCard
                                key={item.id}
                                itemdata={item}
                                userid={loggeduser[0].uid}
                            />
                        ))}
                        <div className='proceed'>
                            <button onClick={buyProduct}>Proceed</button>
                        </div>
                    </div>

                </div>
                : <p>Your Cart is empty</p>}
        </div>
    )
}

export default Cart