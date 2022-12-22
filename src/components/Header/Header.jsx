import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me4.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h2>Welcome to my Website</h2>
        <h4>Hello I am</h4>
        <h2>Rimanshu Rambhad</h2>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="ME" />
        </div>

        

      </div>
    </header>
  )
}

export default Header