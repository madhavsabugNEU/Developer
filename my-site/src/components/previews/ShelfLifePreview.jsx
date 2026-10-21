// Mini "Blueprint": three linked table boxes on a blueprint grid.
// Boxes are unlabeled on purpose until the real schema is in.
function TableBox({ x, y }) {
  return (
    <g>
      <rect x={x} y={y} width="62" height="40" rx="3" fill="#1d4f86" stroke="#cfe3ff" strokeWidth="1.2" />
      <rect x={x} y={y} width="62" height="10" rx="3" fill="#cfe3ff" fillOpacity="0.35" />
      <line x1={x + 6} y1={y + 19} x2={x + 46} y2={y + 19} stroke="#cfe3ff" strokeOpacity="0.6" />
      <line x1={x + 6} y1={y + 27} x2={x + 38} y2={y + 27} stroke="#cfe3ff" strokeOpacity="0.6" />
      <line x1={x + 6} y1={y + 35} x2={x + 50} y2={y + 35} stroke="#cfe3ff" strokeOpacity="0.6" />
    </g>
  )
}

export default function ShelfLifePreview() {
  return (
    <div className="pv pv-shelflife">
      <svg viewBox="0 0 560 92" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="pv-grid" width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#cfe3ff" strokeOpacity="0.15" />
          </pattern>
        </defs>
        <rect width="560" height="92" fill="#174377" />
        <rect width="560" height="92" fill="url(#pv-grid)" />
        <g stroke="#cfe3ff" strokeWidth="1.2" fill="none" strokeDasharray="3 2">
          <path d="M 212 32 L 232 32 L 232 58 L 249 58" />
          <path d="M 311 58 L 328 58 L 328 32 L 348 32" />
        </g>
        <TableBox x={150} y={12} />
        <TableBox x={249} y={40} />
        <TableBox x={348} y={12} />
      </svg>
    </div>
  )
}
