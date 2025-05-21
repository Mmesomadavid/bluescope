"use client"

import { motion } from "framer-motion"
import type { FC } from "react"
import cryptoGlass1 from '../assets/Futuristic_Glass_Cube.png'
import cryptoGlass2 from '../assets/Futuristic_Glass_Cube.png'
import { ChevronRight } from "lucide-react"

const Hero: FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-700 to-blue-50/10 text-white">
      {/* Background Images */}
        <motion.img
            src={cryptoGlass1}
            alt="crypto illustration"
            className="absolute top-0 right-0 w-60 md:w-80 opacity-60 blur-md pointer-events-none select-none"
            animate={{ y: [0, -30, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
        <motion.img
            src={cryptoGlass2}
            alt="crypto illustration"
            className="absolute bottom-0 left-0 w-60 md:w-80 opacity-60 blur-md pointer-events-none select-none"
            animate={{ y: [0, 30, 0] }}
            transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            }}
        />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Heading and Text Content */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide uppercase mb-6"
          >
            Transforming <br />
            ASSETS INTO Opportunities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/90 max-w-2xl mb-8"
          >
            To push you one level up your goals, we want to create solutions tailored to your needs to support your
            business development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <button className="flex items-center bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
              Create an Account with Us
              <ChevronRight/>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
