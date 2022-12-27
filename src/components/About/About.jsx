import React from 'react'
import './About.css'
import ME from '../../assets/me2.jpeg'
import { FaAward } from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'
import {GoLocation } from 'react-icons/go'

function about() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>


        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Qualification</h5>
              <small>PG in Advanced Computing</small>
            </article>

            <article className='about__card'>
              <FaCode className='about__icon' />
              <h5>Tech Stack</h5>
              <h6>Java</h6>
              <h6>React</h6>
              <h6>JavaScript</h6>
              
              <h6>Node.js</h6>
              <h6>Mysql</h6>
              

            </article>

            <article className='about__card'>
              <GoLocation className='about__icon' />
              <h5>Location</h5>
              <small>Mumbai</small>
            </article>
            
            
          </div>
          <p>
          A self-motivated and passionate individual who always thrive to work on different technologies and curious about everything to learn
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about
