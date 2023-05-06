import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import "./main.scss";
import Portfolio from "./components/Portfolio/portfolio";
import Services from "./components/Services/services";

const Main = () => {
  return (
    <main>
      <AboutMe />
      <Portfolio />
      <Services />
    </main>
  );
};

export default Main;
