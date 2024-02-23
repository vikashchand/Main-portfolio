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
    <h3>Bulk Email Marketing Webapp </h3>
   
   <div className='portfolio__item-cta'>
   <a href='https://www.youtube.com/watch?v=FXJXLNQZ7Kc&ab_channel=kekuriken' className='btn btn-primary'>  Video</a>
   <a href='https://email-marketing-software.vercel.app/' className='btn btn-primary'>  Demo</a>
   <a href='https://github.com/vikashchand/Email-Marketing-software' className='btn' >Github</a>
   
   
   </div>
    </article>


    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src="https://github.com/vikashchand/VITPYQ/assets/72156896/6ef1708f-13ef-4bfe-a0ed-fed37127afd4" alt='ml'/>
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
    <img src="https://private-user-images.githubusercontent.com/72156896/300228344-d71fd86b-3882-47a6-83ee-efe505a7c4a8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2OTA2MjAsIm5iZiI6MTcwODY5MDMyMCwicGF0aCI6Ii83MjE1Njg5Ni8zMDAyMjgzNDQtZDcxZmQ4NmItMzg4Mi00N2E2LTgzZWUtZWZlNTA1YTdjNGE4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIzVDEyMTIwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUyMGU4YzE2ZWYwNjQ5NmYzMWIwMmI2OWRkYzhkMzliYmNiZTBiMTBjNzVlY2ZlM2I0ZTMwNmJmZDY2ZTU4NmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._qyLgNczuH9-mXE5koiAQlORfrsefSr87x3R49vLiqs" alt='ml'/>
    </div>
    <h3>Resume Generator </h3>
   <div className='portfolio__item-cta'>
   <a href='https://resumegenius.vercel.app/' className='btn btn-primary'> Demo</a>
   <a href='https://github.com/vikashchand/Resume-Generator-' className='btn' >Github</a>
  
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

