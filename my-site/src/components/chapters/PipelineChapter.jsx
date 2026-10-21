import ExternalLink from '../ExternalLink.jsx'

// Chapter theme (later step): "Clean run"
export default function PipelineChapter() {
  return (
    <section id="pipeline" className="section">
      <h1>Data Cleaning Pipeline</h1>
      <p className="meta">
        Course project (DS 3500), built from an assignment specification · Fall 2026
      </p>
      <p className="meta">Python, pandas, YAML, argparse, logging</p>
      <p>
        I built a configurable command-line pipeline that loads CSV, JSON, and
        YAML files and prepares them for analysis. It validates required
        columns and numeric fields, removes duplicates and missing values,
        filters outliers using the IQR and z-score methods, and generates a
        cleaning report. The code is organized as a modular <code>src/</code>{' '}
        package.
      </p>
      <p>
        <ExternalLink href="https://github.com/madhavsabugNEU/mp1-data-pipeline">
          View on GitHub
        </ExternalLink>
      </p>
    </section>
  )
}
