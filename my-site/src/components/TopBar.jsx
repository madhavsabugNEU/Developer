import { Link } from 'react-router-dom'

// The sticky navy bar at the top of line pages and world pages.
export default function TopBar({ backTo, backLabel, rightLabel }) {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <Link to={backTo} className="top-bar-back">
          ← {backLabel}
        </Link>
        {rightLabel && <span className="top-bar-label">{rightLabel}</span>}
      </div>
    </div>
  )
}
