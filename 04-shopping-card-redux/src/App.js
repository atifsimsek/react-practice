import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import List from './components/List';
import ShopCart from "./components/ShopCart";

function App() {


  return (

    <div className="container">
      <h1>Shopping Cart Redux 🛒</h1>

      <Routes>
        <Route path='/' element={<List />} />
        <Route path="/cart" element={<ShopCart />} />
      </Routes>

    </div>
  );
}

export default App;
