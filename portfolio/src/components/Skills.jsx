import './Skills.css'
import { Layout, Server, Wrench } from 'lucide-react'

const groups = [
  { file: 'frontend', Icon: Layout, items: ['React', 'JavaScript', 'HTML', 'CSS', 'Angular'] },
  { file: 'backend', Icon: Server, items: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { file: 'tools', Icon: Wrench, items: ['Git / GitHub', 'Docker', 'Figma', 'Adobe Lightroom', 'GCP'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="sec-title reveal"><span className="idx">02.</span> skills</h2>
        <div className="sk-grid">
          {groups.map(({ file, Icon, items }, i) => (
            <div className="win reveal" key={file} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="win-h"><Icon size={14} /><span>~/{file}</span></div>
              <ul className="win-b chips">
                {items.map((s) => <li key={s}><b>$</b> {s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
