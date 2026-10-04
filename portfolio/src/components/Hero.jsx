import './Hero.css'
import { useEffect, useRef, useState } from 'react'
import { Download, ArrowRight } from 'lucide-react'
import cv from '../assets/Uthpala-CV.pdf'

const roles = ['Former Software Engineer Intern at IFS', 'Full Stack Developer', 'Computer Science Student', 'UI/UX Designer', 'Photographer']

function useTyped(words) {
  const [t, setT] = useState('')
  useEffect(() => {
    let w = 0, i = 0, del = false, id
    const tick = () => {
      const full = words[w]
      i += del ? -1 : 1
      setT(full.slice(0, i))
      let d = del ? 35 : 70
      if (!del && i === full.length) { del = true; d = 1400 }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 300 }
      id = setTimeout(tick, d)
    }
    tick()
    return () => clearTimeout(id)
  }, [words])
  return t
}

function Net() {
  const r = useRef(null)
  useEffect(() => {
    const c = r.current, x = c.getContext('2d')
    let W, H, raf, P = [], m = { x: -999, y: -999 }
    const N = 60
    const size = () => {
      W = c.width = c.offsetWidth; H = c.height = c.offsetHeight
      P = Array.from({ length: N }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }))
    }
    const mv = (e) => { const b = c.getBoundingClientRect(); m = { x: e.clientX - b.left, y: e.clientY - b.top } }
    const line = (a, b, col) => { x.strokeStyle = col; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke() }
    const draw = () => {
      x.clearRect(0, 0, W, H)
      P.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        x.fillStyle = 'rgba(34,211,238,.7)'; x.fillRect(p.x, p.y, 2, 2)
        for (let j = i + 1; j < N; j++) {
          const d = Math.hypot(p.x - P[j].x, p.y - P[j].y)
          if (d < 130) line(p, P[j], `rgba(34,211,238,${0.14 * (1 - d / 130)})`)
        }
        const dm = Math.hypot(p.x - m.x, p.y - m.y)
        if (dm < 160) line(p, m, `rgba(167,139,250,${0.5 * (1 - dm / 160)})`)
      })
      raf = requestAnimationFrame(draw)
    }
    size(); draw()
    window.addEventListener('resize', size)
    window.addEventListener('mousemove', mv)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); window.removeEventListener('mousemove', mv) }
  }, [])
  return <canvas ref={r} className="net" />
}

export default function Hero() {
  const role = useTyped(roles)
  const go = (e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <section id="hero" className="hero">
      <Net />
      <div className="container hero-grid">
        <div>
          <p className="mono cy">&gt; hello_world<span className="cur" /></p>
          <h1>Uthpala<br /><span className="grad">Wijesundara</span></h1>
          <p className="role mono">{role}<span className="cur" /></p>
          <p className="lead">Software engineer and final year Computer Science student at IIT Sri Lanka. I build full stack apps with Java, Spring Boot, React and PostgreSQL, and I have worked on backend workflow features inside IFS Cloud.</p>
          <div className="cta">
            <a className="btn solid" href="#projects" onClick={go}>View projects <ArrowRight size={16} /></a>
            <a className="btn" href={cv} download="Uthpala-CV.pdf"><Download size={16} /> Download CV</a>
          </div>
        </div>
        <div className="win">
          <div className="win-h"><i className="dot" style={{ background: '#ff5f57' }} /><i className="dot" style={{ background: '#febc2e' }} /><i className="dot" style={{ background: '#28c840' }} /><span>~/uthpala/portfolio</span></div>
<pre className="win-b">
<span className="mu">$</span> whoami{'\n'}<span className="g">uthpala_wijesundara</span>{'\n\n'}
<span className="mu">$</span> cat role.txt{'\n'}Software Engineer Intern @ IFS{'\n'}BSc CS (Final Year) @ IIT Sri Lanka{'\n\n'}
<span className="mu">$</span> cat stack.json{'\n'}
{'{'}{'\n'}  <span className="v">"backend"</span>: [<span className="g">"Java"</span>, <span className="g">"Spring Boot"</span>],{'\n'}  <span className="v">"frontend"</span>: [<span className="g">"React"</span>],{'\n'}  <span className="v">"database"</span>: <span className="g">"PostgreSQL"</span>{'\n'}{'}'}{'\n\n'}
<span className="mu">$</span> status{'\n'}<span className="g">●</span> building AeroOps, GeoDeed-NER<span className="cur" />
</pre>
        </div>
      </div>
    </section>
  )
}
