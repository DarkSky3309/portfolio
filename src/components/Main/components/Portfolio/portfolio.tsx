import React from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import todoPrev from "./../../../../assets/to list.webp";
import chatPrev from "./../../../../assets/chat.webp";
import wetherPrev from "./../../../../assets/Your weather API.webp";
import "./porfolio.scss";
import { Waypoint } from "react-waypoint";
import TitleComponent from "../TitleCompoent/TitleComponent";

const Portfolio = () => {
  return (
    <section className={"marginSection portfolio"} id={"portfolio-component"}>
      <Waypoint
        onEnter={() => {
          window.location.replace("/#portfolio");
        }}
      />
      <TitleComponent
        title={"Portfolio"}
        text={
          " I always strive to create high-quality and maintainable code that can be used for a long time without any issues. To achieve this goal, I follow best practices and programming standards, using popular frameworks and libraries. I also aim for pixel-perfect design, ensuring that every element of the interface is well-thought-out an displayed exactly according to the design mockup."
        }
      />
      <div className={"portfolio__content"}>
        <PortfolioItem
          prevImage={todoPrev}
          title={"ToDo-list"}
          description={
            "Application in which you can create todo, mark them as executed, modify, sort and so on. This tasks will save even after reopening."
          }
          link={"https://astounding-lamington-66ff6d.netlify.app/"}
        />
        <PortfolioItem
          prevImage={chatPrev}
          title={"Instant messaging"}
          description={
            "Application with authorization where you can communicate, share pictures with other users with minimal delay."
          }
          link={"https://celebrated-choux-96fead.netlify.app/"}
        />
        <PortfolioItem
          prevImage={wetherPrev}
          title={"Weather API"}
          description={
            "The weather forecasting app, in real time, shows the weather forecast with the function of switching measurements, you can know what the weather is in your city with one button!"
          }
          link={"https://gleeful-peony-54e730.netlify.app/"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
