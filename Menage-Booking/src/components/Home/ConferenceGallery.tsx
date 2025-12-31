import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ConferenceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { id: 1, url: 'cuisine1', alt: 'Conference participant 1' },
    { id: 2, url: 'cuisine2', alt: 'Conference participant 2' },
    { id: 3, url: 'manage1', alt: 'Conference participant 3' },
    { id: 4, url: 'nono', alt: 'Conference participant 4' },
    { id: 5, url: 'nono', alt: 'Conference participant 5' },
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
    <div className="bg-[#0f1e31] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image Gallery */}
          <div className="relative">
            {/* Decorative Circle */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
            
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800">
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-semibold">
                Image {activeIndex + 1}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 relative">
              <div className="flex items-center justify-center space-x-3">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Thumbnails */}
                <div className="flex space-x-2 overflow-hidden">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                        index === activeIndex
                          ? 'ring-4 ring-blue-500 scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white text-sm font-medium">
                        {index + 1}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-2 mt-3">
                {images.map((image, idx) => (
                  <button
                    key={image.id}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Notre Galerie de Services de Ménage
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Découvrez nos réalisations et la qualité de notre travail à travers notre galerie photos. Du ménage résidentiel au nettoyage professionnel, nous garantissons un résultat impeccable à chaque intervention.
            </p>

            <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium">
              Voir tous nos services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}