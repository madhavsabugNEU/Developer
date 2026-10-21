import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle.js'

export default function NotFoundPage() {
  useTitle('Page not found')
  return (
    <main className="section not-found">
      <h1>This stop doesn't exist.</h1>
      <p>The page you were looking for could not be found.</p>
      <p>
        <Link className="btn" to="/">
          Back to the map
        </Link>
      </p>
    </main>
  )
}
