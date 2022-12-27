import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImBlogger} from 'react-icons/im'
import {AiFillFacebook} from 'react-icons/ai'
import ShareLink from 'react-linkedin-share-link'



const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <ShareLink link='https://www.linkedin.com/in/rimanshu-rambhad-a38591175/'>

        {link => (
            <a href={link} target="_blank"><BsLinkedin/></a>
        )}
        </ShareLink>
       
        <a href="https://m.me/rimanshu.rambhad" target="_blank"><AiFillFacebook/></a>
        
        
        <a href="http://blogger.com" target="_blank"><ImBlogger/></a>

    </div>
  )
}

export default HeaderSocials