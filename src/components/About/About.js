import React from 'react';

import './About.scss';
import './choseSize';
import FeGaussianBlur from '../SVG/FeGaussianBlur';

const About=()=>{
    return(
        <div className="aboutMe scroll">
            <h2 className="aboutMe_Title">About Me</h2>
            <div className="aboutMe_Options">
                <p className="aboutMe_Options-text">Adjust bio length</p>
                <div className="aboutMe_Options-select">
                    <FeGaussianBlur className="aboutMe_Options-blur"></FeGaussianBlur>
                    <div className="aboutMe_Options-sml">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                    </div>   
                </div>
            </div>
            <div className="aboutMe_Resume-Details">
                <div className="aboutMe_Resume">

                </div>
                <div className="aboutMe_details">temp</div>
            </div>
        </div>
    )
}

export default About;