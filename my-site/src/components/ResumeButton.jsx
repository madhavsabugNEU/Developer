import ExternalLink from './ExternalLink.jsx'
import { resumes } from '../data/links.js'

// With a resume id, links straight to that version.
// Without one, opens a small menu with all three versions.
export default function ResumeButton({ resumeId }) {
  const resume = resumes.find((r) => r.id === resumeId)

  if (resume) {
    return (
      <ExternalLink className="btn btn-filled" href={resume.href}>
        Resume ({resume.short})
      </ExternalLink>
    )
  }

  return (
    <details className="resume-menu">
      <summary className="btn btn-filled">Resume</summary>
      <ul>
        {resumes.map((r) => (
          <li key={r.id}>
            <ExternalLink href={r.href}>{r.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </details>
  )
}
