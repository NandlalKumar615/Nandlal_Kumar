import React, {useRef,useEffect} from 'react';

import './EachLanguage.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const EachLanguage = (props) => {
    const per1 = (props.percentage/100*70)+"rem";
    const per2 = ((props.percentage/100*70)-3)+"rem";
    const fillRef = useRef(null);
    useEffect(()=>{
        const el = fillRef.current;
        gsap.fromTo(el,{width:0},{width:per1, duration:3, scrollTrigger:{
            trigger:".languageKnown",
            start:"top 80%",
            end:"bottom 10%",
            toggleActions:"restart reset restart reset",
            marker:true
        }})
    })

    const perRef = useRef(null);
    useEffect(()=>{
        const el = perRef.current;
        gsap.fromTo(el,{x:-30,opacity:0},{x:per2, opacity:1, duration:3, scrollTrigger:{
            trigger:".languageKnown",
            start:"top 80%",
            end:"bottom 10%",
            toggleActions:"restart reset restart reset"
        }})
    })

    return (
        <div className='eachLanguage'>
            <img className="eachLanguage-Logo" src={props.logo} alt="Programming Language Logo" />
            <div className="eachLanguage-Name-Percentage">
                <div className="eachLanguage-Name">{props.name}</div>
                <img className="eachLanguage-Percentage" src={props.percentageLogo} alt="Percentage" ref={perRef}/>
            </div>
            <div className="eachLanguage-Bar">
                <div className="eachLanguage-Bar-Fill" ref={fillRef}></div>
            </div>

        </div>
    );
}

export default EachLanguage;