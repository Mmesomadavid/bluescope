"use client"

import { motion } from "framer-motion"
import { HardHat, ArrowRight, BarChart3, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function MiningSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <HardHat className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e56ff] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Mining Investment & Engagement</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
              Evaluate the global mining sector, monitor the volatile metals market, mitigate risk, and align ESG goals
              with essential data, analytics, and insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <BarChart3 className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Market Analysis</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive insights into global mining markets and commodity trends.
                </p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <Globe className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Global Operations</h3>
                <p className="text-sm text-gray-600">
                  Strategic mining investments across key resource-rich regions worldwide.
                </p>
              </div>
            </div>

            <Link to="/mining" className="inline-flex items-center text-[#1e56ff] font-medium hover:underline">
              Click here for full details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?q=80&w=2069"
                alt="Mining operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Sustainable Mining Practices</h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Balancing resource extraction with environmental responsibility
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1e56ff]/10 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1e56ff]/10 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
