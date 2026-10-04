import './Education.css'
import { GraduationCap, School, BadgeCheck, Trophy } from 'lucide-react'

const cards = [
  {
    Icon: GraduationCap, file: 'degree.md',
    title: 'BSc (Hons) Computer Science',
    sub: 'Informatics Institute of Technology (IIT), University of Westminster, UK',
    period: '2023 - Present',
    groups: [
      ['Level 4', ['Mathematics for Computing', 'Computer Systems Fundamentals', 'Software Development I', 'Software Development II', 'Trends in Computer Science', 'Web Design and Development']],
      ['Level 5', ['Object Oriented Programming', 'Database Systems', 'Software Development Group Project', 'Data Structures and Algorithms', 'Client Server Architecture', 'Human Computer Interaction']],
      ['Level 6', ['Applied AI', 'Computer Science Final Project', 'Usability Testing and Evaluation', 'Cyber Security', 'Digital marketing, Social Media and Web Analytics']],
    ],
  },
  {
    Icon: School, file: 'school.md',
    title: 'Royal College, Colombo 07',
    sub: 'G.C.E Ordinary Level (2019) and Advanced Level (2023)',
    period: '2010 - 2023',
    bullets: [
      'Focus 2021 All Island Photography Competition: 3rd place, Inner School Monochrome',
      'Top Board Member, Royal College Photography Society',
      'Member of the Royal College Squash Team',
    ],
  },
  {
    Icon: BadgeCheck, file: 'certificates.md',
    title: 'Certificates',
    groups: [['', ['React Essential Learning', 'Java Object Oriented Programming', 'Google Cloud Platform Essential Training for Developers', 'Git Essential Training', 'MySQL Essential Training']]],
  },
//   {
//     Icon: Trophy, file: 'achievements.md',
//     title: 'Achievements',
//     bullets: [
//       'Focus 2021 All Island Photography Competition: 3rd place, Inner School Monochrome',
//       'Top Board Member, Royal College Photography Society',
//       'Member of the Royal College Squash Team',
//     ],
//   },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="sec-title reveal"><span className="idx">03.</span> education</h2>
        <div className="edu-grid">
          {cards.map(({ Icon, file, title, sub, period, groups, bullets }, i) => (
            <div className="win edu-card reveal" key={file} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="win-h"><Icon size={14} /><span>~/{file}</span></div>
              <div className="edu-b">
                <h3>{title}</h3>
                {sub && <p className="edu-sub">{sub}</p>}
                {period && <p className="edu-period mono">{period}</p>}
                {groups && groups.map(([label, items]) => (
                  <div className="edu-g" key={label || 'all'}>
                    {label && <h4>{label}</h4>}
                    <div className="edu-chips">{items.map((m) => <span className="edu-chip" key={m}>{m}</span>)}</div>
                  </div>
                ))}
                {bullets && <ul className="edu-list">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}