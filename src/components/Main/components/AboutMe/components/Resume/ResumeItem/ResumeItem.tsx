import React, {FC} from "react";
import "./ResumeItem.scss";

interface ResumeItemProps {
    title?: string;
    subTitle?: string;
    time?: string;
    company?: string;
    children?: React.ReactNode;
}

const ResumeItem:FC<ResumeItemProps> = ({ title, subTitle, time, company, children }) => {
    return (
        <div className="aboutMe__resume-item">
            {title && <h4>{title}</h4>}
            <div className="resume-item-content">
                {subTitle && <h5>{subTitle}</h5>}
                {time && <span className="resume-item-time">{time}</span>}
                {company && <p className={'company'}>{company}</p>}
                {children}
            </div>
        </div>
    );
};



export default ResumeItem;