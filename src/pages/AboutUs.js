import React from 'react';
import backgroundImage from '../asset/candle.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
     
        <h1>About Us</h1>
      <div className="about-us-content">
        
        <div className="about-us-text">
          
          <p>
          At Candles, we're dedicated to crafting exquisite candles that transform ordinary moments into extraordinary experiences. Our hand-poured candles are made with love, care, and the finest natural ingredients. Explore our collection and let the gentle glow of our candles illuminate your life.
          </p>
        </div>
        <div className="about-us-image">
          <img src={backgroundImage} alt="About Us Background" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
