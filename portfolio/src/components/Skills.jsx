import { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState([]);
  const skillsRef = useRef(null);
  
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React"},
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "Angular" },
        { name: "CSS" }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Java", },
        { name: "Python" },
        { name: "Springboot" },
        { name: "Firebase" },
        { name: "MYSQL" }
      ]
    },
    {
      id: 3,
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub" },
        { name: "Docker"},
        { name: "Figma" },
        { name: "Adobe Lightroom"},
        { name: "GCP" }
      ]
    }
  ];

  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const categoryId = parseInt(entry.target.dataset.id);
              if (!visibleCategories.includes(categoryId)) {
                setVisibleCategories(prev => [...prev, categoryId]);
              }
              observer.unobserve(entry.target);
            }
          });
        },
        
      );

      const categoryElements = document.querySelectorAll('.skill-category');
      categoryElements.forEach(element => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = observeElements();

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [visibleCategories]);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="skills-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">
          My Skills
          
        </h2>
        
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="skill-category"
              data-id={category.id}
              data-visible={visibleCategories.includes(category.id)}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ 
                      animationDelay: `${skillIndex * 200}ms` 
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                   
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;