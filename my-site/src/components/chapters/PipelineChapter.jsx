import ExternalLink from '../ExternalLink.jsx'

// Chapter theme (later step): "Clean run"
export default function PipelineChapter() {
  return (
    <section id="pipeline" className="section">
      <h2>Data Cleaning Pipeline</h2>
      <p className="meta">
        Course project (DS 3500), built from an assignment spec · Fall 2026
      </p>
      <p className="meta">Python, pandas, YAML, argparse, logging</p>
      <p>
        A configurable command-line pipeline that loads CSV, JSON, and YAML
        files and gets them ready for analysis. It:
      </p>
      <ul>
        <li>validates required columns and numeric fields</li>
        <li>removes duplicates and missing values</li>
        <li>removes outliers using IQR and z-score methods</li>
        <li>generates a cleaning report</li>
      </ul>
      <p>The code is organized as a modular <code>src/</code> package.</p>
      <p>
        <ExternalLink href="https://github.com/madhavsabugNEU/mp1-data-pipeline">
          View on GitHub
        </ExternalLink>
      </p>
    </section>
  )
}
