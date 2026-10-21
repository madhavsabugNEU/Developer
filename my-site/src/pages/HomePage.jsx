import Hero from '../components/Hero.jsx'
import Stations from '../components/Stations.jsx'
import Experience from '../components/Experience.jsx'
import About from '../components/About.jsx'
import Resume from '../components/Resume.jsx'
import Contact from '../components/Contact.jsx'
import useTitle from '../hooks/useTitle.js'

export default function HomePage() {
  useTitle(null)
  return (
    <>
      <Hero />
      <main>
        <Stations />
        <Experience />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
