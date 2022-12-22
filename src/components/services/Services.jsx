import React from 'react'
import './services.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

function Services() {
  return (
    <section id='service'>
      <h2>Extra Curricular Activities</h2>

      <div className='container s__container'>
      
        
          <div className="s__content">
            
          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Public Speaking</h4></div>
          </article>

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Associated with various NGO's</h4></div>
          </article>

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Mentoring others</h4></div>
          </article>

          <article className='s__detials'>
            <BsFillPatchCheckFill className='s__details-icon'/>
            <div><h4>Sports</h4></div>
          </article>

          
          
       
    </div>
</div>
    </section>
  
  )
}

export default Services