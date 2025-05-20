"use client"

import { useState, useRef } from "react"
import { Plus, Minus } from 'lucide-react'
import { motion, useInView, useAnimation } from "framer-motion"
import ArrowIconImg from "../../assets/arrow-icon.png"

const SimplifyCompliance = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
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
        delay: 0.2 + i * 0.1,
      },
    }),
  }

  // Trigger animations when in view
  if (isInView) {
    controls.start("visible")
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const accordionItems = [
    {
      number: "01",
      title: "Material Traceability",
      content:
        "Our digital systems enable end-to-end traceability of steel materials—from raw input to finished product—ensuring compliance with regional and global regulations like EPD and ISO 14040 standards.",
    },
    {
      number: "02",
      title: "Environmental Monitoring",
      content:
        "BlueScope integrates real-time monitoring systems to track emissions, energy usage, and waste outputs— helping ensure compliance with environmental regulations and carbon reduction goals.",
    },
    {
      number: "03",
      title: "Supplier Due Diligence",
      content:
        "Our procurement systems include compliance checkpoints for suppliers, ensuring ethical sourcing and alignment with human rights, labor, and environmental standards across the entire value chain.",
    },
    {
      number: "04",
      title: "Policy Alignment",
      content:
        "We help our clients align operations with global sustainability frameworks like the UN SDGs, GRI, and TCFD— turning compliance obligations into long-term competitive advantage.",
    },
    {
      number: "05",
      title: "Audit-Ready Reports",
      content:
        "Generate detailed audit-ready compliance documentation for local and international regulators, from ISO certifications to ESG performance and voluntary disclosures—backed by verified data.",
    },
  ]

  return (
    <section className="py-20 bg-white text-gray-900 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={itemVariants}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Streamline regulatory compliance while driving sustainable innovation in steel production.
          </h2>
        </motion.div>

        {/* Flex row: Arrow icon + images - Responsive for mobile */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={itemVariants}
            className="flex items-center mb-8"
          >
            <span className="text-gray-700 mr-2 text-sm font-medium whitespace-nowrap">
              How BlueScope Supports Compliance:
            </span>
            <img src={ArrowIconImg || "/placeholder.svg"} className="h-auto w-5" alt="Arrow" draggable="false" />
          </motion.div>

          {/* Image grid - responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.pexels.com/photos/185039/pexels-photo-185039.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/236086/pexels-photo-236086.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3855964/pexels-photo-3855964.jpeg?auto=compress&cs=tinysrgb&w=600",
            ].map((src, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img src={src || "/placeholder.svg"} alt={`Compliance image ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accordion Section */}
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="space-y-0">
          {accordionItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`border-t border-gray-200 ${index === accordionItems.length - 1 ? "border-b" : ""}`}
            >
              <div
                className="py-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
                role="button"
                tabIndex={0}
                aria-expanded={activeAccordion === index}
              >
                <div className="flex justify-between items-center font-medium">
                  <div className="flex items-center">
                    <motion.span
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: activeAccordion === index ? 1 : 0.7 }}
                      className="inline-flex items-center justify-center mr-3 text-3xl font-bold text-zinc-400"
                    >
                      {item.number}
                    </motion.span>
                    <motion.span
                      initial={{ fontWeight: 500 }}
                      animate={{ fontWeight: activeAccordion === index ? 600 : 500 }}
                      className="font-medium"
                    >
                      {item.title}
                    </motion.span>
                  </div>
                  <motion.span
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeAccordion === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </motion.span>
                </div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeAccordion === index ? "auto" : 0,
                  opacity: activeAccordion === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="text-gray-600 pb-5">
                  <p className="text-sm">{item.content}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SimplifyCompliance
