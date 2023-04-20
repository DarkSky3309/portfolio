import React from 'react';
import myPhoto from './../../../../assets/myPhoto.webp'
import './aboutMe.scss'

const AboutMe = () => {
    return (
        <section className={'aboutMe'}>
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi labore quae repellendus
                repudiandae tenetur ullam voluptas! Fugiat, omnis, unde!</p>
            <div className={'aboutMe__main'}>
                <img src={myPhoto} alt="It's me"/>
                <div className={'aboutMe__main-info'}>
                    <div>
                        <h2>Front-end Developer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsa iusto maiores
                            modi officiis quaerat quia, ut voluptates. Incidunt, vitae?</p>
                    </div>
                    <div className={'aboutMe__main-facts'}>
                        <ul>
                            <li><span className={'bold'}><i
                                className="ri-arrow-right-s-line"></i> Birthday:</span> 07.06.2001
                            </li>
                            <li><span className={'bold'}><i className="ri-arrow-right-s-line"></i> Website:</span></li>
                            <li><span className={'bold'}><i className="ri-arrow-right-s-line"></i> Phone:</span> +380 96
                                0091075
                            </li>
                            <li><span className={'bold'}><i className="ri-arrow-right-s-line"></i> City:</span> Ukraine,
                                Kirovograd reg., Olexandria
                            </li>
                            <li><span className={'bold'}><i className="ri-arrow-right-s-line"></i> Age:</span> 21</li>
                            <li><span className={'bold'}><i
                                className="ri-arrow-right-s-line"></i> Email:</span> igorshwebua@gmail.com
                            </li>
                            <li><span className={'bold'}><i
                                className="ri-arrow-right-s-line"></i> Freelance:</span> available
                            </li>
                            <li><span className={'bold'}><i
                                className="ri-arrow-right-s-line"></i> Experience:</span> more than 1 year of freelance
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;