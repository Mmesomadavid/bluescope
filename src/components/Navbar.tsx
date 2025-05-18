"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react"
import { navItems } from "../constants/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const navRef = useRef<HTMLUListElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Adjust dropdown position to prevent overflow
  useEffect(() => {
    const handleResize = () => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        const dropdown = dropdownRefs.current[key]
        if (dropdown) {
          // Reset position first
          dropdown.style.left = "0"
          dropdown.style.right = "auto"

          const rect = dropdown.getBoundingClientRect()
          const overflowRight = rect.right > window.innerWidth

          if (overflowRight) {
            const overflowAmount = rect.right - window.innerWidth
            dropdown.style.left = `${-overflowAmount - 20}px` // 20px buffer
          }
        }
      })
    }

    // Run on mount and when activeDropdown changes
    handleResize()

    // Also run on window resize
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeDropdown])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "shadow-md" : ""} bg-white overflow-visible`}
    >
      {/* Top navbar - hidden on mobile */}
      <nav className="bg-white text-xs px-4 py-2 hidden md:block">
        <div className="max-w-screen-xl mx-auto flex justify-end items-center space-x-3">
          <Link to="/news" className="hover:text-blue-600 px-1">
            News
          </Link>
          <span className="h-5 border-l border-gray-300"></span>
          <Link to="/resources" className="hover:text-blue-600 px-1">
            Resources
          </Link>
          <span className="h-5 border-l border-gray-300"></span>
          <Link to="/locations" className="hover:text-blue-600 px-1">
            Locations
          </Link>
          <span className="h-5 border-l border-gray-300"></span>
          <Link to="/contact" className="hover:text-blue-600 px-1">
            Contact
          </Link>
          <span className="text-gray-700">
            Language: <span className="text-blue-500">English</span>
          </span>
        </div>
      </nav>

      {/* Divider - also hidden on mobile */}
      <hr className="w-3/4 mx-auto border-gray-300 hidden md:block" />

      {/* Main navbar */}
      <nav className="bg-white">
        <div className="max-w-screen-xl h-20 mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://bluescopeptyltd.club/assets/images/logoIcon/logo.png"
              alt="blue scope"
              draggable="false"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <Search size={20} />
            </button>
            <button
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div id="desktop-menu" className="hidden lg:flex lg:items-center lg:justify-between lg:flex-grow ml-8">
            <ul ref={navRef} className="flex items-center justify-between w-full max-w-3xl">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <div className="relative">
                    {item.hasDropdown ? (
                      // If it has a dropdown, make it a button instead of a link
                      <button
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors text-gray-800 hover:text-blue-600 hover:bg-gray-50`}
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          } group-hover:rotate-180`}
                        />
                      </button>
                    ) : (
                      // If it doesn't have a dropdown, make it a regular link
                      <Link
                        to={item.link || "#"}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                          location.pathname === item.link
                            ? "text-blue-600"
                            : "text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Highlight indicator for active page */}
                    {item.link && location.pathname === item.link && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                    )}
                  </div>

                  {/* Enhanced dropdown with visual cards - BlueScope style - HOVER VERSION */}
                  {item.hasDropdown && item.dropdownCategory && (
                    <div
                      className="fixed mt-2 w-[600px] md:w-[700px] lg:w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out"
                      style={{ maxWidth: "calc(100vw - 40px)" }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Left sidebar with category title and description - WITH BACKGROUND IMAGE */}
                        <div
                          className={`w-full md:w-1/3 ${item.dropdownCategory.color} text-white p-6 md:p-8 flex flex-col justify-between relative`}
                          style={{
                            backgroundImage: item.dropdownCategory.image
                              ? `url(${item.dropdownCategory.image})`
                              : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          {/* Dark overlay for better text readability */}
                          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                          <div className="relative z-10">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">{item.dropdownCategory.title}</h2>
                            <p className="text-sm leading-relaxed">{item.dropdownCategory.description}</p>
                          </div>
                        </div>

                        {/* Right side with menu items - NO IMAGES */}
                        <div className="w-full md:w-2/3 p-4 md:p-6">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                            {item.dropdownCategory.items.map((dropdownItem) => (
                              <li key={dropdownItem.name}>
                                <Link
                                  to={dropdownItem.link}
                                  className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                  <span className="text-sm font-medium">{dropdownItem.name}</span>
                                  <ChevronRight size={16} className="ml-auto text-gray-400" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Search input */}
            <div className="flex items-center ml-5">
              <div className="relative">
                <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-40 border border-gray-300 pl-8 pr-2 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search input */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 py-2 border-t border-gray-200">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 pl-9 pr-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        )}

        {/* Mobile navigation menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden px-4 py-3 bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name} className="rounded-md overflow-hidden">
                  <div>
                    <div className="flex items-center">
                      {item.hasDropdown ? (
                        // If it has a dropdown, make it a button
                        <button
                          className="flex-grow flex items-center px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
                          onClick={(e) => {
                            e.preventDefault()
                            toggleDropdown(item.name)
                          }}
                        >
                          {item.name}
                        </button>
                      ) : (
                        // If it doesn't have a dropdown, make it a regular link
                        <Link
                          to={item.link || "#"}
                          className={`flex-grow flex items-center px-3 py-2.5 text-sm font-medium ${
                            location.pathname === item.link
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {item.hasDropdown && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleDropdown(item.name)
                          }}
                          className="p-2.5 text-gray-500 hover:bg-gray-50"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile dropdown with visual elements */}
                  {item.hasDropdown && activeDropdown === item.name && item.dropdownCategory && (
                    <div className="bg-gray-50 border-t border-gray-100">
                      {/* Category header for mobile with background image */}
                      <div
                        className={`${item.dropdownCategory.color} text-white p-4 relative`}
                        style={{
                          backgroundImage: item.dropdownCategory.image ? `url(${item.dropdownCategory.image})` : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                        <div className="relative z-10">
                          <h3 className="text-lg font-bold mb-1">{item.dropdownCategory.title}</h3>
                          <p className="text-xs text-white/80">{item.dropdownCategory.description}</p>
                        </div>
                      </div>

                      {/* Menu items for mobile */}
                      <div className="py-2 px-3">
                        {item.dropdownCategory.items.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.link}
                            className="flex items-center justify-between py-3 px-3 hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-900">{dropdownItem.name}</span>
                            <ChevronRight size={16} className="text-gray-500" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
