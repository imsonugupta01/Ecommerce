import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PgFOF from "./Components/PgFOF";
import Cart from "./Components/Cart";
import UserProfile from "./Components/UserProfile";
import Addproduct from "./Components/Addproduct";
import Allproductpage from "./Components/Some-Product-Components/Allproductpage";
import Specificproductpage from "./Components/Some-Product-Components/Specificproductpage";
import ProductHistory from "./Components/Admin/ProductHistory";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sellproduct" element={<Addproduct/>} />
        <Route exact path="/cartdata" element={<Cart />} />
        <Route exact path="userprofile" element={<UserProfile/>}/>
        <Route exact path="/product-type/mobile" element={<Allproductpage type={'Mobile'} />} />
        <Route exact path="/product-type/laptop" element={<Allproductpage type={'Laptop'} />} />
        <Route exact path="/product-type/camera" element={<Allproductpage type={'Camera'} />} />
        <Route exact path="/product-type/shoes" element={<Allproductpage type={'Shoes'} />} />
        <Route exact path="/product/:type/:id" element={<Specificproductpage />} />
        <Route exact path="/sell/history" element={<ProductHistory/>}/>
        <Route path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

