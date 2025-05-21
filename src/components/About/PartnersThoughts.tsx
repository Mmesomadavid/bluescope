"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Our aim is to empower patients and healthcare providers with the tools they need to achieve better health.",
    company: "Lightbox",
    logo: "/placeholder.svg?height=40&width=100",
  },
  {
    id: 2,
    quote: "Driven by our unwavering commitment to quality, safety, and efficacy.",
    company: "Segment",
    logo: "/placeholder.svg?height=40&width=100",
  },
  {
    id: 3,
    quote: "We believe in the power of collaboration and are proud to partner with leading innovators.",
    company: "FeatherDev",
    logo: "/placeholder.svg?height=40&width=100",
  },
  {
    id: 4,
    quote: "Innovation and partnership drive our success in healthcare solutions.",
    company: "MediCore",
    logo: "/placeholder.svg?height=40&width=100",
  },
  {
    id: 5,
    quote: "Our dedication to excellence is reflected in our patient-first approach.",
    company: "HealthPlus",
    logo: "/placeholder.svg?height=40&width=100",
  },
]

export default function PartnersThoughts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 4 items visible per view on md and up, 1 on small screens
  const itemsPerView = 4

  // maxIndex ensures we don't overflow on sliding
  const maxIndex = testimonials.length - itemsPerView

  function handleNext() {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-900">
            Voice of Partners <span className="text-blue-600">& Investors</span>
          </h2>
          <Link
            to="/partners"
            className="flex items-center text-sm text-gray-600 hover:text-blue-500 transition-colors"
          >
            View all partners <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <p className="text-gray-600 mb-12 max-w-2xl">
          View our medical case study and become a partner
        </p>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          {/* Carousel track */}
          <motion.div
            className="flex space-x-6"
            animate={{ x: `-${(currentIndex * (100 / itemsPerView))}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ width: `${(testimonials.length / itemsPerView) * 100}%` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/4 p-6 border-t-2 border-blue-500 bg-white flex flex-col justify-between"
              >
                <div className="mb-4 text-blue-500 font-bold text-4xl leading-none">"</div>
                <p className="text-gray-800 mb-6 flex-grow">{testimonial.quote}</p>
                <div className="mt-auto flex items-center space-x-4">
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.company}
                    className="h-10 object-contain"
                  />
                  <span className="text-gray-700 font-semibold">{testimonial.company}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            aria-label="Previous testimonial"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
