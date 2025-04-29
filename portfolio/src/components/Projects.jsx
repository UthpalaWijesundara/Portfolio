import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const sliderRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: "Legal Case Managment System",
      description: "LegalXlk.com offers real-time gazette updates, task management, legal acts access, an AI legal assistant, and secure cloud-based document storage, streamlining legal workflows with AI insights.",
      technologies: ["React", "Springboot", "Firebase"],
      image: "/api/placeholder/500/300",
      link: "https://legalxlk.com/"
    },
    {
      id: 2,
      title: "Real Time Ticketing System",
      description: "Developed a real-time ticket booking system with Spring Boot and Angular, using OOP concepts and multithreading for seamless concurrent ticket purchases and vendor updates..",
      technologies: ["Angular", "Java", "Sprigboot"],
      image: "/api/placeholder/500/300",
      link: "https://github.com/UthpalaWijesundara/OOP-CW-"
    },
    {
      id: 3,
      title: "Climax",
      description: "Developed a dynamic webpage with HTML, CSS, and JavaScript, featuring an interactive image gallery and an SVG-based sitemap for visual site structure representation..",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/api/placeholder/500/300",
      link: "https://github.com/UthpalaWijesundara/Web-Dev-CW"
    },
    {
      id: 4,
      title: "Plane management System ",
      description: "Developed a Java-based Plane Management System for managing seat reservations, allowing users to buy,cancel, and search for seats with real-time seating plans.",
      technologies: ["Java"],
      image: "/api/placeholder/500/300",
      link: "https://github.com/UthpalaWijesundara/JavaCW"
    },
    {
      id: 5,
      title: "Figma UI/UX ",
      description: "Designed a user-friendly high-fidelity prototype for the Zero Hunger initiative, connecting food donors with recipients to combat food insecurity, seamlessly integrated with the Uber Eats app.",
      technologies: ["Figma"],
      image: "/api/placeholder/500/300",
      link: "https://www.figma.com/design/7ktpVD5lJNO0G0tqjOYIpj/High-Fidelity?node-id=0-1&t=hTlCEAnBXeU51Uep-1"
    },
    {
      id: 6,
      title: "University Progression Predictor ",
      description: "Designed and implemented a Python program to accurately predict progression outcomes, enhancing academic planning effciency.",
      technologies: ["Python"],
      image: "/api/placeholder/500/300",
      link: "https://github.com/UthpalaWijesundara/PythonCW"
    }
  ];

  const projectsPerView = 3;
  const totalProjects = projects.length;
  const maxIndex = totalProjects - projectsPerView;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (diff > 50 && currentIndex < maxIndex) {
      nextSlide();
      setTouchStartX(0);
    } else if (diff < -50 && currentIndex > 0) {
      prevSlide();
      setTouchStartX(0);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(0);
  };

  // Animation effect when component mounts
  useEffect(() => {
    const projectSection = document.querySelector('.projects-section');
    if (projectSection) {
      projectSection.classList.add('fade-in');
    }
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('slide-in');
      }, 150 * index);
    });
  }, []);

  // Update slider position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const translateValue = currentIndex * -100 / projectsPerView;
      sliderRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentIndex, projectsPerView]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="slider-container">
          <div className="slider-controls">
            <button 
              className={`slider-arrow prev ${currentIndex === 0 ? 'disabled' : ''}`} 
              onClick={prevSlide}
              aria-label="Previous projects"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="slider-pagination">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button 
                  key={index}
                  className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className={`slider-arrow next ${currentIndex === maxIndex ? 'disabled' : ''}`} 
              onClick={nextSlide}
              aria-label="Next projects"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div 
            className="projects-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-card-inner">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <a 
                        href={project.link} 
                        className="project-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;