import React from 'react';
import Profession from "./component/Profession/Profession";
import image from './../../assets/image.webp'
const Header = () => {

    return (
        <header style={{backgroundImage: `url("${image}")`}}>
            <h1>Hi. this is Igor Shevchenko</h1>
            <Profession/>
        </header>
    );
};

export default Header;