"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Search, ChevronDown, ExternalLink } from "lucide-react"

interface NavItem {
  name: string
  link: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

interface DropdownItem {
  name: string
  link: string
  description: string
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Our Projects",
      link: "/projects",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Mining Operations",
          link: "/projects/mining",
          description: "Explore our innovative mining projects across Australia",
        },
        {
          name: "Agricultural Initiatives",
          link: "/projects/agriculture",
          description: "Sustainable farming and agricultural development",
        },
        {
          name: "Energy Solutions",
          link: "/projects/energy",
          description: "Next-generation energy and resource management",
        },
      ],
    },
    {
      name: "BSP Annual Report",
      link: "/annual-report",
    },
    {
      name: "Members Area",
      link: "/login",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Login",
          link: "/login",
          description: "Access your member account",
        },
        {
          name: "Sign Up",
          link: "/signup",
          description: "Create a new member account",
        },
      ],
    },
    {
      name: "Support",
      link: "/support",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Help Center",
          link: "/support/help",
          description: "Find answers to common questions",
        },
        {
          name: "Contact Us",
          link: "/support/contact",
          description: "Get in touch with our support team",
        },
        {
          name: "Resources",
          link: "/support/resources",
          description: "Access guides, documents and FAQs",
        },
      ],
    },
    {
      name: "Events",
      link: "/events",
    },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
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
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-grow ml-8">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      if (item.hasDropdown) {
                        toggleDropdown(item.name)
                      }
                    }}
                    className="relative"
                  >
                    <Link
                      to={item.hasDropdown ? "#" : item.link}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                        location.pathname === item.link
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          e.preventDefault()
                        }
                      }}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Highlight indicator for active page */}
                    {location.pathname === item.link && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                    )}
                  </div>

                  {/* Enhanced dropdown with visual cards */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.link}
                            className="flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                              {dropdownItem.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{dropdownItem.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
                        <Link
                          to={item.link}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          View all {item.name.toLowerCase()}
                          <ExternalLink size={12} className="ml-1" />
                        </Link>
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
          <div className="lg:hidden px-4 py-3 bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name} className="rounded-md overflow-hidden">
                  <div>
                    <div className="flex items-center">
                      <Link
                        to={item.hasDropdown ? "#" : item.link}
                        className={`flex-grow flex items-center px-3 py-2.5 text-sm font-medium ${
                          location.pathname === item.link
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                        onClick={(e) => {
                          if (item.hasDropdown) {
                            e.preventDefault()
                          }
                        }}
                      >
                        {item.name}
                      </Link>

                      {item.hasDropdown && (
                        <button
                          onClick={() => toggleDropdown(item.name)}
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
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="bg-gray-50 py-2 px-3 border-t border-gray-100">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.link}
                          className="flex items-start py-3 hover:bg-gray-100 rounded-md px-2 transition-colors"
                        >
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{dropdownItem.name}</h4>
                            <p className="text-xs text-gray-500 mt-0.5">{dropdownItem.description}</p>
                          </div>
                        </Link>
                      ))}
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
