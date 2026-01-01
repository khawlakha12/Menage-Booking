import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

export default function BookingFooter() {
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
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 overflow-hidden shadow-2xl">
          {/* Cleaning Illustration - Left Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 sm:w-auto hidden sm:block opacity-20">
            <div className="relative">
              {/* Cleaning Icons */}
              <div className="text-white text-8xl">🧹</div>
              <div className="absolute -bottom-4 -right-8 text-white text-6xl">✨</div>
              <div className="absolute top-0 -left-8 text-white text-5xl">🧽</div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="relative z-10 text-center sm:text-right ml-0 sm:ml-auto max-w-xl sm:max-w-md lg:max-w-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
             Réservez votre professionnel<br />Service de nettoyage aujourd'hui !
            </h2>
            <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl">
              Réservez maintenant
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
  <div className="w-auto h-16 rounded-lg overflow-hidden flex items-center justify-center">
     <img src="image/logo.png" alt="Logo" className="w-full h-full object-cover" />
  </div>
</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Services professionnels de nettoyage et d'entretien de la maison à votre domicile. Nous redonnons de l'éclat à votre espace avec soin et précision.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#1a2642] hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a2642] hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a2642] hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liens rapides</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Accueil</Link>
              <Link to="/reservation" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Réservation</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200">À propos</Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Blog</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Nos services</h3>
            <ul className="flex flex-col space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Nettoyage de maison</li>
              <li className="hover:text-white transition-colors cursor-pointer">Nettoyage en profondeur</li>
              <li className="hover:text-white transition-colors cursor-pointer">Nettoyage des bureaux</li>
              <li className="hover:text-white transition-colors cursor-pointer">Nettoyage des vitres</li>
              <li className="hover:text-white transition-colors cursor-pointer">Nettoyage avant/après déménagement</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contactez-nous</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <span>123, rue Clean, Agadir, Maroc</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <span>+212 6XX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>contact@menage-booking.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Lundi - Samedi: 24h/24h<br />Dimanche: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#1a2642] rounded-2xl p-6 sm:p-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Abonnez-vous à notre newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">Recevez des offres spéciales, des conseils de nettoyage et des mises à jour directement dans votre boîte mail.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-[#0a1628] text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap shadow-lg hover:shadow-xl"
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
              © 2024 Menage Booking. All rights reserved. Made with ❤️ by Khawla Kharbouchi
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
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