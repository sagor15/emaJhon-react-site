import React from 'react';
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <div className='first-div'>
            <img src={logo} alt="" />
            </div>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/oreder-reveiw">Order Review</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;