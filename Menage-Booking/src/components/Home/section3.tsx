import React from 'react';
import { Play } from 'lucide-react';

export default function PreviousYearHighlights() {
  return (
    <div className="bg-[#0f1e31] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h4 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Nos Résultats<br />En Chiffres
            </h4>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Une expérience de plus de 10 ans dans le domaine du ménage professionnel. Nos clients nous font confiance pour la qualité et la fiabilité de nos services de nettoyage résidentiel et commercial.
            </p>

            <div className="flex flex-wrap gap-8 lg:gap-12">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm sm:text-base">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">15</div>
                <div className="text-gray-400 text-sm sm:text-base">Employés qualifiés</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">2000+</div>
                <div className="text-gray-400 text-sm sm:text-base">Interventions réalisées</div>
              </div>
            </div>
          </div>

          {/* Right Side - Video/Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Conference Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                {/* You can replace this with an actual image */}
                <div className="w-full h-full bg-black/50 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/800/450" 
                    alt="Conference highlights" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                  <Play className="w-8 h-8 text-[#0f1e31] ml-1 group-hover:text-blue-600 transition-colors" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}