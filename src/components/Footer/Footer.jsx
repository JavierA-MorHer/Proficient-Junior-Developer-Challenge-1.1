import React from 'react';
import './Footer.css'
export const Footer = () => {
    return (
        <div className='footer'>

            <div className='col-1'>
                <p className='logo'>Logo</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters. </p>

                <div className='social'>
                    <div className='icon'><i className="fa-brands fa-twitter"></i></div>
                    <div className='icon'><i className="fa-brands fa-facebook"></i></div>
                    <div className='icon'><i className="fa-brands fa-instagram"></i></div>
                </div>
            </div>

            <div className='col-g'>
                <h5>About us</h5>

                <div className='info'>
                    <p>About</p>
                    <p>Privacy & Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Faq</p>
                </div>

            </div>

            <div className='col-g'>
                <h5>Navigate</h5>

                <div className='info'>
                    <p>How We Work</p>
                    <p>Services</p>
                    <p>Faq</p>
                    <p>Contact</p>
                    <p>Free Quote</p>
                </div>

            </div>

            <div className='col-g'>
                <h5>Contact Us</h5>

                <div className='info'>
                    <p>Ricardo Margain 444</p>
                    <p>Call: +52 81 1234 5678</p>
                    <p>Email: info@challenge.com</p>
                </div>

                <div className='btnWp'>
                    <div><i className="fa-brands fa-whatsapp iconwp"></i></div>
                    <p>WhatsApp</p>
                </div>
            </div>


        </div>
    );
}


