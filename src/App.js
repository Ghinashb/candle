import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Header from './pages/Header.js';
import Footer from './pages/Footer.js'; 
import AboutUs from './pages/AboutUs.js'
import ContactUs from './pages/ContactUs.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
