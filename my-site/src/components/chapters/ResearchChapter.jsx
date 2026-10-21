// Chapter theme (later step): "Lab notebook"
export default function ResearchChapter() {
  return (
    <section id="research" className="section">
      <h2>Research</h2>

      <article id="el-salvador">
        <h3>Economic Impact of El Salvador's Gang Crackdown</h3>
        <p className="meta">Independent research · Mar to Nov 2024</p>
        <p>
          A 4,000-word research paper analyzing up to 23 years of World Bank,
          IMF, ILO, and CEPAL data across four indicators: GDP growth, foreign
          investment, unemployment, and wellbeing.
        </p>
        <p>
          <strong>Finding:</strong> the reported economic gains couldn't be
          attributed to the policy, partly because of misleading statistics.
          For example, unemployment fell partly because mass arrests shrank the
          labor force.
        </p>
      </article>

      <article id="enzyme">
        <h3>Enzyme Activity Experiment</h3>
        <p className="meta">Independent lab research · High school</p>
        <p>
          A 30-trial experiment on how salinity affects trypsin activity,
          measured with a colorimeter and analyzed with standard deviation and
          Pearson correlation (r = −0.43, a weak negative correlation).
        </p>
        <p>
          The most valuable part was working out why the data was unreliable,
          and how I'd fix the method to get better results.
        </p>
      </article>
    </section>
  )
}
