import React, {FC} from 'react';
import './statiscticItem.scss'
interface statisticProps {
    iClas: string;
    number: string;
    description: string;
}

const StatisticItem:FC<statisticProps> = ({iClas, description, number}) => {
    return (
        <div className={'statistic-item'}>
            <i className={iClas}></i>
            <span className={'number'}>{number}</span>
            <span className={'description'}>{description}</span>
        </div>
    );
};

export default StatisticItem;