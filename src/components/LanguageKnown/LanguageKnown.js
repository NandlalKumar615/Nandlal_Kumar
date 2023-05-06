import React from 'react';

import EachLanguage from './EachLanguage';

import './LanguageKnown.scss';

import c_logo from '../SVG/ProgrammingLanguageLogo/c.svg';
import cpp_logo from '../SVG/ProgrammingLanguageLogo/cpp.svg';
import javascript_logo from '../SVG/ProgrammingLanguageLogo/javascript.svg';
import python_logo from '../SVG/ProgrammingLanguageLogo/python.svg';
import kotlin_logo from '../SVG/ProgrammingLanguageLogo/kotlin.svg';

import p_90 from '../SVG/Percentage/P90.svg';
import p_80 from '../SVG/Percentage/P80.svg';
import p_70 from '../SVG/Percentage/P70.svg';


const LanguageKnown = () =>{
    return(
        <div className='languageKnown scroll'>
            <h2 className="languageKnown-Title">Language Known</h2>
            <EachLanguage logo ={c_logo} percentageLogo = {p_90} name = 'C' percentage = {90}></EachLanguage>  
            <EachLanguage logo ={cpp_logo} percentageLogo = {p_90} name = 'C++' percentage = {90}></EachLanguage>
            <EachLanguage logo ={javascript_logo} percentageLogo = {p_90} name = 'Javascript' percentage = {90}></EachLanguage>
            <EachLanguage logo ={python_logo} percentageLogo = {p_80} name = 'Python' percentage = {80}></EachLanguage>
            <EachLanguage logo ={kotlin_logo} percentageLogo = {p_70} name = 'Kotlin' percentage = {70}></EachLanguage>
        </div>
    )
}

export default LanguageKnown;