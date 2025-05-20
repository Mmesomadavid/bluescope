import type React from "react"
import Hero from "../components/Hero"
import WhatWeInvestIn from "../components/WhatWeInvestIn"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeInvestIn />
    </div>
  )
}

export default Home
