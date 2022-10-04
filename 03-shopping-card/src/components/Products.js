import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { BookContext } from '../App';




export const Products = () => {

  const context = useContext(BookContext);

  const totalCartCount = context.state.cart.reduce((total, book) => total = total + book.count, 0)


  return (
    <div className='box'>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim({totalCartCount})</Link>
      </h2>
      {
        context.state.bookList.map(book => (
          <div key={book.id} className="list">

            <img src={book.image} alt="" />
            <div className="book-info">
              <h3>{book.name}</h3>
              <p>Yazar : {book.author}</p>
              <p>Fiyat : {book.price}</p>

              <button onClick={() => { context.addtoCart(book) }} className='add-btn'>Add to Card</button>


            </div>
          </div>

        ))

      }

    </div>

  )
}


