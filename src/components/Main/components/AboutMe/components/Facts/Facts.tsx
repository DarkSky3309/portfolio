import React, {LegacyRef, useRef, useState} from 'react';
import StatisticItem from "./StatisticItem/StatisticItem";
import './facts.scss'
import {Waypoint} from "react-waypoint";

const Facts = () => {
    const waypoint = useRef() as LegacyRef<Waypoint>
    const [happyClient, setHappyClient] = useState<number>(14);
    const [projectCompleted, setProjectCompleted] = useState<number>(20);
    const [animationFinished, setAnimationFinished] = useState(false);
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms))

    const onEnter = () => {
        const animateNumbers = async (setArg: (arg: number) => void, arg: number) => {
            for (let i = 5; i > 0; i--) {
                setArg(Math.floor(arg / i))
                await timer(150)
            }
        }
        animateNumbers(setHappyClient, happyClient)
        animateNumbers(setProjectCompleted, projectCompleted)
        setAnimationFinished(true)
    }

    return (
        <div className={'aboutMe__facts marginSection'}>
            <div className="container">
                <h3>Facts</h3>
                <p>As a web developer, my top priority is always my clients' satisfaction. I strive to understand their
                    needs and desires, and work hard to create websites that exceed their expectations. I believe that a
                    successful website should not only look great, but also be easy to maintain and update, which is why I
                    am committed to producing high-quality and easily maintainable code.</p>
            </div>
            <Waypoint onEnter={() => animationFinished ? ' ' : onEnter()} ref={waypoint}/>
            <div className={'aboutMe__facts-statistic'}>
                <StatisticItem iClas={"ri-emotion-happy-line"} number={`${happyClient} +`} description={"Happy Client"}/>
                <StatisticItem iClas={"ri-file-code-line"} number={`${projectCompleted} +`}
                               description={"Project Completed"}/>
                <StatisticItem iClas={"ri-customer-service-2-line"} number={"24/7"} description={"Customer service"}/>
                <StatisticItem iClas={"ri-english-input"} number={"C1"} description={"Level of English"}/>
            </div>
        </div>
    );
};

export default Facts;