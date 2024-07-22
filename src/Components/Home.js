import React from "react";
import Navbar from "./Navbar";

// import Banner from "./Banner";
// import { auth, db } from "../FirebaseConfigs/firebaseConfigs";
// import { collection, getDocs, query, where } from "firebase/firestore";
import ProductSlider from "./Some-Product-Components/ProductSlider";
import "./Home.css";

const Home = () => {


 
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
     
      <div className="slider-head">
        <p>Limited Time Deals</p>
      </div>
      <ProductSlider type={"Laptop"} />
      <ProductSlider type={"Mobile"} />
      <ProductSlider type={"Camera"} />

      <ProductSlider type={"Shoes"} />
    </div>
  );
};

export default Home;
