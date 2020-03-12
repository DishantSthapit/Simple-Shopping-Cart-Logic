import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HeadingCart.scss';
import cart from './../../cart/images/cart.png';

const HeadingCart = () => {
    const cartState = useSelector(state => state);

    return (
        <div className="headerWrapper">
            <div><img src={cart}></img><span>{cartState.data.length}</span></div>
        </div>
    )
}

export default HeadingCart;