import ExternalLink from './ExternalLink.jsx'
import ResumeButton from './ResumeButton.jsx'
import { contact } from '../data/links.js'

// GitHub, LinkedIn, Email pills and the navy Resume button.
// resumeId picks one version; leave it out to offer all three.
export default function ContactLinks({ resumeId = null }) {
  return (
    <ul className="hero-links">
      <li><ExternalLink className="btn" href={contact.github}>GitHub</ExternalLink></li>
      <li><ExternalLink className="btn" href={contact.linkedin}>LinkedIn</ExternalLink></li>
      <li><a className="btn" href={`mailto:${contact.email}`}>Email</a></li>
      <li><ResumeButton resumeId={resumeId} /></li>
    </ul>
  )
}
