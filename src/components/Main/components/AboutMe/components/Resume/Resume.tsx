import React from 'react';
import './resume.scss'

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
                <div className="aboutMe__resume-item">
                    <h4>Summary</h4>
                    <div className="resume-item-content">
                        <h5>I Shevchenko</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, atque
                            doloribus exercitationem ipsam modi neque omnis quas tempora temporibus!</p>
                        <ul>
                            <li>https://t.me/Ig0r_Shevchenk0</li>
                            <li>+380960091075</li>
                            <li>igorshwebua@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutMe__resume-items marginSection">
                <div className="aboutMe__resume-item">
                    <h4>Education</h4>
                    <div className="resume-item-content">
                        <h5>Master of Laws</h5>
                        <span className="resume-item-time">
                            2018-now
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae illo ipsa minus molestias
                            mollitia quis quo similique vitae. Dolores ducimus excepturi harum nam pariatur possimus
                            quaerat quibusdam sequi veritatis?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;