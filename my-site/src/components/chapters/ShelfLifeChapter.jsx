import ExternalLink from '../ExternalLink.jsx'

// Chapter theme (later step): "Blueprint"
export default function ShelfLifeChapter() {
  return (
    <section id="shelflife" className="section">
      <h1>ShelfLife</h1>
      <p className="meta">
        Team project (five people) · CS 3200 Database Design course project · Jan to Apr 2026
      </p>
      <p className="meta">MySQL, Flask, Streamlit, Docker, Python</p>
      <p>
        ShelfLife is a course materials marketplace for Northeastern students,
        with separate roles for buyers, sellers, data analysts, and admins. My
        team of five built it for CS 3200 (Database Design).
      </p>
      <h2>My contributions</h2>
      <ul>
        <li>I designed the relational schema, including the linked tables and foreign keys.</li>
        <li>I generated mock data for testing.</li>
        <li>
          I found and fixed data integrity issues, such as missing
          price-history records.
        </li>
        <li>I helped debug the Streamlit analytics dashboard.</li>
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
