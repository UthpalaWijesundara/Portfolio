import './NavBar.css'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['about', 'skills', 'projects', 'contact']

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [p, setP] = useState(0)

  useEffect(() => {
    const f = () => setP((window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`nav ${p > 1 ? 's' : ''}`}>
      <div className="container nav-in">
        <a href="#hero" className="logo" onClick={(e) => go(e, 'hero')}>&lt;UW<span>/</span>&gt;</a>
        <button className="mbtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul className={`links ${open ? 'open' : ''}`}>
          {links.map((l, i) => (
            <li key={l}><a href={`#${l}`} onClick={(e) => go(e, l)}><b>0{i + 1}.</b> {l}</a></li>
          ))}
        </ul>
      </div>
      <div className="bar" style={{ width: `${p}%` }} />
    </nav>
  )
}
