import './About.css'
import { Code, BookOpen } from 'lucide-react'
import photo from '../assets/Uthpala.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="sec-title reveal"><span className="idx">01.</span> about_me</h2>
        <div className="about-grid">
          <div className="photo reveal">
            <img src={photo} alt="Uthpala Wijesundara" />
            <i className="c tl" /><i className="c tr" /><i className="c bl" /><i className="c br" /><span className="scan" />
          </div>
          <div className="reveal">
            <p className="lead">
              Motivated and adaptable Computer Science undergraduate at IIT Sri Lanka with professional software engineering experience at IFS Sri Lanka. 
              Experienced in Java, Spring Boot, RESTful APIs,React, PostgreSQL, and full stack application development, 
              with hands on experience building and deploying real world software solutions. Currently expanding my expertise in iOS development,
              modern backend technologies, and DevOps practices. A continuous learner with a strong passion
              for emerging technologies, problem solving, and developing practical, scalable software solutions.
            </p>
            <div className="win">
              <div className="win-h"><i className="dot" style={{ background: '#ff5f57' }} /><i className="dot" style={{ background: '#febc2e' }} /><i className="dot" style={{ background: '#28c840' }} /><span>profile.js</span></div>
              <pre className="win-b">
<span className="v">const</span> uthpala = {'{'}{'\n'}  role: <span className="g">"Final Year BSc CS Student"</span>,{'\n'}  intern: <span className="g">"IFS (2025 - 2026)"</span>,{'\n'}  focus: [<span className="g">"Full Stack"</span>, <span className="g">"Backend"</span>, <span className="g">"UI/UX"</span>],{'\n'}  also: <span className="g">"Photographer"</span>{'\n'}{'}'};
              </pre>
            </div>
            <div className="hl">
              <div><Code size={20} /><h3>Software Engineer Intern</h3><p>Backend Framework and Dev Tools Team At IFS </p></div>
              <div><BookOpen size={20} /><h3>Student</h3><p>Computer Science with a focus on software development</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
