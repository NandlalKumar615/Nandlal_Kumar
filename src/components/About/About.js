import React, { useState } from 'react';

import './About.scss';
import FeGaussianBlur from '../SVG/FeGaussianBlur';
import ResumeIcon from '../SVG/Other/resume_icon.svg';

const About = () => {
    const aboutMe_S = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates dignissimos magni repudiandae libero! Corrupti, quod. Cum eum ratione quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime facilis voluptate dolorem repudiandae? Consectetur nihil maxime sunt deleniti numquam!"
    const aboutMe_M = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, eius! Soluta laudantium officia aspernatur odio, ab numquam vitae, molestiae ea quis doloribus quos labore a! Ipsa adipisci at accusamus illum commodi sunt. Eveniet magnam porro corporis inventore quasi ipsum illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia possimus. Corrupti dolorum vitae aliquid facilis harum consectetur eligendi error quaerat vero totam distinctio quae reiciendis soluta, iure voluptatem blanditiis rerum mollitia. Provident non quasi possimus harum consequatur, fuga rem."
    const aboutMe_L = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus consectetur tempore, earum cumque ab vitae incidunt dignissimos voluptatibus officiis ut amet provident officia rerum aperiam sed ipsam a! Nisi voluptatibus consequatur est sint facere vero dolorum unde provident quam voluptatem, voluptatum sed ea distinctio, incidunt soluta eveniet reiciendis! Voluptatum in ipsam possimus neque veniam blanditiis architecto minima sit molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem rerum accusamus laboriosam libero deleniti voluptatem reiciendis, optio ad, molestiae nulla recusandae omnis mollitia iure cum, assumenda laborum eveniet in debitis reprehenderit eum dolore hic esse ipsam? Laboriosam mollitia architecto corporis odio error consequuntur exercitationem molestias optio dolores magni, fuga ea dolore vitae voluptates vero officiis deleniti similique minus sequi atque!"

    const [chosenCircle, setCircle] = useState(1);
    const [aboutMeText, setAboutMeText] = useState(aboutMe_M);

    const moveCircle_s = () => {
        setCircle(0);
        setAboutMeText(aboutMe_S);
    }
    const moveCircle_m = () => {
        setCircle(1);
        setAboutMeText(aboutMe_M);
    }
    const moveCircle_l = () => {
        setCircle(2);
        setAboutMeText(aboutMe_L);
    }


    return (
        <div className="aboutMe scroll">
            <h2 className="aboutMe_Title">About Me</h2>
            <div className="aboutMe_Options">
                <p className="aboutMe_Options-text">Adjust bio length</p>
                <div className="aboutMe_Options-select">
                    <FeGaussianBlur chosenCircle={chosenCircle}></FeGaussianBlur>
                    <div className="aboutMe_Options_All">
                        <button onClick={moveCircle_s}><div className="aboutMe_Options-B"></div></button>
                        <button onClick={moveCircle_m}><div className="aboutMe_Options-C"></div></button>
                        <button onClick={moveCircle_l}><div className="aboutMe_Options-D"></div></button>
                    </div>
                    <div className="aboutMe_Options-name">
                        <span>Brief</span><span>Concise</span><span>Detailed</span>
                    </div>
                </div>
            </div>
            <div className="aboutMe_Resume-Details">
                <a className="aboutMe_Resume" title='Download Resume' href="https://drive.google.com/uc?export=download&id=15qp_PkfOAorwwQ82sGYDQ1pAlqFC8cF7">
                    <img src={ResumeIcon} alt="Resume Icon" />
                    <box-icon name='cloud-download' type='solid' animation='fade-up' color='#ff4e00' size="50px"></box-icon>
                </a>
                
                <div className="aboutMe_details">{aboutMeText}</div>
            </div>
        </div>
    )
}

export default About;