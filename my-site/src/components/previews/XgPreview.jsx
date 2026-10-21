import { allStagesDone, clockMinute } from '../../data/xg.js'

// Mini "Matchday": a strip of pitch with a few dots and the live clock.
const dots = [
  [282, 24, '#fac775'],
  [300, 36, '#97c459'],
  [250, 40, '#6fa23c'],
  [336, 50, '#97c459'],
  [214, 62, '#3e7a2a'],
  [372, 70, '#3e7a2a'],
  [290, 66, '#6fa23c'],
]

export default function XgPreview() {
  return (
    <div className="pv pv-xg">
      <svg viewBox="0 0 560 92" preserveAspectRatio="xMidYMid slice">
        <rect width="560" height="92" fill="#114a2e" />
        <g fill="none" stroke="#eaf3de" strokeOpacity="0.3" strokeWidth="1.2">
          <rect x="130" y="-2" width="300" height="110" />
          <rect x="190" y="-2" width="180" height="46" />
          <rect x="248" y="-2" width="64" height="16" />
          <path d="M 255 44 A 30 30 0 0 0 305 44" />
        </g>
        {dots.map(([x, y, c]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={c} fillOpacity="0.85" />
        ))}
      </svg>
      <span className="pv-xg-clock">
        {allStagesDone ? 'FULL TIME' : <><span className="pv-live">● LIVE</span> {clockMinute}&prime;</>}
      </span>
    </div>
  )
}
