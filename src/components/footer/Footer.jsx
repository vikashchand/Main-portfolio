import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <a href='#'className='footer__logo'>Vikash Chand</a>

    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#About'>About</a></li>
    <li><a href='#workexperiences'>Experience</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
 
    </ul>




  <div className='footer__copyright'>
<small>&copy; VIKASH CHAND.All rights reserved 2024.

</small>  
  </div>  
    
    </footer>
  )
}

export default Footer