import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import './Hello.scss';

const Hello = () => {
    const [messageVisible, setMessageVisible] = useState(false);

    setTimeout(() => {
        setMessageVisible(true);
    }, 1700)


    return (
        <div className='welcomeScreen'>
            <p className='welcomeScreen-Hello'>Hello</p>
            {messageVisible && <div className='welcomeScreen-Message'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        "I'm a \n Learner",
                        1000,
                        "I'm a \n MERN Developer",
                        1000,
                        "I'm a \n Programmer",
                        1000,
                    ]}
                    speed={10}
                    style={{ whiteSpace: 'pre-line' }}
                    repeat={Infinity}
                />
            </div>}
        </div>
    );
}

export default Hello;


// <div className='welcomeScreen-Message'>
//                 <p className='welcomeScreen-Iam'>I'm a</p>
//                 <p className='welcomeScreen-Skill'>Web Developer</p>
//             </div>