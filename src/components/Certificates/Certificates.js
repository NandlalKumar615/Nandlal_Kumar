import React from "react";
import "./Certificates.scss";

import C1 from "../../Images/css.jpg";
import C2 from "../../Images/mongodb.jpg";
import C3 from "../../Images/react.jpg";
import C4 from "../../Images/nodejs.jpg";
import C5 from "../../Images/dsa.jpg";

const Certificates = (props) => {
  const tempCertificateFunction = (event) => {
    props.onShowLargeCertificate(event.target.alt, event.target.src);
  };

  return (
    <div id="certificatesSection" className="certificates">
      <h2 className="certificates-Title">Certificates</h2>
      <div className="certificates-All">
        <figure className="certificates-Box_1 certificates-Box">
          <img
            onClick={tempCertificateFunction}
            className="certificates-Each"
            src={C1}
            alt="C1"
          />
        </figure>
        <figure className="certificates-Box_2 certificates-Box">
          <img
            onClick={tempCertificateFunction}
            className="certificates-Each"
            src={C2}
            alt="C2"
          />
        </figure>
        <figure className="certificates-Box_3 certificates-Box">
          <img
            onClick={tempCertificateFunction}
            className="certificates-Each"
            src={C3}
            alt="C3"
          />
        </figure>
        <figure className="certificates-Box_4 certificates-Box">
          <img
            onClick={tempCertificateFunction}
            className="certificates-Each"
            src={C4}
            alt="C4"
          />
        </figure>
        <figure className="certificates-Box_5 certificates-Box">
          <img
            onClick={tempCertificateFunction}
            className="certificates-Each"
            src={C5}
            alt="C5"
          />
        </figure>
      </div>
    </div>
  );
};

export default Certificates;
