import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ marginBottom: 10, marginTop: 10 }}>
            <small>@Copyright Protected@</small>
            <div>
                <i class="fa-brands fa-facebook icons"></i>
                <i class="fa-brands fa-twitter icons"></i>
                <i class="fa-brands fa-linkedin icons"></i>
            </div>
        </div>
    );
};

export default Footer;