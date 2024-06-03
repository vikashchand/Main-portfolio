import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY + window.innerHeight / 2;
      let currentSectionId = activeNav;

      sections.current.forEach(section => {
        const { offsetTop, offsetHeight, id } = section;
        if (currentScroll >= offsetTop && currentScroll < offsetTop + offsetHeight) {
          currentSectionId = `#${id}`;
        }
      });

      if (currentSectionId !== activeNav) {
        setActiveNav(currentSectionId);
      }
    };

    document.querySelectorAll('section').forEach(section => {
      sections.current.push(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeNav]);

  return (
    <nav>
      <a href="#vik" onClick={() => setActiveNav('#vik')} className={activeNav === '#vik' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
     
      <a href="#workexperiences" onClick={() => setActiveNav('#workexperiences')} className={activeNav === '#workexperiences' ? 'active' : ''}>
        <AiOutlineBook />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
      <AiOutlineUser />
    </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaLaptopCode />
      </a>
    </nav>
  );
};

export default Nav;
