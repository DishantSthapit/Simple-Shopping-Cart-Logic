import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { cartData } from './../../cart/json/cart';
import './IndividualCart.scss';
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from './../../actions/cartActions';
import HeadingCart from './../HeadingCart/HeadingCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function IndividualCart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartState = useSelector(state => state);
  const params = useParams();
  const [item, setItem] = React.useState([]);
  const [itemArray, setItemArray] = React.useState([]);
  const [loading, setLodaing] = React.useState(true);
  const [quantity, setQuantity] = React.useState(0);
  const [show, setShow] = React.useState(false);


  React.useEffect(() => {
    const data = cartData.filter(function (item) {
      return item.id == params.id;
    });
    data.length > 0 && setLodaing(false);
    setItem(data)
    setItemArray([
      {
        item: item[0],
        quantity: quantity
      },
    ]);
  }, [loading, quantity])

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  }

  const handleAddCart = () => {
    if (quantity > 0) {
      dispatch(setCart(itemArray));
      setShow(true);
      toast.success("Item Added", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    else {
      toast.error("Select quanitity", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }


  return (
    <React.Fragment>
      <HeadingCart />
      <div className="container">
        {!loading ?
          <div className="itemContainer">
            <div className="itemWrapper">
              <div className="itemImageWrapper">
                <img className="itemImage" src={item[0].url} />
              </div>
              <div className="itemContentWrapper">
                <h1 className="itemName">{item[0].name}</h1>
                <h2 className="itemPrice">{`US$ ${item[0].price}`}</h2>
                <select onChange={handleQuantity} >
                  <option value="0">Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <button onClick={handleAddCart}>Add to Cart</button>
                <ToastContainer />
                <h3>Description</h3>
                <p className="itemDescription">{item[0].content.description}</p>

              </div>

            </div>

            <div className="buttonWrapper">

              <button onClick={() => history.goBack()}>{`< Go Back`}</button>
              <button onClick={() => history.push(`/Cart`)}>Cart ></button>
            </div>
          </div> : "loading"

        }
      </div>
    </React.Fragment>

  )
}


export default IndividualCart