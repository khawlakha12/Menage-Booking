import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Mail, Briefcase, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import Footer from "../components/Footer";

export default function Contact() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.date || !formData.time) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    console.log('Consultation:', formData);
    alert('Demande de consultation envoyée ! Nous vous contacterons bientôt.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      date: '',
      time: ''
    });
  };

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
              <a href="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</a>
              <a href="/reservation" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</a>
              <a href="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</a>
              <a href="/blog" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="/contact" className={`${isDark ? 'text-blue-500 hover:text-blue-400' : 'text-blue-600 hover:text-blue-700'} transition-colors font-medium`}>Contact</a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className={`hidden md:block px-4 py-2 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                Connexion
              </button>
              <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Inscription
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
            <div className="md:hidden py-4 space-y-3 border-t border-gray-800">
              <a href="/" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</a>
              <a href="/reservation" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</a>
              <a href="/about" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</a>
              <a href="/blog" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="/contact" className="block text-blue-500 hover:text-blue-400 transition-colors font-medium">Contact</a>
              <div className="pt-3 space-y-2">
                <button className={`block w-full px-4 py-2 text-center ${isDark ? 'text-blue-400' : 'text-gray-700'}`}>Connexion</button>
                <button className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Inscription</button>
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
                Contactez-Nous
              </h1>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos services de nettoyage professionnel et obtenir un devis personnalisé.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <a href="/" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Accueil
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
                Envoyez-nous un Email
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                N'hésitez pas à nous contacter par email. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <button className="text-blue-500 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all group">
                <span>Envoyer un message</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Careers Card */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-8 md:p-10 rounded-2xl hover:shadow-xl transition-shadow`}>
              <div className={`w-14 h-14 md:w-16 md:h-16 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mb-5 md:mb-6`}>
                <Briefcase className="text-blue-500" size={28} />
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                Rejoignez Notre Équipe
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Nous recherchons des professionnels passionnés pour rejoindre notre équipe de nettoyage.
              </p>
              <button className="text-blue-500 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all group">
                <span>Postuler maintenant</span>
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
                Demandez une<br />Consultation Gratuite
              </h2>
              
              <div className="space-y-5 md:space-y-6">
                {/* First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Prénom*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Nom*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Adresse Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Type de Service*
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors appearance-none cursor-pointer`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%234B5563' d='M4.427 5.927l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 5.5H4.604a.25.25 0 00-.177.427z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center'
                      }}
                    >
                      <option value="">Choisir un service</option>
                      <option value="maison">Nettoyage de Maison</option>
                      <option value="bureau">Nettoyage de Bureau</option>
                      <option value="vitres">Nettoyage de Vitres</option>
                      <option value="travaux">Nettoyage Après Travaux</option>
                      <option value="cuisine">Nettoyage de Cuisine</option>
                      <option value="tapis">Nettoyage de Tapis</option>
                      <option value="desinfection">Désinfection</option>
                      <option value="bail">Nettoyage Fin de Bail</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Date Souhaitée*
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Heure Souhaitée*
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 md:py-3.5 rounded-lg ${
                        isDark 
                          ? 'bg-[#0f1f3a] text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500'
                      } outline-none transition-colors`}
                    />
                  </div>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full md:w-auto px-8 py-3 md:py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-blue-600/30"
                >
                  Demander une Consultation
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=1000&fit=crop"
                alt="Équipe de nettoyage professionnelle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className={`${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} py-12 md:py-20 pb-16 md:pb-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8 md:mb-12`}>
            Nos Bureaux
          </h2>
          <div className="space-y-8 md:space-y-10">
            {/* Agadir Head Office */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-6 md:p-10 lg:p-12 rounded-2xl hover:shadow-xl transition-shadow`}>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                    Bureau Principal<br />Agadir
                  </h3>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} mt-2`}>
                    <Clock size={14} className="text-blue-500" />
                    <span className={`text-xs font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      Lun-Sam: 8h-18h
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-2 mb-3">
                    <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        Avenue Hassan *
                      </p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        Quartier 
                      </p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        80000 Agadir, Maroc
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-2 mb-3">
                    <Mail className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      contact@MenageBooking.ma
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Phone className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <a href="tel:+212528234567" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold">
                      +212 500-000-000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Casablanca Office */}
            <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} p-6 md:p-10 lg:p-12 rounded-2xl hover:shadow-xl transition-shadow`}>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                    Bureau de<br />Casablanca
                  </h3>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} mt-2`}>
                    <Clock size={14} className="text-blue-500" />
                    <span className={`text-xs font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      Lun-Sam: 8h-19h
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-2 mb-3">
                    <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        Boulevard 
                      </p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        Quartier Maarif
                      </p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        20100 Casablanca, Maroc
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-2 mb-3">
                    <Mail className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      casa@MenageBooking.ma
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Phone className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <a href="tel:+212522987654" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold">
                      +212 500-000-000
                    </a>
                  </div>
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