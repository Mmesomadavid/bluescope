"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "BlueScope has consistently demonstrated leadership in Australia's mining sector. Their long-term commitment to sustainable iron ore exploration has set a benchmark in the industry.",
    author: "Michael J.",
    position: "Mining Consultant",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: false,
  },
  {
    id: 2,
    text: "We've worked with BlueScope on multiple infrastructure projects in the Pilbara. Their attention to safety, innovation, and efficiency is second to none.",
    author: "Sarah L.",
    position: "Engineering Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: true,
    videoThumbnail: "https://images.pexels.com/photos/7586548/pexels-photo-7586548.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    text: "From mineral extraction to beef production, BlueScope's integrated approach to natural resource management is impressive. Their work with Roy Hill is transformative.",
    author: "David N.",
    position: "Resource Economist",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: false,
  },
  {
    id: 4,
    text: "BlueScope's investment in agriculture, especially in premium wagyu beef and dairy operations, proves their dedication to quality and sustainability.",
    author: "Emma R.",
    position: "Agricultural Export Specialist",
    image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    isVideo: false,
  },
  {
    id: 5,
    text: "The Roy Hill operation is a world-class mining venture, and BlueScope's role in pioneering it cannot be overstated. Their vision created jobs and lasting impact.",
    author: "Andrew F.",
    position: "Logistics & Supply Chain Director",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    isVideo: false,
  },
  {
    id: 6,
    text: "BlueScope is not just a mining company—they're nation builders. Their legacy in the Pilbara and contributions to Australian industry are inspirational.",
    author: "Julie T.",
    position: "Government Affairs Advisor",
    image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    isVideo: false,
  },
  {
    id: 7,
    text: "I've dealt with many companies in the cattle and farming sector, but few show the same level of innovation and long-term planning as BlueScope.",
    author: "Luke S.",
    position: "Agricultural Investor",
    image: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    isVideo: false,
  },
  {
    id: 8,
    text: "What stands out about BlueScope is their ability to combine tradition with innovation—bringing together heritage cattle stations and cutting-edge resource development.",
    author: "Naomi K.",
    position: "Corporate Strategy Consultant",
    image: "https://plus.unsplash.com/premium_photo-1688350839154-1a131bccd78a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    isVideo: false,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const totalTestimonials = testimonials.length

  // Reset the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoPlay) return

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, autoPlay, totalTestimonials])

  const nextTestimonial = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
  }

  const prevTestimonial = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1))
  }

  // Get visible testimonials (4 at a time)
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % totalTestimonials
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-gray-900 mb-4">TESTIMONIALS</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Don't take our <span className="text-blue-500">word for it!</span></h2>
          <p className="text-3xl md:text-4xl font-medium text-gray-800">Hear it from our partners.</p>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <div className="flex space-x-6 px-1">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    className={`bg-white rounded-lg shadow-sm flex-shrink-0 ${
                      testimonial.isVideo ? "w-full md:w-[300px]" : "w-full md:w-[280px]"
                    }`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.isVideo ? (
                      // Video testimonial
                      <div className="relative h-full rounded-lg overflow-hidden">
                        <img
                          src={testimonial.videoThumbnail}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="absolute top-4 left-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-10 h-10 rounded-full object-cover border-2 border-white"
                            />
                          </div>
                          <button
                            className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
                            aria-label="Play video"
                          >
                            <Play className="h-5 w-5 text-gray-900" />
                          </button>
                          <div className="absolute bottom-6 left-6 text-white">
                            <h4 className="font-bold text-xl" style={{ fontFamily: "Dancing Script"}}>
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-gray-200">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular testimonial
                      <div className="p-8 flex flex-col h-full">
                        <div className="mb-6">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                        <p className="text-gray-700 mb-6 flex-grow">"{testimonial.text}"</p>
                        <div className="mt-auto">
                          <h4 className="font-bold text-xl text-gray-900" style={{ fontFamily: "Dancing Script"}}>
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-start mt-10 space-x-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
