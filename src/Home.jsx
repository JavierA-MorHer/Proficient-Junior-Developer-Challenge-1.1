import React from 'react';
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import './Home.css'
export const Home = () => {
    return (
        <div>
            <Header/>
            <div className='home'>
                <h1>Hola mundo</h1>

            </div>
            <Footer/>
        </div>
    );
}

