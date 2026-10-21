import { useEffect, useRef } from 'react'
import { stops, isTransfer } from '../data/lines.js'

// The page you land on after boarding a line: its stops, top to bottom.
export default function LinePage({ line }) {
  const headingRef = useRef(null)

  // Move keyboard and screen-reader focus to the new view.
  useEffect(() => {
    headingRef.current?.focus()
  }, [line])

  return (
    <section className="line-page" aria-labelledby="line-heading">
      <a className="btn back-btn" href="#top">
        ← Back to map
      </a>

      <div className="line-header">
        <span className="line-badge" aria-hidden="true">
          {line.letter}
        </span>
        <div>
          <h2 id="line-heading" ref={headingRef} tabIndex={-1}>
            {line.letter} line: {line.name}
          </h2>
          <p className="line-count">
            {line.stops.length} stops from Northeastern
          </p>
        </div>
      </div>

      <ol className="line-stops">
        <li className="line-origin">Northeastern</li>
        {line.stops.map((id) => {
          const stop = stops[id]
          const transfer = isTransfer(id)
          return (
            <li key={id} className={transfer ? 'is-transfer' : undefined}>
              <a href={stop.href}>
                <span className="stop-name">
                  {stop.name}
                  {transfer && <span className="transfer-tag">transfer</span>}
                </span>
                <span className="stop-subtitle">{stop.subtitle}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
