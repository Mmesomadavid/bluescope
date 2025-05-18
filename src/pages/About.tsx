import { Link } from "react-router-dom"
import { ArrowRight, Award, Users, Globe, Shield, Leaf } from "lucide-react"

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[320px] md:h-[300px] flex items-center">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 bg-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-start h-full py-12">
          <div className="text-left">
            <h1 className="text-4xl md:text-7xl font-semibold text-white mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-xl">
              Pioneering Australia's Resource Future Through Innovation and Sustainability
            </p>
          </div>
        </div>
      </div>

      
      {/* Our Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            At BlueScope, we are committed to responsible resource development that benefits communities and respects
            the environment. By combining cutting-edge technology with sustainable practices, we ensure that every
            project is carried out with professionalism, integrity, and a focus on long-term value creation.
          </p>
        </div>
      </section>

      {/* Values Section with alternating layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Innovation & Excellence */}
          <div className="flex flex-col md:flex-row items-center mb-24 gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Innovation & Excellence</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Innovation is the cornerstone of our operations. BlueScope invests heavily in research and development
                to pioneer new technologies that improve efficiency, reduce environmental impact, and maximize resource
                potential. Our commitment to excellence drives us to continuously improve our processes and deliver
                superior results for our stakeholders.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">Industry-leading R&D</span>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">Quality Assurance</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/placeholder.svg?height=400&width=600&text=Innovation+Image"
                alt="Innovation at BlueScope"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Community & Responsibility */}
          <div className="flex flex-col md:flex-row items-center mb-24 gap-8">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600&text=Community+Image"
                alt="BlueScope community initiatives"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Community & Responsibility</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We recognize that our operations impact local communities and the environment. BlueScope is committed to
                building strong, collaborative relationships with Traditional Owner groups and local communities across
                our operational areas. We prioritize sustainable development practices that minimize our environmental
                footprint while maximizing positive social impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium">Community Partnerships</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                  <Leaf className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium">Environmental Stewardship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Reach & Local Impact</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With operations spanning across Western Australia's resource-rich regions and a global distribution
                network, BlueScope connects Australian resources to world markets. While our reach is global, we
                maintain a strong focus on local impact, creating jobs, supporting regional economies, and contributing
                to the communities where we operate.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium">Global Distribution</span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium">Local Employment</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/placeholder.svg?height=400&width=600&text=Global+Operations+Image"
                alt="BlueScope global operations"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Led by industry experts with decades of experience in resource development, our leadership team is committed
            to driving sustainable growth and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Thompson",
                title: "Chief Executive Officer",
                bio: "With over 25 years of experience in the mining industry, Michael leads BlueScope's strategic vision and operations.",
                image: "/placeholder.svg?height=300&width=300&text=CEO",
              },
              {
                name: "Sarah Johnson",
                title: "Chief Operations Officer",
                bio: "Sarah oversees all operational aspects of BlueScope's mining and agricultural projects across Australia.",
                image: "/placeholder.svg?height=300&width=300&text=COO",
              },
              {
                name: "David Chen",
                title: "Chief Technology Officer",
                bio: "David leads our innovation initiatives, focusing on sustainable mining technologies and digital transformation.",
                image: "/placeholder.svg?height=300&width=300&text=CTO",
              },
              {
                name: "Emily Williams",
                title: "Chief Sustainability Officer",
                bio: "Emily ensures that environmental responsibility is integrated into every aspect of our operations.",
                image: "/placeholder.svg?height=300&width=300&text=CSO",
              },
              {
                name: "Robert Patel",
                title: "Chief Financial Officer",
                bio: "Robert manages BlueScope's financial strategy, investor relations, and sustainable growth initiatives.",
                image: "/placeholder.svg?height=300&width=300&text=CFO",
              },
              {
                name: "Lisa Nguyen",
                title: "Director of Community Relations",
                bio: "Lisa builds and maintains our relationships with local communities and Traditional Owner groups.",
                image: "/placeholder.svg?height=300&width=300&text=DCR",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us in Shaping Australia's Resource Future</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're interested in career opportunities, investment possibilities, or community partnerships, we'd
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
            >
              Explore Careers
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
