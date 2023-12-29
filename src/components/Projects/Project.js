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
              <div className="projects-Picture">
                Note Sharing cum Social Media App for Programmers
              </div>
              <h4 className="projects-Heading">AlgoLog</h4>
            </div>
            <div className="projects-Details">
              <div>
                Developed a MERN full-stack application utilizing MongoDB,
                Node.js, Express.js, React.js, CSS/Sass, Rest API, and Redux
                Toolkit.
              </div>
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
              I developed AlgoLog, a major project that serves as a note-sharing
              cum social media web application for programmers. I incorporated
              features such as note sharing, authentication, password reset,
              encryption, voting, reviews, various routes, search functionality,
              CRUD operations, filtering, and error handling with proper status
              codes. The project includes pages for profiles, an admin
              dashboard, notes, favorite notes, revision notes, and quizzes.
            </p>
            <a className="projects-Button projects-Button_2" href="https://github.com/NandlalKumar615/AlgoLog">
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
              <div className="projects-Picture">
                Resume based portfolio website
              </div>
              <h4 className="projects-Heading">Portfolio</h4>
            </div>
            <div className="projects-Details">
              <div>
                Showcasing my expertise in front-end development. Using ReactJS,
                CSS/Sass, JavaScript, and GSAP.
              </div>
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
              As part of a minor project, I created this professional web page,
              Portfolio Website, showcasing my expertise in front-end
              development. Using ReactJS, CSS/Sass, JavaScript, and GSAP, the
              website provides a concise overview of my skills and experience
              detailing the programming languages and technology stacks I am
              proficient in. Additionally, it provides contact information for
              connecting with me.
            </p>
            <a className="projects-Button projects-Button_2" href="https://github.com/NandlalKumar615/Nandlal_Kumar">
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
              <div className="projects-Picture">
                Show upcoming programming contests
              </div>
              <h4 className="projects-Heading">CP_Schedule</h4>
            </div>
            <div className="projects-Details">
              <div>
                Static website displaying the schedule of upcoming programming
                contests. Using HTML, CSS, Bootstrap.
              </div>
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
              Another minor project, CP-Schedule, is a static website displaying
              the schedule of upcoming programming contests across various
              platforms such as Codeforces, CodeChef, etc. Users have the
              capability to filter contests based on date, platform, and type,
              distinguishing between long and short contests.
            </p>
            <a className="projects-Button projects-Button_2" href="https://nandlalkumar615.github.io/CP-Schedule/">
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
