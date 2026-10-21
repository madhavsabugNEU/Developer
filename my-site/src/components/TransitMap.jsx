import { lines } from '../data/lines.js'

// The hero map. Drawn twice: a wide version for computers and a tall
// version for phones. CSS shows only one, depending on screen width.

const journey = ['India', 'Dubai', 'Singapore']

export default function TransitMap() {
  return (
    <nav className="transit-map" aria-label="Pick a line to board">
      <HorizontalMap />
      <VerticalMap />
    </nav>
  )
}

function BranchLink({ line, path, children }) {
  return (
    <a
      href={`#line-${line.letter.toLowerCase()}`}
      className="branch"
      aria-label={`Board the ${line.letter} line: ${line.name}, ${line.stops.length} stops`}
    >
      {/* Wide invisible stroke makes the thin line easy to click. */}
      <path d={path} className="branch-hit" />
      <path d={path} className="branch-line" />
      {children}
    </a>
  )
}

function Badge({ x, y, letter }) {
  return (
    <g className="badge">
      <circle cx={x} cy={y} r="20" />
      <text x={x} y={y} dy="0.35em" textAnchor="middle">
        {letter}
      </text>
    </g>
  )
}

function Hub({ x, y }) {
  return <circle className="hub" cx={x} cy={y} r="20" />
}

function spread(from, to, count) {
  const step = (to - from) / (count + 1)
  return Array.from({ length: count }, (_, i) => from + step * (i + 1))
}

/* ---------- Wide map (computers and tablets) ---------- */

function HorizontalMap() {
  const midY = 170
  const hubX = 430
  const journeyX = [60, 180, 300]
  const branchY = [50, 130, 210, 290]
  const turnX = hubX + 200
  const endX = 860

  return (
    <svg className="map map-horizontal" viewBox="0 0 1080 340">
      <line className="journey-line" x1={journeyX[0]} y1={midY} x2={hubX} y2={midY} />
      {journey.map((name, i) => (
        <g key={name} className="journey-stop">
          <circle cx={journeyX[i]} cy={midY} r="8" />
          <text x={journeyX[i]} y={midY + 32} textAnchor="middle">
            {name}
          </text>
        </g>
      ))}

      {lines.map((line, i) => {
        const y = branchY[i]
        const path = `M ${hubX} ${midY} C ${hubX + 110} ${midY}, ${turnX - 110} ${y}, ${turnX} ${y} L ${endX} ${y}`
        return (
          <BranchLink key={line.letter} line={line} path={path}>
            {spread(turnX, endX - 20, line.stops.length).map((x) => (
              <circle key={x} className="stop-dot" cx={x} cy={y} r="6" />
            ))}
            <Badge x={endX + 10} y={y} letter={line.letter} />
            <text className="branch-label" x={endX + 42} y={y} dy="0.35em">
              {line.name}
            </text>
          </BranchLink>
        )
      })}

      <Hub x={hubX} y={midY} />
      <text className="hub-label" x={hubX} y={midY + 50} textAnchor="middle">
        Northeastern
      </text>
    </svg>
  )
}

/* ---------- Tall map (phones) ---------- */

function VerticalMap() {
  const midX = 180
  const journeyY = [24, 74, 124]
  const hubY = 180
  const branchX = [45, 135, 225, 315]
  const turnY = hubY + 90
  const endY = 380

  return (
    <svg className="map map-vertical" viewBox="0 0 360 470">
      <line className="journey-line" x1={midX} y1={journeyY[0]} x2={midX} y2={hubY} />
      {journey.map((name, i) => (
        <g key={name} className="journey-stop">
          <circle cx={midX} cy={journeyY[i]} r="7" />
          <text x={midX + 20} y={journeyY[i]} dy="0.35em">
            {name}
          </text>
        </g>
      ))}

      {lines.map((line, i) => {
        const x = branchX[i]
        const path = `M ${midX} ${hubY} C ${midX} ${hubY + 50}, ${x} ${turnY - 50}, ${x} ${turnY} L ${x} ${endY}`
        return (
          <BranchLink key={line.letter} line={line} path={path}>
            {spread(turnY, endY - 20, line.stops.length).map((y) => (
              <circle key={y} className="stop-dot" cx={x} cy={y} r="5" />
            ))}
            <Badge x={x} y={endY + 10} letter={line.letter} />
            <text className="branch-label" x={x} y={endY + 50} textAnchor="middle">
              {line.phoneLabel.map((text, j) => (
                <tspan key={text} x={x} dy={j === 0 ? 0 : '1.2em'}>
                  {text}
                </tspan>
              ))}
            </text>
          </BranchLink>
        )
      })}

      <Hub x={midX} y={hubY} />
      <text className="hub-label" x={midX + 30} y={hubY} dy="0.35em">
        Northeastern
      </text>
    </svg>
  )
}
