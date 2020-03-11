import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import './cart/cart.scss';
import { cartData } from './cart/json/cart';
import ReactModal from 'react-modal';
import { setCart } from './actions/cartActions';
import cart from './cart/images/cart.png';

function App() {
  const dispatch = useDispatch();
  const test = useSelector(state => state)
  const [showModal, setShowModal] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [cartNumber, setCartNumber] = React.useState(0);




  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleOpenModal = () => {
    setShowModal(true);
  }


  const handleAddCart = (item) => {
    if(quantity>0){
      setItems([
        ...items,
        {
          name: item.name,
          backgroundURL: item.url,
          price: item.price,
          quantity: quantity,
        },
      ]);
      setCartNumber(items.length + 1);
      setQuantity(0)
    }

    else{
    alert("Select the quantity first")
    }

  }

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  }

  const handleSubmit = () => {
    dispatch(setCart(items))
  }

  const handleCancel = () => {
    setItems([]);
    setCartNumber(0);
  }

  console.log(test)

  return (
    <React.Fragment>
      <div className="headerWrapper">
        <div><img src={cart}></img><span>{cartNumber}</span></div>
      </div>
      <div className='container'>
        <h1>Shopping Cart</h1>
        <div className="cartContainer">
          {cartData && cartData.slice(0,1).map((item, index) => (
            <div className="individualCartContainer" key={index}>
              <img className="cardImage" src={item.url} />
              <span className="cardName">{item.name}</span>
              <span className="cardPrice">{`US$ ${item.price}`}</span>
              <select placeholder="Select" onChange={handleQuantity}>
                <option value="0">Select your option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button onClick={() => handleAddCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="buttonWrapper">
          <button className="cancelButton" onClick={handleCancel}>Cancel</button>
          <button className="saveButton" onClick={handleSubmit}>Save</button>
        </div>

      </div>
    </React.Fragment>

  );
}

export default App;
