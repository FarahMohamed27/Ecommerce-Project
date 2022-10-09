
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 import Contact from '../components/Contact';




const Header =() => {
         const [value, setValue]  = useState("");  
         const submitted = (e) => {
            console.log(value)
            alert(value);
        }
     return (
        <div className="Header">
         <div className="Inner">
           <div className='Logo'>
            {/* <h1>Farah</h1> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 36.006 6.372"><path d="M6.53 6.372H4.683L7.778.345h2.577l2.642 5.136V.351h4.48a2.068 2.068 0 0 1 1.322 3.658l.679.856L21.811.344h2.593l2.625 5.152V.345h1.686V2.97h3.338V.345h1.685v6.027h-1.685v-1.88h-3.338v1.88h-3.079l-.972-1.88H21.52l-.956 1.88h-2.009l-1.458-1.88h-2.415v1.88h-3.095l-.94-1.88h-3.16l-.957 1.88zM9.058 1.43L8.28 2.97l1.58-.009-.802-1.531zm5.623.437v1.099h2.617a.548.548 0 0 0 0-1.095l-2.617-.004zm8.427-.453l-.795 1.556h1.588l-.793-1.556zM5.963.345v1.522H1.685V2.97h3.452v1.522H1.685v1.88H0V.345h5.963zm29.181 1.363a.853.853 0 1 1 0-1.708c.465 0 .862.361.862.852a.852.852 0 0 1-.862.856zm-.695-.856c0 .411.305.714.695.714.386 0 .691-.303.691-.714a.69.69 0 0 0-.691-.709.69.69 0 0 0-.695.709zm.514.067v.427h-.149V.361h.375c.232 0 .348.086.348.28 0 .176-.111.253-.255.271l.28.434h-.167l-.26-.427h-.172zm0-.126h.179c.126 0 .239-.009.239-.16 0-.122-.111-.145-.215-.145h-.203v.305z"/></svg>
           </div>

           <div className='Menu'>
             <div className="home"><Link to="/">Home</Link></div>
             <div className="About"><Link to="/about-us">About</Link></div>
             <div className='Contact1'><Link to="/contact-us">Contact Us</Link> </div>
           </div>
           <div className='sOptions'>
            <div className='Search'>
                     <input className='searchBar' type="text" placeholder='Search' value={value} onChange={(e)=> setValue(e.target.value)} />
                     <button className='searchButton' type="submit" onClick={submitted}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px" height="15px"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></button>
            </div>

            <div className='options'>
              
               <div className='Cart'><Link to="/cart-page"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30px" height="30px"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg></Link> </div>
               </div>
            </div>
            </div>
            
        </div>
    )
}

export default Header;
 