import { useEffect, useState } from 'react'
import { findLine } from '../data/lines.js'

// The boarded line lives in the URL hash (#line-b ... #line-e), so a link
// like mysite.com/#line-d opens straight onto the D line.
// Going to #top (or no hash) returns to the map. Any other hash, such as a
// project section, keeps the current line so it's still there on the way back.
function lineFromHash(hash, current) {
  const match = hash.match(/^#line-([bcde])$/i)
  if (match) return findLine(match[1].toUpperCase())
  if (hash === '' || hash === '#' || hash === '#top') return null
  return current
}

export default function useBoardedLine() {
  const [line, setLine] = useState(() => lineFromHash(window.location.hash, null))

  useEffect(() => {
    const onHashChange = () =>
      setLine((current) => lineFromHash(window.location.hash, current))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return line
}
