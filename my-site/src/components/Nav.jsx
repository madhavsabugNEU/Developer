const sections = [
  { id: 'top', label: 'Home' },
  { id: 'xg', label: 'xG Model' },
  { id: 'pipeline', label: 'Data Pipeline' },
  { id: 'shelflife', label: 'ShelfLife' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Sections">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>{s.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
