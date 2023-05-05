import React from "react";
import myPhoto from "../../../../../../assets/myPhoto.webp";
import "./general.scss";
import TitleComponent from "../../../TitleCompoent/TitleComponent";

const General = () => {
  return (
    <div className={"aboutMe__general"}>
      <TitleComponent
        title={"About Me"}
        text={
          "I would describe myself as a highly productive individual who enjoys setting goals and achieving them. I value efficiency and work hard to get things done in a timely and effective manner. Even when faced with challenges or obstacles, I remain optimistic and maintain a positive outlook on life."
        }
      />
      <div className={"general__main"}>
        <img src={myPhoto} alt="It's me" />
        <div className={"general__main-info"}>
          <div>
            <h2>Front-end Developer</h2>
            <p>
              I come across as a highly productive, optimistic, friendly, and
              responsible individual who is always willing to learn and grow
            </p>
          </div>
          <div className={"general__main-facts"}>
            <ul>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Birthday:
                </span>{" "}
                07.06.2001
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Website:
                </span>
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Phone:
                </span>{" "}
                +380 96 0091075
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> City:
                </span>{" "}
                Ukraine, Kirovograd reg., Olexandria
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Age:
                </span>{" "}
                21
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Email:
                </span>{" "}
                igorshwebua@gmail.com
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Freelance:
                </span>{" "}
                available
              </li>
              <li>
                <span className={"bold"}>
                  <i className="ri-arrow-right-s-line"></i> Experience:
                </span>{" "}
                more than 1 year
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;