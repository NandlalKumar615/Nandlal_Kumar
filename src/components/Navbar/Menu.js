import React from "react";

import "./Menu.scss";
import { useState } from "react";

const Menu = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const addingMenuAnimation = () => {
    if (menuActive) {
      setMenuActive(false);
      props.setMenuToUnClick();
    } else {
      setMenuActive(true);
      props.setMenuToClick();
    }
  };
  return (
    <div className="menu">
      <div id="gradientForMenu" className="menu-Gradient"></div>
      <div className="menu-Bars" onClick={addingMenuAnimation}>
        <div id="bar_1" className="menu-Bar"></div>
        <div id="bar_2" className="menu-Bar"></div>
        <div id="bar_3" className="menu-Bar"></div>
      </div>
    </div>
  );
};

export default Menu;
