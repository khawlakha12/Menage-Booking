import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function ConferenceFooter() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribe email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0a1628] pt-8 sm:pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 overflow-hidden shadow-xl/30">
          {/* Ticket Illustration - Left Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 sm:w-auto hidden sm:block">
            <div className="relative">
              {/* Main Ticket */}
              <div className="bg-white rounded-lg transform -rotate-12 shadow-2xl p-4 sm:p-6 w-48 sm:w-64">
                <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">User Experience</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Conference</div>
                <div className="text-xs text-gray-600 mb-2">Lulumall</div>
                <div className="text-xs text-gray-600 mb-3">10AM-4PM</div>
                {/* Barcode */}
                <div className="flex gap-[2px] h-12">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex-1 bg-gray-800" style={{ opacity: Math.random() > 0.3 ? 1 : 0.3 }}></div>
                  ))}
                </div>
              </div>
              {/* Background Ticket Shadow */}
              <div className="absolute -bottom-4 -right-4 bg-blue-700 rounded-lg transform -rotate-12 w-48 sm:w-64 h-32 sm:h-40 -z-10"></div>
              {/* Date Badge */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-blue-800 rounded-lg p-3 sm:p-4 transform -rotate-12">
                <div className="text-4xl sm:text-6xl font-bold text-white">16</div>
                <div className="text-xs text-blue-200">JAN 2022</div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="relative z-10 text-center sm:text-right ml-0 sm:ml-auto max-w-xl sm:max-w-md lg:max-w-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Become a Part of<br />the Digital Evolution!
            </h2>
            <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg transition-colors text-base sm:text-lg">
              Book ticket
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Logo and Navigation */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-semibold text-white">Booking</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Reservation</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#1a2642] hover:bg-[#243252] rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a2642] hover:bg-[#243252] rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a2642] hover:bg-[#243252] rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Subscribe Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address*"
                className="flex-1 px-4 py-3 bg-[#1a2642] text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © All rights reserved. Made by Khawla kharbouchi<br className="sm:hidden" />
              <span className="hidden sm:inline"> </span> by react and typescript
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}