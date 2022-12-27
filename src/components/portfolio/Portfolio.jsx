import React from 'react'
import './portfolio.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

/*achievments*/
const Portfolio=() =>{
  return (
    <section id='portfolio'>
      <h2>Position of Responsibility and Achievements</h2>

      <div className='container s__container'>
      
        
          <div className="s__content">

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Handled a team of 20 people and successfully delivered
               the project before the deadline</h4></div>
          </article>
  
            
          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Awarded the best employee in the previous organisation</h4></div>
          </article>

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Sports Committee head in college</h4></div>
          </article>

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Captain of the school cricket team</h4></div>
          </article>

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Volunteer for a NGO</h4></div>
          </article>
    </div>
    </div>
      </section>
  )
}

export default Portfolio