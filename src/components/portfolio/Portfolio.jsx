import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio" >
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    
    <img src="https://user-images.githubusercontent.com/72156896/249348558-9aea678b-b3ff-46fc-833c-dfb3aaa5a6f7.png" alt='insta'/>
    </div>
    <h3>Email Marketing Webapp </h3>
   
   <div className='portfolio__item-cta'>
   
   <a href='https://github.com/vikashchand/Email-Marketing-software' className='btn' >Github</a>
   <a href='https://email-marketing-software.vercel.app/' className='btn btn-primary'> Live Demo</a>
   
   </div>
    </article>



    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src="https://user-images.githubusercontent.com/72156896/222986929-cf2c5917-16c4-4002-bee0-69c4a82aeb0a.png" alt='whatsapp'/>
    </div>
    <h3>Music Webapp</h3>
    <div className='portfolio__item-cta'>
    <a href='https://github.com/vikashchand/musicplayer' className='btn' >Github</a>
    <a href='https://musicplayer-livid.vercel.app/' className='btn btn-primary'> Demo</a>
    </div>
    </article>


    



    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src="https://user-images.githubusercontent.com/72156896/253093723-345aab30-6a88-49c3-88fc-a0f73cd188b4.png"alt='Teams'/>
    </div>
    <h3>Pizza booking webapp</h3>
    <div className='portfolio__item-cta'>
    <a href='https://github.com/vikashchand/oibsip_taskno3_pizzawebapp' className='btn' >Github</a>
    <a href='https://vikashpizza.vercel.app/' className='btn btn-primary'> Demo</a>
    </div>
    </article>




    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src="https://user-images.githubusercontent.com/72156896/253094550-94d6ad23-0a90-4e8a-bd4e-c90b731bd64d.png" alt='ml'/>
    </div>
    <h3>Chatgpt Prompts </h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/posting-prompt' className='btn' >Github</a>
   <a href='https://posting-prompt.vercel.app/' className='btn btn-primary'> Demo</a>
   </div>
    </article>
  
    
    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src="https://user-images.githubusercontent.com/72156896/254686248-d94574b1-6c3c-4f57-b553-8cf17c606319.png" alt='ml'/>
    </div>
    <h3>QuickWapp </h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/QuickWhatsapp' className='btn' >Github</a>
   <a href='https://quick-whatsapp.vercel.app/' className='btn btn-primary'> Demo</a>
   </div>
    </article>





   


    
    
    </div>
    
    
    </section>
  )
}

export default Portfolio

