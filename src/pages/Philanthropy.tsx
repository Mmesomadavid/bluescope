"use client"

import { ArrowRight, Heart, BookOpen, Users, Award } from "lucide-react"
import { Link } from "react-router-dom"

const Philanthropy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center">
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Philanthropy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Philanthropy</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
              Investing in communities and creating positive social impact across Australia.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Communities</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bluescope Society showcases its dedication to investing in initiatives that enhance the well-being of
              individuals and communities nationwide. Through strategic partnerships and targeted programs, we're making
              a meaningful difference in education, cultural preservation, and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Hanrine Futures Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hanrine Futures Scholarships</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This Indigenous scholarship and career development program begins when students enter the program and
                continues through to employment. Hanrine Futures launched in 2022 and already has 10 students who have
                been awarded scholarships.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The program works in partnership with Madalah. A key differentiator of the Hanrine Futures Program is
                the combination of education/mentoring support and work experience/employment opportunities. Madalah
                staff will mentor and support students based on individual education and resource plans, track their
                success and organise extra-curricular learning opportunities.
              </p>
              <div className="mt-8">
                <Link
                  to="/projects/philanthropy/scholarships"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Learn More About Scholarships
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Education Scholarships"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NAIDOC Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/5905498/pexels-photo-5905498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cultural Celebration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">NAIDOC Sponsorship</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Blue Scope Partners has been a sponsor of NAIDOC since 2012, which celebrates and honours the successes
                of Aboriginal and Torres Strait Islander individuals and organisations who have made outstanding
                contributions to the community.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Over the course of the Group's involvement with NAIDOC, Blue Scope Partners has supported various awards
                such as Business of the Year, Program of the Year, Female Elder of the Year and the Outstanding
                Achievement Award.
              </p>
              <div className="mt-8">
                <Link
                  to="/projects/philanthropy/naidoc"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Explore Our NAIDOC Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brisbane Fashion Festival */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Brisbane Fashion Festival</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Blue Scope Partners joined as a new partner at the Brisbane Fashion Festival in 2022. Blue Scope lent
                its support to the Next Gen Group Show, assisting the Fashion Festival in showcasing the brightest
                up-and-coming design talent, including supporting and celebrating local emerging and First Nations
                designers.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In addition, Roy Hill provides funding that enables Indigenous designers to showcase their talents at
                New York fashion week, creating international exposure and opportunities for Australian creative talent.
              </p>
              <div className="mt-8">
                <Link
                  to="/projects/philanthropy/fashion"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Discover Fashion Initiatives
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Fashion Festival"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Through our philanthropic initiatives, we're creating lasting positive change in communities across
              Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-blue-100">
                Supporting educational opportunities for Indigenous students through scholarships and mentoring
                programs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-blue-100">
                Investing in community development initiatives that strengthen local infrastructure and services.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Culture</h3>
              <p className="text-blue-100">
                Celebrating and preserving Indigenous culture through support for cultural events and artistic
                expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you're interested in partnering with us on philanthropic initiatives or learning more about our
            community impact, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Heart className="w-5 h-5 mr-2" />
              Partner With Us
            </Link>
            <Link
              to="/projects/philanthropy/impact"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              View Our Impact Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Philanthropy
