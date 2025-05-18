"use client"

import { ArrowRight, Leaf, Globe, BarChart, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

const Agriculture = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center">
        <img
          src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Agricultural Operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Agricultural Investment</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto md:mx-0">
              Cultivating sustainable agriculture through innovation and strategic investments.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Agricultural Heritage</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Blue Scope has a longstanding history in agriculture, having owned and operated iconic cattle stations
              such as Ashburton Downs and Hamersley Station in Western Australia for decades. Expanding its agricultural
              footprint strategically, the group has made substantial investments in pastoral stations and
              agribusinesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Blue Scope Agricultural Operations"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blue Scope Properties</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Blue Scope currently owns and operates more than 14 properties across Australia, spanning from Western
                Australia to New South Wales. These stations and farms play a pivotal role in producing top-quality beef
                for both domestic and international markets.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Committed to enhancing productivity and sustainability, Blue Scope leverages cutting-edge technology
                across its properties. Innovations such as digital UHF communications systems, walk-over weighing, solar
                power, remote bore monitoring, and drones are revolutionizing management practices and improving cattle
                welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Access</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Australia offers a stable, resilient, and diversified environment for business, making it an attractive
              destination for investors in agribusiness and food industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Trade Networks</h3>
              <p className="text-gray-700">
                With a transparent regulatory framework and strong trade ties to the Asia-Pacific region, investors
                benefit from Australia's network of free trade agreements, including comprehensive deals with Japan,
                Korea, China, and Trans-Pacific Partnership members.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Support</h3>
              <p className="text-gray-700">
                The Australian Government is committed to enhancing the global competitiveness of the agribusiness and
                food sector through initiatives outlined in the agricultural competitiveness white paper and the white
                paper on developing northern Australia.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Investment</h3>
              <p className="text-gray-700">
                International investment in Australia's agriculture and food sector is on the rise, driven by the high
                demand for safe, premium food products and integration into regional supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovation in Agriculture</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Committed to enhancing productivity and sustainability, Blue Scope leverages cutting-edge technology
                across its properties. Our innovative approach is transforming traditional farming practices and setting
                new standards in the industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Digital UHF Communications</h4>
                    <p className="text-gray-600">Enabling seamless communication across vast properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Walk-Over Weighing</h4>
                    <p className="text-gray-600">Automated livestock monitoring for improved health management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Solar Power Integration</h4>
                    <p className="text-gray-600">Sustainable energy solutions reducing environmental impact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Remote Bore Monitoring</h4>
                    <p className="text-gray-600">Real-time water management systems ensuring resource efficiency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Drone Technology</h4>
                    <p className="text-gray-600">
                      Aerial surveillance for property management and livestock monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Agricultural Innovation"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future Opportunities</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              As global demand for food surges, Australia emerges as a premier food supplier and a reliable partner in
              food security.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <Leaf className="h-16 w-16 text-white mx-auto md:mx-0" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg leading-relaxed mb-4">
                  To capitalize on growth opportunities, Australia seeks investment in innovation, agriculture
                  production, and advanced food processing, positioning itself as a key player in the global food
                  market.
                </p>
                <p className="text-lg leading-relaxed">
                  Blue Scope is at the forefront of this expansion, leveraging our extensive experience and innovative
                  approach to create sustainable agricultural solutions for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner With Us in Agriculture</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join us in our mission to develop sustainable agricultural practices that feed the world while preserving
            our natural resources for future generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Explore Investment Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/projects/agriculture/properties"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors"
            >
              View Our Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agriculture
