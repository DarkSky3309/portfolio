import React, { useEffect, useRef } from "react";
import myPhoto from "./../../assets/myPhoto.webp";
import "./navigatiom.scss";
import {useLocation} from "react-router-dom";

const Navigation = () => {
  const location = useLocation()
  const menuLinks = useRef() as React.MutableRefObject<HTMLUListElement>;
  useEffect(() => {
    activeLink();
  }, [location]);
  const activeLink = () => {
    let linksArray:HTMLElement[] = [].slice.call(menuLinks.current.children);
    linksArray.map(e => {e.classList.remove('active')});
    if (location.hash === '#home') {
      linksArray.map(e => e.id === 'home-link' ? e.classList.add('active') : '')
    } else if (location.hash === '#about-me') {
      linksArray.map(e => e.id === 'about-me-link' ? e.classList.add('active') : '')
    } else if (location.hash === '#portfolio') {
      linksArray.map(e => e.id === 'portfolio-link' ? e.classList.add('active') : '')
    } else if (location.hash === '#services') {
      linksArray.map(e => e.id === 'services-link' ? e.classList.add('active') : '')
    } else if (location.hash === '#contact') {
      linksArray.map(e => e.id === 'contact-link' ? e.classList.add('active') : '')
    }
  };

  return (
    <aside>
      <div className={"aside__info"}>
        <img src={myPhoto} alt="my photo" />
        <h3>I. Shevchenko</h3>
        <div>
          <a href="">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="">
            <i className="ri-telegram-line"></i>
          </a>
          <a href="">
            <i className="ri-linkedin-box-line"></i>
          </a>
        </div>
      </div>
      <nav>
        <ul className={"aside__navigation"} ref={menuLinks}>
          <li id={"home-link"}>
            <a href="#home-component">
              <i className="ri-home-4-fill"></i>Home
            </a>
          </li>
          <li id={"about-me-link"}>
            <a href="#about-me-component">
              <i className="ri-user-fill"></i>About Me
            </a>
          </li>
          <li id={"portfolio-link"}>
            <a href="#portfolio-component">
              <i className="ri-briefcase-4-fill"></i>Portfolio
            </a>
          </li>
          <li id={'services-link'}>
            <a href="#services-component" >
              <i className="ri-server-fill"></i>Services
            </a>
          </li>
          <li id={'contact-link'}>
            <a href="#contact-component">
              <i className="ri-mail-fill"></i>Contact
            </a>
          </li>
        </ul>
      </nav>
      © Copyright 2023
    </aside>
  );
};

export default Navigation;