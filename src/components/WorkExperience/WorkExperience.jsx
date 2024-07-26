import React from 'react';
import { FaBriefcase, FaCloud } from 'react-icons/fa';
import './WorkExperience.css';
import lr from '../../assets/lr.pdf'
const WorkExperience = () => {
  return (

    <section id='workexperiences' >
    <div className="work-experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"><FaCloud /></div>
          <div className="timeline-content">
            <h3>Cloud Engineer Intern</h3>
            <p></p>
            <p>Intern at Signify Innovations.</p>
            <p>
              
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaBriefcase /></div>
          <div className="timeline-content">
            <h3>Senior Frontend Intern</h3>
            <p>Jul 2023 - Dec 2023</p>
            <p>• Led two teams of 7 engineers each, achieving 100% on-time project deliveries.</p>
            <p>• Instrumental in developing Jurident website, contributing to a 30% increase in user engagement.</p>
            <p>• Provided training, enhancing team skills, resulting in a 70% improvement in project efficiency.</p>
            <p>
              <a href="https://media.licdn.com/dms/image/D562DAQF4mnFDy0xysw/profile-treasury-document-cover-images_480/0/1717333241872?e=1717941600&v=beta&t=5BOA-mU6LF9_AShQgjQ5pYJmdtCiJnctFnay2kNppcA" target="_blank" rel="noopener noreferrer">
              • View Certificate
              </a>
            </p>
            <p>
            
              <a href={lr} download  >• View Recommendation Letter </a>
   
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaBriefcase /></div>
          <div className="timeline-content">
            <h3>Junior Frontend Intern</h3>
            <p>May 2023 - Jul 2023</p>
            <p>Worked over the initial website of Jurident (Product of Valsco Technologies).</p>
            <p>
              <a href="https://media.licdn.com/dms/image/D562DAQHaV4JPo1zAbg/profile-treasury-document-cover-images_480/0/1717333301288?e=1717941600&v=beta&t=y1fUOjviPeSwuGRcs_pYcg6bP15JfSKk5D06tmtOqNQ" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WorkExperience;
