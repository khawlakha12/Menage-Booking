import React, { useState } from 'react';
import { Calendar, Ticket, Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Accueil', active: true },
    { path: '/reservation', label: 'Réservation' },
    { path: '/about', label: 'À propos' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-[#0a1628]' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} sticky top-0 z-50 backdrop-blur-lg bg-opacity-90`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-auto h-12 rounded-lg overflow-hidden flex items-center justify-center bg-blue-600 px-3">
                <span className="text-white font-bold text-xl">CleanPro</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`${
                    link.active
                      ? 'text-blue-500 font-semibold'
                      : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-all`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a 
                href="/connexion" 
                className={`hidden md:block px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                } transition-all duration-200`}
              >
                Connexion
              </a>
              <a 
                href="/register"
                className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Inscription
              </a>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className={isDark ? 'text-white' : 'text-gray-900'} /> : <Menu className={isDark ? 'text-white' : 'text-gray-900'} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-800">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`block ${
                    link.active
                      ? 'text-blue-500 font-semibold'
                      : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a href='/connexion' className={`block w-full px-4 py-2 text-center ${isDark ? 'text-blue-400' : 'text-gray-700'} border ${isDark ? 'border-gray-700' : 'border-gray-300'} rounded-lg`}>
                  Connexion
                </a>
                <a href='/register' className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Inscription
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Service professionnel disponible 7j/7</span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} leading-tight`}>
              Service de Ménage
              <span className="text-blue-500"> Professionnel</span>
            </h1>
            
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl leading-relaxed`}>
              Un espace propre et sain pour votre bien-être. Nos experts transforment votre maison ou bureau en un environnement éclatant de propreté.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300">
                <Ticket size={20} />
                <span className="font-semibold">Réserver maintenant</span>
              </button>
              <button className={`flex items-center justify-center space-x-2 px-8 py-4 border-2 ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-lg transition-all hover:scale-105 duration-300`}>
                <Calendar size={20} />
                <span className="font-semibold">Planifier rendez-vous</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center sm:text-left">
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>500+</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clients satisfaits</p>
              </div>
              <div className="text-center sm:text-left">
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>4.9</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Note moyenne</p>
              </div>
              <div className="text-center sm:text-left">
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>10+</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ans d'expérience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Blue Circle Background with glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-400 rounded-full"></div>
            
            {/* Service Card 1 - Ménage Résidentiel */}
            <div className="absolute top-8 left-4 sm:left-12 z-10 animate-float">
              <div className="bg-yellow-400 text-gray-900 rounded-2xl px-5 py-4 shadow-2xl mb-4 hover:scale-105 transition-transform">
                <p className="font-bold text-lg">Ménage Résidentiel</p>
                <p className="text-sm font-medium">À partir de 25€/h</p>
              </div>
              <div className="w-[140px] sm:w-[180px] h-[180px] sm:h-[220px] bg-gradient-to-br from-blue-300 to-blue-500 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-7xl">🏠</div>
              </div>
            </div>
            
            {/* Service Card 2 - Ménage Commercial */}
            <div className="absolute top-24 sm:top-32 right-4 sm:right-12 z-10 animate-float-delayed">
              <div className="bg-green-400 text-gray-900 rounded-2xl px-5 py-4 shadow-2xl mb-4 ml-auto w-max hover:scale-105 transition-transform">
                <p className="font-bold text-lg">Ménage Commercial</p>
                <p className="text-sm font-medium">Devis personnalisé</p>
              </div>
              <div className="w-[160px] sm:w-[200px] h-[200px] sm:h-[260px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-8xl">🏢</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}