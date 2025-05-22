"use client"

import { motion } from "framer-motion"
import { Droplet, ArrowRight, Flame, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function OilGasSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-x-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070"
                alt="Oil and gas operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Energy Solutions</h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Powering Australia's future with responsible energy production
                </p>
              </div>
            </div>

            {/* Decorative elements - contained within parent */}
            <div className="absolute bottom-0 left-0 translate-y-4 -translate-x-4 w-24 h-24 bg-[#1e56ff]/10 rounded-lg -z-10"></div>
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-16 h-16 bg-[#1e56ff]/10 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <Droplet className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e56ff] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Oil and Gas</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
              Bluescope Society, with substantial conventional gas resources concentrated in key basins, such as the
              Carnarvon, Browse, and Bonaparte basins, alongside potential for additional discoveries, Bluescopepty
              offers a promising investment landscape for those seeking exposure to the oil and gas sector.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <Flame className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Energy Resources</h3>
                <p className="text-sm text-gray-600">
                  Strategic investments in conventional and unconventional energy resources.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <Globe className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Global Markets</h3>
                <p className="text-sm text-gray-600">
                  Connecting Australian energy resources with international markets.
                </p>
              </div>
            </div>

            <Link to="/oil-gas" className="inline-flex items-center text-[#1e56ff] font-medium hover:underline">
              Click here for full details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
