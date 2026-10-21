import { Link } from 'react-router-dom'

// The navy "Next stop" sign at the bottom of a world page.
export default function NextStopSign({ next }) {
  return (
    <div className="next-stop">
      <Link to={next.to} className="next-stop-inner">
        <span className="line-badge" aria-hidden="true">
          {next.letter}
        </span>
        <span className="next-stop-text">
          <span className="next-stop-label">Next stop on the {next.letter} line</span>
          <span className="next-stop-name">{next.name}</span>
        </span>
        <span className="next-stop-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  )
}
