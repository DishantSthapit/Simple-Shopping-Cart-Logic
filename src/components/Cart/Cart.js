import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.scss';


const Cart = () => {
  const cartState = useSelector(state => state.data);
  console.log(cartState)
  return (
    <React.Fragment>
      <div className="headerWrapper">
      </div>
      <div className="container">
        <h1>Total</h1>
        {cartState.length > 0 && cartState.map((item) => (
          <section>
            <div>{item[0].item.name}</div>
            <span>{item[0].item.price} X {item[0].quantity} = </span>
            <span>{item[0].item.price * item[0].quantity}</span>

          </section>
        ))

        }
      </div>
    </React.Fragment>
  )
}

export default Cart;