import React from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext2";


const Cart = () =>{

    const {cart, setCart} = useContext(CartContext);
    const RemoveCart = (value)=>{
      console.log(cart)
      setCart(
         cart.filter((product)=> product.category.name !== value.category.name )
      );
   }

   // useEffect(()=> {
   //    window.localStorage.setItem("MyCart", JSON.stringify(cart))
   // }, []);

   // useEffect(() => {
   //    const cartRefresh = window.localStorage.getItem("MyCart")
   //    setCart(JSON.parse(cartRefresh));
   // } ,[]);

    
    return(
       <div className="cartContainer">
         {/* <h2> Welcome to the cart</h2> */}
           {cart.map( (value) => (
                
                <div className="Cartprod" key={value.id}>
                   <div className="cartimage"><img src={value.image} width="200px" height="200px" alt="img"></img></div>
                   <div className="carttitle2"> {value.title}  </div>
                   <div className="cartpriceObj">Price: {value.price}</div>
                   <div className="RemoveButton"><button type="submit" className="cartRemove" onClick={()=> RemoveCart(value)}>Remove Item</button> </div> 
                 
                  
                </div>
               
          ))} 

       </div>
       
    )
}
export default Cart;