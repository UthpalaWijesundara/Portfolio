import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">UW</span>
        </div>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')} className="nav-link">Home</a></li>
          <li><a onClick={() => scrollToSection('about')} className="nav-link">About</a></li>
          <li><a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;