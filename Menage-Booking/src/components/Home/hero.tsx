import React, { useState } from 'react';
import { Calendar, Ticket, Sun, Moon, Menu, X, Clock, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";



export default function Hero() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-fit ${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-[#0a1628]' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}


  <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
     <img src="image/Logo_menage-removebg.png" alt="Logo" className="w-full h-full object-cover" />
  </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-blue-500 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</Link>
              <Link to="/reservation" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</Link>
              <Link to="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</Link>
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
              <Link to="/about" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</Link>
              <Link to="/blog" className="block text-blue-500 hover:text-blue-400 transition-colors">Blog</Link>
              <Link to="/contact" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
              <div className="pt-3 space-y-2">
                <button className={`block w-full px-4 py-2 text-center ${isDark ? 'text-blue-500' : 'text-gray-700'}`}>Sign In</button>
                <button className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            <p className="text-blue-400 text-sm sm:text-base flex items-center gap-2">
              <Sparkles size={16} />
              Service professionnel disponible 7j/7
            </p>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} leading-tight`}>
              Service de Ménage Professionnel
            </h1>
            
            <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-lg`}>
              Un espace propre et sain pour votre bien-être. Nos experts transforment votre maison ou bureau en un environnement éclatant de propreté.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Ticket size={20} />
                <span>Réserver maintenant</span>
              </button>
              <button className={`flex items-center justify-center space-x-2 px-6 py-3 border ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}>
                <Calendar size={20} />
                <span>Planifier rendez-vous</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-4">
              <div>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>500+</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clients satisfaits</p>
              </div>
              <div>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>4.9</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Note moyenne</p>
              </div>
              <div>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>10+</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ans d'expérience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[380px]">
            {/* Blue Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-400 rounded-full"></div>
            
            {/* Service Card 1 - Ménage Résidentiel */}
            <div className="absolute top-0 left-0 sm:left-8 z-10">
              <div className="bg-yellow-400 text-gray-900 rounded-2xl px-4 py-3 shadow-lg mb-3">
                <p className="font-semibold">Ménage Résidentiel</p>
                <p className="text-sm">À partir de 25€/h</p>
              </div>
              <div className="w-[120px] sm:w-[160px] h-[160px] sm:h-[200px] bg-gradient-to-br from-blue-300 to-blue-400 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-white text-5xl">🏠</div>
              </div>
            </div>
            
            {/* Service Card 2 - Ménage Commercial */}
            <div className="absolute top-12 sm:top-16 right-0 sm:right-8 z-10">
              <div className="bg-green-300 text-gray-900 rounded-2xl px-4 py-3 shadow-lg mb-3 ml-auto w-max">
                <p className="font-semibold">Ménage Commercial</p>
                <p className="text-sm">Devis personnalisé</p>
              </div>
              <div className="w-[140px] sm:w-[180px] h-[180px] sm:h-[240px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-white text-6xl">🏢</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}