import React from 'react';
import myPhoto from './../../assets/myPhoto.webp'
import './navigatiom.scss'
const Navigation = () => {
    return (
        <aside>
            <div className={'aside__info'}>
                <img src={myPhoto} alt="my photo"/>
                <h3>I. Shevchenko</h3>
                <div>
                    <a href=""><i className="ri-instagram-line"></i></a>
                    <a href=""><i className="ri-telegram-line"></i></a>
                    <a href=""><i className="ri-linkedin-box-line"></i></a>
                </div>
            </div>
            <nav>
                <ul className={"aside__navigation"}>
                    <li><a href="#home"><i className="ri-home-4-fill"></i>Home</a></li>
                    <li><a href="#about-me"><i className="ri-user-fill"></i>About Me</a></li>
                    <li><a href=""><i className="ri-briefcase-4-fill"></i>Portfolio</a></li>
                    <li><a href=""><i className="ri-server-fill"></i>Services</a></li>
                    <li><a href=""><i className="ri-mail-fill"></i>Contact</a></li>
                </ul>
            </nav>
            © Copyright 2023
        </aside>
    );
};

export default Navigation;