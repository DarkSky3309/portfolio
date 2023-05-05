import React from "react";
import TitleComponent from "../TitleCompoent/TitleComponent";
import ServicesItem from "./ServicesItem/ServicesItem";
import "./services.scss";
import { Waypoint } from "react-waypoint";

const Services = () => {
  return (
    <section className={"services marginSection"} id={"services-component"}>
      <Waypoint
        onEnter={() => {
          window.location.replace("/#services");
        }}
      />
      <TitleComponent
        title={"Services"}
        text={
          "As a Front-end developers I am responsible for building the user-facing interface of a website or application. They use a combination of programming languages such as HTML, CSS, JavaScript, TypeScript and React to design and develop the layout, visual appearance, and functionality of a website or application."
        }
      />
      <div className="services__items marginMedium">
        <ServicesItem
          title={"Website Design"}
          description={
            "I can create visually appealing and user-friendly website designs that are tailored to the needs and goals of their clients. I can work closely with the client to understand their brand identity and design a website that aligns with their vision."
          }
          ico={"ri-palette-fill"}
        />
        <ServicesItem
          title={"Website Development"}
          description={
            "I am also responsible for building the website or application using various programming languages and frameworks. I can create custom website themes and templates, and develop website functionality using React"
          }
          ico={"ri-pages-fill"}
        />
        <ServicesItem
          title={"Website Maintenance"}
          description={
            "After a website or application has been launched, I can provide ongoing maintenance and support services. This includes updating the website to keep it up-to-date with the latest web technologies, fixing bugs, and ensuring that the website is secure."
          }
          ico={"ri-file-code-fill"}
        />
        <ServicesItem
          title={"Work with back-end"}
          description={
            "I can integrate my work with the back-end developers' work to create a fully functioning website or application. This involves working with APIs, databases, and other back-end technologies to ensure that the website or application is working seamlessly."
          }
          ico={"ri-external-link-fill"}
        />
        <ServicesItem
          title={"Performance optimization"}
          description={
            "I can also optimize the performance of a website, ensuring that it loads quickly and efficiently. This involves optimizing images, reducing file sizes, and using caching and other techniques to improve website speed."
          }
          ico={"ri-speed-up-fill"}
        />
        <ServicesItem
          title={"Be up-to-date"}
          description={
            "In the fast-paced world of technology, being adaptable and open to learning new things is essential to stay competitive and relevant. I am open to learning and have a growth mindset "
          }
          ico={"ri-git-repository-fill"}
        />
      </div>
    </section>
  );
};

export default Services;
