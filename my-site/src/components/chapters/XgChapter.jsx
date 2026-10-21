import { useState } from 'react'
import ExternalLink from '../ExternalLink.jsx'
import { lines, isTransfer } from '../../data/lines.js'
import {
  shots,
  shotsArePlaceholder,
  matchReport,
  resultsReady,
  xgLinks,
  stages,
  stagesCompleted,
} from '../../data/xg.js'

// Chapter theme: "Matchday". All numbers, shots, and stages come from src/data/xg.js.
const allStagesDone = stagesCompleted >= stages.length

export default function XgChapter() {
  return (
    <section id="xg" className="matchday" aria-labelledby="xg-title">
      <div className="matchday-inner">
        <header className="matchday-header">
          <p className="matchday-lines">{lineLabel('xg')}</p>
          <h2 id="xg-title">
            xG Modeling in Football
            {!allStagesDone && <span className="pill-progress">In progress</span>}
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

        <LiveCommentary />
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

// Half-pitch seen from above with the goal at the top. Measurements in metres,
// drawn at SCALE units per metre: 68 m wide, 52.5 m from goal line to halfway.
const SCALE = 4.6
const PITCH_W = 68
const PITCH_D = 52.5
const PAD_X = 14
const PAD_TOP = 12
const PAD_BOTTOM = 8
const VIEW_W = PITCH_W * SCALE + PAD_X * 2
const VIEW_H = PITCH_D * SCALE + PAD_TOP + PAD_BOTTOM

const m = (metres) => metres * SCALE
const sx = (acrossMetres) => PAD_X + m(acrossMetres)
const sy = (fromGoalMetres) => PAD_TOP + m(fromGoalMetres)

// Data coordinates (0 to 100) to metres.
const across = (shot) => (shot.y / 100) * PITCH_W
const fromGoal = (shot) => ((100 - shot.x) / 100) * 105

const GOAL_W = 7.32
const POST_L = PITCH_W / 2 - GOAL_W / 2
const POST_R = PITCH_W / 2 + GOAL_W / 2

const distanceTo = (shot) => Math.hypot(across(shot) - PITCH_W / 2, fromGoal(shot))

// Smooth scale: dark green (low) → light green → amber (high).
const XG_STOPS = [
  { at: 0, rgb: [46, 107, 52] },
  { at: 0.2, rgb: [151, 196, 89] },
  { at: 0.6, rgb: [250, 199, 117] },
]

function colorFor(xg) {
  const v = Math.min(Math.max(xg, 0), XG_STOPS.at(-1).at)
  const i = XG_STOPS.findIndex((stop) => stop.at >= v)
  if (i <= 0) return `rgb(${XG_STOPS[0].rgb.join(',')})`
  const a = XG_STOPS[i - 1]
  const b = XG_STOPS[i]
  const t = (v - a.at) / (b.at - a.at)
  const mix = a.rgb.map((c, k) => Math.round(c + (b.rgb[k] - c) * t))
  return `rgb(${mix.join(',')})`
}

const legendGradient = `linear-gradient(to right, ${XG_STOPS.map(
  (s) => `${colorFor(s.at)} ${(s.at / XG_STOPS.at(-1).at) * 100}%`,
).join(', ')})`

function describe(shot) {
  return `xG ${shot.xg.toFixed(2)} · ${shot.goal ? 'Goal' : 'No goal'} · ${Math.round(distanceTo(shot))} m from goal`
}

function ShotMap() {
  const [active, setActive] = useState(null)
  const featured = shots.find((s) => s.featured)

  return (
    <div className="shot-map">
      <figure className="shot-figure">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          role="group"
          aria-label="Shot map of the attacking half, goal at the top"
        >
          <rect className="pitch-bg" width={VIEW_W} height={VIEW_H} rx="6" />
          <PitchLines />
          {featured && <FeaturedAnnotation shot={featured} part="lines" />}
          {shots.map((s, i) => (
            <circle
              key={i}
              className={`shot${s.featured ? ' is-featured' : ''}${active === i ? ' is-active' : ''}`}
              cx={sx(across(s))}
              cy={sy(fromGoal(s))}
              r="4"
              fill={s.featured ? '#fac775' : colorFor(s.xg)}
              tabIndex={0}
              role="button"
              aria-label={`${shotsArePlaceholder ? 'Placeholder shot' : 'Shot'}: ${describe(s)}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            />
          ))}
          {/* Labels go on top of the shots so they stay readable. */}
          {featured && <FeaturedAnnotation shot={featured} part="labels" />}
        </svg>
        <p className="shot-detail" aria-live="polite">
          {active === null
            ? 'Hover over or tap a shot to see its details.'
            : `${shotsArePlaceholder ? 'Placeholder shot · ' : ''}${describe(shots[active])}`}
        </p>
      </figure>

      <div className="shot-explainer">
        <h3>How xG reads a shot</h3>
        <p>
          Expected goals (xG) is the probability that a shot becomes a goal. It
          depends mostly on two things: how much of the goal the shooter can
          see, which is the angle between the posts, and how far away the
          shooter is.
        </p>
        <p>
          A close, central shot sees a wide angle and scores often, while a
          long or tight-angle shot rarely does.
        </p>
        <div className="xg-legend">
          <span>low</span>
          <span className="xg-legend-bar" style={{ background: legendGradient }} aria-hidden="true" />
          <span>high xG</span>
        </div>
        {shotsArePlaceholder && <p className="shot-caption">illustrative · placeholder data</p>}
      </div>
    </div>
  )
}

function PitchLines() {
  const mid = PITCH_W / 2
  const boxDepth = 16.5
  const boxWidth = 40.32
  const sixDepth = 5.5
  const sixWidth = 18.32
  const spot = 11
  const r = 9.15
  // Where the penalty arc meets the edge of the box.
  const arcDx = Math.sqrt(r * r - (boxDepth - spot) ** 2)

  return (
    <g className="pitch-lines">
      <rect x={sx(0)} y={sy(0)} width={m(PITCH_W)} height={m(PITCH_D)} />
      <rect x={sx(mid - boxWidth / 2)} y={sy(0)} width={m(boxWidth)} height={m(boxDepth)} />
      <rect x={sx(mid - sixWidth / 2)} y={sy(0)} width={m(sixWidth)} height={m(sixDepth)} />
      <path
        d={`M ${sx(mid - arcDx)} ${sy(boxDepth)} A ${m(r)} ${m(r)} 0 0 0 ${sx(mid + arcDx)} ${sy(boxDepth)}`}
      />
      <circle className="pitch-spot" cx={sx(mid)} cy={sy(spot)} r="1.4" />
      {/* Halfway line is the bottom edge; centre circle is half shown. */}
      <path d={`M ${sx(mid - r)} ${sy(PITCH_D)} A ${m(r)} ${m(r)} 0 0 1 ${sx(mid + r)} ${sy(PITCH_D)}`} />
      <rect className="pitch-goal" x={sx(POST_L)} y={sy(0) - m(1.5)} width={m(GOAL_W)} height={m(1.5)} />
    </g>
  )
}

// Angle wedge to both posts, dashed distance line, and labels.
// Drawn in two parts: the lines under the shots, the labels above them.
function FeaturedAnnotation({ shot, part }) {
  const px = sx(across(shot))
  const py = sy(fromGoal(shot))
  const cx = sx(PITCH_W / 2)
  const cy = sy(0)

  // Unit vector from the shot toward the goal centre, and its perpendicular.
  const len = Math.hypot(cx - px, cy - py)
  const ux = (cx - px) / len
  const uy = (cy - py) / len
  const nx = -uy
  const ny = ux
  const side = nx < 0 ? 1 : -1 // put "distance" on the side facing the centre of the pitch

  const at = (t, offset) => [px + ux * len * t + nx * offset * side, py + uy * len * t + ny * offset * side]
  const [dlx, dly] = at(0.45, 12)

  if (part === 'lines') {
    return (
      <g className="featured" aria-hidden="true">
        <polygon className="angle-wedge" points={`${px},${py} ${sx(POST_L)},${cy} ${sx(POST_R)},${cy}`} />
        <line className="distance-line" x1={px} y1={py} x2={cx} y2={cy} />
      </g>
    )
  }

  return (
    <g className="featured" aria-hidden="true">
      <text className="anno-label" x={sx(POST_R) + 6} y={cy + 14}>
        angle
      </text>
      <text className="anno-label" x={dlx} y={dly} textAnchor="middle">
        distance
      </text>
      <text className="anno-label anno-this" x={px - 8} y={py + 3} textAnchor="end">
        this shot
      </text>
    </g>
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

/* ---------- Live commentary (project progress) ---------- */

const MINUTES_PER_STAGE = 90 / 5

function LiveCommentary() {
  const clock = allStagesDone ? 90 : (stagesCompleted + 1) * MINUTES_PER_STAGE

  return (
    <section className="commentary" aria-labelledby="commentary-title">
      <div className="commentary-top">
        <h3 id="commentary-title">Project progress</h3>
        <p className="commentary-clock">
          {allStagesDone ? (
            <span className="tag-fulltime">Full time</span>
          ) : (
            <span className="tag-live">● LIVE</span>
          )}
          <span className="clock">
            {clock}&prime; / 90&prime;
          </span>
        </p>
      </div>

      <div
        className="match-bar"
        role="progressbar"
        aria-label="Match clock"
        aria-valuemin={0}
        aria-valuemax={90}
        aria-valuenow={clock}
        aria-valuetext={`${clock} of 90 minutes`}
      >
        <span className="match-bar-fill" style={{ width: `${(clock / 90) * 100}%` }} />
        <span className="match-bar-half" aria-hidden="true" />
      </div>
      <div className="match-bar-labels" aria-hidden="true">
        <span>kickoff</span>
        <span>half time</span>
        <span>full time = finished</span>
      </div>

      <p className="commentary-key">
        A football match lasts 90 minutes, and each completed stage moves the
        clock forward 18.
      </p>

      <ol className="commentary-rows">
        {stages.map((stage, i) => {
          const status = i < stagesCompleted ? 'done' : i === stagesCompleted ? 'live' : 'upcoming'
          const minute = (i + 1) * MINUTES_PER_STAGE
          return (
            <li key={stage.name} className={`row-${status}`}>
              <span className="row-icon" aria-hidden="true">
                {status === 'done' ? '✓' : status === 'live' ? <span className="live-dot" /> : '○'}
              </span>
              <div className="row-text">
                <span className="row-name">
                  {stage.name}
                  {status === 'live' && <span className="tag-now">now playing</span>}
                  <span className="visually-hidden">
                    {status === 'done' ? ' (done)' : status === 'upcoming' ? ' (up next)' : ''}
                  </span>
                </span>
                <span className="row-detail">{stage.detail}</span>
              </div>
              <span className="row-minute">{minute}&prime;</span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
