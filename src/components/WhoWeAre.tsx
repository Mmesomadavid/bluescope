"use client"

import { motion } from "framer-motion"
import type { FC } from "react"

const WhoWeAre: FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Blur blue circles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header Section */}
        <div className="text-center md:text-left space-y-8 max-w-8xl mx-auto lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full text-xl md:text-4xl font-bold tracking-wide uppercase max-w-7xl mx-auto md:mx-0"
            style={{ lineHeight: 1.2 }}
          >
            At Blue Scope Pty Ltd,
            <br />
            We Safeguard and Enhance Your Wealth
            <br />
            Through Strategic Investments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed"
          >
            We are committed to being your trusted partner in preserving and growing wealth via diversified investment
            opportunities in mining, agriculture, real estate tokenization, and philanthropy. Our approach blends deep
            market expertise with innovative strategies to deliver tailored wealth planning solutions that align with
            your aspirations and global market dynamics.
          </motion.p>
        </div>

        {/* Stats + Image Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with Half Card Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Half card background shape */}
            <div className="absolute top-0 left-0 w-3/5 h-full bg-blue-100 rounded-r-3xl -z-10"></div>

            <img
              src="https://images.pexels.com/photos/4345104/pexels-photo-4345104.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Investment and project collaboration"
              className="relative w-full h-auto rounded-lg shadow-lg"
            />

            <div className="absolute -right-4 -bottom-4 z-20">
              <div className="grid grid-cols-4 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 ${i % 3 === 0 ? "bg-blue-500" : "bg-transparent"}`} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Vertical Section */}
          <div className="flex flex-col gap-6">
            {[
              { number: 14, label: "YEARS IN THE BUSINESS", bg: "bg-blue-600", dot: "bg-blue-500" },
              { number: 501, label: "FINISHED PROJECTS", bg: "bg-blue-600", dot: "bg-black" },
              { number: 279, label: "SATISFIED CLIENTS", bg: "bg-blue-600", dot: "bg-black" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-full max-w-md"
              >
                <div className={`${item.bg} p-6 rounded-md relative z-10`}>
                  <h3 className="text-5xl font-bold text-white mb-2">{item.number}</h3>
                  <p className="text-sm uppercase text-white">{item.label}</p>
                </div>
                <div className="absolute -right-2 -bottom-2 z-0">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 ${i % 2 === 0 ? item.dot : "bg-transparent"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue accent squares - bottom right */}
      <div className="absolute bottom-10 right-10">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(8)].map((_, i) => (
            <div key={`br-${i}`} className={`w-3 h-3 ${i % 2 === 0 ? "bg-blue-500" : "bg-transparent"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
