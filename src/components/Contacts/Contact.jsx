import React from 'react'
import './Contact.css'

import {MdEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact' >
    
    <h5>Get In Touch</h5>
    
    <h2>Contact Me</h2>

<div className='container contact__container'>

<div className='contact__options'>
<article className='contact__option'>
<MdEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>vikashchand147</h5>
<a href='mailto:vikashchand147@gmail.com'  >Send Mail</a>
</article>


<article className='contact__option'>
<BsTelegram className='contact__option-icon' />
<h4>Telegram</h4>
<h5>  @vikash_chand   </h5>
<a href='https://t.me/Vikash_chand' >Msg here</a>
</article>




</div>

</div>

    </section>
  )
}

export default Contact