import React from 'react';
import './About.css';
import { Code, BookOpen, Award } from 'lucide-react';
import Uthpala from "../assets/Uthpala.jpg";  // Adjust the relative path


const About = () => {
  return (
    
    <section id="about" className="about">
      <div className="grid-pattern"></div>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <div className="image-container">

            <img src={Uthpala} alt="A description of the image" />
              {/* You can replace this with your actual image */}
              
            </div>
          </div>
          <div className="about-text" data-aos="fade-left">
            <p>

           Hello I'm an ambitious and dedicated Computer Science student with a strong interest in UI/UX Development, building 
           modern web applications and exploring new technologies.a solid foundation in software development. Experienced in real-time applications, web development, and backend systems. Passionate about problem-solving, innovation, and collaboration. Eager to learn from industry experts and 
            contribute to impactful software solutions in a dynamic team environment.
          
            
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item" data-aos="zoom-in" data-aos-delay="100">
                <div className="highlight-icon">
                  <Code size={24} />
                </div>
                <div className="highlight-text">
                  <h3>Developer</h3>
                  <p>Building web applications with modern technologies</p>
                </div>
              </div>
              
              <div className="highlight-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="highlight-icon">
                  <BookOpen size={24} />
                </div>
                <div className="highlight-text">
                  <h3>Student</h3>
                  <p>Pursuing Computer Science with a focus on software development</p>
                </div>
              </div>
            
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;