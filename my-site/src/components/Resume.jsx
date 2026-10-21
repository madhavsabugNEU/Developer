import ExternalLink from './ExternalLink.jsx'
import { resumes } from '../data/links.js'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p>Choose the version that best matches the role:</p>
      <ul>
        {resumes.map((r) => (
          <li key={r.href}>
            <ExternalLink href={r.href}>{r.label} resume (PDF)</ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
