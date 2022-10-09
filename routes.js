
import React from "react";
import Home from "./pages/Home";
import ContactUs from "./pages/Contactpage";
import AboutUs from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

import {Route, Router, Routes} from "react-router-dom";


  

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/cart-page" element={<CartPage/>}/>
  </Routes>
  );
}

export default App;


