import ExternalLink from '../ExternalLink.jsx'

// Chapter theme (later step): "Matchday"
export default function XgChapter() {
  return (
    <section id="xg" className="section">
      <h2>xG Modeling in Football</h2>
      <p className="meta">
        <strong>In progress</strong> · Jul 2026 to present · Solo project
      </p>
      <p className="meta">Python, pandas, scikit-learn</p>
      <p>
        I collected and cleaned historical match and shot data into a training
        dataset. I'm now building and iterating on a machine learning model that
        predicts the probability of a shot becoming a goal, based on shot
        location, angle, and situational features.
      </p>
      <p>
        <ExternalLink href="https://github.com/madhavsabugNEU/xG-model-football">
          View on GitHub
        </ExternalLink>
      </p>
    </section>
  )
}
