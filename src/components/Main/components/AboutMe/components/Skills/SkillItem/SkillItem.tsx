import React, {FC} from 'react';
import './skillItem.scss'
interface SkillProps{
    technology: string,
    percent: number,
}

const SkillItem:FC<SkillProps> = ({technology, percent}) => {
    return (
        <div className={'skill-item'}>
            <span className={'skill-item-title'}>{technology}</span>
            <div className={'skill-item-progressBar'}>
                <div style={{width: `${percent}%`}} className={'skill-item-bar'}></div>
            </div>
        </div>
    );
};

export default SkillItem;