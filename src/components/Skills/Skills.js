import React, { useEffect, useState } from "react";

import "./Skills.scss";
import "../Abstracts/Variables.scss";

import s_I1 from "../../Images/SVGs/Skills/html.svg";
import s_I2 from "../../Images/SVGs/Skills/css.svg";
import s_I3 from "../../Images/SVGs/Skills/mysql.svg";
import s_I4 from "../../Images/SVGs/ProgrammingLanguageLogo/javascript.svg";
import s_I5 from "../../Images/SVGs/Skills/bootstrap.svg";
import s_I6 from "../../Images/SVGs/Skills/mongodb.svg";
import s_I7 from "../../Images/SVGs/Skills/express-js.svg";
import s_I8 from "../../Images/SVGs/Skills/react-js.svg";
import s_I9 from "../../Images/SVGs/Skills/nodejs.svg";
import s_I10 from "../../Images/SVGs/Skills/figma.svg";
import s_I11 from "../../Images/SVGs/Skills/firebase.svg";
import s_I12 from "../../Images/SVGs/Skills/git.svg";

const Skills = (props) => {
  const percentageValue = [100, 100, 80, 80, 90, 90, 80, 90, 80, 70, 70, 80];
  const imageValue = [
    s_I1,
    s_I2,
    s_I3,
    s_I4,
    s_I5,
    s_I6,
    s_I7,
    s_I8,
    s_I9,
    s_I10,
    s_I11,
    s_I12,
  ];
  const skillName = [
    "HTML",
    "CSS/SCSS",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "MongoDB",
    "ExpressJS",
    "ReactJS",
    "NodeJS",
    "Figma",
    "FireBase",
    "Git",
  ];

  const [indexGot, setIndexGot] = useState(7);
  const [currentAngle, setCurrentAngle] = useState(percentageValue[indexGot]);
  const [finalAngle, setFinalAngle] = useState(percentageValue[indexGot]);

  const setThePercentage = (event) => {
    const idGOt = event.target.id;

    switch (idGOt) {
      case "S1":
        setIndexGot(0);
        break;
      case "S2":
        setIndexGot(1);
        break;
      case "S3":
        setIndexGot(2);
        break;
      case "S4":
        setIndexGot(3);
        break;
      case "S5":
        setIndexGot(4);
        break;
      case "S6":
        setIndexGot(5);
        break;
      case "S7":
        setIndexGot(6);
        break;
      case "S8":
        setIndexGot(7);
        break;
      case "S9":
        setIndexGot(8);
        break;
      case "S10":
        setIndexGot(9);
        break;
      case "S11":
        setIndexGot(10);
        break;
      case "S12":
        setIndexGot(11);
        break;
      default:
        console.log("error in idGot");
    }
  };

  useEffect(() => {
    setFinalAngle(percentageValue[indexGot]);
  }, [indexGot, percentageValue]);

  useEffect(() => {
    const animatingElement = document.querySelector(".skills-Graph-Outer");
    let angle = currentAngle;

    const animateGradientMore = () => {
      animatingElement.style.background = `conic-gradient(rgb(235, 158, 5),rgb(255, 78, 0) ${angle}%,rgb(2, 2, 26) ${angle}%,rgb(2, 2, 26))`;

      angle = angle + 0.2;
      if (angle <= finalAngle) {
        setTimeout(animateGradientMore, 5);
      } else {
        setCurrentAngle(finalAngle);
      }
    };
    const animateGradientLess = () => {
      animatingElement.style.background = `conic-gradient(rgb(235, 158, 5),rgb(255, 78, 0) ${angle}%,rgb(2, 2, 26) ${angle}%,rgb(2, 2, 26))`;

      angle = angle - 0.2;
      if (angle >= finalAngle) {
        setTimeout(animateGradientLess, 5);
      } else {
        setCurrentAngle(finalAngle);
      }
    };

    if (finalAngle >= currentAngle) {
      animateGradientMore();
    }
    if (finalAngle < currentAngle) {
      animateGradientLess();
    }
  }, [finalAngle, currentAngle]);

  return (
    <div id="skillsSection" className="skills">
      <h2 className="skills-Title">Skills</h2>
      <div className="skills-Container">
        <div className="skills-Graph">
          <div className="skills-Graph-Outer">
            <div className="skills-Graph-Inner">
              <img
                className="skills-I"
                src={imageValue[indexGot]}
                alt="Skill Icon"
              />
              <p className="skills-Name">{skillName[indexGot]}</p>
              <p className="skills-Name-Value">
                {percentageValue[indexGot] / 10}/10
              </p>
            </div>
          </div>
        </div>
        <div className="skills-Select">
          <div
            id="S1"
            className="skills-Select-Skill skills-Select-Skill_1"
            onMouseEnter={setThePercentage}
          >
            HTML
          </div>
          <div
            id="S2"
            className="skills-Select-Skill skills-Select-Skill_2"
            onMouseEnter={setThePercentage}
          >
            CSS/SCSS
          </div>
          <div
            id="S3"
            className="skills-Select-Skill skills-Select-Skill_3"
            onMouseEnter={setThePercentage}
          >
            MySQL
          </div>
          <div
            id="S4"
            className="skills-Select-Skill skills-Select-Skill_4"
            onMouseEnter={setThePercentage}
          >
            JavaScript
          </div>
          <div
            id="S5"
            className="skills-Select-Skill skills-Select-Skill_5"
            onMouseEnter={setThePercentage}
          >
            Bootstrap
          </div>
          <div
            id="S6"
            className="skills-Select-Skill skills-Select-Skill_6"
            onMouseEnter={setThePercentage}
          >
            MongoDB
          </div>
          <div
            id="S7"
            className="skills-Select-Skill skills-Select-Skill_7"
            onMouseEnter={setThePercentage}
          >
            ExpressJS
          </div>
          <div
            id="S8"
            className="skills-Select-Skill skills-Select-Skill_8"
            onMouseEnter={setThePercentage}
          >
            ReactJS
          </div>
          <div
            id="S9"
            className="skills-Select-Skill skills-Select-Skill_9"
            onMouseEnter={setThePercentage}
          >
            NodeJS
          </div>
          <div
            id="S10"
            className="skills-Select-Skill skills-Select-Skill_10"
            onMouseEnter={setThePercentage}
          >
            Figma
          </div>
          <div
            id="S11"
            className="skills-Select-Skill skills-Select-Skill_11"
            onMouseEnter={setThePercentage}
          >
            FireBase
          </div>
          <div
            id="S12"
            className="skills-Select-Skill skills-Select-Skill_12"
            onMouseEnter={setThePercentage}
          >
            Git
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
