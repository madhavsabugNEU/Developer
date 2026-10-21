import { stops, findLine, stopLink } from './lines.js'

// The four project world pages, in E line order. Also used for the
// station cards on the home page.
// stopIds: which stops (from lines.js) this world covers.
export const worlds = [
  {
    id: 'xg',
    title: 'xG Modeling in Football',
    tag: 'In progress',
    description:
      'I am building an expected goals model that estimates the probability of a shot becoming a goal.',
    stopIds: ['xg'],
  },
  {
    id: 'pipeline',
    title: 'Data Cleaning Pipeline',
    tag: 'Course project',
    description:
      'I built a configurable command-line pipeline that validates and cleans CSV, JSON, and YAML files.',
    stopIds: ['pipeline'],
  },
  {
    id: 'shelflife',
    title: 'ShelfLife',
    tag: 'Team of 5',
    description:
      'My team built a course materials marketplace for Northeastern students, and I designed its relational schema.',
    stopIds: ['shelflife'],
  },
  {
    id: 'research',
    title: 'Research',
    tag: 'Independent',
    description:
      "I studied the economic impact of El Salvador's gang crackdown and ran a lab experiment on enzyme activity.",
    stopIds: ['elsalvador', 'enzyme'],
  },
]

export const findWorld = (id) => worlds.find((w) => w.id === id) ?? null

// The line the visitor came from, if it's real and this world is on it.
export function arrivalLine(world, letter) {
  const line = findLine(letter)
  if (!line) return null
  return world.stopIds.some((id) => line.stops.includes(id)) ? line : null
}

// The next stop after this world: on the visitor's line if they came from
// one, otherwise in E line order. Returns null on the last stop.
// Stops that share a world (like the two research stops) count once.
export function nextStop(world, line) {
  const sequence = []
  if (line) {
    for (const id of line.stops) {
      const stop = stops[id]
      const key = stop.world ?? id
      if (sequence.at(-1)?.key === key) continue
      sequence.push({
        key,
        name: stop.world ? findWorld(stop.world).title : stop.name,
        to: stopLink(id, line.letter),
      })
    }
  } else {
    for (const w of worlds) sequence.push({ key: w.id, name: w.title, to: `/${w.id}` })
  }

  const here = sequence.findIndex((item) => item.key === world.id)
  if (here === -1) return null
  const next = sequence[here + 1]
  return next ? { ...next, letter: line ? line.letter : 'E' } : null
}

