import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function ConferenceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { 
      id: 1, 
      title: 'Nettoyage Cuisine Professionnel',
      description: 'Service complet de nettoyage pour cuisines résidentielles',
      category: 'Résidentiel'
    },
    { 
      id: 2, 
      title: 'Grand Ménage',
      description: 'Nettoyage en profondeur de tous les espaces',
      category: 'Résidentiel'
    },
    { 
      id: 3, 
      title: 'Service Ménage Standard',
      description: 'Entretien régulier et nettoyage quotidien',
      category: 'Résidentiel'
    },
    { 
      id: 4, 
      title: 'Service Garde d\'Enfants',
      description: 'Service professionnel de garde et entretien',
      category: 'Services Additionnels'
    },
    { 
      id: 5, 
      title: 'Nettoyage Cuisine Commerciale',
      description: 'Entretien des cuisines professionnelles',
      category: 'Commercial'
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#0f1e31] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Gallery */}
          <div className="relative w-full">
            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -left-20 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 group">
              {/* Image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">
                    {activeIndex === 0 && '🍳'}
                    {activeIndex === 1 && '🧹'}
                    {activeIndex === 2 && '✨'}
                    {activeIndex === 3 && '👶'}
                    {activeIndex === 4 && '🏢'}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {images[activeIndex].title}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {images[activeIndex].description}
                  </p>
                  <span className="inline-block mt-4 px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                    {images[activeIndex].category}
                  </span>
                </div>
              </div>

              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
              </div>

              {/* Navigation Arrows on Image */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6 relative">
              <div className="flex items-center justify-center space-x-3">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="flex-shrink-0 p-2 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-blue-400 transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Thumbnails */}
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                        index === activeIndex
                          ? 'ring-4 ring-blue-500 scale-110'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl">
                        {index === 0 && '🍳'}
                        {index === 1 && '🧹'}
                        {index === 2 && '✨'}
                        {index === 3 && '👶'}
                        {index === 4 && '🏢'}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="flex-shrink-0 p-2 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-blue-400 transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500 w-4'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-3 text-gray-400 text-sm font-medium">
                {activeIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20">
              <span className="text-blue-400 text-sm font-semibold">Nos Réalisations</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Notre Galerie de Services de
              <span className="text-blue-400"> Ménage</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Découvrez nos réalisations et la qualité de notre travail à travers notre galerie. Du ménage résidentiel au nettoyage professionnel, nous garantissons un résultat impeccable à chaque intervention.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="text-3xl mb-2">✓</div>
                <p className="text-white font-semibold mb-1">100% Satisfait</p>
                <p className="text-gray-400 text-sm">Garantie qualité</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-white font-semibold mb-1">Service Rapide</p>
                <p className="text-gray-400 text-sm">Intervention 24/7</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                Voir tous nos services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}