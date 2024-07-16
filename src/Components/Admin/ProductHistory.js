import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import {
    collection,
    getDocs, query, where
} from "firebase/firestore";
import { auth, db } from "../../FirebaseConfigs/firebaseConfigs";
import HistoryCard from './HistoryCard';

function ProductHistory() {

    function GetCurrentUser() {
        const [user, setUser] = useState("");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
                    };
                    getUsers();
                } else {
                    setUser(null);
                }
            });
        }, []);
        return user;
    }

    const loggeduser = GetCurrentUser();
    const [sellHistory, setSellHistory] = useState([]);

    useEffect(() => {
        if (loggeduser) {
            const getCartData = async () => {
                try {
                    const cartArray = [];
                    const q = query(collection(db, 'sold'))
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        cartArray.push({ ...doc.data() });
                    });
                    setSellHistory(cartArray);
                } catch (error) {
                    console.error('Error fetching cart data:', error);
                }
            };
            getCartData();
        }
    }, [loggeduser]);

    return (
        <div>
            <Navbar />
            {sellHistory.length > 0 ? (
                sellHistory.map((history, index) => (
                    <HistoryCard
                        key={index}
                        buyer={history.buyer}
                        cartData={history.cartdata}
                        date={history.date}
                    />
                ))
            ) : (
                <p>No history available</p>
            )}
        </div>
    );
}

export default ProductHistory;
