import React, { FC } from "react";

interface TitleComponentProps {
  title: string;
  text: string;
}

const TitleComponent: FC<TitleComponentProps> = ({ title, text }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default TitleComponent;