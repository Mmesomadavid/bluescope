import type React from "react"

const Hero: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with badge, heading, reviews, image and stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-50 rounded-full px-3 py-1 text-xs font-medium text-blue-700 mb-6">
              <span className="mr-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9L12 4L21 9L12 14L3 9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 14L12 19L21 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              INVESTMENT SOLUTION
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Own a Piece of the 
              <br />
              <span className="text-blue-600">World's Wealth.</span>
            </h1>
          </div>

          {/* Right section: Image + Vertical Stats */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-end space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <div>
              <img
                src="https://images.pexels.com/photos/162639/digger-machine-machinery-construction-162639.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Investing"
                className="w-full max-w-lg h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Vertical Stats */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">30k+</p>
                <p className="text-gray-600">Downloads</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">1.5k+</p>
                <p className="text-gray-600">Reviews</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">99.9%</p>
                <p className="text-gray-600">Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content if needed */}
        <div className="grid grid-cols-12 gap-4">
          {/* You can continue here */}
        </div>
      </div>
    </div>
  )
}

export default Hero
