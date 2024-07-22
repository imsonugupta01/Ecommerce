import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar'
import { auth, db } from "../../FirebaseConfigs/firebaseConfigs"
import { collection, getDocs, query, where} from 'firebase/firestore'
import OrderCard from './OrderCard';


function Orders() {
    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        // const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        console.log(q);
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

    const [orderHistory, setOrderHistory] = useState([]);

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
                    
                    setOrderHistory(cartArray);
                } catch (error) {
                    console.error('Error fetching cart data:', error);
                }
            };
            getCartData();
        }
    }, [loggeduser]);
    if(!loggeduser)
    {
        return(
            <div>
              <Navbar />
              <div><center> Your are not logged in!</center>
               
              </div>
            </div>
        )
    }
    
    
  return (
    <div>
    <Navbar />
    <div className='cart-head'>You Purchased</div>
    {
        orderHistory && orderHistory.map((order, index) => (
          
            order.buyer === loggeduser[0].uid && (
                
                <div key={index}>
                    <OrderCard
                        cartdata={order.cartdata}
                        date={order.date}
                        
                    />
                </div>
            )
        ))
    }
</div>

  )

}

export default Orders

