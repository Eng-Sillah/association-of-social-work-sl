// Hero.js
import React from 'react';
import './Hero.css'; // Import the CSS file
import image01 from "../../image/hero-01.jpeg"
import image02 from "../../image/hero-02.jpeg"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay top-right">
        <img src={image01} alt="Top Right" />
      </div>
      <div className="overlay bottom-left">
        <img src={image02} alt="Bottom Left" />
      </div>
      <div className="hero-content">
        <h1>Welcome to the Sierra Leone Association of Social Workers (SLASW)</h1>
        <p>The independent professional membership organisation for social work across Sierra Leone</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
