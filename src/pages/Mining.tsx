"use client"

import { ArrowRight, Award, Globe, Shield, Users, CheckCircle } from 'lucide-react'
import { Link } from "react-router-dom"

const Mining = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center">
        <img
          src="https://images.pexels.com/photos/2101135/pexels-photo-2101135.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mining Operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Mining Operations</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
              Pioneering sustainable mining practices with a commitment to community and environmental responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Responsible Mining for a Sustainable Future</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mining is critical to securing the minerals essential for everyday life and essential to be able to build
              renewable energy projects. The mining industry produces the primary products required for the generation,
              distribution and delivery of renewable energy. The first step in the supply chain to create solar panels
              and wind turbines and EV batteries begins with mining companies like Blue Scope, Atlas and Roy Hill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Engagement</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We have existing agreements with the Kariyarra, Palyku, Nyiyaparli, Ngarla, and Nyamal People, and are
                working closely with other groups including the Banjima and Yindjibarndi People in regard to future
                activity. Over the last seven years alone, Blue Scope has contributed well in excess of $300 million in
                royalties to these communities, as well as other significant investments in health, education, arts and
                culture.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are proud to be West Australian owned and operated and we take a leadership role in working with
                Traditional Owners, communities and regulators to ensure we achieve best in class outcomes in fulfilling
                our license to operate on native title land.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h4>
              <ul className="space-y-4">
                {[
                  "Working closely with Traditional Owners",
                  "Significant community investments",
                  "Environmental responsibility",
                  "Cultural heritage preservation",
                  "Rigorous approval processes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Responsibility</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We take our responsibility seriously in the management of the environment and preservation of culture and
              heritage, all of which must be reviewed through a rigorous approval process before development of new
              projects, and ultimately mining operations, can be undertaken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Stewardship</h3>
              <p className="text-gray-700">
                We follow rigorous environmental management practices to minimize our footprint and protect local
                ecosystems, including flora, fauna, and water resources.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Partnerships</h3>
              <p className="text-gray-700">
                Our operations are built on strong partnerships with local communities and Traditional Owners, ensuring
                mutual benefits and respect for cultural heritage.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-700">
                We are 100% compliant with all legislation and regulations established by the government targeting a
                reduction of emissions by 43% below 2005 levels by 2030 and net zero by 2050.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment in Australian Mining</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mining is by far Australia's largest export industry. Over the past decade, the industry contributed $2.4
                trillion in resources export revenue. While the vast majority of minerals extracted in Australia are
                exported, the benefits are retained in Australia.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The industry has paid $252 billion in mining wages, $143 billion in company taxes, $112 billion in
                royalties, and generated 21 per cent of the economy's growth. Additionally, the mining and minerals
                processing industry relies on and supports a wide range of other industries and service providers in
                Australia.
              </p>
              <div className="mt-8">
                <Link
                  to="/projects/mining/investment"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Learn More About Investment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$2.4T</div>
                <p className="text-sm text-gray-700">Export Revenue</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$252B</div>
                <p className="text-sm text-gray-700">Mining Wages</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$143B</div>
                <p className="text-sm text-gray-700">Company Taxes</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$112B</div>
                <p className="text-sm text-gray-700">Royalties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The world will need a huge amount of minerals and metals to achieve the goal of global net-zero emissions
              by 2050.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <Globe className="h-16 w-16 text-white mx-auto md:mx-0" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg leading-relaxed mb-4">
                  This will require a massive uplift in investment in exploration and mining projects along with
                  improvements in productivity from the adoption of new technologies and a more innovative workforce.
                </p>
                <p className="text-lg leading-relaxed">
                  Blue Scope is at the forefront of this transition, investing in sustainable mining practices and
                  technologies that will help meet global demand while minimizing environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner With Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join us in our mission to responsibly extract the resources needed for a sustainable future. Whether you're
            an investor, community partner, or potential employee, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mining
