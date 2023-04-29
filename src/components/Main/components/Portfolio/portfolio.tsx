import React from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import image from "./../../../../assets/bc-image.webp";
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
          prevImage={image}
          title={"Instant messaging"}
          description={"lorem"}
          link={""}
        />
        <PortfolioItem
          prevImage={image}
          title={"Instant messaging"}
          description={"lorem"}
          link={""}
        />
        <PortfolioItem
          prevImage={image}
          title={"Instant messaging"}
          description={"lorem"}
          link={""}
        />
        <PortfolioItem
          prevImage={image}
          title={"Instant messaging"}
          description={"lorem"}
          link={""}
        />
        <PortfolioItem
          prevImage={image}
          title={"Instant messaging"}
          description={"lorem"}
          link={""}
        />
        <PortfolioItem
          prevImage={image}
          title={"Instant messaging"}
          description={"lorem"}
          link={""}
        />
      </div>
    </section>
  );
};

export default Portfolio;
