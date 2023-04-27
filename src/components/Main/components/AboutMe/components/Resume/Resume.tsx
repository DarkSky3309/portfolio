import React from 'react';
import './resume.scss'
import ResumeItem from "./ResumeItem/ResumeItem";
import TitleComponent from "../../../TitleCompoent/TitleComponent";

const Resume = () => {
    return (
        <div className={'marginSection aboutMe__resume'}>
            <TitleComponent title={'Resume'}
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fugiat hic laboriosam libero suscipit? Aliquid dolores est facere hic nam saepe sunt, temporibus. Dicta et mollitia vel. Aperiam architecto at, cumque fuga impedit minima neque nostrum perspiciatis, qui, rem voluptas.'}/>
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
                    subTitle="Front-end developer"
                    time="September 2021 - December 2021"
                    company="Freelance"
                >
                    <ul>
                        <li>Creating landing pages</li>
                        <li>Working with existing projects</li>
                        <li>Fixing critical bugsasd</li>
                    </ul>
                </ResumeItem>

                <ResumeItem
                    title="Education"
                    subTitle="Master of Laws in National V.N. Karazin University"
                    time="2018 - present"
                >
                    <p>Although I studied law, I have always been passionate about programming and spent more time
                        pursuing it. Over time, my interest in programming grew stronger, and I found myself dedicating more
                        and more time to it, even while pursuing my legal studies. While my legal education has been
                        valuable, my heart is in programming, and I am excited to pursue a career in this field where I
                        can apply my skills and creativity to build innovative solutions.</p>
                </ResumeItem>
                <ResumeItem
                    time="February 2022 - December 2022"
                    company="RightFusion"
                >
                    <ul>
                        <li>Building and maintaining user interfaces using React</li>
                        <li>Ensuring cross-browser compatibility and accessibility</li>
                        <li>Keeping up-to-date with the latest web development trends and technologies</li>
                        <li>Collaborating with back-end and work with REST API</li>
                    </ul>
                </ResumeItem>
                <ResumeItem
                    time="2023 - present"
                    company="Freelance">
                    <ul>
                        <li>Building and maintaining websites using React</li>
                        <li>Writing TypeScript and JavaScript code</li>
                        <li>Collaborating with clients</li>
                        </ul>
                </ResumeItem>
            </div>

        </div>
    );
};

export default Resume;