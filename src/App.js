import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import IndividualCart from './components/IndividualCart/IndividualCart';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ShoppingCart} />
      <Route exact path="/IndividualCard/:id" component={IndividualCart} />
      <Route excat path="/Cart" component={Cart} />
    </Router>

  );
}

export default App;
