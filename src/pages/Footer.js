import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-namelogo">
          <h1 className="footer-title">Candles</h1>
          <p className="footer-description">
            Discover the beauty and warmth of candlelight with our exquisite collection.
          </p>
        </div>
        <div className="social-links">
        <p className="visit-us">Visit us on social media:</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" /> 
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> 
          </a>
        </div>
      </div>
      <div className="footer-text">
        <p className="copyright">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
