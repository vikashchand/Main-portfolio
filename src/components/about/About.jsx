import React from 'react'
import './About.css'
import Me from '../../assets/vikbg.png'
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


    <article className='about__card'>
    <MdSchool   className='  about__icon  fa-icon '/>

    <br></br>
   
    <h5>Certification 1</h5>
    
    <small>  <a href='https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=LL/kc9aLl4ycnEsF2BO64g=='>Microsoft Azure</a>     </small>
    
    </article>

    <article className='about__card'>
    <MdSchool   className='  about__icon  fa-icon '/>

    <br></br>
   
    <h5>Certification 2</h5>
    
    <small> <a href='https://www.credly.com/badges/abdf606e-da2f-44ee-8f6b-64d2fa647d7b?source=linked_in_profile'> Cisco Introduction to Cybersecurity</a> </small>
    
    </article> 
    
    <article className='about__card'>
    <MdSchool   className='  about__icon  fa-icon '/>

    <br></br>
   
    <h5>Certification 3</h5>
    
    <small><a href='https://www.coursera.org/account/accomplishments/verify/T9VKNW8FH5XH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'>AI Fundamentals by Coursera</a> </small>
    
    </article>

    <article className='about__card'>
    <MdSchool   className='  about__icon  fa-icon '/>

    <br></br>
   
    <h5>Certification 4</h5>
    
    <small><a href='https://www.cloudskillsboost.google/public_profiles/eefd2a13-9b6a-4388-8be3-aeb81f260d33/badges/947904'>Google Cloud Essentials</a> </small>
    
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