import type React from "react"
import Hero from "../components/Hero"
import WhoWeAre from "../components/WhoWeAre"
import InvestorCard from "../components/InvestorCard"
import Cta from "../components/Cta"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <InvestorCard />
      <Cta />
    </div>
  )
}

export default Home
