import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from 'lucide-react';
import type { FC } from "react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-blue-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl tracking-wider">
            BLUESCOPE<span className="text-xs align-top">TM</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#" className="text-sm font-medium hover:text-blue-500">Home</a>
          <a href="#" className="text-sm font-medium hover:text-blue-500">About Us</a>
          <a href="#" className="text-sm font-medium hover:text-blue-500">Our Projects</a>
          <a href="#" className="text-sm font-medium hover:text-blue-500">Bsp Annual Report</a>
          <a href="#" className="text-sm font-medium hover:text-blue-500">Support</a>
          <a href="#" className="text-sm font-medium hover:text-blue-500">Event</a>
          <a 
            href="#" 
            className="flex items-center bg-white text-black text-sm font-medium px-4 py-2 rounded-sm hover:bg-white/90 transition-colors"
          >
            Create Account
            <ArrowRight className="w-4 h-4 ml-2"/>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 p-4"
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm font-medium hover:text-blue-500">Home</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">About Us</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">Our Projects</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">Bsp Annual Report</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">Support</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500">Event</a>
            <a 
              href="#" 
              className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-blue-600/90 transition-colors text-center"
            >
              Create an Account
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
