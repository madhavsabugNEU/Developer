// Mini "Clean run": messy rows struck out on cream paper, then "✓ clean".
export default function PipelinePreview() {
  return (
    <div className="pv pv-pipeline">
      <div className="pv-rows">
        <span className="pv-struck">name,score,score</span>
        <span className="pv-struck">ana,NaN,</span>
        <span className="pv-struck">ana,NaN,  (dup)</span>
        <span className="pv-struck">ben,9999</span>
      </div>
      <span className="pv-arrow">→</span>
      <span className="pv-clean">✓ clean</span>
    </div>
  )
}
