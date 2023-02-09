import React from 'react';
import './Header.css';
export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'> Logo </div>
            <div className='links'>
                <a>How we work</a>
                <a>Services</a>
                <a>Free Quote</a>
                <a>Contact</a>
            </div>
        </div>
    );
}

