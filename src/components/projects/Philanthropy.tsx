"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart, GraduationCap, Award } from "lucide-react"
import { Link } from "react-router-dom"

export default function Philanthropy() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="philanthropy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Philanthropy</h2>
          <div className="w-20 h-1 bg-[#1e56ff]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
            <p className="text-gray-700 mb-6">
              Bluescope Society showcases its dedication to investing in initiatives that enhance the well-being of
              individuals and communities nationwide. Through strategic partnerships and targeted programs, we aim to
              create lasting positive change in the communities where we operate.
            </p>
            <p className="text-gray-700">
              Our philanthropic efforts focus on education, cultural preservation, and community development. We believe
              that by investing in these areas, we can help build stronger, more resilient communities and create
              opportunities for future generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
              alt="Community engagement"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">Building Better Communities</h3>
              <p className="text-white/80">Supporting initiatives that create lasting positive impact</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-white rounded-lg overflow-hidden shadow-sm" variants={itemVariants}>
            <div className="h-48 bg-[#1e56ff]/10 flex items-center justify-center">
              <GraduationCap className="h-16 w-16 text-[#1e56ff]" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Hanrine Futures Scholarships</h3>
              <p className="text-gray-700 mb-4">
                This Indigenous scholarship and career development program begins when students enter the program and
                continues through to employment. Hanrine Futures launched in 2022 and already has 10 students who have
                been awarded scholarships.
              </p>
              <p className="text-gray-700">
                The program works in partnership with Madalah. A key differentiator of the Hanrine Futures Program is
                the combination of education/mentoring support and work experience/employment opportunities. Madalah
                staff will mentor and support students based on individual education and resource plans, track their
                success and organise extra-curricular learning opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-lg overflow-hidden shadow-sm" variants={itemVariants}>
            <div className="h-48 bg-[#1e56ff]/10 flex items-center justify-center">
              <Award className="h-16 w-16 text-[#1e56ff]" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">NAIDOC</h3>
              <p className="text-gray-700 mb-4">
                Blue Scope Partners has been a sponsor of NAIDOC since 2012, which celebrates and honours the successes
                of Aboriginal and Torres Strait Islander individuals and organisations who have made outstanding
                contributions to the community.
              </p>
              <p className="text-gray-700">
                Over the course of the Group's involvement with NAIDOC, Blue Scope Partners has supported various awards
                such as Business of the Year, Program of the Year, Female Elder of the Year and the Outstanding
                Achievement Award.
              </p>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-lg overflow-hidden shadow-sm" variants={itemVariants}>
            <div className="h-48 bg-[#1e56ff]/10 flex items-center justify-center">
              <Heart className="h-16 w-16 text-[#1e56ff]" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Brisbane Fashion Festival</h3>
              <p className="text-gray-700 mb-4">
                Blue Scope Partners joined as a new partner at the Brisbane Fashion Festival in 2022. Blue Scope lent
                its support to the Next Gen Group Show, assisting the Fashion Festival in showcasing the brightest
                up-and-coming design talent, including supporting and celebrating local emerging and First Nations
                designers.
              </p>
              <p className="text-gray-700">
                In addition, Roy Hill provides funding that enables Indigenous designers to showcase their talents at
                New York fashion week.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1e56ff] text-white p-8 md:p-12 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Us in Making a Difference</h3>
          <p className="max-w-2xl mx-auto mb-8">
            We believe in the power of collaboration to create meaningful change. Partner with us to support initiatives
            that enhance the well-being of individuals and communities nationwide.
          </p>
          <Link
            to="/philanthropy-projects"
            className="inline-flex items-center bg-white text-[#1e56ff] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Our Initiatives <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
