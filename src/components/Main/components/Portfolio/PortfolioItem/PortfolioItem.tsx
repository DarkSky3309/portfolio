import React, { FC } from "react";
import "./portfolioItem.scss";

interface PortfolioItemProps {
  prevImage: string;
  title: string;
  description: string;
  link: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  prevImage,
  link,
  title,
  description,
}) => {
  return (
    <div className={"portfolio__item"} style={{backgroundImage: `url(${prevImage})`}}>
      <div className={'item__modal'}>
        <span>{title}</span>
        <p>{description}</p>
        <a href={link}><i className="ri-external-link-line"></i></a>
      </div>
    </div>
  );
};

export default PortfolioItem;
