import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Candles</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
