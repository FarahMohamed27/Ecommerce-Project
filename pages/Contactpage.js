import React from "react";
import Header from "../layout/Header";
import Slider from "../components/slider";
import Contact from "../components/Contact";
import {Route, Router, Routes} from "react-router-dom";


function ContactUs() {
  return (
    <div className="App">
      {/* <Slider/> */}
      <Contact/>
    </div>
    
  );
}

export default ContactUs;