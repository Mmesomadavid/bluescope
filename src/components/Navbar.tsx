"use client"

import { ArrowRight } from "lucide-react"
import type React from "react"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Project", href: "/project" },
  { label: "BSP Annual Report", href: "/report" },
  { label: "Members Area", href: "/members" },
  { label: "Support", href: "/support" },
  { label: "Event", href: "/event" },
]

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2">
              <img src="https://bluescopeptyltd.club/assets/images/logoIcon/logo.png" alt="bluescope logo" draggable="false" className="h-auto w-44" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/login"
              className="text-gray-700 border border-gray-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50"
            >
              Login
            </a>
            <a
              href="/signup"
              className="flex items-center bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700"
            >
              Sign Up
              <ArrowRight className="w-4 h-4 ml-2"/>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-3 px-5 py-3">
              <a
                href="/login"
                className="text-gray-700 border border-gray-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50 w-full text-center"
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 w-full text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
