import React from 'react';
import StatisticItem from "./StatisticItem/StatisticItem";
import './facts.scss'

const Facts = () => {
    return (
        <div className={'aboutMe__facts'}>
            <h3>Facts</h3>
            <p>As a web developer, my top priority is always my clients' satisfaction. I strive to understand their
                needs and desires, and work hard to create websites that exceed their expectations. I believe that a
                successful website should not only look great, but also be easy to maintain and update, which is why I
                am committed to producing high-quality and easily maintainable code.</p>
            <div className={'aboutMe__facts-statistic'}>
                <StatisticItem iClas={"ri-emotion-happy-line"} number={"14+"} description={"Happy Client"}/>
                <StatisticItem iClas={"ri-file-code-line"} number={"20+"} description={"Project Completed"}/>
                <StatisticItem iClas={"ri-customer-service-2-line"} number={"24/7"} description={"Customer service"}/>
            </div>
        </div>
    );
};

export default Facts;