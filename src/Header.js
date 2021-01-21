import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(props) {

const getCount = ()=> {
    // init count with 0
    // loop through all lines
    // add quantity to count
    // return quantity
    let count = 0;
        props.cartItems.forEach(item => {
            count += item.cartItem.quantity
        });
    return count;
}

    return (
        <div className="Header">
            <Link to="/">       
                <div className="Header-logo">
                
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </div>
            </Link>

            <div className="Header-optionAddress">
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello,</span>
                    <span className="Header-optionLineTwo">Select your address</span>
                </div>
            </div>

            <div className="Header-search">
                <input className="Header-searchinput" type="text" />
                <div className="Header-searchIconContainer">
                    <SearchIcon />
                </div>
            </div>     
            
            <div className="Header-navItems">

                {/* Orders */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello, Dominique</span>
                    <span className="Header-optionLineOTwo">Account & Lists</span>
                </div>

                {/* Cart */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Returns</span>
                    <span className="Header-optionLineTwo">& Orders</span>
                </div>
            </div>

            <Link to="/cart">
                <div className="Header-optionCart">
                    <ShoppingBasketIcon />
                    <span className="Header-cartCount">{getCount()}</span>
                </div>
            </Link>    
        </div>
    )
}

export default Header
