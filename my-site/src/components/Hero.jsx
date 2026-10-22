import TransitMap from './TransitMap.jsx'
import ContactLinks from './ContactLinks.jsx'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <h1>Madhav Sabu</h1>
      <p className="pitch">
        Data science + business at Northeastern.
        <br />
        Turning messy data into reliable insights.
      </p>
      <div className="hero-instructions">
        <p className="hero-instructions-lead">
          Choose a line to explore my work in that field.
        </p>
        <p>
          Each line shows the projects, coursework, and resume most relevant to
          that role. Not sure where to start? Take the E line to see everything.
        </p>
      </div>
      <TransitMap />
      <ContactLinks />
    </header>
  )
}
