import React from 'react'
import './Experiences.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'
const Experiences = () => {
  return (
    <section id='experiences' >
    <h5>What Skills I Have </h5>

    <div className='container experience__container'>
    <div className='Web Developer'>
    <h3>Web Development</h3>
    <div className='experience__content'>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
   <div> <h4>MERN Stack</h4>
   <small className='light-text'>Basic</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div><h4>Git</h4>
    <small className='light-text'>Intemediate</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
   <div> <h4>Figma</h4>
   <small className='light-text'>Intermediate</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
   <div> <h4>Web 3.0</h4>
   <small className='light-text'>Basic</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div><h4>Bootstrap</h4>
    <small className='light-text'>Experienced</small></div>
    </article>


    </div>
    
    </div>


    <div className='Web Developer'>
    <h3>Other Technologies</h3>
    <div className='experience__content'>

    <article className='experience__details' >
    < BsFillPatchCheckFill  className='experience__details-icon'/>
   <div> <h4>Automation and Testing</h4>
   <small className='light-text'>Basic</small></div>
    </article>

    <article className='experience__details' >
    < BsFillPatchCheckFill  className='experience__details-icon'/>
    <div><h4>Software Engineering</h4>
    <small className='light-text'>Intemediate</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
   <div> <h4>c++</h4>
   <small className='light-text'>Intermediate</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
   <div> <h4>Research Papers</h4>
   <small className='light-text'>Basic</small></div>
    </article>

    <article className='experience__details' >
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div><h4>cloud</h4>
    <small className='light-text'>Experienced</small></div>
    </article>


    </div>
    
    </div>

    
    
    
    </div>


    </section>
  )
}

export default Experiences