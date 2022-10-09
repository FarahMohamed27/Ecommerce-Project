import React from "react";
import Header from "../layout/Header";
import Slider from "../components/slider";
import About from "../components/About";
import {Route, Router, Routes} from "react-router-dom";


function AboutUs() {
  return (
    <div className="App">
      {/* <Slider/> */}
      <About/>
    </div>
    
  );
}

export default AboutUs;