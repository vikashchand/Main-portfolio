import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
    <a href='https://www.linkedin.com/in/vikash-chand-9878471b8/' target="blank"> <BsLinkedin/> </a>
    
    <a href='https://github.com/vikashchand' target="blank"> <AiOutlineGithub/> </a>
    <a href='https://leetcode.com/vikashchand/' target="blank"> <SiLeetcode/> </a>
    
    </div>
    
  )
}

export default HeaderSocials