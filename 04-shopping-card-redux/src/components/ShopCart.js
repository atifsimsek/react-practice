import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { decrase, increase, remove } from '../actions/actions';




const ShopCart = (props) => {

  const totalAmount = props.cart.reduce((total, book) => total = total + (book.price * book.count), 0).toFixed(2);

  return (

    <div className='box'>
      <h2>
        <Link to="/">Book List</Link>
        <span>My Cart</span>
      </h2>
      <h3>Toplam Sepet Tutarı : {totalAmount}</h3>

      {
        props.cart.map(book => (

          <div key={book.id} className="list">
            <img src={book.image} alt="" />
            <div className="book-info">
              <h3>{book.name}</h3>
              <p>Yazar : {book.author}</p>
              <p>Fiyat : {book.price}</p>
              <p>Toplam : {(book.price * book.count).toFixed(2)}</p>
              <h4>Sepetinide bu kitaptan toplam {book.count} adet var</h4>
              <button onClick={() => { props.increase(book.id) }} >-</button>
              <button onClick={() => { props.remove(book.id) }} >Remove From Cart</button>
              <button onClick={() => { props.decrase(book.id) }}>+</button>

            </div>
          </div>
        ))

      }

    </div>
  )
}

const mapStatetoProps = state => {

  return {
    cart: state.cart
  }


}

export default connect(mapStatetoProps, { decrase, increase, remove })(ShopCart);


