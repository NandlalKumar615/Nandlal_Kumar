import React from 'react';

import Photo from './Photo';
import Hello from './Hello';

import './Header.scss';



const Header=()=>{
    return (
        <div className='header'>
            <h1 className='header-MyName'>Nandlal Kumar</h1>
            <div className='header-Container'>
                <Photo></Photo>
                <Hello></Hello>
            </div>
        </div>
    );
}

export default Header;