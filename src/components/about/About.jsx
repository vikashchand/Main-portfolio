import React from 'react'
import './About.css'
import Me from '../../assets/profile.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {BsNewspaper} from 'react-icons/bs'

import {MdSchool} from 'react-icons/md'


// <div className='about__me'>
   
//     <div className='about__me-image'>
//     <h6>Hover over me</h6>
    
//     <img src={Me} alt='hi'/>
    
//     </div>
//     </div>

const About = () => {
  return (
    <section id='about' >
    <h5>Get To Know</h5>
    <h2>About Me</h2>
  
    <div className='container about__container'>
    <div className='about__me'>
 
    <div className='about__me-image  '>
   

    <img src={Me} alt='hi'/>
    
    </div>
    
    </div>

    
    <div className='about__content'>
    <div className='about__cards'>
    <article className='about__card '>

    

  
  
    <BsFillAwardFill className='  about__icon  fa-icon '/>

    <br></br>
   
   
    <h5>Experience</h5>
    <small>2+ Years Working</small>
  
    </article>

    <article className='about__card'>
    <MdWork   className='  about__icon  fa-icon '/>

    <br></br>
   

    <h5>Projects</h5>
    
    <small>10+</small>
    
    </article>

    

    <article className='about__card'>
    <MdSchool   className='  about__icon  fa-icon '/>

    <br></br>
   
    <h5>Profile</h5>
    <small>Mtech in SWE</small>
    
    </article>

    <article className='about__card'>
    <BsNewspaper   className='  about__icon  fa-icon '/>

    <br></br>
   

    <h5>Research Paper</h5>
    <small> <a href='https://link.springer.com/chapter/10.1007/978-3-031-27524-1_18' > Drowsiness Detection</a></small>
    
    </article>

    </div>
    <p>Just a dog lover and a developer who loves doing random projects just to quench the fire of learning new skills.
    umm i am much interested in becoming a block chain developer and also loves reading about cybersecurity ,hehe yeah i am a script kiddie too 👨‍💻😁.
    
    </p>

  
<a href='#contact' className='btn btn-primary'>Let's Code</a>


    </div>

    </div>
    

    </section>
  )
}

export default About