"use client"

import { useRef } from "react"
import { Workflow, BarChart3 } from 'lucide-react'
import { motion, useInView, useAnimation } from "framer-motion"

const HowItWorks = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  // Trigger animations when in view
  if (isInView) {
    controls.start("visible")
  }

  return (
    <section className="py-20 bg-white text-gray-900 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading and Paragraph Side-by-Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold md:w-1/3 mb-6 md:mb-0"
          >
            How does it work?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 md:w-2/3 font-medium">
            BlueScope simplifies ESG due diligence by automating supply chain tracking, enabling real-time risk
            assessments, and delivering clear ESG reports. With seamless integration and intelligent workflows, your
            teams gain control and insight while staying ahead of regulations and expectations.
          </motion.p>
        </motion.div>

        {/* Two Feature Cards */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left Box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Workflow className="w-5 h-5 text-blue-600 mr-2" />
              Streamline Your Due Diligence Workflow
            </h3>
            <p className="text-gray-600 text-sm">
              Automate ESG data collection, supplier onboarding, and risk tracking with our end-to-end compliance engine.
              BlueScope helps you move from manual spreadsheets to intelligent automation that scales across your global
              operations.
            </p>
            <motion.a
              href="#"
              className="text-blue-500 text-sm mt-4 inline-block hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn more →
            </motion.a>
          </motion.div>

          {/* Right Box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
              Insights That Drive Better Decisions
            </h3>
            <p className="text-gray-600 text-sm">
              Our powerful analytics engine helps you visualize ESG metrics, track compliance progress, and generate
              audit-ready reports with a few clicks. Whether for stakeholders or regulators, BlueScope equips you with
              actionable insights.
            </p>
            <motion.a
              href="#"
              className="text-blue-500 text-sm mt-4 inline-block hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn more →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
