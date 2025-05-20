"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Menu, X} from 'lucide-react'
import { navItems } from "../constants/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-transparent backdrop-blur-md py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-gray-900 font-bold">
            <img
              src="https://bluescopeptyltd.club/assets/images/logoIcon/logo.png"
              alt="Blue Scope"
              className="h-8"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.hasDropdown ? item.name : null)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.link || "#"}
                className="text-gray-700 text-sm hover:text-gray-900 font-medium px-1 py-2"
              >
                {item.name}
              </Link>

              {item.hasDropdown && item.dropdownCategory && activeDropdown === item.name && (
                <div className="absolute top-full left-0 z-50 w-[500px] p-4 bg-white border shadow-lg rounded-lg mt-1">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.dropdownCategory.title}</h3>
                    <p className="text-gray-500 text-sm">{item.dropdownCategory.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {item.dropdownCategory.items.map((sub, index) => (
                      <Link
                        key={index}
                        to={sub.link}
                        className="flex items-start space-x-3 hover:bg-gray-50 rounded-lg p-2 transition"
                      >
                        <img src={sub.image || "/placeholder.svg"} alt={sub.name} className="w-14 h-14 object-cover rounded-md" />
                        <div>
                          <h4 className="font-medium text-gray-800">{sub.name}</h4>
                          {sub.description && <p className="text-xs text-gray-500">{sub.description}</p>}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Button */}
        <div className="hidden md:flex items-center">
          <button className="text-black text-sm font-medium px-4 py-2 rounded flex items-center mr-4">
           Login
          </button>
          <button className="flex items-center bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded flex items-center">
           Sign Up
           <ChevronRight className="w-4 h-4"/>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 space-y-3">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link 
                  to={item.link || "#"} 
                  className="text-gray-700 block py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded w-full">
                Sign up here
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
