"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"

const investors = [
  { id: 1, image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  { id: 8, image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600" },
  {
    id: 9,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/1820934/pexels-photo-1820934.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

// Define positions for the images in a scattered collage layout
const positions = [
  "top-8 left-16",
  "top-16 left-48",
  "top-8 right-16",
  "top-16 right-48",
  "top-32 left-8",
  "top-40 left-40",
  "top-32 right-8",
  "top-40 right-40",
  "bottom-32 left-8",
  "bottom-40 left-40",
  "bottom-32 right-8",
  "bottom-40 right-40",
]

const TrustedByInvestors = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const controls = useAnimation()
  const [randomMovement, setRandomMovement] = useState<number[]>([])

  // Initialize random movement values for subtle floating effect
  useEffect(() => {
    const randomValues = investors.map(() => Math.random() * 10 - 5)
    setRandomMovement(randomValues)
  }, [])

  // Start animations when component mounts
  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const floatingAnimation = (index: number) => ({
    y: [randomMovement[index], randomMovement[index] * -1, randomMovement[index]],
    x: [randomMovement[index] * 0.5, randomMovement[index] * -0.5, randomMovement[index] * 0.5],
    transition: {
      duration: 10 + (index % 5),
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  })

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  }

  const highlightVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 1,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1E40AF",
      transition: {
        duration: 0.3,
        yoyo: Number.POSITIVE_INFINITY,
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative   p-8 md:p-16 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          animate={controls}
        >
          {/* Background decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ filter: "blur(40px)", transform: "translate(30%, -30%)" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full opacity-30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            style={{ filter: "blur(50px)", transform: "translate(-30%, 30%)" }}
          />

          {/* Scattered investor images */}
          <div className="hidden md:block">
            {investors.map((investor, index) => (
              <motion.div
                key={investor.id}
                className={`absolute ${positions[index % positions.length]}`}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                animate={floatingAnimation(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={investor.image }
                    alt={`Investor ${investor.id}`}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover"
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70 flex items-end justify-center p-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="text-white text-xs font-medium">Investor {investor.id}</span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile investor images (horizontal scroll with animations) */}
          <div className="flex md:hidden overflow-x-auto pb-6 mb-8 space-x-4">
            {investors.map((investor, index) => (
              <motion.div
                key={investor.id}
                className="flex-shrink-0"
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={investor.image || "/placeholder.svg"}
                  alt={`Investor ${investor.id}`}
                  className="w-20 h-20 object-cover rounded-2xl shadow-md"
                />
              </motion.div>
            ))}
          </div>

          {/* Central content */}
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <motion.span
              className="text-sm text-blue-600 font-semibold tracking-wider uppercase block mb-2"
              variants={textVariants}
            >
              Testimonials
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
              variants={textVariants}
            >
              Trusted by investors
            </motion.h2>
            <motion.div className="relative h-1 w-40 bg-gray-200 mx-auto my-4 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                variants={highlightVariants}
              />
            </motion.div>
            <motion.p className="text-xl md:text-2xl text-gray-500 mb-8" variants={textVariants}>
              from around the world
            </motion.p>
            <motion.p className="text-gray-600 mb-10" variants={textVariants}>
              Learn why sophisticated investors trust our platform to discover high-potential opportunities and maximize
              their returns across diverse markets and asset classes.
            </motion.p>
            <motion.button
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Read Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedByInvestors
