import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, Mail, Briefcase, ArrowRight } from 'lucide-react';
import Footer from "../components/Footer";

export default function Contact() {
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
              <Link to="/Reservation" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Reservation</Link>
              <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</Link>
              <Link to="/Blog" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</Link>
              <Link to="/contact" className={`${isDark ? 'text-blue-500 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className={`hidden md:block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
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
              <a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</a>
              <a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Reservation</a>
              <a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</a>
              <a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="#" className="block text-blue-500 hover:text-blue-400 transition-colors">Contact</a>
              <div className="pt-3 space-y-2">
                <button className={`block w-full px-4 py-2 text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Sign In</button>
                <button className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Contact Us */}
      <section className={`${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} py-12 md:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-2xl">
              <h1 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Contact Us
              </h1>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Home
              </a>
              <span className={`${isDark ? 'text-gray-600' : 'text-gray-400'} text-lg`}>›</span>
              <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Contact</span>
            </div>
          </div>

          {/* Email & Careers Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
            {/* Email US Card */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-8 md:p-10 rounded-2xl hover:shadow-xl transition-shadow`}>
              <div className={`w-14 h-14 md:w-16 md:h-16 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mb-5 md:mb-6`}>
                <Mail className="text-blue-500" size={28} />
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                Email US
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Please feel free to drop us a line. We will respond as soon as possible.
              </p>
              <button className="text-blue-500 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all group">
                <span>Leave a message</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Careers Card */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-8 md:p-10 rounded-2xl hover:shadow-xl transition-shadow`}>
              <div className={`w-14 h-14 md:w-16 md:h-16 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mb-5 md:mb-6`}>
                <Briefcase className="text-blue-500" size={28} />
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                Careers
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum
              </p>
              <button className="text-blue-500 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all group">
                <span>Send an application</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Online Consultation Section */}
      <section className={`${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} py-12 md:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Form Section */}
            <div>
              <h2 className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8 md:mb-10`}>
                Get Online<br />Consultation
              </h2>
              
              <div className="space-y-5 md:space-y-6">
                {/* First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      First Name*
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                </div>

                {/* Email & Specialist */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Email address*
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Specialist*
                    </label>
                    <select
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-gray-400 border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors appearance-none cursor-pointer`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%234B5563' d='M4.427 5.927l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 5.5H4.604a.25.25 0 00-.177.427z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center'
                      }}
                    >
                      <option>Choose a specialist</option>
                      <option>Consultant</option>
                      <option>Developer</option>
                      <option>Designer</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Date*
                    </label>
                    <input
                      type="date"
                      placeholder="jj/mm/aaaa"
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-gray-400 border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Time*
                    </label>
                    <input
                      type="time"
                      placeholder="--:--"
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-gray-400 border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-3 md:py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Make an appointment
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
                alt="Modern office space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className={`${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} py-12 md:py-20 pb-16 md:pb-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-10">
            {/* Pune Head Office */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-6 md:p-10 lg:p-12 rounded-2xl`}>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Pune Head<br />Office
                  </h3>
                </div>
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    4292 Mapleview Drive
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Greenfield Zip code
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    38230
                  </p>
                </div>
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    headoffice@symposium.com
                  </p>
                  <a href="tel:7316215503" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold inline-block">
                    Call 731-621-5503
                  </a>
                </div>
              </div>
            </div>

            {/* Bengaluru Office */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-6 md:p-10 lg:p-12 rounded-2xl`}>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Bengaluru<br />Office
                  </h3>
                </div>
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    3502 Marcus Street
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Geraldine Zip code
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    35974
                  </p>
                </div>
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    Office@symposium.com
                  </p>
                  <a href="tel:7312357993" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold inline-block">
                    Call 731-235-7993
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<Footer />
    </div>
  );
}