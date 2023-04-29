import React from 'react';
import TitleComponent from "../TitleCompoent/TitleComponent";
import ServicesItem from "./ServicesItem/ServicesItem";
import './services.scss'
const Services = () => {
    return (
        <section className={'services marginSection'}>
            <TitleComponent title={"Services"} text={"lorem"}/>
            <div className="services__items">
                <ServicesItem title={'test'} description={'test'} ico={'ri-briefcase-4-fill'}/>
            </div>
        </section>
    );
};

export default Services;