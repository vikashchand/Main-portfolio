import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
const[activeNav,setActiveNav]=useState('#')

  return (
   <nav>
   <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}> <AiOutlineHome/> </a>
   <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''} > <AiOutlineUser/> </a>
   <a href='#experiences' onClick={()=>setActiveNav('#experiences')} className={activeNav==='#experiences'?'active':''}> <AiOutlineBook/>  </a>
   <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#Portfolio'?'active':''}> <RiServiceLine/> </a>
   <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}> <BiMessageSquareDetail/> </a>


   
   </nav>
  )
}

export default Nav