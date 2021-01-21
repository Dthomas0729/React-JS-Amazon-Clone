import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import { useEffect, useState } from 'react'
import { db } from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    db.collection('cart-items').onSnapshot((snapshot) =>{
      let tempCartItems = []
      console.log(snapshot)
      snapshot.docs.map((doc)=>{
        tempCartItems.push({
          id: doc.id,
          cartItem: doc.data()
        })
      })
      setCartItems(tempCartItems)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header 
          cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
