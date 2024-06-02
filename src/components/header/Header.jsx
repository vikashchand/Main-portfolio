import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';
import CTA from './CTA';
import Me from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';
import ParticleBackground from '../ParticleBackground';

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className="headers">
      <ParticleBackground isLightMode={isLightMode} /> {/* Add ParticleBackground component */}
    
      
      <div className="container header_container">
      <div className='intro'>
        <h5>Hello I'm</h5>
        <h1>Vikash Chand</h1>
        <h4 className="text-lig">FullStack Developer & Cloud Engineer</h4>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="Me">
          <img src={Me} alt="Me" />
          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
        <button onClick={toggleLightMode} className="toggle-btn">
          {isLightMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default Header;
