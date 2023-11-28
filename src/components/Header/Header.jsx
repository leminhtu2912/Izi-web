import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Header = () => {
    const [nav] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };
    return (
        <header className='bg-white'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                        <div className="logo-part pe-4">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <ul className='dekstop-nav list-unstyled m-0'>
                            <li><button className='clean-button'>All Products</button></li>
                            <li><button className='clean-button'>Sofa</button></li>
                            <li><button className='clean-button'>Chair</button></li>
                            <li><button className='clean-button'>Table</button></li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <p className='price'>${getTotalPrice()}.00</p>
                        <div className='cart'>
                            <Link to=""><HiShoppingCart /></Link>
                            <p className='cart-quantity'>{getTotalQuantity()}</p>
                        </div>
                        <div className="hamburger-menu">
                        </div>
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                <li><button className='clean-button'>All Products</button></li>
                <li><button className='clean-button'>Sofa</button></li>
                <li><button className='clean-button'>Chair</button></li>
                <li><button className='clean-button'>Table</button></li>
            </ul>
        </header>
    )
}

export default Header;