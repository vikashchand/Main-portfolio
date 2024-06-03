import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';
import CTA from './CTA';
import Me from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';
import ParticleBackground from '../ParticleBackground';
import hi from '../../assets/vikbg.png';
import Rocket from '../../assets/rocket.png';  // Add a rocket image
import Sun from '../../assets/sun.png';  // Add a sun image

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [animate, setAnimate] = useState(false);

  const toggleLightMode = () => {
    setAnimate(true);
    setIsLightMode(!isLightMode);
    setTimeout(() => setAnimate(false), 1500);  // Reset animation after 1.5 seconds
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <section id='vik'>
      <div className="headers">
        <ParticleBackground isLightMode={isLightMode} />
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
          {animate && (
            <div className={`animation ${isLightMode ? 'launch' : 'launch'}`}>
              <img src={isLightMode ? Sun : Rocket} alt="Animation" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
