"use client"

import { useRef } from "react"
import { ChevronRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function Hero() {
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
        delayChildren: 0.1,
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3 + i * 0.1,
      },
    }),
  }

  // Trigger animations when in view
  if (isInView) {
    controls.start("visible")
  }

  return (
    <div className="bg-background pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-4xl text-black md:text-5xl lg:text-7xl font-semibold leading-tight"
            >
              Building Wealth with <span className="text-blue-500">Strategic Investments</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-700 text-lg md:text-xl max-w-lg">
              Delivering innovative steel solutions to build a stronger, sustainable future.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Start Creating
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-blue-200 hover:bg-blue-50 text-blue-700 font-medium px-6 py-3 rounded-lg flex items-center transition group"
              >
                Learn More
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-block"
                >
                  <ChevronRight className="ml-1 w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 pt-4">
              <p className="text-black text-sm">
                Join <span className="font-semibold text-blue-600">200+</span> investors and grow with Blue Scope
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <motion.div
                custom={0}
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="rounded-2xl overflow-hidden aspect-square bg-blue-100"
              >
                <img
                  src="https://images.pexels.com/photos/12835355/pexels-photo-12835355.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Investment image"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                custom={1}
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="rounded-2xl overflow-hidden aspect-square bg-blue-100"
              >
                <img
                  src="https://images.pexels.com/photos/6347743/pexels-photo-6347743.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Investment image"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 mt-8">
              <motion.div
                custom={2}
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="rounded-2xl overflow-hidden aspect-square bg-blue-100"
              >
                <img
                  src="https://images.pexels.com/photos/327041/pexels-photo-327041.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Investment image"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                custom={3}
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="rounded-2xl overflow-hidden aspect-square bg-blue-100"
              >
                <img
                  src="https://images.pexels.com/photos/60008/brown-coal-energy-garzweiler-bucket-wheel-excavators-60008.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Investment image"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
