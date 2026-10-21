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

export function findLine(letter) {
  return lines.find((line) => line.letter === letter) ?? null
}
