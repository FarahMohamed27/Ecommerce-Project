import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import reportWebVitals from './reportWebVitals';
import "./style/header.css"
import "./style/slider.css"
import"./style/contact.css"
import "./style/filters.css"
import "./style/about.css"
import "./style/footer.css"
import "./style/section.css"
import "./style/cart.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
