import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header>
   
   <div className='container header_container'>
   <h5>Hello I'm</h5>
   <h1>Vikash Chand</h1>
   <h5 className="text-light">Frontend Developer </h5>
   <CTA/>
   <HeaderSocials/>
   
   <div className='Me'>
   <img src={Me}alt='Me'/>
   <a href='#contact' className="scroll_down">Scroll Down</a>

   </div>



   </div>
   </header>
  )
}

export default Header