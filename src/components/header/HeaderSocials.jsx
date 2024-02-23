import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'

import {FaYoutube,FaMedium,FaResearchgate} from 'react-icons/fa'
const HeaderSocials = () => {
  return (  
    <div className='Header__socials '>
    <a href='https://www.linkedin.com/in/vikash-chand-9878471b8/' target="blank"> <BsLinkedin className='fadd'/> </a>
    
    <a href='https://github.com/vikashchand' target="blank"> <AiOutlineGithub className='fadd'/> </a>
    <a href='https://leetcode.com/vikashchand147' target="blank"> <SiLeetcode className='fadd'/> </a>
    <a href='https://www.youtube.com/@kekuriken' target="blank"> <FaYoutube className='fadd'/> </a>
    <a href='https://medium.com/@vikashchand147' target="blank"> <FaMedium className='fadd'/> </a>
    <a href='https://www.researchgate.net/profile/Vikash-Chand' target="blank"> <FaResearchgate className='fadd'/> </a>
    </div>

  )
}

export default HeaderSocials