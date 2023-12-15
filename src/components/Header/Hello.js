import React from 'react';

import './Hello.scss';

const Hello=()=>{
    return(
        <div className='welcomeScreen'>
            <p className='welcomeScreen-Hello'>Hello</p>
            {/* <div className='welcomeScreen-Container'>
                <p className='welcomeScreen-Iam'>I'm a</p>
                <p className='welcomeScreen-Skill'>Web Developer</p>
            </div> */}
        </div>
    );
}

export default Hello;