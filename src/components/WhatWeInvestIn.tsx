"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Define the investment categories with the provided content
const investmentCategories = [
  {
    title: "Mining Investment & Engagement",
    description: "Evaluate global mining sectors with real-time data and ESG-focused strategies.",
    image: "https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Agriculture Production & Engagement",
    description: "Over 25 properties with innovative farming and export growth.",
    image: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Real Estate Tokenization",
    description: "Access private real estate investments with blockchain-enabled transparency and liquidity.",
    image: "https://images.pexels.com/photos/14891543/pexels-photo-14891543.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Oil & Gas Opportunities",
    description: "Invest in key basins with rich gas resources for strong returns.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww",
  },
  {
    title: "Philanthropy & Community Impact",
    description: "Investing in initiatives that improve wellbeing and social good.",
    image: "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

const WhatWeInvestIn = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const overlayVariants = {
    rest: { opacity: 0.5 },
    hover: { opacity: 0.65 },
  }

  const textVariants = {
    rest: { y: 20, opacity: 0.9 },
    hover: { y: 0, opacity: 1 },
  }

  const buttonVariants = {
    rest: { scale: 0.95, opacity: 0.8 },
    hover: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  // Split categories for the 2-3 layout
  const topRow = investmentCategories.slice(0, 2)
  const bottomRow = investmentCategories.slice(2, 5)

  return (
    <section className="py-20 bg-background overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">INVESTMENT PORTFOLIO</span>
          </motion.div>
          <motion.h2
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Invest In
          </motion.h2>
          <motion.div
            className="mt-4 mx-auto h-1 w-24 bg-blue-600 rounded"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our diverse portfolio spans multiple industries with strong growth potential and sustainable business
            models. We focus on sectors that drive innovation and create lasting value.
          </motion.p>
        </div>

        {/* Top row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {topRow.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              custom={index}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Black overlay */}
              <motion.div
                className="absolute inset-0 bg-black"
                variants={overlayVariants}
                initial="rest"
                animate={hoveredIndex === index ? "hover" : "rest"}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.h3
                  className="text-2xl font-bold text-white mb-3"
                  variants={textVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? "hover" : "rest"}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-base text-white opacity-90 mb-6"
                  variants={textVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? "hover" : "rest"}
                >
                  {category.description}
                </motion.p>
                <motion.button
                  className="inline-flex items-center text-sm font-medium text-white  px-4 py-2 rounded-md transition-colors"
                  variants={buttonVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? "hover" : "rest"}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>

              {/* Animated corner accents */}
              <motion.div
                className="absolute top-6 right-6 h-10 w-10 border-t-2 border-r-2 border-white opacity-70"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hoveredIndex === index ? { opacity: 0.7, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 45 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-white opacity-70"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hoveredIndex === index ? { opacity: 0.7, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 45 }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottomRow.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setHoveredIndex(index + topRow.length)}
              onMouseLeave={() => setHoveredIndex(null)}
              custom={index + topRow.length}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Black overlay */}
              <motion.div
                className="absolute inset-0 bg-black"
                variants={overlayVariants}
                initial="rest"
                animate={hoveredIndex === index + topRow.length ? "hover" : "rest"}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.h3
                  className="text-2xl font-bold text-white mb-3"
                  variants={textVariants}
                  initial="rest"
                  animate={hoveredIndex === index + topRow.length ? "hover" : "rest"}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-base text-white opacity-90 mb-6"
                  variants={textVariants}
                  initial="rest"
                  animate={hoveredIndex === index + topRow.length ? "hover" : "rest"}
                >
                  {category.description}
                </motion.p>
                <motion.button
                  className="inline-flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                  variants={buttonVariants}
                  initial="rest"
                  animate={hoveredIndex === index + topRow.length ? "hover" : "rest"}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>

              {/* Animated corner accents */}
              <motion.div
                className="absolute top-6 right-6 h-10 w-10 border-t-2 border-r-2 border-white opacity-70"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hoveredIndex === index + topRow.length
                    ? { opacity: 0.7, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: 45 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-white opacity-70"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hoveredIndex === index + topRow.length
                    ? { opacity: 0.7, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: 45 }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating animated elements for visual interest */}
        <div className="relative h-0">
          <motion.div
            className="absolute -top-40 -left-20 h-24 w-24 rounded-full bg-blue-500 opacity-5"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-10 h-32 w-32 rounded-full bg-blue-500 opacity-5"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default WhatWeInvestIn
