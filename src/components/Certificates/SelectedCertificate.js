import React from "react";

import Modal from "../../UI/Modal";

import "./SelectedCertificates.scss";

const SelectedCertificates = (props) => {
  let credentialLink = null;
  const imageValue = props.imageValue;

  if (imageValue === "C1") {
    credentialLink =
      "https://www.udemy.com/certificate/UC-1c9b3ea1-41a6-4dee-9ed5-3e4e43848254/";
  }
  if (imageValue === "C2") {
    credentialLink =
      "https://www.udemy.com/certificate/UC-dfca6832-4281-4750-8907-02deced29db3/";
  }
  if (imageValue === "C3") {
    credentialLink =
      "https://www.udemy.com/certificate/UC-32a55c57-7e4b-4e02-9b7a-d9b86f6d4be4/";
  }
  if (imageValue === "C4") {
    credentialLink =
      "https://www.udemy.com/certificate/UC-966becdd-532d-4510-9120-f46f751669f5/";
  }
  if (imageValue === "C5") {
    credentialLink =
      "https://www.udemy.com/certificate/UC-b5063075-199f-4e55-9b3b-e2728989da89/";
  }

  return (
    <Modal>
      <div className="selectedCertificate-Container">
        <img
          src={props.certificateToShow}
          alt="Selected  Certificate"
          className="selectedCertificate"
        />
        <div className="selectedCertificate-Buttons">
          <a
            className="selectedCertificate-Buttons_1"
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show Credential
          </a>
          <button
            className="selectedCertificate-Buttons_2"
            onClick={props.onHideSelectedCertificate}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SelectedCertificates;
