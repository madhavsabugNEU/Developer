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
      <p className="map-prompt">pick a line to board →</p>
      <TransitMap />
      <ContactLinks />
    </header>
  )
}
