import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import './Allproductpage.css'
import Productcontainer from './Productcontainer'
import {
    collection,
    getDocs
} from "firebase/firestore";
import { db } from "../../FirebaseConfigs/firebaseConfigs";

const Allproductpage = (props) => {
    // window.location.reload(false);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {

            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`
            // console.log(props)

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    productsArray.push({ ...doc.data(), id: doc.id })
                });
                setProducts(productsArray)
                // console.log('done')
            }).catch('Error error error')
        }

        getProducts();
    }, [])


    return (
        <div className='allproductpage'>
            <Navbar />
            <div className='heading'>
                <p>Top Results For {props.type}</p>
            </div>

            <div className="allproductcontainer">
                {products.map((product) => (
                    <Productcontainer
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Allproductpage



// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar';
// import './Allproductpage.css';
// import Productcontainer from './Productcontainer';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../FirebaseConfigs/firebaseConfigs";

// const Allproductpage = ({ type }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const getProducts = () => {
//             const productsArray = [];
//             const path = `products-${type.toUpperCase()}`;
            
//             getDocs(collection(db, path)).then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                     productsArray.push({ ...doc.data(), id: doc.id });
//                 });
//                 setProducts(productsArray);
//             }).catch((error) => {
//                 console.error("Error fetching products: ", error);
//             });
//         };

//         getProducts();
//     }, [type]);

//     return (
//         <div className='allproductpage'>
//             <Navbar />
//             <div className='heading'>
//                 <p>Top Results For {type}</p>
//             </div>

//             <div className="allproductcontainer">
//                 {products.map((product) => (
//                     <Productcontainer
//                         key={product.id}
//                         product={product}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Allproductpage;
