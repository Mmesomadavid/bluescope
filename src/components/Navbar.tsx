"use client"

import { useState } from 'react'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavItem {
  name: string
  link: string
  hasDropdown?: boolean
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const navItems: NavItem[] = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Our Project', link: '/our-project', hasDropdown: true },
    { name: 'BSP Annual Report', link: '/bsp-annual-report' },
    { name: 'Members Area', link: '/members-area', hasDropdown: true },
    { name: 'Support', link: '/support', hasDropdown: true },
    { name: 'Event', link: '/event' },
  ]

  return (
    <header>
      {/* Top navbar */}
      <nav className="bg-white text-xs px-4 py-2">
        <div className="max-w-screen-xl mx-auto flex justify-end items-center space-x-3">
          <Link to="/news" className="hover:text-blue-600 px-1">News</Link>
          <span className="h-5 border-l border-gray-300"></span>
          <Link to="/resources" className="hover:text-blue-600 px-1">Resources</Link>
          <span className="h-5 border-l border-gray-300"></span>
          <Link to="/locations" className="hover:text-blue-600 px-1">Locations</Link>
          <span className="h-5 border-l border-gray-300"></span>
          <Link to="/contact" className="hover:text-blue-600 px-1">Contact</Link>
          <span className="text-gray-700">Language: <span className='text-blue-500'>English</span></span>
        </div>
      </nav>

      {/* Divider */}
      <hr className="w-3/4 mx-auto border-gray-300" />

      {/* Main navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl h-20 mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/">
            <img src="https://bluescopeptyltd.club/assets/images/logoIcon/logo.png" alt="blue scope" draggable="false" className="h-12 w-auto" />
          </Link>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <div className="flex items-center space-x-2">
              <button
                className="text-gray-700"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
              <button
                className="text-gray-700"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-grow ml-8">
            <ul className="flex items-center space-x-5 text-sm">
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  <button
                    onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                    className="px-2 py-1 text-gray-800 hover:text-blue-600 flex items-center"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                  </button>

                  {/* Dynamic underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

                  {/* Dropdown menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <ul className="absolute bg-white shadow-md mt-2 w-48 rounded-md text-gray-700 z-50">
                      <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Option 1</Link></li>
                      <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Option 2</Link></li>
                      <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Option 3</Link></li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Search input */}
            <div className="flex items-center ml-5">
              <input
                type="text"
                placeholder="Search..."
                className="w-32 border border-blue-300 px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Mobile search input */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {/* Mobile navigation menu */}
        {isOpen && (
          <div className="lg:hidden px-4 py-2 bg-white border-t border-gray-200">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <div>
                    <button
                      onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                      className="w-full text-left px-2 py-2 text-gray-800 hover:text-blue-600 flex items-center justify-between"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                    </button>
                  </div>

                  {/* Mobile dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <ul className="bg-gray-50 rounded-md mt-1 mb-2">
                      <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Option 1</Link></li>
                      <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Option 2</Link></li>
                      <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Option 3</Link></li>
                    </ul>
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
