import './Projects.css'
import { useState } from 'react'
import { ExternalLink, Github, Scale, Plane, MapPinned, Coffee, Ticket, Palette, Globe, Terminal } from 'lucide-react'

const STATUS = { live: 'LIVE', wip: 'IN PROGRESS', done: 'COMPLETED' }
const TABS = ['All', 'Full Stack', 'AI & Data', 'Design', 'Software']

// TODO: add your own repo URLs where repo is empty. Cards hide buttons that have no link.
const projects = [
  { title: 'LegalXlk: Legal Case Management', cat: 'Full Stack', status: 'live', hue: 190, Icon: Scale, file: 'legalxlk.jsx',
    desc: 'Real-time gazette updates, task management, legal acts access, an AI legal assistant and secure cloud document storage for legal workflows.',
    tech: ['React', 'Spring Boot', 'Firebase'], links: [{ t: 'Live', u: 'https://legalxlk.com/' }] },

  { title: 'GeoDeed-NER (Final Year Project)', cat: 'AI & Data', status: 'wip', hue: 265, Icon: MapPinned, file: 'geodeed.py',
    desc: 'Hybrid NLP and spatial system that reads deed text, extracts boundary descriptions, builds polygons and detects land boundary conflicts across Sri Lanka\'s dual registry.',
    tech: ['Python', 'spaCy', 'PostGIS', 'Spring Boot', 'React', 'Leaflet'], links: [{ t: 'Code', u: '' }] },

  { title: 'AeroOps: Airline Operations Platform', cat: 'Full Stack', status: 'wip', hue: 215, Icon: Plane, file: 'AeroOps.java',
    desc: 'Airline operations platform covering flights, airports, aircraft and a live operations dashboard, built stage by stage on a modular monolith.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'], links: [{ t: 'Code', u: '' }] },

  { title: 'Kayaa Cafe', cat: 'Full Stack', status: 'live', hue: 25, Icon: Coffee, file: 'kayaacafe.jsx',
    desc: 'Cafe ordering website with customer checkout, an admin order dashboard, JWT and Google sign in, and email order confirmations.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'OAuth2'], links: [{ t: 'Live', u: 'https://kayaacafe.lk' }] },

  { title: 'Real Time Ticketing System', cat: 'Full Stack', status: 'done', hue: 150, Icon: Ticket, file: 'Ticketing.java',
    desc: 'Real-time ticket booking with OOP design and multithreading for concurrent ticket purchases and vendor updates.',
    tech: ['Angular', 'Java', 'Spring Boot'], links: [{ t: 'Code', u: 'https://github.com/UthpalaWijesundara/OOP-CW-' }] },

  { title: 'Zero Hunger UI/UX Prototype', cat: 'Design', status: 'done', hue: 330, Icon: Palette, file: 'zero-hunger.fig',
    desc: 'High fidelity prototype connecting food donors with recipients to fight food insecurity, integrated with the Uber Eats app.',
    tech: ['Figma', 'UX Research'], links: [{ t: 'Prototype', u: 'https://www.figma.com/design/7ktpVD5lJNO0G0tqjOYIpj/High-Fidelity?node-id=0-1&t=hTlCEAnBXeU51Uep-1' }] },

  { title: 'Climax', cat: 'Design', status: 'done', hue: 45, Icon: Globe, file: 'climax.html',
    desc: 'Dynamic website with an interactive image gallery and an SVG sitemap that visualises the site structure.',
    tech: ['HTML', 'CSS', 'JavaScript'], links: [{ t: 'Code', u: 'https://github.com/UthpalaWijesundara/Web-Dev-CW' }] },

  { title: 'Plane Management System', cat: 'Software', status: 'done', hue: 200, Icon: Plane, file: 'PlaneManager.java',
    desc: 'Java application for seat reservations: buy, cancel and search seats with a live seating plan.',
    tech: ['Java', 'OOP'], links: [{ t: 'Code', u: 'https://github.com/UthpalaWijesundara/JavaCW' }] },
    
  { title: 'University Progression Predictor', cat: 'Software', status: 'done', hue: 120, Icon: Terminal, file: 'predictor.py',
    desc: 'Python program that predicts student progression outcomes to make academic planning more efficient.',
    tech: ['Python'], links: [{ t: 'Code', u: 'https://github.com/UthpalaWijesundara/PythonCW' }] },
]

function Card({ p, i }) {
  const move = (e) => {
    const b = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - b.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - b.top}px`)
  }
  const links = p.links.filter((l) => l.u)
  return (
    <article className="pc" style={{ '--h': p.hue, animationDelay: `${i * 70}ms` }} onMouseMove={move}>
      <div className="cover">
        <p.Icon size={46} strokeWidth={1.3} />
        <span className="file mono">{p.file}</span>
        <span className={`badge ${p.status}`}>{STATUS[p.status]}</span>
      </div>
      <div className="pb">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        {links.length > 0 && (
          <div className="pl">
            {links.map((l) => (
              <a key={l.t} href={l.u} target="_blank" rel="noopener noreferrer">
                {l.t === 'Code' ? <Github size={14} /> : <ExternalLink size={14} />} {l.t}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? projects : projects.filter((p) => p.cat === tab)
  return (
    <section id="projects">
      <div className="container">
        <h2 className="sec-title reveal"><span className="idx">03.</span> projects</h2>
        <div className="filters reveal">
          {TABS.map((t) => (
            <button key={t} className={`fb ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="pgrid">
          {list.map((p, i) => <Card key={p.title + tab} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
