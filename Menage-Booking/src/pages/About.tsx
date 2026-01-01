import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, Mail, Briefcase, ArrowRight } from 'lucide-react';
import Footer from "../components/Footer";

export default function About() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-[#0a1628]' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Booking</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</Link>
              <Link to="/reservation" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Reservation</Link>
              <Link to="/about" className={`${isDark ? 'text-blue-500 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</Link>
              <Link to="/blog" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</Link>
              <Link to="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className={`hidden md:block px-4 py-2 ${isDark ? 'text-blue-500 hover:text-[#0a1628]' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                Sign In
              </button>
              <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2"
              >
                {menuOpen ? <X className={isDark ? 'text-white' : 'text-gray-900'} /> : <Menu className={isDark ? 'text-white' : 'text-gray-900'} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
                      <div className="md:hidden py-4 space-y-3">
                        <Link to="/" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</Link>
                        <Link to="/reservation" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Reservation</Link>
                        <Link to="/about" className="block text-blue-500 hover:text-blue-400 transition-colors">About</Link>
                        <Link to="/blog" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</Link>
                        <Link to="/contact" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
                        <div className="pt-3 space-y-2">
                          <button className={`block w-full px-4 py-2 text-center ${isDark ? 'text-blue-500' : 'text-gray-700'}`}>Sign In</button>
                          <button className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
                        </div>
                      </div>
                    )}
        </div>
      </nav>
   <Footer />
       </div>
     );
   }