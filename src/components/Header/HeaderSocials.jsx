import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImBlogger} from 'react-icons/im'
import {AiFillFacebook} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://facebook.com" target="_blank"><AiFillFacebook/></a>
        
        <a href="http://blogger.com" target="_blank"><ImBlogger/></a>

    </div>
  )
}

export default HeaderSocials