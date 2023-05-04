import React, {FC} from "react";
import "./myContactItem.scss";

interface MyContactPorps {
    IClass: string;
    title: string;
    subtitle: string;
}

const MyContactItem: FC<MyContactPorps> = ({ IClass, subtitle, title }) => {
  return (
    <div className={"footer__myContact-item"}>
      <i className={IClass}></i>
        <div>
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div>
    </div>
  );
};

export default MyContactItem;