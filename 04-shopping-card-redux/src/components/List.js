import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from '../actions/actions';




const List = props => {

  return (
    <div className='box'>
      <h2>
        <span>Book List</span>
        <Link to="/cart">My Cart</Link>
      </h2>
      {
        props.bookList.map(book => (
          <div key={book.id} className="list">

            <img src={book.image} alt="" />
            <div className="book-info">
              <h3>{book.name}</h3>
              <p>Yazar : {book.author}</p>
              <p>Fiyat : {book.price}</p>

              <button onClick={() => { props.addCart(book) }} className='add-btn'>Add to Card</button>


            </div>
          </div>
        ))
      }

    </div>

  )
};

const mapStatetoProps = state => {
  return {
    bookList: state.bookList
  }
}



export default connect(mapStatetoProps, { addCart })(List);





