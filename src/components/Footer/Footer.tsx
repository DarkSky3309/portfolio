import React from 'react';
import './footer.scss'
import TitleComponent from "../Main/components/TitleCompoent/TitleComponent";
import {Waypoint} from "react-waypoint";
import MyContact from "./components/myContact/MyContact";
import ContactForm from "./components/ContactForm/ContactForm";
const Footer = () => {
    return (
        <footer id={'contact-component'}>
            <TitleComponent title={'Contact'} text={'I can always stay in touch with you via email or Telegram.  I understand that the success of any team relies heavily on clear and constant communication, which is why I always make it a point to stay accessible and responsive.'}/>
            <Waypoint onEnter={() => {window.location.replace('/#contact')}}/>
            <div className={'footer__content marginMedium'}>
                <MyContact/>
                <ContactForm/>
            </div>
        </footer>
    );
};

export default Footer;