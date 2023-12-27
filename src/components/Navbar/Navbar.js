import React from "react";

import Menu from "./Menu";

import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const setToClick = () => {
    setMenuClicked(true);
    document.getElementById("bar_1").classList.add("menu-Top");
    document.getElementById("bar_2").classList.add("menu-Middle");
    document.getElementById("bar_3").classList.add("menu-Bottom");
    document.getElementById("gradientForMenu").classList.add("menu-Scale");
  };
  const setToUnClick = () => {
    setMenuClicked(false);
    document.getElementById("bar_1").classList.remove("menu-Top");
    document.getElementById("bar_2").classList.remove("menu-Middle");
    document.getElementById("bar_3").classList.remove("menu-Bottom");
    document.getElementById("gradientForMenu").classList.remove("menu-Scale");
  };

  return (
    <div className="navbar-Container">
      <Menu setMenuToClick={setToClick} setMenuToUnClick={setToUnClick}></Menu>
      {menuClicked && (
        <div className="navbar">
          <div id="navbarAllLinks" className="navbar-Links">
            <a
              onClick={setToUnClick}
              href="#aboutSection"
              className="navbar-Link"
            >
              About
            </a>
            <a
              onClick={setToUnClick}
              href="#languageKnownSection"
              className="navbar-Link"
            >
              Language Known
            </a>
            <a
              onClick={setToUnClick}
              href="#skillsSection"
              className="navbar-Link"
            >
              Skills
            </a>
            <a
              onClick={setToUnClick}
              href="#projectsSection"
              className="navbar-Link"
            >
              Projects
            </a>
            <a
              onClick={setToUnClick}
              href="#certificatesSection"
              className="navbar-Link"
            >
              Certificates
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
