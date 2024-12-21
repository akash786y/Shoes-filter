import React from "react";
import './Hero.css'

function Hero({ img }) {
    console.log(img)
    return (
        <div className="hero-container">
            <img className="hero-image" src={img} alt="Food" />
        </div>
    )
}

export default Hero