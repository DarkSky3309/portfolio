import React from 'react';
import Profession from "./component/Profession/Profession";
import image from '../../assets/bc-image.webp'
import './header.scss'
const Header = () => {

    return (
        <header id={'home'} style={{backgroundImage: `url("${image}")`}}>
            <div>
                <h1>Hi, This is Igor Shevchenko</h1>
                <Profession/>
            </div>
        </header>
    );
};

export default Header;