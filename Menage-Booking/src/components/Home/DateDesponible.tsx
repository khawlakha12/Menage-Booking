import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Star } from 'lucide-react';

export default function DateDesponible() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);

  const dates = [
    { day: '16', month: 'JUN', year: '2024', dayName: 'Lundi' },
    { day: '17', month: 'JAN', year: '2024', dayName: 'Mardi' },
    { day: '18', month: 'FEV', year: '2024', dayName: 'Mercredi' },
    { day: '19', month: 'AVR', year: '2024', dayName: 'Jeudi' },
    { day: '20', month: 'MAI', year: '2024', dayName: 'Vendredi' },
    { day: '21', month: 'AOU', year: '2024', dayName: 'Samedi' },
    { day: '22', month: 'SEP', year: '2024', dayName: 'Dimanche' },
  ];

  const services = [
    {
      id: 1,
      title: 'Ménage Résidentiel Complet',
      description: 'Nettoyage en profondeur de toutes les pièces',
      duration: '3-4 heures',
      price: '75€',
      specialists: [
        { name: 'Sarah Martin', rating: 4.9, reviews: 127 },
        { name: 'Ahmed Ben', rating: 4.8, reviews: 98 }
      ],
      available: true,
      location: 'À domicile'
    },
    {
      id: 2,
      title: 'Nettoyage de Bureaux Professionnels',
      description: 'Entretien professionnel des espaces de travail',
      duration: '2-3 heures',
      price: '95€',
      specialists: [
        { name: 'Karim Aziz', rating: 5.0, reviews: 156 }
      ],
      available: true,
      location: 'Sur site'
    },
    {
      id: 3,
      title: 'Grand Ménage de Printemps',
      description: 'Nettoyage intensif et désinfection complète',
      duration: '5-6 heures',
      price: '150€',
      specialists: [
        { name: 'Sarah Martin', rating: 4.9, reviews: 127 }
      ],
      available: false,
      location: 'À domicile'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? dates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dates.length - 1 ? 0 : prev + 1));
  };

  const visibleDates = 5;
  const startIndex = Math.max(0, Math.min(currentIndex - Math.floor(visibleDates / 2), dates.length - visibleDates));
  const displayedDates = dates.slice(startIndex, startIndex + visibleDates);

  return (
    <div className="bg-[#0a1628] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 mb-4">
            <span className="text-blue-400 text-sm font-semibold flex items-center gap-2">
              <Calendar size={16} />
              Réservation en ligne
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Dates Disponibles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choisissez votre date et réservez votre service de ménage professionnel
          </p>
        </div>
      
        {/* Date Selector */}
        <div className="flex items-center justify-center mb-12 gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Previous dates"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Date Cards */}
          <div className="flex gap-3 overflow-hidden">
            {displayedDates.map((date, index) => {
              const actualIndex = startIndex + index;
              const isSelected = actualIndex === selectedDate;
              return (
                <button
                  key={actualIndex}
                  onClick={() => setSelectedDate(actualIndex)}
                  className={`relative rounded-xl p-4 min-w-[80px] sm:min-w-[100px] transition-all duration-300 ${
                    isSelected
                      ? 'bg-blue-600 scale-110 shadow-2xl'
                      : 'bg-[#1a2642] hover:bg-[#243252]'
                  }`}
                >
                  <div className="text-xs text-gray-400 mb-1 font-medium">
                    {date.dayName}
                  </div>
                  <div className={`text-3xl sm:text-4xl font-bold mb-1 ${
                    isSelected ? 'text-white' : 'text-white'
                  }`}>
                    {date.day}
                  </div>
                  <div className={`text-xs font-semibold ${
                    isSelected ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {date.month} {date.year}
                  </div>
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Next dates"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Services List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#0f1e31] border border-gray-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Left: Service Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {service.description}
                      </p>
                    </div>
                    {!service.available && (
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full">
                        Complet
                      </span>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock size={16} className="text-blue-400" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} className="text-blue-400" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    </div>
                  </div>
                </div>

                {/* Middle: Specialists */}
                <div className="flex items-center gap-4">
                  {/* Avatars */}
                  <div className="flex -space-x-3">
                    {service.specialists.map((specialist, idx) => (
                      <div
                        key={idx}
                        className="w-12 h-12 rounded-full border-2 border-[#0f1e31] bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden flex items-center justify-center text-white font-bold shadow-lg"
                        title={specialist.name}
                      >
                        {specialist.name.charAt(0)}
                      </div>
                    ))}
                  </div>

                  {/* Specialist Info */}
                  <div className="hidden md:block">
                    <div className="text-sm text-gray-400 mb-1">Réalisé par</div>
                    <div className="text-base font-semibold text-white">
                      {service.specialists.map(s => s.name.split(' ')[0]).join(' & ')}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-400">
                        {service.specialists[0].rating} ({service.specialists[0].reviews} avis)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Book Button */}
                <button 
                  disabled={!service.available}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                    service.available
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {service.available ? 'Réserver' : 'Indisponible'}
                </button>
              </div>

              {/* Mobile Specialist Names */}
              <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-400">Réalisé par </span>
                    <span className="text-sm font-semibold text-white">
                      {service.specialists.map(s => s.name).join(' & ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-400">
                      {service.specialists[0].rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Besoin d'un service personnalisé ?
          </p>
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold">
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
}