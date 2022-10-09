import React from "react";
import Home from "./pages/Home";
import Layout from "./layout";
import Routes from "./routes";
import { useContext, useState } from "react";


import {
  BrowserRouter,
} from "react-router-dom";
import { CartContext } from "./components/CartContext2";


function App() {
  const [cart, setCart] = useState([]);

  return (
<>
<CartContext.Provider value={{cart, setCart}}>
<BrowserRouter>
  <Layout>
    <Routes />
  </Layout>
</BrowserRouter>
</CartContext.Provider>

</>

  );
}

export default App;

