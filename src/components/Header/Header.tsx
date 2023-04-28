import React from 'react';
import Profession from "./component/Profession/Profession";
import image from '../../assets/bc-image.webp'
import './header.scss'
import {Waypoint} from "react-waypoint";
const Header = () => {

    return (
        <header id={'home'} style={{backgroundImage: `url("${image}")`}}>
            <Waypoint onEnter={() => {window.location.replace('/#home')}}/>
            <div>
                <h1>Hi, This is Igor Shevchenko</h1>
                <Profession/>
            </div>
        </header>
    );
};

export default Header;