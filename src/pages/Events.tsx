import { useState } from "react"
import { Calendar, MapPin, Clock, ChevronRight, Users, ExternalLink, Filter, Search } from 'lucide-react'
import { Link } from "react-router-dom"

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  // Event data
  const events = [
    {
      id: 1,
      title: "Unlocking New Horizons: Exclusive Investment Strategies for Building Generational Wealth",
      description:
        "Crucial Event Awaits You in Australia. Uncover pivotal updates and engage in high-stakes discussions about the future of our portfolio. Important project advancements and potential expansions are on the table – but full details will be disclosed only upon your attendance. Don't miss this exclusive opportunity.",
      date: "November 3, 2024",
      time: "9:00 AM - 5:00 PM AWST",
      location: "Perth Convention and Exhibition Centre, Perth, Australia",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/event-perth.jpg",
      category: "investment",
      featured: true,
    },
    {
      id: 2,
      title: "Building Generational Wealth Portfolio and Card Launch",
      description:
        "Crucial Event Awaits You in London. Join us for an exclusive opportunity to discuss the upcoming card launch and make key decisions regarding the future of our portfolio. Important project updates and potential expansions will be on the agenda – but full details will be shared only at the event. This is one you won't want to miss.",
      date: "December 15, 2024",
      time: "10:00 AM - 4:00 PM GMT",
      location: "Excel London Exhibition Centre, London, UK",
      image: "https://bluescopeptyltd.club/blue11.png",
      category: "product-launch",
      featured: true,
    },
    {
      id: 3,
      title: "Quarterly Investor Briefing: Q4 2024",
      description:
        "Join our executive team for a comprehensive review of Q4 performance and insights into our strategic direction for the upcoming year. This session will include detailed financial analysis and forecasting.",
      date: "January 20, 2025",
      time: "2:00 PM - 4:00 PM AEDT",
      location: "Virtual Event",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/event-virtual.jpg",
      category: "investor",
      featured: false,
    },
    {
      id: 4,
      title: "Sustainable Mining Practices Workshop",
      description:
        "A hands-on workshop exploring the latest innovations in sustainable mining practices. Industry experts will share case studies and practical implementations that balance environmental responsibility with operational efficiency.",
      date: "February 8, 2025",
      time: "9:00 AM - 3:00 PM AEDT",
      location: "Sydney Harbour Marriott, Sydney, Australia",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/event-mining.jpg",
      category: "workshop",
      featured: false,
    },
  ]

  // Filter events based on search query and category
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === "all" || event.category === filterCategory
    return matchesSearch && matchesCategory
  })

  // Get featured events
  const featuredEvents = events.filter((event) => event.featured)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-55"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us at our exclusive events where we share insights, strategies, and opportunities to build and protect
            your wealth for generations to come.
          </p>
        </div>
      </div>

      {/* Featured Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Featured Events</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-64 md:h-full bg-gray-300 relative">
                      <img
                        src={event.image || "/placeholder.svg?height=400&width=600&text=Event+Image"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg font-medium text-sm">
                        Featured
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/events/${event.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Search and Filter */}
      <section className="py-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">All Events</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none bg-white w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="investment">Investment</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="investor">Investor Relations</option>
                  <option value="workshop">Workshop</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-48 bg-gray-300 relative">
                    <img
                      src={event.image || "/placeholder.svg?height=300&width=500&text=Event+Image"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <div className="flex items-center text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{event.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                        {event.category.replace("-", " ")}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-sm line-clamp-1">{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/events/${event.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any events matching your search criteria. Please try different keywords or filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setFilterCategory("all")
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Bluescope Society showcases its dedication to investing in initiatives that enhance the well-being of
              individuals and communities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-blue-100">
                We actively engage with local communities to understand their needs and develop targeted support
                programs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 7V2" />
                  <path d="M15 7V2" />
                  <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Educational Initiatives</h3>
              <p className="text-blue-100">
                We support educational programs that empower individuals with the knowledge and skills needed for
                financial independence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Development</h3>
              <p className="text-blue-100">
                Our commitment to sustainable practices ensures that our business activities contribute positively to
                environmental and social well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated on Future Events</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to receive notifications about upcoming events, exclusive investment
                  opportunities, and industry insights.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      I agree to receive communications from BlueScope. View our{" "}
                      <Link to="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div
                className="md:w-1/2 bg-gray-300 h-64 md:h-auto"
                style={{
                  backgroundImage:
                    "url('https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/newsletter-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Your Own Event */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Host Your Own Event</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Interested in hosting a BlueScope event in your region? We partner with local organizations to bring
              valuable investment insights to communities worldwide.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Our Events Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
