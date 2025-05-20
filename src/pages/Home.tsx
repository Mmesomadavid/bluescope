import type React from "react"
import Hero from "../components/Hero"
import WhatWeInvestIn from "../components/WhatWeInvestIn"
import TrustedByInvestors from "../components/TrustedByInvestors"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeInvestIn />
      <TrustedByInvestors />
    </div>
  )
}

export default Home
