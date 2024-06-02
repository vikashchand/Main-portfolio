import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {FaLaptopCode} from 'react-icons/fa';
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
const[activeNav,setActiveNav]=useState('#')

  return (
   <nav>
   <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}> <AiOutlineHome/> </a>
   <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''} > <AiOutlineUser/> </a>
   <a href='#workexperiences' onClick={()=>setActiveNav('#workexperiences')} className={activeNav==='#experiences'?'active':''}> <AiOutlineBook/>  </a>
   <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#Portfolio'?'active':''}> <FaLaptopCode/> </a>
  

   
   </nav>
  )
}

export default Nav