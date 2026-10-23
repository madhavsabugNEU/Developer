// Everything the pipeline "Clean run" world shows. All of it comes from a
// real run on the course-provided sample (fixtures/sample_data.csv).

export const pipelineLinks = {
  github: 'https://github.com/madhavsabugNEU/mp1-data-pipeline',
}

export const sample = {
  file: 'fixtures/sample_data.csv',
  totalRows: 100,
  note: 'Course-provided sample of 100 records.',
}

// The stages, in order, with the row count after each one.
export const stages = [
  { id: 'load', name: 'Load', rows: 100 },
  { id: 'validate', name: 'Validate', rows: 98 },
  { id: 'duplicates', name: 'Remove duplicates', rows: 96 },
  { id: 'missing', name: 'Drop missing values', rows: 94 },
  { id: 'outliers', name: 'Remove outliers (IQR 1.5)', rows: 92 },
]

// The 8 rows the pipeline removes. `stage` is the stage id that removes it.
// null means the value was empty (shown as NaN).
export const problemRows = [
  { id: 95, name: 'Record_095', rating: 'not_available', category: 'C', stage: 'validate', reason: 'invalid number' },
  { id: 96, name: 'Record_096', rating: 'error', category: 'A', stage: 'validate', reason: 'invalid number' },
  { id: 1, name: 'Record_001', rating: '67', category: 'B', stage: 'duplicates', reason: 'duplicate' },
  { id: 2, name: 'Record_002', rating: '74', category: 'C', stage: 'duplicates', reason: 'duplicate' },
  { id: 97, name: 'Record_097', rating: null, category: 'B', stage: 'missing', reason: 'missing rating' },
  { id: 98, name: 'Record_098', rating: '75', category: null, stage: 'missing', reason: 'missing category' },
  { id: 93, name: 'Record_093', rating: '200', category: 'A', stage: 'outliers', reason: 'outlier (IQR)' },
  { id: 94, name: 'Record_094', rating: '-50', category: 'B', stage: 'outliers', reason: 'outlier (IQR)' },
]

export const cleanRowsPassing = 92

// "✓ cleaning report" card.
export const report = {
  rows: [
    ['rows_before', '98'],
    ['rows_after', '92'],
    ['rows_removed', '6'],
    ['columns', '5 → 5'],
  ],
  footnote: 'Counted after validation, which removed 2 more rows first.',
}

// "under the hood" card. depth 0 = top level, 1 = inside src/.
export const fileTree = [
  { name: 'pipeline.py', note: 'orchestrates', depth: 0 },
  { name: 'src/', depth: 0 },
  { name: 'data_loaders', note: 'CSV · JSON · YAML', depth: 1 },
  { name: 'data_validator', note: 'columns, numerics', depth: 1 },
  { name: 'data_processor', note: 'clean + report', depth: 1 },
  { name: 'data_output', note: 'save CSV', depth: 1 },
  { name: 'utils', note: 'logging, file checks', depth: 1 },
]

// "config.yaml" card, shown line by line.
export const configLines = [
  'remove_duplicates: true',
  'missing:',
  '  axis: rows',
  'outliers:',
  '  method: iqr  # or zscore',
  '  threshold: 1.5',
]

// Terminal strip: the command and real log lines from the run.
export const terminal = {
  command:
    'python pipeline.py --input fixtures/sample_data.csv --output output/clean.csv --config config/config.yaml --verbose',
  log: [
    ['WARNING', "Invalid numeric value in rating at row 94: 'not_available'"],
    ['INFO', 'Validation complete: 100 -> 98 rows'],
    ['DEBUG', 'rating: lower=43.625, upper=106.625, removed=2'],
    ['INFO', 'Processing complete: 98 -> 92 rows'],
  ],
}
