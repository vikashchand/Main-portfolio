import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/images.jpg'
import IMG2 from '../../assets/whatsapp.jfif'
import IMG3 from '../../assets/teams.jpg'
import IMG4 from '../../assets/open.webp'
import IMG5 from '../../assets/android.jfif'
const Portfolio = () => {
  return (
    <section id="portfolio" >
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG1} alt='insta'/>
    </div>
    <h3>This is a Portfolio</h3>
    
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/instagram-automation' className='btn' >Github</a>
   <a href='https://www.linkedin.com/posts/vikash-chand28_python-testing-instagram-activity-6851639150903357440-Ptxm' className='btn btn-primary'> Demo</a>
   
   </div>
    </article>



    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG2} alt='whatsapp'/>
    </div>
    <h3>Whatsapp Spam Bot</h3>
    <div className='portfolio__item-cta'>
    <a href='https://github.com/vikashchand/whatsapp-spam-bot' className='btn' >Github</a>
    <a href='https://drive.google.com/file/d/1hulCMjioOOP9fxjiMpa6M1Z5r4oq0H_N/view?usp=sharing' className='btn btn-primary'> Demo</a>
    </div>
    </article>


    



    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG3} alt='Teams'/>
    </div>
    <h3>Team Automation</h3>
    <div className='portfolio__item-cta'>
    <a href='https://github.com/vikashchand/Microsoft-Teams-Login-Automation-main' className='btn' >Github</a>
    <a href='https://www.linkedin.com/posts/vikash-chand28_testing-microsoftteams-python-activity-6851641121106341888-O-T4' className='btn btn-primary'> Demo</a>
    </div>
    </article>




    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG4} alt='ml'/>
    </div>
    <h3>OpenCv</h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/ml' className='btn' >Github</a>
   <a href='https://www.linkedin.com/posts/vikash-chand28_ai-learning-connections-activity-6824054881020604416-v2AG/' className='btn btn-primary'> Demo</a>
   </div>
    </article>



    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG5} alt='android'/>
    </div>
    <h3>Android</h3>
    <div className='portfolio__item-cta'>
    <a href='https://github.com/vikashchand/instagram-automation' className='btn' >Github</a>
    <a href='https://www.linkedin.com/posts/vikash-chand28_python-testing-instagram-activity-6851639150903357440-Ptxm' className='btn btn-primary'> Demo</a>
    </div>
    </article>
    
    
    </div>
    
    
    </section>
  )
}

export default Portfolio

