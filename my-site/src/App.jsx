import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import HomePage from './pages/HomePage.jsx'
import LinePage from './pages/LinePage.jsx'
import XgPage from './pages/XgPage.jsx'
import PipelinePage from './pages/PipelinePage.jsx'
import ShelfLifePage from './pages/ShelfLifePage.jsx'
import ResearchPage from './pages/ResearchPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/line/:letter" element={<LinePage />} />
        <Route path="/xg" element={<XgPage />} />
        <Route path="/pipeline" element={<PipelinePage />} />
        <Route path="/shelflife" element={<ShelfLifePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
