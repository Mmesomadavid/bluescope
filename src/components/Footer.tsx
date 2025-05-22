"use client"

import { Link } from "react-router-dom"
import { Twitter, Facebook, Linkedin, Youtube } from "lucide-react"
import type { FC } from "react"

const Footer: FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col space-y-10">
          {/* Logo and tagline */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <span className="text-white text-xl font-medium">Bluescope</span>
            </div>
            <p className="text-sm">
              Global expert in technology in medicine.
              <br />
              Subsidized by EU funds.
            </p>
          </div>

          {/* Social and links grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Social media */}
            <div>
              <p className="text-sm mb-4">Follow us</p>
              <div className="flex space-x-4">
                <Link to="#" aria-label="Twitter">
                  <Twitter size={18} className="text-white hover:text-white transition-colors" />
                </Link>
                <Link to="#" aria-label="Facebook">
                  <Facebook size={18} className="text-white hover:text-white transition-colors" />
                </Link>
                <Link to="#" aria-label="LinkedIn">
                  <Linkedin size={18} className="text-white hover:text-white transition-colors" />
                </Link>
                <Link to="#" aria-label="YouTube">
                  <Youtube size={18} className="text-white hover:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Information links */}
            <div>
              <p className="text-sm mb-4">Need more information?</p>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Fizmed Announcements
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal links - first column */}
            <div>
              <p className="text-sm mb-4 opacity-0">Legal</p>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal links - second column */}
            <div>
              <p className="text-sm mb-4 opacity-0">Legal</p>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-400">
            <p className="text-xs">© {new Date().getFullYear()} Fizmed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
