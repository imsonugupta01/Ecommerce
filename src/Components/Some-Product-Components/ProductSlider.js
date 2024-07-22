

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Sliderproductcard from './Sliderproductcard';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../FirebaseConfigs/firebaseConfigs";

// const ProductSlider = ({ type }) => {
//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 5
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 3
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 3
//         }
//     };

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
//         <div className='prod-slider'>
//             <Carousel responsive={responsive}>
//                 {products.map((product) => (
//                     <Sliderproductcard
//                         key={product.id}
//                         product={product}
//                     />
//                 ))}
//             </Carousel>
//         </div>
//     );
// }

// export default ProductSlider;




import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sliderproductcard from './Sliderproductcard';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfigs/firebaseConfigs";

const ProductSlider = ({ type }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1 // Show only 1 item on mobile
        }
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsArray = [];
                const path = `products-${type.toUpperCase()}`;
                const querySnapshot = await getDocs(collection(db, path));
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setProducts(productsArray);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        getProducts();
    }, [type]);

    return (
        <div className='prod-slider'>
            <Carousel responsive={responsive} infinite={true}>
                {products.map((product) => (
                    <Sliderproductcard
                        key={product.id}
                        product={product}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default ProductSlider;
