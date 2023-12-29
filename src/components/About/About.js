import React, { useState } from 'react';

import './About.scss';
import FeGaussianBlur from '../../Images/SVGs/FeGaussianBlur.js';
import ResumeIcon from '../../Images/SVGs/Other/resume_icon.svg';

const About = () => {
    const aboutMe_S = "I am currently pursuing my B.Tech in CSE at IIIT Kota, proficiency in C/C++, JavaScript, Python, and Kotlin. I possess expertise in MERN full-stack web development, along with a strong foundation in OS, OOP, DBMS, and DSA. Additionally, I am skilled in Git/GitHub and Postman. I have solved 650+ programming questions, achieving Master League status in CodingNinjas, and garnering 9k+ views on Quora for my technical answers."
    const aboutMe_M = "I am pursuing a Bachelor of Technology in Computer Science and Engineering at IIIT Kota, anticipating graduation in June 2024. Proficient in C/C++, JavaScript, Python, and Kotlin, my expertise spans full-stack web development, utilizing technologies like HTML, CSS, JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, Sass, MySQL, Bootstrap, and API integration. With a solid foundation in computer science fundamentals, including Operating Systems, Computer Networks, OOP, DBMS, and DSA, I also excel in tools like Git/GitHub and Postman. Recognized for solving 650+ programming questions, achieving Master League in CodingNinjas, and receiving over 9,000 views on Quora for technical answers."
    const aboutMe_L = "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at the Indian Institute of Information Technology, Kota (IIIT Kota), with an expected graduation date in June 2024. \n\nIn terms of programming languages, I am proficient in C/C++, JavaScript, Python, and Kotlin. My expertise extends to full-stack web development, employing technologies such as HTML, CSS, JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, Sass, MySQL, Bootstrap, and API integration. I possess a solid foundation in computer science fundamentals, including Operating Systems, Computer Networks, Object-Oriented Programming, Database Management Systems, and Data Structures and Algorithms.\n\nMy skill set also encompasses the effective use of tools such as Git/GitHub and Postman. In addition to technical proficiency, I bring soft skills such as a strong work ethic, problem-solving abilities, effective communication, and a collaborative teamwork approach.\n\nIn recognition of my achievements, I have solved over 650 programming questions across different platforms and achieved Master League status in CodingNinjas. Moreover, my answers to technical questions on Quora have garnered more than 9,000 views."

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
        <div id='aboutSection' className="aboutMe">
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
                <a target='_blank' className="aboutMe_Resume" title='Download Resume' href="https://drive.google.com/file/d/1byWX9BDDXhi4Sbf3YmbTkhmsULA0vt0U/view?usp=sharing">
                    <img src={ResumeIcon} alt="Resume Icon" />
                    <box-icon name='cloud-download' type='solid' animation='fade-up' color='#ff4e00' size="50px"></box-icon>
                </a>
                
                <div className="aboutMe_details">{aboutMeText}</div>
            </div>
        </div>
    )
}

export default About;