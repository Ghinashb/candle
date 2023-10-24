import React from 'react';
import candleimage from '../asset/candle.jpg';
import './Home.css';
import AboutUs from './AboutUs.js';
import { FaInstagram } from 'react-icons/fa';
import candleimage1 from '../asset/1.jpg';
import candleimage2 from '../asset/2.jpeg';
import candleimage3 from '../asset/3.jpeg';
import ContactUs from './ContactUs.js';

const Home = () => {
  return (
    <div>
      <div className="section-image">
        <img src={candleimage} alt="Candle" />
        <div className="text-overlay">
          <h1>Welcome to Our Candle website</h1>
          <p>Discover the magic of candlelight.</p>
        </div>
      </div>

      <div className="our-candles">
        <h2>Our Candles</h2>
        <div className="image-container">
          <div className="image">
            <img src={candleimage1} alt="Image1" />
            <a href="https://www.instagram.com/your_instagram_profile_link" target="_blank" rel="noopener noreferrer">
              <div className="instagram-icon"><FaInstagram /></div>
            </a>
          </div>
          <div className="image">
            <img src={candleimage2} alt="Image2" />
            <a href="https://www.instagram.com/your_instagram_profile_link" target="_blank" rel="noopener noreferrer">
              <div className="instagram-icon"><FaInstagram /></div>
            </a>
          </div>
          <div className="image">
            <img src={candleimage3} alt="Image3" />
            <a href="https://www.instagram.com/your_instagram_profile_link" target="_blank" rel="noopener noreferrer">
              <div className="instagram-icon"><FaInstagram /></div>
            </a>
          </div>
        </div>
      </div>

      <AboutUs />
      <ContactUs/>
    </div>
  );
};

export default Home;
