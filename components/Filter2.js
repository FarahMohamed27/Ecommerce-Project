import React from "react";
import { useEffect, useState, useContext } from "react";
import products from '../helpers/products';
import categories from '../helpers/categories.json';
import { CartContext, CartProvider } from "./CartContext2";

const Filter = () => {
    const[allData, setAllData] = useState(products);
    const[filter, setFilter] = useState(null);
    const[filteredData, setFilteredData] = useState([]);

    const {cart, setCart} = useContext(CartContext);

    const AddToCart = (value)=>{
                console.log(cart)
                setCart([...cart,value])
             }
    

    const choosenData = filter?filteredData:allData;

    useEffect( () => {
        if(filter){
            const filtered = allData.filter( (item)=>item.category.id === filter );
            setFilteredData(filtered);

        }}
        ,[filter]);

    return(
        <div >
            <div className="Shop">Shop By Category </div>
            <div className="filters">
                <div onClick={() => setFilter("")} className={`categories ${filter === ""? "active": ""}`}>All</div>

                {categories.map( (value) => (
                    <div onClick={() => setFilter(value.id)} className={`categories ${filter === value.id? "active": ""}`} key={value.id} > {value.name} </div>
                ) ) }
            </div>

        <div className="filterContainer">
           {choosenData.map( (value) => (
                
                 <div className={`choosen`} key={value.id}>
                    <div className="image"><img src={value.image} width="200px" height="200px"></img></div>
                    <div className="title2"> {value.title}  </div>
                    <div className="priceObj">Price: {value.price}</div>
                    <div className="cartButton"><button type="submit" className="cartAdd" onClick={()=> AddToCart(value) }>Add to Cart </button> </div>
                   {/* <div className="price">{value.price}</div> */}
                   
                 </div>
                
           ))}
           </div>
        </div>
      
    )
    

}

export default Filter;
