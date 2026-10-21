import WorldFrame from '../components/WorldFrame.jsx'
import WorldPlaceholder from '../components/WorldPlaceholder.jsx'
import ShelfLifeChapter from '../components/chapters/ShelfLifeChapter.jsx'

// Placeholder until this world is designed (Step 7).
export default function ShelfLifePage() {
  return (
    <WorldFrame worldId="shelflife">
      <WorldPlaceholder>
        <ShelfLifeChapter />
      </WorldPlaceholder>
    </WorldFrame>
  )
}
