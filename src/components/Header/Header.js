import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div style={{ marginTop: 10 }}>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;