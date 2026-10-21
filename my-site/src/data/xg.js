// Everything the xG "Matchday" chapter displays. Swap in real data here;
// the chapter component doesn't need to change.

// ---------- Shot map ----------
// PLACEHOLDER: illustrative shots, not real data or model output.
// Set `shotsArePlaceholder` to false once real shots are in.
//
// Coordinate system: x and y are 0 to 100.
//   x runs along the pitch length: 0 = your own goal line, 100 = the goal being attacked.
//   y runs across the pitch: 0 = one touchline, 100 = the other.
// The map shows the attacking half (x from 50 to 100), with the goal at the top.
// If the real CSV uses another system (for example StatsBomb's 120 x 80),
// convert it to 0 to 100 when building this list.
//
// Each shot: x, y, xg (the model's predicted probability, 0 to 1), goal (true or false).
// Add `featured: true` to one shot to draw the angle and distance annotation on it.
export const shotsArePlaceholder = true

export const shots = [
  { x: 79, y: 28, xg: 0.04, goal: false },
  { x: 72, y: 52, xg: 0.03, goal: false },
  { x: 83, y: 22, xg: 0.04, goal: false },
  { x: 82, y: 71, xg: 0.06, goal: false },
  { x: 76, y: 58, xg: 0.05, goal: false },
  { x: 87, y: 43, xg: 0.16, goal: false },
  { x: 81, y: 36, xg: 0.08, goal: false, featured: true },
  { x: 71, y: 73, xg: 0.02, goal: false },
  { x: 74, y: 26, xg: 0.03, goal: false },
  { x: 94, y: 30, xg: 0.1, goal: false },
  { x: 89, y: 42, xg: 0.18, goal: false },
  { x: 90, y: 45, xg: 0.24, goal: false },
  { x: 93, y: 63, xg: 0.19, goal: false },
  { x: 87, y: 52, xg: 0.17, goal: true },
  { x: 91, y: 36, xg: 0.16, goal: false },
  { x: 74, y: 49, xg: 0.04, goal: true },
  { x: 89, y: 67, xg: 0.12, goal: false },
  { x: 95, y: 38, xg: 0.22, goal: false },
  { x: 94, y: 78, xg: 0.06, goal: false },
  { x: 89, y: 22, xg: 0.06, goal: false },
  { x: 91, y: 49, xg: 0.29, goal: true },
  { x: 93, y: 53, xg: 0.38, goal: false },
  { x: 95, y: 56, xg: 0.45, goal: true },
  { x: 96, y: 50, xg: 0.62, goal: true },
  { x: 97, y: 46, xg: 0.71, goal: false },
  { x: 98, y: 52, xg: 0.78, goal: true },
]

// ---------- Match report ----------
// Replace each "—" with the real value once the model is evaluated.
export const matchReport = [
  { label: 'Shots in dataset', value: '—' },
  { label: 'Goals (base rate)', value: '—' },
  { label: 'Competitions · seasons', value: '—' },
  { label: 'Features', value: '—' },
  { label: 'Model', value: '—' },
  { label: 'Test log loss', value: '—' },
  { label: 'vs. distance-only baseline', value: '—' },
]

// Set to true once the stats above are real; this hides the placeholder note.
export const resultsReady = false

// ---------- Links ----------
// notebook: null shows a "coming soon" pill instead of a link.
export const xgLinks = {
  github: 'https://github.com/madhavsabugNEU/xG-model-football',
  notebook: null,
}

// ---------- Live commentary (project progress) ----------
// The five stages, in order. Change `stagesCompleted` as work finishes
// (0 to 5); the clock, progress bar, and row icons all update from it.
// Each stage is worth 18 minutes of a 90-minute match. While a stage is
// being worked on, the clock shows the minute that stage ends at (so with
// 3 stages done and Modeling in progress, it reads 72').
export const stagesCompleted = 3

export const stages = [
  { name: 'Data collection', detail: 'Gathered historical match and shot data from past seasons.' },
  { name: 'Data cleaning', detail: 'Standardized coordinates and events into a consistent training dataset.' },
  { name: 'Feature engineering', detail: 'Derived shot distance, angle, and game-situation features.' },
  { name: 'Modeling', detail: 'Building and iterating on a classifier in scikit-learn.' },
  { name: 'Evaluation', detail: 'Testing against held-out data and a distance-only baseline.' },
]
