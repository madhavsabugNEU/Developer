import { useSearchParams } from 'react-router-dom'
import TopBar from './TopBar.jsx'
import NextStopSign from './NextStopSign.jsx'
import useTitle from '../hooks/useTitle.js'
import { linesLabel } from '../data/lines.js'
import { findWorld, arrivalLine, nextStop } from '../data/worlds.js'

// Wraps every world page: navy top bar, the world itself, and the next-stop sign.
// The line the visitor came from is read from ?line=d in the address.
export default function WorldFrame({ worldId, children }) {
  const [params] = useSearchParams()
  const world = findWorld(worldId)
  const line = arrivalLine(world, params.get('line'))
  const next = nextStop(world, line)
  useTitle(world.title)

  return (
    <>
      <TopBar
        backTo={line ? `/line/${line.letter.toLowerCase()}` : '/#stations'}
        backLabel={line ? `Back to ${line.letter} line` : 'Back to stations'}
        rightLabel={`lines ${linesLabel(world.stopIds, world.leadLine)}`}
      />
      <main className="world">{children}</main>
      {next && <NextStopSign next={next} />}
    </>
  )
}
