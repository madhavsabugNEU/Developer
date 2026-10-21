import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Scrolls to the right place whenever the page changes: to a section if the
// link has one (like /#experience), otherwise back to the top.
// Also turns old links like /#line-d into the new /line/d page.
export default function ScrollManager() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const oldLine = pathname === '/' && hash.match(/^#line-([bcde])$/i)
    if (oldLine) {
      navigate(`/line/${oldLine[1].toLowerCase()}`, { replace: true })
      return
    }
    if (hash) {
      // Wait a frame so the new page has rendered.
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, search, hash, navigate])

  return null
}
