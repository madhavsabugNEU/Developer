import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import XgChapter from './components/chapters/XgChapter.jsx'
import PipelineChapter from './components/chapters/PipelineChapter.jsx'
import ShelfLifeChapter from './components/chapters/ShelfLifeChapter.jsx'
import ResearchChapter from './components/chapters/ResearchChapter.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <XgChapter />
        <PipelineChapter />
        <ShelfLifeChapter />
        <ResearchChapter />
        <Experience />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App
