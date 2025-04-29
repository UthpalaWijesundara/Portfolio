import React, { useEffect } from 'react';
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from './Components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Contact/>
      </main>
      <Footer/>  
    </div>
  );
}

export default App;