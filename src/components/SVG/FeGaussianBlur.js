import React from "react";

const FeGaussianBlur = () => {
    return (
        <div>
            <svg width="30rem" height="10rem">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    </filter>
                </defs>
                <circle cx="5rem" cy="5rem" r="4rem" fill="rgba(255,255,255,0.5)" filter="url(#blurMe)"/>
                <circle cx="5rem" cy="5rem" r="4rem" fill="rgba(255,255,255,0.5)" filter="url(#blurMe)"/>
            </svg>
        </div>
    );
}

export default FeGaussianBlur;