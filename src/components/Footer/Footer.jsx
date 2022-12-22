import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {SlSocialTwitter} from 'react-icons/sl'
import {BsInstagram} from 'react-icons/bs'




function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#service">Activity</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://Linkedin.com"><BsLinkedin/></a>
        <a href="https://Twitter.com"><SlSocialTwitter/></a>
        <a href="https://Instagram.com"><BsInstagram/></a>
        </div>


      <div className="footer__copyright">
        <small>&copy;Rimanshu Rambhad. All rights reserved</small>

      </div>
    </footer>
  )
}

export default Footer