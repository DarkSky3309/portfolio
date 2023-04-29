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
    linksArray.map(e => {e.classList.remove('active')
      console.log(e);});
    if (location.hash === '#home') {
      linksArray.map(e => e.id === 'home' ? e.classList.add('active') : '')
    } else if (location.hash === '#about-me') {
      linksArray.map(e => e.id === 'about-me' ? e.classList.add('active') : '')
    } else if (location.hash === '#portfolio') {
      linksArray.map(e => e.id === 'portfolio' ? e.classList.add('active') : '')
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
          <li id={"home"}>
            <a href="#home">
              <i className="ri-home-4-fill"></i>Home
            </a>
          </li>
          <li id={"about-me"}>
            <a href="#about-me">
              <i className="ri-user-fill"></i>About Me
            </a>
          </li>
          <li id={"portfolio"}>
            <a href="#portfolio">
              <i className="ri-briefcase-4-fill"></i>Portfolio
            </a>
          </li>
          <li>
            <a href="">
              <i className="ri-server-fill"></i>Services
            </a>
          </li>
          <li>
            <a href="">
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