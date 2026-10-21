import { Link } from 'react-router-dom'

const sections = [
  { to: '/', label: 'Home' },
  { to: '/#stations', label: 'Stations' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#about', label: 'About' },
  { to: '/#resume', label: 'Resume' },
  { to: '/#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Site">
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-name">
          Madhav Sabu
        </Link>
        <ul>
          {sections.map((s) => (
            <li key={s.label}>
              <Link to={s.to}>{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
