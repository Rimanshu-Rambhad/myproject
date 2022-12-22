import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { SiWhatsapp } from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bmzc66k', 'template_vc1q076', form.current, 'q3DAnIC3ejQSw50BX')

    e.target.reset()
     
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">

        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>

            <h4>Email</h4>
            <h5>rrambhad1@gmail.com</h5>
            <a href="mailto:rrambhad1@gmail.com" target="_blank">Send a message</a>
          </article>


          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rimanshu Rambhad</h5>
            <a href="https://m.me/rimanshu.rambhad" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=918097640364" target="_blank">Send a message</a>
          </article>


        </div>
        {/*end of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Please enter your name' required />
          <input type="email" name='email' placeholder='Please enter your Email id'required />
          <textarea name="message" rows="7" placeholder='Please enter your Message here' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact