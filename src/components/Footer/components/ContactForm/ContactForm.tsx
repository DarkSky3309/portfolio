import React from 'react';
import './contactForm.scss'
const ContactForm = () => {
    return (
        <div className={'footer__contactForm'}>
            <form action="https://formsubmit.co/0cfad4f505fb5a11a93a60118d78745e " method="POST">
                <input type="text" name={'name'} required placeholder={'Your Name'}/>
                <input type="email" name={'email'} required placeholder={'Your Email'}/>
                <input type="text" placeholder={'Subject'}/>
                <textarea placeholder={'Your message'} name={'message'} required/>
                <button type="submit">Send message</button>
            </form>
        </div>
    );
};

export default ContactForm;