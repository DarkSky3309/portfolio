import React, {createRef, FC} from "react";
import Profession from "./component/Profession/Profession";
import image from "../../assets/bc-image.webp";
import "./header.scss";
import { Waypoint } from "react-waypoint";

interface headerInterface {
  navigation: React.MutableRefObject<HTMLDivElement> | undefined
}

const Header:FC<headerInterface> = ({navigation}) => {
  const menu = createRef() as React.MutableRefObject<HTMLIFrameElement>

  const showMenu = () => {
    if (navigation){
      if (navigation.current.classList.contains('open')){
        navigation.current.classList.remove('open')
      } else {
        navigation.current.classList.add('open')
      }
    }

  }


  return (
    <header
      id={"home-component"}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <i className="ri-menu-2-line menu" ref={menu} onClick={() => showMenu()}></i>
      <Waypoint
        onEnter={() => {
          window.location.replace("/#home");
        }}
      />
      <div>
        <h1>Hi, This is Igor Shevchenko</h1>
        <Profession />
      </div>
    </header>
  );
};

export default Header;