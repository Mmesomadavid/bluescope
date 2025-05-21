import type React from "react"
import Hero from "../components/Hero"
import TrustedByInvestors from "../components/TrustedByInvestors"
import WhoWeAre from "../components/WhoWeAre"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <TrustedByInvestors />
    </div>
  )
}

export default Home
