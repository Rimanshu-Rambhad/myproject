import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {SiGooglemessages} from 'react-icons/si'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active' : ''}><BiBookBookmark/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav === '#service'?'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active' : ''}><SiGooglemessages/></a>
    </nav>
  )
}

export default Nav