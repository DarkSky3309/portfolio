import React, { FC, useEffect, useRef } from "react";
import myPhoto from "./../../assets/myPhoto.webp";
import "./navigatiom.scss";
import { useLocation } from "react-router-dom";

interface porps {
  set: (arg: React.MutableRefObject<HTMLDivElement>) => void;
}

const Navigation: FC<porps> = ({ set }) => {
  const location = useLocation();
  const menuLinks = useRef() as React.MutableRefObject<HTMLUListElement>;
  const aside = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    activeLink();
  }, [location]);

  useEffect(() => {
    set(aside);
  }, []);
  const activeLink = () => {
    let linksArray: HTMLElement[] = [].slice.call(menuLinks.current.children);
    linksArray.map((e) => {
      e.classList.remove("active");
    });
    if (location.hash === "#home") {
      linksArray.map((e) =>
        e.id === "home-link" ? e.classList.add("active") : ""
      );
    } else if (location.hash === "#about-me") {
      linksArray.map((e) =>
        e.id === "about-me-link" ? e.classList.add("active") : ""
      );
    } else if (location.hash === "#portfolio") {
      linksArray.map((e) =>
        e.id === "portfolio-link" ? e.classList.add("active") : ""
      );
    } else if (location.hash === "#services") {
      linksArray.map((e) =>
        e.id === "services-link" ? e.classList.add("active") : ""
      );
    } else if (location.hash === "#contact") {
      linksArray.map((e) =>
        e.id === "contact-link" ? e.classList.add("active") : ""
      );
    }
  };

  const removeOpen = () => {
    aside.current.classList.contains("open")
      ? aside.current.classList.remove("open")
      : "";
  };

  return (
    <aside ref={aside}>
      <div className={"aside__info"}>
        <img src={myPhoto} alt="my photo" />
        <h3>I. Shevchenko</h3>
        <div>
          <a
            target={"_blank"}
            href="https://www.instagram.com/shevchenko._igor/?hl=en"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a target={"_blank"} href="https://t.me/Ig0r_Shevchenk0">
            <i className="ri-telegram-line"></i>
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/igor-shevchenko-22b88726a/"
          >
            <i className="ri-linkedin-box-line"></i>
          </a>
        </div>
      </div>
      <nav>
        <ul className={"aside__navigation"} ref={menuLinks}>
          <li id={"home-link"} onClick={removeOpen}>
            <a href="#home-component">
              <i className="ri-home-4-fill"></i>Home
            </a>
          </li>
          <li id={"about-me-link"} onClick={removeOpen}>
            <a href="#about-me-component">
              <i className="ri-user-fill"></i>About Me
            </a>
          </li>
          <li id={"portfolio-link"} onClick={removeOpen}>
            <a href="#portfolio-component">
              <i className="ri-briefcase-4-fill"></i>Portfolio
            </a>
          </li>
          <li id={"services-link"} onClick={removeOpen}>
            <a href="#services-component">
              <i className="ri-server-fill"></i>Services
            </a>
          </li>
          <li id={"contact-link"} onClick={removeOpen}>
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
