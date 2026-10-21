import ExternalLink from '../ExternalLink.jsx'

// Chapter theme (later step): "Blueprint"
export default function ShelfLifeChapter() {
  return (
    <section id="shelflife" className="section">
      <h2>ShelfLife</h2>
      <p className="meta">
        Team project (5 people), CS 3200 Database Design course · Jan to Apr 2026
      </p>
      <p className="meta">MySQL, Flask, Streamlit, Docker, Python</p>
      <p>
        A course materials marketplace for Northeastern students, with separate
        roles for buyers, sellers, data analysts, and admins.
      </p>
      <h3>My contributions</h3>
      <ul>
        <li>Designed the relational schema (linked tables and foreign keys)</li>
        <li>Generated mock data for testing</li>
        <li>
          Found and fixed data integrity issues, such as missing price-history
          records
        </li>
        <li>Helped debug the Streamlit analytics dashboard</li>
      </ul>

      <div className="video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/jpNh5U-58YQ"
          title="ShelfLife demo video"
          loading="lazy"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p>
        <ExternalLink href="https://github.com/madhavsabugNEU/26S-ShelfLife-GroupProject">
          View on GitHub
        </ExternalLink>
      </p>
    </section>
  )
}
