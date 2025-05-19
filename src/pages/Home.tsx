import { ArrowRight, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding top to account for fixed navbar */}
      {/* Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
                Building an exceptional <span className="text-blue-600">future</span>
              </h1>
              <p className="mt-6 text-gray-600 max-w-xl">
                Discover our agile process to help in the creation of meaningful digital experiences and solutions that
                grow and scale with your business.
              </p>
              <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center text-sm font-medium transition-colors">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/163752/harvest-grain-combine-arable-farming-163752.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Web solutions dashboard"
                  className="rounded-lg shadow-lg"
                />
                {/* Blue square accents */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500"></div>
                <div className="absolute top-1/4 -right-4 w-8 h-8 bg-blue-500"></div>
                <div className="absolute bottom-1/4 -left-4 w-8 h-8 bg-blue-500"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background blue squares */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-500 opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-blue-500 opacity-10"></div>
      </section>
      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Our Features</h2>
              <p className="text-gray-600 mb-8">
                We provide comprehensive solutions to help your business thrive in the digital landscape.
              </p>
              <div className="bg-blue-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Experience with us</h3>
                <p className="mb-4">See how our solutions can transform your business</p>
                <Link to="/contact" className="flex items-center text-sm font-medium">
                  Contact us today <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-500 font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Custom Web Development</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored websites and applications built to meet your specific business needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-500 font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Responsive Design</h3>
                  <p className="text-gray-600 text-sm">
                    Websites that look and function perfectly on all devices and screen sizes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-500 font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">SEO Optimization</h3>
                  <p className="text-gray-600 text-sm">
                    Improve your visibility in search engines and drive more organic traffic.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-500 font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600 text-sm">
                    Continuous maintenance and updates to keep your website secure and up-to-date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to deliver high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">Project Planning</h3>
              <p className="text-gray-600 text-sm">We analyze your requirements and create a detailed project plan.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-500 font-bold">2</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">Design & Mockup</h3>
              <p className="text-gray-600 text-sm">We create visual designs and prototypes for your approval.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-500 font-bold">3</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Our team builds your solution using the latest technologies.</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-500 font-bold">4</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">End of Project</h3>
              <p className="text-gray-600 text-sm">We deliver the final product and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold uppercase mb-6">Our Tools</h2>
              <p className="text-gray-600 mb-8">We use cutting-edge technologies and tools to support our projects.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Advanced CMS Solutions</h3>
                    <p className="text-sm text-gray-600">Flexible content management systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Cloud Infrastructure</h3>
                    <p className="text-sm text-gray-600">Scalable and reliable hosting solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Analytics & Reporting</h3>
                    <p className="text-sm text-gray-600">Data-driven insights for your business</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our tools and technologies"
                  className="rounded-lg shadow-lg"
                />
                {/* Blue square accents */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">WANT TO JOIN US?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your business with innovative digital solutions.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md inline-flex items-center text-sm font-medium transition-colors">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}
