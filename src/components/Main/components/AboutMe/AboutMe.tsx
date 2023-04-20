import React from 'react';
import General from "./components/General/General";
import Facts from "./components/Facts/Facts";

const AboutMe = () => {
    return (
        <section className={'aboutMe'} id={'about-me'}>
            <General/>
            <Facts/>
        </section>
    );
};

export default AboutMe;