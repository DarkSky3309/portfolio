import React, {FC} from 'react';
import './servicesItem.scss'

interface servicesItemProps{
    title: string,
    description: string,
    ico: string
}

const ServicesItem:FC<servicesItemProps> = ({title, ico, description}) => {
    return (
        <div className={"services__item"}>
            <i className={ico}></i>
            <div className="services__item-content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServicesItem;