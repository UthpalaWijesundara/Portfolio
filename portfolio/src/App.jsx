import './App.css'
import { useEffect, useRef } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Education from './components/Education'

export default function App() {
  const glow = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    const mv = (e) => {
      if (glow.current) { glow.current.style.left = e.clientX + 'px'; glow.current.style.top = e.clientY + 'px' }
    }
    window.addEventListener('mousemove', mv)
    return () => { io.disconnect(); window.removeEventListener('mousemove', mv) }
  }, [])

  return (
    <>
      <div ref={glow} className="glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
