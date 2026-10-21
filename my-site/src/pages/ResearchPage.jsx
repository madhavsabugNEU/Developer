import WorldFrame from '../components/WorldFrame.jsx'
import WorldPlaceholder from '../components/WorldPlaceholder.jsx'
import ResearchChapter from '../components/chapters/ResearchChapter.jsx'

// Placeholder until this world is designed (Step 7).
export default function ResearchPage() {
  return (
    <WorldFrame worldId="research">
      <WorldPlaceholder>
        <ResearchChapter />
      </WorldPlaceholder>
    </WorldFrame>
  )
}
