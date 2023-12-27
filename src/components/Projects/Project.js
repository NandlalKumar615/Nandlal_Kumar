import React, { useState } from "react";

import "./Projects.scss";

import projectImage1 from "../../Images/css.jpg";

const Projects = (props) => {
  const [flipButtonClicked_1, setFlipButtonClicked_1] = useState(false);

  const buttonClicked_1 = () => {
    setFlipButtonClicked_1((currentStatus) => !currentStatus);
  };

  let classes_backSide_1 = "projects-Card_back ";
  let classes_frontSide_1 = "projects-Card_front ";

  if (flipButtonClicked_1) {
    classes_backSide_1 = classes_backSide_1 + "projects-Card_flipBack";
    classes_frontSide_1 = classes_frontSide_1 + "projects-Card_flipFront";
  }

  const [flipButtonClicked_2, setFlipButtonClicked_2] = useState(false);

  const buttonClicked_2 = () => {
    setFlipButtonClicked_2((currentStatus) => !currentStatus);
  };

  let classes_backSide_2 = "projects-Card_back ";
  let classes_frontSide_2 = "projects-Card_front ";

  if (flipButtonClicked_2) {
    classes_backSide_2 = classes_backSide_2 + "projects-Card_flipBack";
    classes_frontSide_2 = classes_frontSide_2 + "projects-Card_flipFront";
  }

  const [flipButtonClicked_3, setFlipButtonClicked_3] = useState(false);

  const buttonClicked_3 = () => {
    setFlipButtonClicked_3((currentStatus) => !currentStatus);
  };

  let classes_backSide_3 = "projects-Card_back ";
  let classes_frontSide_3 = "projects-Card_front ";

  if (flipButtonClicked_3) {
    classes_backSide_3 = classes_backSide_3 + "projects-Card_flipBack";
    classes_frontSide_3 = classes_frontSide_3 + "projects-Card_flipFront";
  }

  return (
    <div id="projectsSection" className="projects">
      <h2 className="projects-Title">Projects</h2>

      <div className="projects-Cards">
        <div className="projects-Card">
          <div className={classes_frontSide_1}>
            <div className="projects-Picture-Container">
              <img
                className="projects-Picture"
                src={projectImage1}
                alt="ProjectImage"
              />
              <h4 className="projects-Heading">CP_Schedule</h4>
            </div>
            <div className="projects-Details">
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
              </ul>
            </div>
            <button
              className="projects-Button projects-Button_1"
              onClick={buttonClicked_1}
            >
              Know More
            </button>
          </div>
          <div className={classes_backSide_1}>
            <p className="projects-About">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              obcaecati quaerat maiores itaque ducimus dolorem repellendus
              maxime molestiae sint laudantium possimus necessitatibus, quis
              aliquid fuga vitae alias amet vero ullam. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Debitis eligendi voluptas
              animi, dolorum ipsum minus quaerat quis maxime non pariatur.
            </p>
            <a className="projects-Button projects-Button_2" href="/#">
              See Project
            </a>
            <button
              className="projects-Button projects-Button_3"
              onClick={buttonClicked_1}
            >
              Flip
            </button>
          </div>
        </div>

        <div className="projects-Card">
          <div className={classes_frontSide_2}>
            <div className="projects-Picture-Container">
              <img
                className="projects-Picture"
                src={projectImage1}
                alt="ProjectImage"
              />
              <h4 className="projects-Heading">CP_Schedule</h4>
            </div>
            <div className="projects-Details">
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
              </ul>
            </div>
            <button
              className="projects-Button projects-Button_1"
              onClick={buttonClicked_2}
            >
              Know More
            </button>
          </div>
          <div className={classes_backSide_2}>
            <p className="projects-About">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              obcaecati quaerat maiores itaque ducimus dolorem repellendus
              maxime molestiae sint laudantium possimus necessitatibus, quis
              aliquid fuga vitae alias amet vero ullam. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Debitis eligendi voluptas
              animi, dolorum ipsum minus quaerat quis maxime non pariatur.
            </p>
            <a className="projects-Button projects-Button_2" href="/#">
              See Project
            </a>
            <button
              className="projects-Button projects-Button_3"
              onClick={buttonClicked_2}
            >
              Flip
            </button>
          </div>
        </div>

        <div className="projects-Card">
          <div className={classes_frontSide_3}>
            <div className="projects-Picture-Container">
              <img
                className="projects-Picture"
                src={projectImage1}
                alt="ProjectImage"
              />
              <h4 className="projects-Heading">CP_Schedule</h4>
            </div>
            <div className="projects-Details">
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
              </ul>
            </div>
            <button
              className="projects-Button projects-Button_1"
              onClick={buttonClicked_3}
            >
              Know More
            </button>
          </div>
          <div className={classes_backSide_3}>
            <p className="projects-About">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              obcaecati quaerat maiores itaque ducimus dolorem repellendus
              maxime molestiae sint laudantium possimus necessitatibus, quis
              aliquid fuga vitae alias amet vero ullam. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Debitis eligendi voluptas
              animi, dolorum ipsum minus quaerat quis maxime non pariatur.
            </p>
            <a className="projects-Button projects-Button_2" href="/#">
              See Project
            </a>
            <button
              className="projects-Button projects-Button_3"
              onClick={buttonClicked_3}
            >
              Flip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
