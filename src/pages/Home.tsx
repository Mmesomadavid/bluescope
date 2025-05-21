import type React from "react"
import Hero from "../components/Hero"
import WhoWeAre from "../components/WhoWeAre"
import Cta from "../components/Cta"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <Cta />
    </div>
  )
}

export default Home
