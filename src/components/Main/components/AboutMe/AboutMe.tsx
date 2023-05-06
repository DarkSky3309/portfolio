import React from "react";
import General from "./components/General/General";
import Facts from "./components/Facts/Facts";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import { Waypoint } from "react-waypoint";

const AboutMe = () => {
  return (
    <section className={"aboutMe marginMedium"} id={"about-me-component"}>
      <Waypoint
        onEnter={() => {
          window.location.replace("/#about-me");
        }}
      />
      <General />
      <Facts />
      <Skills />
      <Waypoint
        onEnter={() => {
          window.location.replace("/#about-me");
        }}
      />
      <Resume />
    </section>
  );
};

export default AboutMe;