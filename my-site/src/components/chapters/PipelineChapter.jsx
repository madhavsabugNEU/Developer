import { useEffect, useState } from 'react'
import ExternalLink from '../ExternalLink.jsx'
import {
  pipelineLinks,
  sample,
  stages,
  problemRows,
  cleanRowsPassing,
  report,
  fileTree,
  configLines,
  terminal,
} from '../../data/pipeline.js'

// World theme: "Clean run". All rows, counts, and log lines come from src/data/pipeline.js.
const STEP_MS = 900

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function PipelineChapter() {
  // How many stages have finished (0 = not run yet, Load is active).
  const [done, setDone] = useState(0)
  const [started, setStarted] = useState(false)
  const finished = done === stages.length
  const running = started && !finished

  // While running, finish one stage every STEP_MS.
  useEffect(() => {
    if (!running) return
    const timer = setTimeout(() => setDone((d) => d + 1), STEP_MS)
    return () => clearTimeout(timer)
  }, [running, done])

  function run() {
    setStarted(true)
    // With reduced motion, jump straight to the end.
    // Otherwise Load finishes right away and the rest follow on the timer.
    setDone(prefersReducedMotion() ? stages.length : 1)
  }

  const stageIndex = (id) => stages.findIndex((s) => s.id === id)
  const rowsNow = done === 0 ? stages[0].rows : stages[done - 1].rows

  return (
    <section className="cleanrun" aria-labelledby="pipeline-title">
      <div className="cleanrun-inner">
        <header className="cleanrun-header">
          <p className="cleanrun-label">clean run</p>
          <h1 id="pipeline-title">Data Cleaning Pipeline</h1>
          <p className="cleanrun-meta">
            DS 3500 course project · built from an assignment spec · Python, pandas, PyYAML,
            argparse, logging
          </p>
          <p className="cleanrun-intro">
            A configurable command-line pipeline that loads a dataset, validates it, removes
            duplicates, missing values, and outliers, and saves the result with a cleaning
            report. Every cleaning rule is set in a YAML file, so the same code can clean a
            different dataset without changes.
          </p>
        </header>

        <div className="cleanrun-grid">
          {/* Left: the 8 problem rows */}
          <div className="cr-card cr-rows">
            <div className="cr-rows-head">
              <div>
                <p className="cr-label">
                  {sample.file} · the {problemRows.length} problem rows
                </p>
                <p className="cr-note">{sample.note}</p>
              </div>
              <button
                type="button"
                className="cr-run"
                onClick={run}
                disabled={running}
              >
                {finished ? '↻ Run again' : '▶ Run pipeline'}
              </button>
            </div>

            <div className="cr-table-wrap">
              <table className="cr-table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">rating</th>
                    <th scope="col">cat</th>
                    <th scope="col">reason</th>
                  </tr>
                </thead>
                <tbody>
                  {problemRows.map((row) => {
                    const removed = stageIndex(row.stage) < done
                    return (
                      <tr key={row.id} className={removed ? 'is-removed' : undefined}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td><Value v={row.rating} /></td>
                        <td><Value v={row.category} /></td>
                        {/* The reason is always there so it can fade in; hidden until removed. */}
                        <td className="cr-reason">
                          <span aria-hidden={!removed}>{row.reason}</span>
                          {removed && <span className="visually-hidden"> (removed)</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="cr-pass">+ {cleanRowsPassing} clean rows pass through untouched.</p>
          </div>

          {/* Right: row counter and stages */}
          <div className="cr-card cr-stages">
            <p className="cr-counter" aria-live="polite">
              <span className="cr-counter-from">{stages[0].rows}</span>
              <span className="cr-counter-arrow" aria-hidden="true">→</span>
              <span className="cr-counter-now">{rowsNow}</span>
              <span className="visually-hidden"> rows</span>
            </p>
            <p className="cr-counter-caption">rows</p>
            <ol className="cr-stage-list">
              {stages.map((stage, i) => {
                const status = i < done ? 'done' : i === done ? 'active' : 'pending'
                return (
                  <li key={stage.id} className={`is-${status}`}>
                    <span className="cr-dot" aria-hidden="true" />
                    <span className="cr-stage-name">
                      {stage.name}
                      <span className="visually-hidden">
                        {status === 'done' ? ' (done)' : status === 'active' ? ' (next)' : ''}
                      </span>
                    </span>
                    <span className="cr-stage-rows">{stage.rows}</span>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        {/* Revealed fully once the run finishes (dimmed, but readable, before). */}
        <div className={`cr-details${finished ? ' is-revealed' : ''}`}>
          <div className="cr-cards">
            <div className="cr-card">
              <h2 className="cr-card-title cr-ok">✓ cleaning report</h2>
              <dl className="cr-kv">
                {report.rows.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}:</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="cr-footnote">{report.footnote}</p>
            </div>

            <div className="cr-card">
              <h2 className="cr-card-title">under the hood</h2>
              <ul className="cr-tree">
                {fileTree.map((f) => (
                  <li key={f.name} className={f.depth ? 'is-nested' : undefined}>
                    <span className="cr-file">{f.name}</span>
                    {f.note && <span className="cr-file-note">{f.note}</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cr-card">
              <h2 className="cr-card-title">config.yaml</h2>
              <pre className="cr-config">{configLines.join('\n')}</pre>
            </div>
          </div>

          <pre className="cr-terminal" tabIndex={0} aria-label="Terminal output from a real run">
            <span className="cr-prompt">$ </span>
            {terminal.command}
            {'\n'}
            {terminal.log.map(([level, text]) => (
              <span key={text} className={`cr-log cr-log-${level.toLowerCase()}`}>
                <span className="cr-level">{level.padEnd(8)}</span>
                {text}
                {'\n'}
              </span>
            ))}
          </pre>
        </div>

        <p className="cr-links">
          <ExternalLink className="cr-pill" href={pipelineLinks.github}>
            GitHub repo
          </ExternalLink>
        </p>
      </div>
    </section>
  )
}

// Empty values show as a rust NaN.
function Value({ v }) {
  return v === null ? <span className="cr-nan">NaN</span> : v
}
