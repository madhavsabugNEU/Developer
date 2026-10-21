import { useState } from 'react'
import ExternalLink from '../ExternalLink.jsx'
import { lines, isTransfer } from '../../data/lines.js'
import {
  shots,
  shotsArePlaceholder,
  matchReport,
  resultsReady,
  xgLinks,
  xgSteps,
} from '../../data/xg.js'

// Chapter theme: "Matchday". All numbers and shots come from src/data/xg.js.
export default function XgChapter() {
  return (
    <section id="xg" className="matchday" aria-labelledby="xg-title">
      <div className="matchday-inner">
        <header className="matchday-header">
          <p className="matchday-lines">{lineLabel('xg')}</p>
          <h2 id="xg-title">
            xG Modeling in Football
            <span className="pill-progress">In progress</span>
          </h2>
          <p className="matchday-intro">
            I am building an expected goals (xG) model that estimates the
            probability of a shot becoming a goal from its location, angle, and
            situational features.
          </p>
          <p className="matchday-meta">
            Solo project · Jul 2026 to present · Python, pandas, scikit-learn
          </p>
        </header>

        <div className="matchday-grid">
          <ShotMap />
          <MatchReport />
        </div>

        <HowItWorks />
      </div>
    </section>
  )
}

// "D line · C line · transfer", worked out from the line data.
function lineLabel(stopId) {
  const onLines = lines
    .filter((line) => line.letter !== 'E' && line.stops.includes(stopId))
    .map((line) => `${line.letter} line`)
    .reverse()
  if (isTransfer(stopId)) onLines.push('transfer')
  return onLines.join(' · ')
}

/* ---------- Shot map ---------- */

// Pitch drawn in metres: the attacking half is 52.5 m long and 68 m wide.
const HALF_LENGTH = 52.5
const WIDTH = 68

const toPitchX = (x) => ((x - 50) / 50) * HALF_LENGTH
const toPitchY = (y) => (y / 100) * WIDTH

// Dark green (low xG) through light green to amber (high xG).
const xgScale = [
  { max: 0.05, color: '#3e7a2a', label: '< 0.05' },
  { max: 0.15, color: '#6fa23c', label: '0.05–0.15' },
  { max: 0.3, color: '#97c459', label: '0.15–0.30' },
  { max: 0.5, color: '#d2c867', label: '0.30–0.50' },
  { max: Infinity, color: '#fac775', label: '0.50+' },
]

const colorFor = (xg) => xgScale.find((step) => xg < step.max).color
const radiusFor = (xg) => 1 + xg * 2.6

const drawOrder = shots.map((_, i) => i).sort((a, b) => shots[b].xg - shots[a].xg)

