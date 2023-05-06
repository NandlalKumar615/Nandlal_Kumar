import React from 'react';

import NameAndPhoto from './NameAndPhoto';
import Hello from './Hello';

import './Header.scss';



const Header=()=>{
    return (
        <div className='header scroll'>
            <NameAndPhoto></NameAndPhoto>
            <Hello></Hello>
        </div>
    );
}

export default Header;