import React, { useRef, useEffect } from "react";

import { gsap } from 'gsap';


const FeGaussianBlur = (props) => {
    const chose = props.chosenCircle * 120 + 9;
    const animateCircle = useRef(null);

    useEffect(() => {
        const el = animateCircle.current;
        const tl = gsap.timeline();
    
        tl.to(el, { scaleX: 1.3, scaleY: 0.7, duration: 0.2 })
            .to(el, { x: chose, duration: 0.7, ease: "expo" })
            .to(el, { scale: 1, duration: 0.2 })
    })

    return (
        <svg width="100" height="100" ref={animateCircle}>
            <defs>
                <filter id="blurMe">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>
            <circle cx="50" cy="50" r="35" fill="rgb(255,255,255,0.3)" filter="url(#blurMe)" />
        </svg>

    );
}

export default FeGaussianBlur;