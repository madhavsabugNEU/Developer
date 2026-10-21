import ExternalLink from './ExternalLink.jsx'
import TransitMap from './TransitMap.jsx'
import LinePage from './LinePage.jsx'
import ResumeButton from './ResumeButton.jsx'
import useBoardedLine from '../hooks/useBoardedLine.js'
import { contact } from '../data/links.js'

export default function Hero() {
  const line = useBoardedLine()

  return (
    <header id="top" className="hero">
      <h1>Madhav Sabu</h1>
      <p className="pitch">
        Data science + business at Northeastern.
        <br />
        Turning messy data into reliable insights.
      </p>

      {/* `key` restarts the simple fade/slide each time the view changes. */}
      <div key={line?.letter ?? 'map'} className="hero-view">
        {line ? (
          <LinePage line={line} />
        ) : (
          <>
            <p className="map-prompt">pick a line to board →</p>
            <TransitMap />
          </>
        )}
      </div>

      <ul className="hero-links">
        <li><ExternalLink className="btn" href={contact.github}>GitHub</ExternalLink></li>
        <li><ExternalLink className="btn" href={contact.linkedin}>LinkedIn</ExternalLink></li>
        <li><a className="btn" href={`mailto:${contact.email}`}>Email</a></li>
        <li><ResumeButton resumeId={line ? line.resume : null} /></li>
      </ul>
    </header>
  )
}
