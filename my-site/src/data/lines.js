// Stops and lines for the hero map. Edit here to change which projects
// appear on which line. `href` points at the matching section further down.

export const stops = {
  xg: {
    name: 'xG Modeling in Football',
    subtitle: 'In progress · ML model that predicts goal probability',
    href: '#xg',
  },
  pipeline: {
    name: 'Data Cleaning Pipeline',
    subtitle: 'Course project · Configurable command-line cleaning tool',
    href: '#pipeline',
  },
  shelflife: {
    name: 'ShelfLife',
    subtitle: 'Team project · Database design for a course materials marketplace',
    href: '#shelflife',
  },
  elsalvador: {
    name: "El Salvador's Gang Crackdown",
    subtitle: 'Independent research · Up to 23 years of economic data',
    href: '#el-salvador',
  },
  enzyme: {
    name: 'Enzyme Activity Experiment',
    subtitle: 'Independent lab research · 30-trial salinity experiment',
    href: '#enzyme',
  },
  creativefactory: {
    name: 'My Creative Factory',
    subtitle: 'Internship · Product & client management, Singapore',
    href: '#creative-factory',
  },
  knack: {
    name: 'Knack',
    subtitle: 'Peer tutor · Financial accounting and Excel',
    href: '#knack',
  },
}

// Branches in map order, top to bottom (like the real Green Line).
// resume: which resume version the line's button gets (null = choose any).
// phoneLabel: how the name wraps under its badge on the tall phone map.
export const lines = [
  {
    letter: 'B',
    name: 'Business Analytics',
    phoneLabel: ['Business', 'Analytics'],
    stops: ['shelflife', 'pipeline', 'elsalvador', 'creativefactory', 'knack'],
    resume: 'econ',
  },
  {
    letter: 'C',
    name: 'Comp Bio',
    phoneLabel: ['Comp', 'Bio'],
    stops: ['enzyme', 'pipeline', 'xg'],
    resume: 'bio',
  },
  {
    letter: 'D',
    name: 'Data / ML',
    phoneLabel: ['Data/ML'],
    stops: ['xg', 'pipeline', 'shelflife'],
    resume: 'cs',
  },
  {
    letter: 'E',
    name: 'All stops',
    phoneLabel: ['All', 'stops'],
    stops: ['xg', 'pipeline', 'shelflife', 'elsalvador', 'enzyme'],
    resume: null,
  },
]

// A transfer station is a stop on more than one of the B, C, and D lines.
// (E has every project, so it doesn't count.)
export function isTransfer(stopId) {
  const count = lines.filter(
    (line) => line.letter !== 'E' && line.stops.includes(stopId),
  ).length
  return count > 1
}

export function findLine(letter) {
  return lines.find((line) => line.letter === letter) ?? null
}
