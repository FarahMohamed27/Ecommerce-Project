import React from "react";
import Header from "../layout/Header";
import Slider from "../components/slider";
import Filter from "../components/Filter2";
import Section from "../components/Section";

// import Test from "../components/Test";
import Contact from "../components/Contact";
import {Route, Router, Routes} from "react-router-dom";


function Home() {
  return (
    <div className="App">
      <Slider/>
      <Section/>
      <Filter />
      

      
      {/* <Contact/> */}
    </div>
    
  );
}

export default Home;

