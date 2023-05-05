import React, { FC } from "react";
import "./skillItem.scss";

interface SkillProps {
  technology: string;
}

const SkillItem: FC<SkillProps> = ({ technology }) => {
  return (
    <div className={`skill-item`}>
      <span className={"skill-item-title"}>{technology}</span>
      <div className={"skill-item-progressBar"}>
        <div className={"skill-item-bar"}></div>
      </div>
    </div>
  );
};

export default SkillItem;