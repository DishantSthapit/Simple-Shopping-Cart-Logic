import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './ShoppingCart.scss';
import { cartData } from './../../cart/json/cart';
import HeadingCart from './../HeadingCart/HeadingCart';

function ShoppingCart() {
  const history = useHistory();
  const cartState = useSelector(state => state);
  console.log(cartState)
  return (
    <React.Fragment>
      <HeadingCart />
      <div className='container'>
        <h1>Shopping Cart</h1>
        <div className="cartContainer">
          {cartData && cartData.map((item, index) => (
            <div onClick={() => history.push(`/IndividualCard/${item.id}`)} className="individualCartContainer" key={index}>
              <img className="cardImage" src={item.url} />
              <span className="cardName">{item.name}</span>
              <span className="cardPrice">{`US$ ${item.price}`}</span>
            </div>

          ))}
        </div>


      </div>
    </React.Fragment>

  );
}

export default ShoppingCart;
