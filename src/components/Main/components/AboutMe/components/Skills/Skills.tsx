import React from 'react';
import SkillItem from "./SkillItem/SkillItem";
import './skills.scss'

const Skills = () => {
    return (
        <div className={'aboutMe__skills marginSection'}>
            <div className="container">
                <h3>Skills</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam beatae, deleniti
                    deserunt doloremque ea et excepturi iure obcaecati odio possimus quod tempora! Accusantium, aliquam
                    architecto, deserunt est facilis fuga ipsum omnis perferendis quaerat, reiciendis similique sunt totam
                    veniam.</p>
            </div>
            <div className={'aboutMe__skills-my-skills'}>
                <SkillItem technology={'HTML'} percent={100}/>
                <SkillItem technology={'CSS/SCSS'} percent={90}/>
                <SkillItem technology={'JavaScript'} percent={80}/>
                <SkillItem technology={'TypeScript'} percent={70}/>
                <SkillItem technology={'React'} percent={80}/>
                <SkillItem technology={'Redux'} percent={65}/>
                <SkillItem technology={'NodeJs'} percent={30}/>
                <SkillItem technology={'Figma'} percent={80}/>
            </div>
        </div>
    );
};

export default Skills;