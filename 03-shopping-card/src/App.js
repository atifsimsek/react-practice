import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { data } from "./data"
import { createContext } from 'react';
import { useState } from 'react';

export const BookContext = createContext();




function App() {

  const [state, setState] = useState({
    bookList: data,
    cart: []
  });

  const addtoCart = (book) => {

    setState({
      ...state,
      cart: state.cart.find(cardItem => cardItem.id === book.id)
        ? state.cart.map(cardItem => cardItem.id === book.id ? { ...cardItem, count: cardItem.count + 1 } : cardItem)
        : [...state.cart, { ...book, count: 1 }]
    })

  }

  const increase = (id) => {

    setState({
      ...state,
      cart: state.cart.map(cardItem => cardItem.id === id ? { ...cardItem, count: cardItem.count + 1 } : cardItem)

    })


  }

  const decrease = (id) => {

    setState({
      ...state,
      cart: state.cart.map(cardItem => cardItem.id === id ? { ...cardItem, count: cardItem.count > 1 ? cardItem.count - 1 : 1 } : cardItem)

    })


  }

  const removeFromCart = (id) => {

    setState(
      {
        ...state,
        cart: state.cart.filter(cardItem => cardItem.id !== id)
      }
    )


  }



  return (

    <BookContext.Provider value={{ state: state, addtoCart, increase, decrease, removeFromCart }}>

      <div className="container">
        <h1>Shopping Cart 🛒</h1>


        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </BrowserRouter>



      </div>
    </BookContext.Provider>
  );
}

export default App;
