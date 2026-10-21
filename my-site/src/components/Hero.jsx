import ExternalLink from './ExternalLink.jsx'
import { contact, resumes } from '../data/links.js'

// Step 3 adds the transit map and "Pick your route" here.
export default function Hero() {
  return (
    <header id="top" className="section">
      <h1>Madhav Sabu</h1>
      <p className="pitch">
        I combine data science with business thinking to turn messy data into
        reliable insights and tools.
      </p>
      <p>
        Second-year Data Science &amp; Business student at Northeastern
        University, Boston. Looking for Spring 2027 co-ops (January to June
        2027) in data science, analytics, data engineering, AI/ML, computational
        biology, and finance-adjacent analytics.
      </p>

      <ul className="inline-list">
        <li><ExternalLink href={contact.github}>GitHub</ExternalLink></li>
        <li><ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink></li>
        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
      </ul>

      <p>
        <strong>Resume:</strong>{' '}
        {resumes.map((r, i) => (
          <span key={r.href}>
            {i > 0 && ' · '}
            <ExternalLink href={r.href}>{r.label}</ExternalLink>
          </span>
        ))}
      </p>
    </header>
  )
}
