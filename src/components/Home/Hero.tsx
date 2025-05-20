import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-9xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl text-black md:text-5xl lg:text-7xl font-semibold leading-tight Poppins">
               Building Wealth with <span className="text-blue-500">Strategic Investments</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              Delivering innovative steel solutions to build a stronger, sustainable future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition">
                Start Creating
              </button>
              <button className="bg-white border border-blue-200 hover:bg-blue-50 text-blue-700 font-medium px-6 py-3 rounded-lg flex items-center transition">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <p className="text-black text-sm"> Join <span className="font-semibold text-blue-600">200+</span> investors and grow with Blue Scope</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square bg-blue-100">
                <img
                  src="https://images.pexels.com/photos/12835355/pexels-photo-12835355.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI generated image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-blue-100">
                <img
                  src="https://images.pexels.com/photos/6347743/pexels-photo-6347743.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI generated image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-blue-100">
                <img
                  src="https://images.pexels.com/photos/327041/pexels-photo-327041.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI generated image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-blue-100">
                <img
                  src="https://images.pexels.com/photos/60008/brown-coal-energy-garzweiler-bucket-wheel-excavators-60008.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI generated image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
