import React from 'react';
import MyContactItem from "./myContactItem/MyContactItem";
import './myContact.scss'
const MyContact = () => {
    return (
        <div className={'footer__myContact'}>
            <MyContactItem IClass={"ri-mail-fill"} title={'Email'} subtitle={'igorshwebua@gmail.com'}/>
            <MyContactItem IClass={"ri-phone-fill"} title={'Phone'} subtitle={'+380960091075'}/>
            <MyContactItem IClass={"ri-map-pin-2-fill"} title={'Location'} subtitle={'Kharkiv, Ukraine'}/>
        </div>
    );
};

export default MyContact;