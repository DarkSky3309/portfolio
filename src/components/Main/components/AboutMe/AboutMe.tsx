import React from 'react';
import General from "./components/General/General";
import Facts from "./components/Facts/Facts";
import Skills from "./components/Skills/Skills";

const AboutMe = () => {
    return (
        <section className={'aboutMe'} id={'about-me'}>
            <General/>
            <Facts/>
            <Skills/>
        </section>
    );
};

export default AboutMe;