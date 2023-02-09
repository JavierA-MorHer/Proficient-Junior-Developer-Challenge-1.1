import React from 'react';
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import './Home.css'
export const Home = () => {
    return (
        <div>
            <Header/>
            <div className='home'>

                <div className='title'>
                    <p>What items to store? </p>
                    <div className='subtitle'>
                        <span>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</span>
                    </div>
                </div>

                {/*Items*/}
                <div>
                    Items Component
                    <div></div>
                </div>

                <div className='summary'>
                    <p className='summary-title'>Summary</p>

                    <div className='total'>

                        <div className='total-item'>
                            <p>Total Items</p>
                            <p>12</p>
                        </div>
                        <div className='total-item'>
                            <p>Total m2</p>
                            <p>8.55</p>
                        </div>

                        <div className='total-item'>
                            <p>Subtotal</p>
                            <p>$1,710</p>
                        </div>

                        <div className='total-item'>
                            <p>Tax</p>
                            <p>$273.6</p>
                        </div>

                        <div className='total-item'>
                            <strong>Total</strong>
                            <strong>$273.6</strong>
                        </div>
                        <div className='total-item'>
                            <strong>Due Today 50%</strong>
                            <strong>$991.8</strong>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

