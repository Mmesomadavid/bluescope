"use client"

import { motion } from "framer-motion"
import { Building, ArrowRight, Shield, BarChart3, Layers } from 'lucide-react'
import { Link } from "react-router-dom"

export default function RealEstateTokenization() {
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
              <Building className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e56ff] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Real Estate Tokenization</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
              Real Estate Tokenization stands as a burgeoning trend at the intersection of Real Estate investment and
              Blockchain technology. This innovative approach facilitates asset or fund owners in raising capital with
              heightened efficiency, while also providing investors with unparalleled access to private real estate
              investments, enhanced transparency, and improved liquidity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <Shield className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Enhanced Security</h3>
                <p className="text-sm text-gray-600">
                  Blockchain technology ensures secure, tamper-proof ownership records for real estate assets.
                </p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <BarChart3 className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Improved Liquidity</h3>
                <p className="text-sm text-gray-600">
                  Tokenization transforms illiquid assets into tradable tokens, enhancing market accessibility.
                </p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <Layers className="h-6 w-6 text-[#1e56ff] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Fractional Ownership</h3>
                <p className="text-sm text-gray-600">
                  Investors can own portions of premium properties previously beyond their reach.
                </p>
              </div>
            </div>

            <Link
              to="/real-estate"
              className="inline-flex items-center text-[#1e56ff] font-medium hover:underline"
            >
              Learn more about our Real Estate Tokenization <ArrowRight className="ml-2 h-4 w-4" />
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
                alt="Modern real estate building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Tokenized Property Investments</h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Access premium real estate opportunities with fractional ownership
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
