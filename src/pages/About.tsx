"use client"

import { useRef } from "react"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react"
import ParallaxWrapper from "../components/ui/ParallaxWrapper"
import ScrollProgress from "../components/ui/ScrollProgress"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30])

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

  // Trigger animations when in view
  if (isInView) {
    controls.start("visible")
  }

  const teamMembers = [
    {
      name: "Mike Strongright",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      bio: "Mike, MBA, has 15+ years of experience in commercial and residential real estate development.",
    },
    {
      name: "Stanley George",
      role: "Director & CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      bio: "Gregory was a partner at Morgan Stanley LLP until September 2020.",
    },
    {
      name: "Eliza Baker",
      role: "Investment Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      bio: "Eliza, MBA, has 12+ years of experience in commercial and residential real estate property development.",
    },
    {
      name: "Sally Cruz",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      bio: "Tammy, Dieng, has 10+ years of real estate investing experience and is based in Canada and Asia Pacific markets.",
    },
  ]

  const stats = [
    {
      value: "$5b+",
      description: "Our team has over $5 billion of combined real estate transaction experience",
    },
    {
      value: "$450m+",
      description:
        "As an Exempt Market Dealer for securities strictly government regulated across Canada, we've helped process over $450 million in investor capital into quality investments secured by real estate",
    },
    {
      value: "7-12%",
      description: "Investors in Fundscribe offerings typically earn an average annual return of 7-12%",
    },
  ]

  return (
    <div className="bg-background text-white" ref={ref}>
      <ScrollProgress />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <ParallaxWrapper speed={0.2} direction="down" offset={50}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
          </ParallaxWrapper>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-start gap-12"
          >
            <div className="md:w-1/2" style={{ opacity: titleOpacity, y: titleY }}>
              <motion.p variants={itemVariants} className="text-blue-400 mb-4">
                We are BlueScope
              </motion.p>
              <motion.h1 variants={itemVariants} className="text-black text-4xl md:text-6xl font-semibold mb-6 Poppins">
                We set out to build{" "}
                <span className="block text-3xl md:text-5xl text-gray-700 mt-2">a better way to invest</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-500 mb-8">
                Together—the investors and partners of BlueScope—we are reinventing real estate investing end-to-end.
              </motion.p>
            </div>

            <ParallaxWrapper speed={0.3} direction="up" offset={30} className="md:w-1/2">
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="rounded-lg overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Team celebrating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </ParallaxWrapper>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ParallaxWrapper speed={0.2} direction="up" offset={20}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col"
              >
                <h2 className="text-black text-3xl md:text-4xl font-bold mb-6 flex items-center">
                  Our Story <ArrowDownRight className="ml-2 font-bold h-20 w-20" />
                </h2>
                <div className="mt-auto">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="Mike Strongright"
                      className="w-16 h-16  mb-4"
                    />
                    <h3 className="font-semibold">Mike Strongright</h3>
                    <p className="text-sm text-gray-400">Founder & CEO</p>
                  </div>

                  <blockquote className="text-xl font-medium text-gray-600 mb-6">
                    "Our goal is to build a better financial system for the individual investor — one that is simpler,
                    more reliable, lower cost and transparent."
                  </blockquote>
                </div>
              </motion.div>
            </ParallaxWrapper>

            <ParallaxWrapper speed={0.3} direction="up" offset={30}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-black mb-6 p-2">
                  Our founder, Mike started BlueScope because he wanted to make it easy for anyone to do what he does:
                  make money by investing in real estate.
                </p>
                <p className="text-black mb-6 p-2">
                  He wanted to make sure that those he served alongside during his time in the military would have the
                  same opportunity to build wealth as those with financial degrees and real estate licenses. This vision
                  extended to helping social workers, college students, teachers, first responders, small business
                  owners, retirees, and everyone in between save toward what matters most to them from the comfort of
                  their phone.
                </p>
                <p className="text-black p-2">
                  Investing in real estate is a great option for anyone looking to build long-term wealth that can stand
                  up to risk and market volatility. The BlueScope team is united around the core philosophy: invest, and
                  let compound interest do the rest.
                </p>
              </motion.div>
            </ParallaxWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h3 className="text-xl text-blue-600 mb-2 text-semibold Poppins">Numbers speak for me best of all</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ParallaxWrapper key={index} speed={0.2 + index * 0.1} direction="up" offset={20 + index * 5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                  className="p-6 border-t border-blue-900"
                >
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-black">{stat.value}</h3>
                  <p className="text-gray-700 text-sm">{stat.description}</p>
                </motion.div>
              </ParallaxWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ParallaxWrapper speed={0.2} direction="up" offset={20}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-6xl font-semibold mb-4 text-black p-2 Poppins">
                Our team has over <span className="text-blue-500">100 years</span>
                <br />
                of combined experience!
              </h2>
              <p className="text-gray-600 max-w-3xl p-2">
                Our team brings experience, innovation, and creativity to the real estate investing experience to ensure
                your plans are in good hands.
              </p>
            </motion.div>
          </ParallaxWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ParallaxWrapper key={index} speed={0.2 + index * 0.1} direction="up" offset={20 + index * 5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                  className="text-center"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-blue-500">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-blue-700 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </motion.div>
              </ParallaxWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Start investing today</h2>
              <p className="text-blue-100">BlueScope is about presenting meaningful opportunities to you.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center"
            >
              Explore Investment <ArrowUpRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
