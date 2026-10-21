// Chapter theme (later step): "Lab notebook"
export default function ResearchChapter() {
  return (
    <section id="research" className="section">
      <h2>Research</h2>

      <article id="el-salvador">
        <h3>Economic Impact of El Salvador's Gang Crackdown</h3>
        <p className="meta">Independent research · Mar to Nov 2024</p>
        <p>
          I wrote a 4,000-word research paper analyzing up to 23 years of World
          Bank, IMF, ILO, and CEPAL data across four indicators: GDP growth,
          foreign investment, unemployment, and wellbeing.
        </p>
        <p>
          <strong>Finding:</strong> The reported economic gains could not be
          attributed to the policy, partly because of misleading statistics.
          For example, unemployment fell partly because mass arrests shrank the
          labor force.
        </p>
        <p>[TODO: Madhav to fill in: link to the paper PDF in public/papers/]</p>
      </article>

      <article id="enzyme">
        <h3>Enzyme Activity Experiment</h3>
        <p className="meta">Independent lab research · High school</p>
        <p>
          I ran a 30-trial experiment on how salinity affects trypsin activity.
          I measured activity with a colorimeter and analyzed the results using
          standard deviation and Pearson correlation, which showed a weak
          negative correlation (r = −0.43).
        </p>
        <p>
          The most valuable part of the project was identifying why the data
          was unreliable and how I would improve the method.
        </p>
      </article>
    </section>
  )
}
