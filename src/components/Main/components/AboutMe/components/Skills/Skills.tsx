import React, {useRef, useState} from 'react';
import SkillItem from "./SkillItem/SkillItem";
import './skills.scss'
import {Waypoint} from "react-waypoint";

const Skills = () => {
    const skillSection = useRef() as React.MutableRefObject<HTMLDivElement>
    const [isLoaded, setIsLoaded] = useState(false);

    const timer = (ms: number) => new Promise(res => setTimeout(res, ms))
    const animateSkills = () => {
        if (skillSection){
            skillSection.current.children[0].children[1].children[0].classList.add('to100')
            skillSection.current.children[1].children[1].children[0].classList.add('to90')
            skillSection.current.children[2].children[1].children[0].classList.add('to80')
            skillSection.current.children[3].children[1].children[0].classList.add('to70')
            skillSection.current.children[4].children[1].children[0].classList.add('to80')
            skillSection.current.children[5].children[1].children[0].classList.add('to60')
            skillSection.current.children[6].children[1].children[0].classList.add('to30')
            skillSection.current.children[7].children[1].children[0].classList.add('to80')
        }
        setIsLoaded(true)
    }

    return (
        <div className={'aboutMe__skills marginSection'}>
            <div className="container">
                <h3>Skills</h3>
                <p>I always prioritize code quality, adhering to best development practices, and strive for high
                    productivity and excellent results. I am open to learning new technologies and constantly improving
                    my skills to remain competitive in the ever-evolving development market.</p>
            </div>
            <Waypoint onEnter={() => isLoaded ? '' : animateSkills()}/>
            <div className={'aboutMe__skills-my-skills'} ref={skillSection}>
                <SkillItem technology={'HTML'}/>
                <SkillItem technology={'CSS/SCSS'}/>
                <SkillItem technology={'JavaScript'}/>
                <SkillItem technology={'TypeScript'}/>
                <SkillItem technology={'React'}/>
                <SkillItem technology={'Redux'}/>
                <SkillItem technology={'NodeJs'}/>
                <SkillItem technology={'Figma'}/>
            </div>
            <Waypoint onEnter={() => isLoaded ? '' : animateSkills()}/>
        </div>
    );
};

export default Skills;