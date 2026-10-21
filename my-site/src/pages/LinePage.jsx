import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import ContactLinks from '../components/ContactLinks.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import useTitle from '../hooks/useTitle.js'
import { stops, courses, isTransfer, findLine, stopLink } from '../data/lines.js'

// /line/b ... /line/e: a line's stops, top to bottom, plus its coursework.
export default function LinePage() {
  const { letter } = useParams()
  const line = findLine(letter)
  useTitle(line ? `${line.letter} line: ${line.name}` : 'Page not found')

  if (!line) return <NotFoundPage />
  return <LineContent key={line.letter} line={line} />
}

function LineContent({ line }) {
  const headingRef = useRef(null)

  // Move keyboard and screen-reader focus to the new page.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <>
      <TopBar backTo="/" backLabel="Back to map" rightLabel={`${line.letter} line`} />
      <main className="line-page" aria-labelledby="line-heading">
        <div className="line-header">
          <span className="line-badge" aria-hidden="true">
            {line.letter}
          </span>
          <div>
            <h1 id="line-heading" ref={headingRef} tabIndex={-1}>
              {line.letter} line: {line.name}
            </h1>
            {line.subtitle && <p className="line-subtitle">{line.subtitle}</p>}
            <p className="line-count">{line.stops.length} stops from Northeastern</p>
          </div>
        </div>

        {line.intro && <p className="line-intro">{line.intro}</p>}

        <ContactLinks resumeId={line.resume} />

        <div className="line-body">
          <ol className="line-stops">
            <li className="line-origin">Northeastern</li>
            {line.stops.map((id) => {
              const stop = stops[id]
              const transfer = isTransfer(id)
              return (
                <li key={id} className={transfer ? 'is-transfer' : undefined}>
                  <Link to={stopLink(id, line.letter)}>
                    <span className="stop-name">
                      {stop.name}
                      {transfer && <span className="transfer-tag">transfer</span>}
                    </span>
                    <span className="stop-subtitle">{stop.subtitle}</span>
                  </Link>
                </li>
              )
            })}
          </ol>

          <Timetable courseIds={line.coursework} />
        </div>
      </main>
    </>
  )
}

// "Coursework on this line", styled like a station timetable board.
function Timetable({ courseIds }) {
  return (
    <section className="timetable" aria-labelledby="timetable-heading">
      <h2 id="timetable-heading">Coursework on this line</h2>
      <ul>
        {courseIds.map((id) => {
          const course = courses[id]
          return (
            <li key={id}>
              {course.name}
              {course.ib && <span className="ib-tag">(IB credit)</span>}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
