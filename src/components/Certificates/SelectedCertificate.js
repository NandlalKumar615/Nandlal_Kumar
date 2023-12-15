import React from "react";

import Modal from '../../UI/Modal';

import './SelectedCertificates.scss';


const SelectedCertificates = (props) =>{
    // console.log(props.certificateToShow)
    console.log(props.imageValue)

    let credentialLink = null;
    const imageValue = props.imageValue;

    if(imageValue==="C1"){
        credentialLink = "https://www.udemy.com/certificate/UC-32a55c57-7e4b-4e02-9b7a-d9b86f6d4be4/"
    }
    if(imageValue==="C2"){
        credentialLink = "https://www.figma.com/file/F8L0Ht6LufGuVCKRmQuOa0/Portfolio?type=design&node-id=0-1&t=XbF0gXhzkv8sn87R-0"
    }
    if(imageValue==="C3"){
        credentialLink = "https://www.udemy.com/certificate/UC-32a55c57-7e4b-4e02-9b7a-d9b86f6d4be4/"
    }
    if(imageValue==="C4"){
        credentialLink = "https://www.udemy.com/certificate/UC-32a55c57-7e4b-4e02-9b7a-d9b86f6d4be4/"
    }
    if(imageValue==="C5"){
        credentialLink = "https://www.udemy.com/certificate/UC-32a55c57-7e4b-4e02-9b7a-d9b86f6d4be4/"
    }


    return (
        <Modal>
                <div className="selectedCertificate-Container">
                    <img src={props.certificateToShow} alt="Selected  Certificate" className="selectedCertificate"/>
                    <div className="selectedCertificate-Buttons">
                        <a className="selectedCertificate-Buttons_1" href={credentialLink} target="_blank" rel="noopener noreferrer">Show Credential</a>
                        <button className="selectedCertificate-Buttons_2" onClick={props.onHideSelectedCertificate}>Close</button>
                    </div>
                </div>
        </Modal>
    )
}

export default SelectedCertificates;