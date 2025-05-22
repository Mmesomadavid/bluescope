"use client"

import type React from "react"
import Hero from "../components/Home/Hero"
import WhoWeAre from "../components/Home/WhoWeAre"
import InvestorCard from "../components/Home/InvestorCard"
import Cta from "../components/Home/Cta"
import RealEstateTokenization from "../components/Home/RealEstateTokenization"
import AgricultureSection from "../components/Home/AgricultureSection"
import MiningSection from "../components/Home/MiningSection"
import OilGasSection from "../components/Home/OilGasSection"
import PhilanthropySection from "../components/Home/PhilanthropySection"
import TransactionsSection from "../components/Home/TransactionsSection"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <RealEstateTokenization />
      <AgricultureSection />
      <MiningSection />
      <OilGasSection />
      <PhilanthropySection />
      <TransactionsSection />
      <InvestorCard />
      <Cta />
    </div>
  )
}

export default Home
