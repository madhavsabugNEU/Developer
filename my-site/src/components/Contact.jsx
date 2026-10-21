import ExternalLink from './ExternalLink.jsx'
import { contact } from '../data/links.js'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>The best way to reach me is by email.</p>
      <ul>
        <li>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          LinkedIn:{' '}
          <ExternalLink href={contact.linkedin}>linkedin.com/in/madhavsabu</ExternalLink>
        </li>
        <li>
          GitHub:{' '}
          <ExternalLink href={contact.github}>github.com/madhavsabugNEU</ExternalLink>
        </li>
      </ul>
    </section>
  )
}
