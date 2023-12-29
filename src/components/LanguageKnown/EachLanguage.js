import React, { useRef, useEffect } from "react";

import "./EachLanguage.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const EachLanguage = (props) => {
  const per1 = props.percentage + "%";
  const fillRef = useRef(null);
  const perRef = useRef(null);
  useEffect(() => {
    const el1 = fillRef.current;
    gsap.fromTo(
      el1,
      { width: 0 },
      {
        width: per1,
        duration: 3,
        scrollTrigger: {
          trigger: ".languageKnown",
          start: "top 90%",
          end: "bottom -40%",
          toggleActions: "restart reset restart reset",
          marker: true,
        },
      }
    );
    const el2 = perRef.current;
    gsap.fromTo(
      el2,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".languageKnown",
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "restart reset restart reset",
        },
      }
    );
  });

  return (
    <div className="eachLanguage">
      <img
        className="eachLanguage-Logo"
        src={props.logo}
        alt="Programming Language Logo"
      />
      <div className="eachLanguage-Name-Percentage">
        <div className="eachLanguage-Name">{props.name}</div>
      </div>
      <div className="eachLanguage-Bar">
        <div className="eachLanguage-Bar-Fill" ref={fillRef}>
          <img
            className="eachLanguage-Percentage"
            src={props.percentageLogo}
            alt="Percentage"
            ref={perRef}
          />
        </div>
      </div>
    </div>
  );
};

export default EachLanguage;
