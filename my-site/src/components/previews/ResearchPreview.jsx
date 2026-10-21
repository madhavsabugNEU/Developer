// Mini "Lab notebook": two small paper cards on graph paper.
function Paper({ className }) {
  return (
    <div className={`pv-paper ${className}`}>
      <span className="pv-paper-title" />
      <span />
      <span />
      <span className="short" />
    </div>
  )
}

export default function ResearchPreview() {
  return (
    <div className="pv pv-research">
      <Paper className="pv-paper-a" />
      <Paper className="pv-paper-b" />
    </div>
  )
}
