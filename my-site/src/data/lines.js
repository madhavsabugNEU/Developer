// Stops and lines for the hero map and line pages. Edit here to change which
// projects appear on which line.
// world: the world page the stop opens (see src/data/worlds.js).
// anchor: a spot on that page (or on the home page, if there's no world).

export const stops = {
  xg: {
    name: 'xG Modeling in Football',
    subtitle: 'In progress · ML model that predicts goal probability',
    world: 'xg',
  },
  pipeline: {
    name: 'Data Cleaning Pipeline',
    subtitle: 'Course project · Configurable command-line cleaning tool',
    world: 'pipeline',
  },
  shelflife: {
    name: 'ShelfLife',
    subtitle: 'Team project · Database design for a course materials marketplace',
    world: 'shelflife',
  },
  elsalvador: {
    name: "El Salvador's Gang Crackdown",
    subtitle: 'Independent research · Up to 23 years of economic data',
    world: 'research',
    anchor: 'el-salvador',
  },
  enzyme: {
    name: 'Enzyme Activity Experiment',
    subtitle: 'Independent lab research · 30-trial salinity experiment',
    world: 'research',
    anchor: 'enzyme',
  },
  creativefactory: {
    name: 'My Creative Factory',
    subtitle: 'Internship · Product & client management, Singapore',
    anchor: 'creative-factory',
  },
  knack: {
    name: 'Knack',
    subtitle: 'Peer tutor · Financial accounting and Excel',
    anchor: 'knack',
  },
}

// Where a stop's link goes. Coming from a line, world pages get ?line=x so
// the back button and next-stop sign remember it (and survive a refresh).
export function stopLink(stopId, letter) {
  const stop = stops[stopId]
  const hash = stop.anchor ? `#${stop.anchor}` : ''
  if (!stop.world) return `/${hash}`
  const query = letter ? `?line=${letter.toLowerCase()}` : ''
  return `/${stop.world}${query}${hash}`
}

// All coursework. `ib: true` marks IB transfer credit.
export const courses = {
  discrete: { name: 'Discrete Structures' },
  databases: { name: 'Introduction to Databases' },
  intermediate: { name: 'Intermediate Programming with Data' },
  foundations: { name: 'Foundations of Data Science' },
  advanced: { name: 'Advanced Programming with Data' },
  visualization: { name: 'Information Presentation and Visualization' },
  consumer: { name: 'Programming with Consumer Data' },
  accounting: { name: 'Financial Accounting & Reporting' },
  finance: { name: 'Financial Management' },
  marketing: { name: 'Introduction to Marketing' },
  cities: { name: 'Buildings and Cities' },
  bio1: { name: 'General Biology 1', ib: true },
  bio2: { name: 'General Biology 2', ib: true },
  macro: { name: 'Principles of Macroeconomics', ib: true },
  micro: { name: 'Principles of Microeconomics', ib: true },
}

// Branches in map order, top to bottom (like the real Green Line).
// resume: which resume version the line's button gets (null = choose any).
// phoneLabel: how the name wraps under its badge on the tall phone map.
// coursework: ids from `courses` above, in display order.
// subtitle / intro: optional extra text under the line page header.
export const lines = [
  {
    letter: 'B',
    name: 'Business Analytics',
    phoneLabel: ['Business', 'Analytics'],
    stops: ['shelflife', 'pipeline', 'elsalvador', 'creativefactory', 'knack'],
    coursework: ['accounting', 'finance', 'marketing', 'consumer', 'databases', 'visualization', 'macro', 'micro'],
    resume: 'econ',
  },
  {
    letter: 'C',
    name: 'Comp Bio',
    phoneLabel: ['Comp', 'Bio'],
    subtitle: 'B.S. in Data Science & Business · Minor in Biology',
    intro:
      'I am pursuing a Minor in Biology alongside my degree in Data Science & Business. ' +
      'This line brings the two together: a lab experiment in which I measured enzyme activity ' +
      'and analyzed the results statistically, a pipeline that turns raw files into clean and ' +
      'reliable data, and a machine learning model that I am building from real match data.',
    stops: ['enzyme', 'pipeline', 'xg'],
    coursework: ['bio1', 'bio2', 'foundations', 'intermediate', 'advanced', 'databases'],
    resume: 'bio',
  },
  {
    letter: 'D',
    name: 'Data / ML',
    phoneLabel: ['Data/ML'],
    stops: ['xg', 'pipeline', 'shelflife'],
    coursework: ['discrete', 'foundations', 'intermediate', 'advanced', 'databases', 'visualization'],
    resume: 'cs',
  },
  {
    letter: 'E',
    name: 'All stops',
    phoneLabel: ['All', 'stops'],
    stops: ['xg', 'pipeline', 'shelflife', 'elsalvador', 'enzyme'],
    coursework: Object.keys(courses),
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

// Accepts 'd' or 'D'. Returns null for anything that isn't a line.
export function findLine(letter) {
  if (!letter) return null
  return lines.find((line) => line.letter === letter.toUpperCase()) ?? null
}

// "D · C" for the lines (not counting E) that include any of these stops.
export function linesLabel(stopIds) {
  return lines
    .filter((line) => line.letter !== 'E' && stopIds.some((id) => line.stops.includes(id)))
    .map((line) => line.letter)
    .reverse()
    .join(' · ')
}
