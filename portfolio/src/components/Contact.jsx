import './Contact.css'
import { useState } from 'react'
import { Phone, Mail, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react'

const EMAIL = 'uthpalawijesundara03@gmail.com'
const info = [
  { Icon: Phone, k: 'phone', v: '+94 779899764' },
  { Icon: Mail, k: 'email', v: EMAIL },
  { Icon: MapPin, k: 'location', v: 'Colombo, Sri Lanka' },
]
const socials = [
  { Icon: Linkedin, u: 'https://www.linkedin.com/in/uthpala-wijesundara/', l: 'LinkedIn' },
  { Icon: Github, u: 'https://github.com/UthpalaWijesundara', l: 'GitHub' },
  { Icon: Instagram, u: 'https://www.instagram.com/_.uthpala._', l: 'Instagram' },
]

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="sec-title reveal"><span className="idx">04.</span> contact</h2>
        <div className="ct-grid">
          <div className="reveal">
            <p className="lead">Have a project, an internship or just want to talk tech? My inbox is open.</p>
            {info.map(({ Icon, k, v }) => (
              <div className="ci" key={k}><Icon size={18} /><div><span className="mono">{k}</span><p>{v}</p></div></div>
            ))}
            <div className="soc">
              {socials.map(({ Icon, u, l }) => (
                <a key={l} href={u} target="_blank" rel="noopener noreferrer" aria-label={l}><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <form className="win reveal" onSubmit={submit}>
            <div className="win-h"><i className="dot" style={{ background: '#ff5f57' }} /><i className="dot" style={{ background: '#febc2e' }} /><i className="dot" style={{ background: '#28c840' }} /><span>new_message.sh</span></div>
            <div className="win-b form">
              <label><span>name:</span><input name="name" value={f.name} onChange={change} required /></label>
              <label><span>email:</span><input type="email" name="email" value={f.email} onChange={change} required /></label>
              <label><span>subject:</span><input name="subject" value={f.subject} onChange={change} required /></label>
              <label className="ta"><span>message:</span><textarea name="message" rows="5" value={f.message} onChange={change} required /></label>
              <button className="btn solid" type="submit">Send message <Send size={16} /></button>
              {sent && <p className="ok mono">&gt; opening your email app to send...</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
