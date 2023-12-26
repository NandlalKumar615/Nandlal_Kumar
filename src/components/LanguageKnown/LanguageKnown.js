import React from 'react';

import EachLanguage from './EachLanguage';

import './LanguageKnown.scss';

import c_logo from '../../Images/SVGs/ProgrammingLanguageLogo/c.svg';
import cpp_logo from '../../Images/SVGs/ProgrammingLanguageLogo/cpp.svg';
import javascript_logo from '../../Images/SVGs/ProgrammingLanguageLogo/javascript.svg';
import python_logo from '../../Images/SVGs/ProgrammingLanguageLogo/python.svg';
import kotlin_logo from '../../Images/SVGs/ProgrammingLanguageLogo/kotlin.svg';

import p_90 from '../../Images/SVGs/Percentage/P90.svg';
import p_80 from '../../Images/SVGs/Percentage/P80.svg';
import p_70 from '../../Images/SVGs/Percentage/P70.svg';


const LanguageKnown = () =>{
    return(
        <div id='languageKnownSection' className='languageKnown'>
            <h2 className="languageKnown-Title">Language Known</h2>
            <EachLanguage logo ={cpp_logo} percentageLogo = {p_90} name = 'C++' percentage = {90}></EachLanguage>
            <EachLanguage logo ={c_logo} percentageLogo = {p_90} name = 'C' percentage = {90}></EachLanguage>  
            <EachLanguage logo ={javascript_logo} percentageLogo = {p_90} name = 'Javascript' percentage = {90}></EachLanguage>
            <EachLanguage logo ={python_logo} percentageLogo = {p_80} name = 'Python' percentage = {80}></EachLanguage>
            <EachLanguage logo ={kotlin_logo} percentageLogo = {p_70} name = 'Kotlin' percentage = {70}></EachLanguage>
        </div>
    )
}

export default LanguageKnown;