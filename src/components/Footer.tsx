import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Useful Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-gray-600 hover:text-blue-600 text-sm">About Us</Link></li>
              <li><Link to="/contact-us" className="text-gray-600 hover:text-blue-600 text-sm">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-gray-600 hover:text-blue-600 text-sm">FAQs</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-base font-semibold mb-4">Careers</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 text-sm">Blog</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-blue-600 text-sm">Press</Link></li>
              <li><Link to="/partnerships" className="text-gray-600 hover:text-blue-600 text-sm">Partnerships</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-blue-600 text-sm">Support</Link></li>
              <li><Link to="/help-center" className="text-gray-600 hover:text-blue-600 text-sm">Help Center</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/events" className="text-gray-600 hover:text-blue-600 text-sm">Events</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-blue-600 text-sm">Community</Link></li>
              <li><Link to="/social-media" className="text-gray-600 hover:text-blue-600 text-sm">Social Media</Link></li>
              <li><Link to="/newsletter" className="text-gray-600 hover:text-blue-600 text-sm">Newsletter</Link></li>
              <li><Link to="/subscribe" className="text-gray-600 hover:text-blue-600 text-sm">Subscribe</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-base font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-4">Join our community to receive updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 text-sm bg-gray-100 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
              <img
                src="https://bluescopeptyltd.club/assets/images/logoIcon/logo.png"
                alt="bluescope"
                draggable="false"
                className="h-12 w-auto"
              />
            </div>
            <div className="flex justify-center md:justify-center space-x-4 mb-4 md:mb-0">
              <Link to="https://facebook.com" className="text-gray-600 hover:text-blue-600">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="https://instagram.com" className="text-gray-600 hover:text-blue-600">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="https://youtube.com" className="text-gray-600 hover:text-blue-600">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
              <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-blue-600">Cookie Policy</Link>
            </div>
            <div className="text-center sm:text-right">
              © {new Date().getFullYear()} BlueScope. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer