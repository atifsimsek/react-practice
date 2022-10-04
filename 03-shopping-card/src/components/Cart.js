import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { BookContext } from '../App';


export const Cart = () => {

  const context = useContext(BookContext);



  const totalAmount = context.state.cart.reduce((total, book) => total = (total + book.price * book.count), 0)
    .toFixed(2);


  return (




    <div className='box'>
      <h2>
        <Link to="/">Kitap Listesi</Link>
        <span>Sepetim</span>
      </h2>
      <h3>Toplam Sepet Tutarı : {totalAmount}</h3>

      {
        context.state.cart.map(book => (
          <div key={book.id} className="list">
            <img src={book.image} alt="" />
            <div className="book-info">
              <h3>{book.name}</h3>
              <p>Yazar : {book.author}</p>
              <p>Fiyat : {book.price}</p>
              <p>Toplam : {(book.price * book.count).toFixed(2)}</p>
              <h4>Sepetinide bu kitaptan toplam {book.count} adet var</h4>
              <button onClick={() => { context.decrease(book.id) }} >-</button>
              <button onClick={() => { context.removeFromCart(book.id) }} >Remove From Cart</button>
              <button onClick={() => { context.increase(book.id) }}>+</button>

            </div>
          </div>

        ))

      }


    </div>
  )
}


