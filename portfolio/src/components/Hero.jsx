import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { ChevronDown } from 'lucide-react';
import Uthpala from "../assets/Uthpala-CV.pdf";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const letters = title.textContent.split('');
    title.textContent = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.1}s`;
      span.className = 'hero-title-letter';
      title.appendChild(span);
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="grid-pattern"></div>
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up">
          
        <h1 className="hero-title">
        <span className="greeting">Hello, I'm</span>
        <span className="name" ref={titleRef}>
          Uthpala<span>&nbsp;</span>Wijesundara
        </span>
      </h1>

          <div className="hero-subtitle">
            <div className="typewriter">
              <span>Computer Science Student , UI/UX Designer , Full Stack Developer , Photographer</span>
              
            </div>
          </div>

          <div className="hero-cta">
  <a href={Uthpala} download="Uthpala-CV.pdf" className="btn primary-btn">
    Download My CV
  </a>
</div>

        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <span>Scroll Down</span>
          <ChevronDown size={24} className="scroll-icon" />
        </div>
        
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;