import './Experience.css'
import { Briefcase, MapPin, CalendarDays } from 'lucide-react'

const jobs = [
  {
    role: 'Software Engineer Intern',
    company: 'IFS',
    place: 'Colombo, Sri Lanka',
    period: 'Jul 2025 - Jul 2026',
    points: [
      'Developed and maintained backend workflow features using Java, PL/SQL and the Camunda workflow engine within IFS Cloud.',
      'Investigated and fixed backend issues in workflow execution, authentication and permissions.',
      'Improved the workflow REST task by handling API responses better, so users can see errors clearly.',
      'Integrated TechDocs into the workflow designer so version specific documentation opens inside the IFS app.',
      'Added JaCoCo coverage to SonarQube in the CI/CD pipelines to improve code quality reporting.',
      'Researched Camunda upgrades and migrated from the Nashorn JavaScript engine to GraalVM, validated with extensive testing.',
      'Acted as interim Scrum Master: ran sprint planning, daily stand ups and retrospectives, tracked in Jira and Bitbucket.',
      'Took part in code reviews and used Git and Bitbucket for version control.',
    ],
    tech: ['Java', 'PL/SQL', 'Camunda', 'Nashorn', 'SonarQube', 'JaCoCo', 'Jira', 'Bitbucket', 'Git','IFS Technology Stack'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="sec-title reveal"><span className="idx">02.</span> experience</h2>
        <div className="tl">
          {jobs.map((j) => (
            <div className="tl-item reveal" key={j.company}>
              <span className="tl-dot" />
              <div className="win">
                <div className="win-h"><Briefcase size={14} /><span>~/experience/{j.company.toLowerCase()}.log</span></div>
                <div className="exp-b">
                  <h3>{j.role} <span className="at">@ {j.company}</span></h3>
                  <p className="meta mono">
                    <span><CalendarDays size={13} /> {j.period}</span>
                    <span><MapPin size={13} /> {j.place}</span>
                  </p>
                  <ul className="pts">{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  <div className="exp-tags">{j.tech.map((t) => <span className="exp-tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}