import WorldFrame from '../components/WorldFrame.jsx'
import WorldPlaceholder from '../components/WorldPlaceholder.jsx'
import PipelineChapter from '../components/chapters/PipelineChapter.jsx'

// Placeholder until this world is designed (Step 7).
export default function PipelinePage() {
  return (
    <WorldFrame worldId="pipeline">
      <WorldPlaceholder>
        <PipelineChapter />
      </WorldPlaceholder>
    </WorldFrame>
  )
}
