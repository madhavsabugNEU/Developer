// Stand-in for a world that hasn't been designed yet: the project's content
// in plain navy-and-white, with a short note.
export default function WorldPlaceholder({ children }) {
  return (
    <div className="world-placeholder">
      <p className="world-placeholder-note">
        This station's full design is coming soon. For now, here is the project
        in plain text.
      </p>
      {children}
    </div>
  )
}
