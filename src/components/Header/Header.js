import React from 'react';

import NameAndPhoto from './NameAndPhoto';

import './Header.scss';



const Header=()=>{
    return (
        <div className='header'>
            <NameAndPhoto></NameAndPhoto>
        </div>
    );
}

export default Header;