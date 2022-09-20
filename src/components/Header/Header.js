import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/home">Home</a>
                <a href="/product">Product</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;