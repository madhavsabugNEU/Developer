import { Link } from 'react-router-dom'
import { worlds } from '../data/worlds.js'
import { linesLabel } from '../data/lines.js'
import XgPreview from './previews/XgPreview.jsx'
import PipelinePreview from './previews/PipelinePreview.jsx'
import ShelfLifePreview from './previews/ShelfLifePreview.jsx'
import ResearchPreview from './previews/ResearchPreview.jsx'

const previews = {
  xg: XgPreview,
  pipeline: PipelinePreview,
  shelflife: ShelfLifePreview,
  research: ResearchPreview,
}

// The "Stations" directory on the home page: one card per project world.
export default function Stations() {
  return (
    <section id="stations" className="section stations" aria-labelledby="stations-heading">
      <div className="stations-head">
        <h2 id="stations-heading">Stations</h2>
        <span className="stations-count">{worlds.length} projects · click to enter</span>
      </div>
      <ul className="station-grid">
        {worlds.map((world) => {
          const Preview = previews[world.id]
          return (
            <li key={world.id}>
              <Link to={`/${world.id}`} className="station-card">
                <div className="station-preview" aria-hidden="true">
                  <Preview />
                </div>
                <div className="station-body">
                  <div className="station-meta">
                    <span className="station-lines">lines {linesLabel(world.stopIds, world.leadLine)}</span>
                    <span className="station-tag">{world.tag}</span>
                  </div>
                  <h3 className="station-title">{world.title}</h3>
                  <p className="station-desc">{world.description}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