function ShotMap() {
  const [active, setActive] = useState(null)
  const shot = active === null ? null : shots[active]

  return (
    <figure className="shot-map">
      <svg
        viewBox={`-2 -2 ${HALF_LENGTH + 4} ${WIDTH + 4}`}
        role="group"
        aria-label="Shot map of the attacking half, goal on the right"
      >
        <rect className="pitch-bg" x="-2" y="-2" width={HALF_LENGTH + 4} height={WIDTH + 4} />
        <PitchLines />
        {/* Biggest shots are drawn first so small ones stay visible on top. */}
        {drawOrder.map((i) => {
          const s = shots[i]
          return (
            <circle
              key={i}
              className={`shot${s.goal ? ' is-goal' : ''}${active === i ? ' is-active' : ''}`}
              cx={toPitchX(s.x)}
              cy={toPitchY(s.y)}
              r={radiusFor(s.xg)}
              fill={colorFor(s.xg)}
              tabIndex={0}
              role="button"
              aria-label={describe(s, i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            />
          )
        })}
      </svg>

      <p className="shot-detail" aria-live="polite">
        {shot ? describe(shot, active) : 'Hover over or tap a shot to see its details.'}
      </p>

      <ShotLegend />

      {shotsArePlaceholder && (
        <figcaption className="shot-caption">
          illustrative shots · placeholder data
        </figcaption>
      )}
    </figure>
  )
}

function describe(shot, index) {
  const metres = Math.hypot(
    HALF_LENGTH - toPitchX(shot.x),
    toPitchY(shot.y) - WIDTH / 2,
  )
  const prefix = shotsArePlaceholder ? 'Placeholder shot' : 'Shot'
  return `${prefix} ${index + 1} · xG ${shot.xg.toFixed(2)} · ${shot.goal ? 'Goal' : 'No goal'} · ${Math.round(metres)} m from goal`
}

function PitchLines() {
  const mid = WIDTH / 2
  const boxDepth = 16.5
  const boxWidth = 40.32
  const sixDepth = 5.5
  const sixWidth = 18.32
  const goalWidth = 7.32
  const spotX = HALF_LENGTH - 11
  const r = 9.15
  // Where the penalty arc meets the edge of the box.
  const arcDy = Math.sqrt(r * r - (spotX - (HALF_LENGTH - boxDepth)) ** 2)

  return (
    <g className="pitch-lines">
      <rect x="0" y="0" width={HALF_LENGTH} height={WIDTH} />
      {/* Halfway line is the left edge; centre circle is half shown. */}
      <path d={`M 0 ${mid - r} A ${r} ${r} 0 0 1 0 ${mid + r}`} />
      <rect x={HALF_LENGTH - boxDepth} y={mid - boxWidth / 2} width={boxDepth} height={boxWidth} />
      <rect x={HALF_LENGTH - sixDepth} y={mid - sixWidth / 2} width={sixDepth} height={sixWidth} />
      <path
        d={`M ${HALF_LENGTH - boxDepth} ${mid - arcDy} A ${r} ${r} 0 0 0 ${HALF_LENGTH - boxDepth} ${mid + arcDy}`}
      />
      <circle className="pitch-spot" cx={spotX} cy={mid} r="0.35" />
      <rect className="pitch-goal" x={HALF_LENGTH} y={mid - goalWidth / 2} width="1.5" height={goalWidth} />
    </g>
  )
}

function ShotLegend() {
  return (
    <div className="shot-legend">
      <span className="legend-title">xG</span>
      <ul>
        {xgScale.map((step) => (
          <li key={step.label}>
            <svg viewBox="-4 -4 8 8" aria-hidden="true">
              <circle r={radiusFor(Math.min(step.max, 0.75) - 0.01)} fill={step.color} />
            </svg>
            {step.label}
          </li>
        ))}
        <li>
          <svg viewBox="-4 -4 8 8" aria-hidden="true">
            <circle className="legend-goal" r="2.2" />
          </svg>
          outlined = goal
        </li>
      </ul>
    </div>
  )
}

/* ---------- Match report ---------- */

function MatchReport() {
  return (
    <aside className="match-report" aria-labelledby="match-report-title">
      <h3 id="match-report-title">Match report</h3>
      <dl>
        {matchReport.map((row) => (
          <div key={row.label} className="report-row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>

      {!resultsReady && (
        <p className="report-note">Results appear here once the model is evaluated.</p>
      )}

      <div className="report-links">
        <ExternalLink className="pill-link" href={xgLinks.github}>
          GitHub repo
        </ExternalLink>
        {xgLinks.notebook ? (
          <ExternalLink className="pill-link" href={xgLinks.notebook}>
            Notebook
          </ExternalLink>
        ) : (
          <span className="pill-link is-disabled">Notebook · coming soon</span>
        )}
      </div>
    </aside>
  )
}

/* ---------- How it works ---------- */

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h3>How it works</h3>
      <ol>
        {xgSteps.map((step) => {
          const upNext = step.name === 'Evaluate' && !resultsReady
          return (
            <li key={step.name} className={upNext ? 'is-next' : undefined}>
              <span className="step-name">{step.name}</span>
              <span className="step-detail">{step.detail}</span>
              {upNext && <span className="step-tag">up next</span>}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
