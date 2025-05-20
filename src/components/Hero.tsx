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

            {/* Description */}
            <p className="text-gray-700 mb-8 max-w-lg">
              At Bluescopepty Society, we are committed to preserving and growing your wealth through
              innovative investment opportunities in mining, agriculture, real estate tokenization,
              oil & gas, and philanthropy.
            </p>

            {/* Call to action button */}
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Learn More
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right section: Image + Vertical Stats */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-end space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1711012604128-8339024a3e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Investment and growth concept"
                className="w-full max-w-sm h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Vertical Stats */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">25+</p>
                <p className="text-gray-600">Agriculture Properties</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">340k+</p>
                <p className="text-gray-600">Beef Herd Capacity</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">99%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-gray-600">Years of Excellence</p>
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
