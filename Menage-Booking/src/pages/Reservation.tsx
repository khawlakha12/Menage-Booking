import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Star, X, Calendar, MapPin, Phone, Mail, User, Sun, Moon, Menu } from 'lucide-react';
import Footer from "../components/Footer";

export default function Reservation() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    notes: ''
  });

  const dates = [
    { day: 25, month: 'Dec 2025' },
    { day: 26, month: 'Dec 2025' },
    { day: 27, month: 'Dec 2025' },
    { day: 28, month: 'Dec 2025' },
    { day: 29, month: 'Dec 2025' },
    { day: 30, month: 'Dec 2025' },
    { day: 31, month: 'Dec 2025' },
  ];

  const services = [
    {
      title: 'Nettoyage Complet de Maison',
      description: 'Service complet incluant toutes les pièces',
      price: '150 DH',
      duration: '3-4 heures',
      hasBooking: true
    },
    {
      title: 'Nettoyage de Bureau Professionnel',
      description: 'Nettoyage adapté aux espaces de travail',
      price: '200 DH',
      duration: '2-3 heures',
      hasBooking: true
    },
    {
      title: 'Pause - Disponibilité',
      time: '10:00 - 10:30',
      isBreak: true
    },
    {
      title: 'Nettoyage de Vitres et Fenêtres',
      description: 'Nettoyage intérieur et extérieur',
      price: '100 DH',
      duration: '1-2 heures',
      hasBooking: true
    },
    {
      title: 'Nettoyage Après Travaux',
      description: 'Service spécialisé post-construction',
      price: '300 DH',
      duration: '4-5 heures',
      hasBooking: true
    },
    {
      title: 'Pause Déjeuner',
      time: '12:30 - 13:30',
      isBreak: true
    },
    {
      title: 'Nettoyage de Cuisine Profonde',
      description: 'Dégraissage et désinfection complète',
      price: '120 DH',
      duration: '2 heures',
      hasBooking: true
    },
    {
      title: 'Nettoyage de Tapis et Moquettes',
      description: 'Nettoyage en profondeur avec équipement pro',
      price: '180 DH',
      duration: '2-3 heures',
      hasBooking: true
    },
    {
      title: 'Désinfection et Sanitisation',
      description: 'Service de désinfection complète',
      price: '150 DH',
      duration: '1-2 heures',
      hasBooking: true
    },
    {
      title: 'Nettoyage de Fin de Bail',
      description: 'Nettoyage complet pour état des lieux',
      price: '350 DH',
      duration: '5-6 heures',
      hasBooking: true
    }
  ];

  const testimonials = [
    {
      name: 'Khawla ',
      text: 'Service impeccable ! Mon appartement n\'a jamais été aussi propre. L\'équipe est professionnelle, ponctuelle et très attentive aux détails. Je recommande vivement leurs services.',
      rating: 5
    },
    {
      name: 'Mohammed Benjelloun',
      text: 'Excellent service de nettoyage pour mon bureau. Travail soigné et rapide. Le personnel est très sympathique et respectueux. Un grand merci !',
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleBookClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation:', { service: selectedService, ...formData });
    alert('Réservation confirmée ! Nous vous contactons bientôt.');
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-[#0a1628]' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Booking</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</a>
              <a href="/reservation" className={`${isDark ? 'text-blue-500 hover:text-blue-400' : 'text-blue-600 hover:text-blue-700'} transition-colors font-medium`}>Réservation</a>
              <a href="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</a>
              <a href="/blog" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a>
            </div>

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
                <Menu className={isDark ? 'text-white' : 'text-gray-900'} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-800">
              <a href="/" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</a>
              <a href="/reservation" className="block text-blue-500 hover:text-blue-400 transition-colors font-medium">Réservation</a>
              <a href="/about" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</a>
              <a href="/blog" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="/contact" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a>
              <div className="pt-3 space-y-2">
                <button className={`block w-full px-4 py-2 text-center ${isDark ? 'text-blue-400' : 'text-gray-700'}`}>Connexion</button>
                <button className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Inscription</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              Nos Services de Ménage
            </h1>
            <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl`}>
              Découvrez notre gamme complète de services de nettoyage professionnels adaptés à tous vos besoins.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                Accueil
              </a>
              <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>›</span>
              <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Services</span>
            </nav>
          </div>
        </div>

        {/* Date Selector */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-6">
            <button className={`p-2 rounded-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-100 hover:bg-blue-200'} transition-colors`}>
              <ChevronLeft className={isDark ? 'text-white' : 'text-blue-600'} size={20} />
            </button>
            <div className="flex-1 overflow-x-auto scrollbar-hide mx-4">
              <div className="flex space-x-4 justify-center">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(index)}
                    className={`flex-shrink-0 px-6 py-4 rounded-xl transition-all ${
                      selectedDate === index
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                        : isDark
                        ? 'bg-[#0f2744] text-gray-400 hover:bg-[#152d4a]'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="text-3xl font-bold">{date.day}</div>
                    <div className="text-xs mt-1 opacity-80">{date.month}</div>
                  </button>
                ))}
              </div>
            </div>
            <button className={`p-2 rounded-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-100 hover:bg-blue-200'} transition-colors`}>
              <ChevronRight className={isDark ? 'text-white' : 'text-blue-600'} size={20} />
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className={`${isDark ? 'bg-[#0f2744]' : 'bg-white'} rounded-2xl p-6 md:p-8 shadow-xl mb-16`}>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 rounded-xl transition-all ${
                  isDark ? 'hover:bg-[#152d4a]' : 'hover:bg-gray-50'
                } ${index !== services.length - 1 ? (isDark ? 'border-b border-gray-800' : 'border-b border-gray-200') : ''}`}
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {service.title}
                  </h3>
                  {service.isBreak ? (
                    <div className="flex items-center space-x-2">
                      <Clock className="text-blue-500" size={18} />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.time}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {service.price}
                        </span>
                        <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          • Durée: {service.duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                {service.hasBooking && (
                  <button 
                    onClick={() => handleBookClick(service)}
                    className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                  >
                    Réserver
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={`${isDark ? 'bg-[#0f2744]' : 'bg-white'} rounded-2xl p-8 md:p-12 shadow-xl`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300 to-blue-400 rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[40%] rounded-br-[10%] overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-end justify-center">
                    <div className="w-32 h-32 bg-gray-400 rounded-t-full"></div>
                  </div>
                </div>
                <div className="absolute top-8 right-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl text-blue-500">"</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Avis de Nos<br />Clients Satisfaits
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
                    className={`p-2 rounded-full ${isDark ? 'bg-[#152d4a] hover:bg-[#1a3550]' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                  >
                    <ChevronLeft className={isDark ? 'text-white' : 'text-gray-700'} size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial(Math.min(testimonials.length - 1, currentTestimonial + 1))}
                    className={`p-2 rounded-full ${isDark ? 'bg-[#152d4a] hover:bg-[#1a3550]' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                  >
                    <ChevronRight className={isDark ? 'text-white' : 'text-gray-700'} size={20} />
                  </button>
                </div>
              </div>

              <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                {testimonials[currentTestimonial].text}
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[currentTestimonial].name}
                  </p>
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`${isDark ? 'bg-[#0f2744]' : 'bg-white'} rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
            <div className={`sticky top-0 ${isDark ? 'bg-[#0f2744]' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} p-6 flex justify-between items-center`}>
              <div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Réserver un Service
                </h2>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  {selectedService?.title}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-[#152d4a]' : 'hover:bg-gray-100'} transition-colors`}
              >
                <X className={isDark ? 'text-gray-400' : 'text-gray-600'} size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    <User size={16} className="inline mr-2" />
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark 
                        ? 'bg-[#152d4a] border-gray-700 text-white placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    <Phone size={16} className="inline mr-2" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark 
                        ? 'bg-[#152d4a] border-gray-700 text-white placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  <Mail size={16} className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark 
                      ? 'bg-[#152d4a] border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  <MapPin size={16} className="inline mr-2" />
                  Adresse
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark 
                      ? 'bg-[#152d4a] border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Votre adresse complète"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    <Calendar size={16} className="inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark 
                        ? 'bg-[#152d4a] border-gray-700 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    <Clock size={16} className="inline mr-2" />
                    Heure
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark 
                        ? 'bg-[#152d4a] border-gray-700 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Notes Supplémentaires
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark 
                      ? 'bg-[#152d4a] border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Des instructions particulières ou besoins spécifiques..."
                />
              </div>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-[#152d4a]' : 'bg-blue-50'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Service:</span>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedService?.title}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Durée estimée:</span>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedService?.duration}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Prix:</span>
                  <span className="text-xl font-bold text-blue-500">{selectedService?.price}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className={`flex-1 px-6 py-3 rounded-lg ${
                    isDark 
                      ? 'bg-[#152d4a] text-white hover:bg-[#1a3550]' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors font-medium`}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-600/30"
                >
                  Confirmer la Réservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}