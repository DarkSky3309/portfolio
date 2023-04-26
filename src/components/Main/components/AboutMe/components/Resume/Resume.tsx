import React from 'react';
import './resume.scss'
import ResumeItem from "./ResumeItem/ResumeItem";

const Resume = () => {
    return (
        <div className={'marginSection aboutMe__resume'}>
            <div className="container">
                <h3>Resume</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fugiat hic laboriosam libero suscipit?
                    Aliquid dolores est facere hic nam saepe sunt, temporibus. Dicta et mollitia vel. Aperiam architecto
                    at, cumque fuga impedit minima neque nostrum perspiciatis, qui, rem voluptas.</p>
            </div>
            <div className="aboutMe__resume-items marginSection">
                <ResumeItem
                    title="Summary"
                >
                    <h5>Igor Shevchenko</h5>
                    <p>I am highly productive and dedicated to achieving my goals. I consistently work hard to meet
                        deadlines and exceed expectations, and I am always looking for ways to improve and streamline my
                        processes.</p>
                    <ul>
                        <li>https://t.me/Ig0r_Shevchenk0</li>
                        <li>+380960091075</li>
                        <li>igorshwebua@gmail.com</li>
                    </ul>
                </ResumeItem>
                <ResumeItem
                    title="Professional experience"
                    subTitle="Graphic Designer"
                    time="2019 - 2020"
                    company="Freelance"
                >
                    <ul>
                        <li>Make a logo design</li>
                        <li>Create a pixel perfect design</li>
                        <li>Work with an existing project</li>
                    </ul>
                </ResumeItem>

                <ResumeItem
                    title="Education"
                    subTitle="Master of Laws in National V.N. Karazin University"
                    time="2018 - present"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae illo ipsa minus molestias
                        mollitia quis quo similique vitae. Dolores ducimus excepturi harum nam pariatur possimus quaerat
                        quibusdam sequi veritatis?</p>
                </ResumeItem>
                <ResumeItem
                    subTitle="Front-end Developer"
                    time="2022 - present"
                    company="Freelance"
                >
                    <ul>
                        <li>Create a new web application</li>
                        <li>Fix issues in an existing project</li>
                        <li>Improving an existing project</li>
                    </ul>
                </ResumeItem>
            </div>
        </div>
    );
};

export default Resume;