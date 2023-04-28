import React from 'react';
import AboutMe from "./components/AboutMe/AboutMe";
import './main.scss'
import Portfolio from "./components/Portfolio/portfolio";
const Main = () => {
    return (
        <main>
            <AboutMe/>
            <Portfolio/>
        </main>
    );
};

export default Main;