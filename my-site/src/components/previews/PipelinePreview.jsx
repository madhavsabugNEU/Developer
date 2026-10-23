import { stages } from '../../data/pipeline.js'

// Mini "Clean run": messy rows struck out on cream paper, then "✓ clean".
export default function PipelinePreview() {
  return (
    <div className="pv pv-pipeline">
      <div className="pv-rows">
        <span className="pv-struck">95,Record_095,not_available</span>
        <span className="pv-struck">1,Record_001,67  (dup)</span>
        <span className="pv-struck">97,Record_097,NaN</span>
        <span className="pv-struck">93,Record_093,200</span>
      </div>
      <span className="pv-arrow">→</span>
      <span className="pv-result">
        <span className="pv-clean">✓ clean</span>
        <span className="pv-count">
          {stages[0].rows} → {stages.at(-1).rows} rows
        </span>
      </span>
    </div>
  )
}
