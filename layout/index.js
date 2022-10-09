import React from "react";
import Header from "../layout/Header";
import Footer from "./Footer";


function Layout({children}) {
  return (
    <div className="App">
      <Header/>
        {children}
      <Footer/>
    </div>
    
  );
}

export default Layout;

