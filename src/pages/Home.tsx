import type React from "react"
import Hero from "../components/Hero"
import WhoWeAre from "../components/WhoWeAre"
import Testimonials from "../components/Testimonials"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <Testimonials />
    </div>
  )
}

export default Home
