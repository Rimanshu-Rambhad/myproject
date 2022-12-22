import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Skills</h2>
    
    <div className='container experience__container'>
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            
          <article className='experience__detials'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            
            <div><h4>React</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div><h4>JavaScript</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div><h4>Node.js</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>HTML</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>Bootstrap </h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>CSS</h4></div>
          </article>
          
          </div>
        
      </div>
          {/*end of front end*/}


      <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            
          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>Java</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>Springboot</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>Node.js</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>J2EE</h4> </div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>Oracle</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>MySql</h4></div>
          </article>

          <article className='experience__detials'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>MongoDB</h4></div>
          </article>
          
          </div>
        
      </div>
      
    </div>


    </section>
  )
}

export default Experience 