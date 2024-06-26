import React from 'react'
import './Portfolio.css'
import nptel from '../../assets/nptel.png';
import vitpyq from '../../assets/vitpyq.png';
import ace from '../../assets/ace.png';
import job from '../../assets/jobsearch.png';
import gym from '../../assets/gym.png';
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
    <h3>Bulk Email Marketing Webapp </h3>
   
   <div className='portfolio__item-cta'>
   <a href='https://www.youtube.com/watch?v=FXJXLNQZ7Kc&ab_channel=kekuriken' className='btn btn-primary'>  Video</a>
   <a href='https://email-marketing-software.vercel.app/' className='btn btn-primary'>  Demo</a>
   <a href='https://github.com/vikashchand/Email-Marketing-software' className='btn' >Github</a>
   
   
   </div>
    </article>


    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={vitpyq} alt='ml'/>
    </div>
    <h3>Intelligent Question Paper Archive </h3>
   <div className='portfolio__item-cta'>
   
   <a href='https://www.youtube.com/watch?v=f41Y-V1nIlk&ab_channel=kekuriken' className='btn btn-primary'> Video</a>
   
   <a href='https://20mis.vercel.app/' className='btn btn-primary'> Demo</a>
   <a href='https://github.com/vikashchand/VITPYQ' className='btn' >Github</a>
   
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
    <img src={gym} alt='ml'/>
    </div>
    <h3>Gym website </h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/maxxfitness' className='btn' >Github</a>
   <a href='https://maxfitness.vercel.app/' className='btn btn-primary'> Demo</a>
   </div>
    </article>



    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={ace}/>
    </div>
    <h3>Ace Interview </h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/Ace-Interview' className='btn' >Github</a>
   <a href='https://ace-interview.vercel.app/' className='btn btn-primary'> Demo</a>
   </div>
    </article>




    









        
    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
   
    <img src={nptel}/>
    </div>
    <h3>Nptel quiz </h3>
   <div className='portfolio__item-cta'>
   <a href='https://nptelquiz.vercel.app/' className='btn btn-primary'> Demo</a>
   <a href='https://github.com/vikashchand/nptel' className='btn' >Github</a>
  
   </div>
    </article>


    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={job}/>
    </div>
    <h3>JOB SEARCH MOBILE APP</h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/vikashchand/jobsearch' className='btn' >Github</a>
   <a href='https://github.com/vikashchand/jobsearch/blob/main/application-bb77da36-7c6f-475e-86ed-fae9e122867a.apk' className='btn btn-primary'> install</a>
   <a href='https://www.linkedin.com/posts/vikash-chand28_react-activity-7210997289266335745-6BVS?utm_source=share&utm_medium=member_desktop' className='btn btn-primary'> video</a>
   </div>
    </article>


    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src="https://user-images.githubusercontent.com/72156896/273646740-0276e4f1-e3b5-4f10-bfb6-05fc56d090f3.png"alt='Teams'/>
    </div>
    <h3>SeniorGuardian Webapp</h3>
    <div className='portfolio__item-cta'>
    <a href='https://www.linkedin.com/posts/vikash-chand28_hey-folks-i-completed-my-new-web-app-project-activity-7117192598745718786-k4sr?utm_source=share&utm_medium=member_desktop' className='btn' >Video</a>
    <a href='https://senior-guardian.vercel.app/' className='btn btn-primary'> Demo</a>
    <a href='https://github.com/vikashchand/SeniorGuardian' className='btn' >Github</a>
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

