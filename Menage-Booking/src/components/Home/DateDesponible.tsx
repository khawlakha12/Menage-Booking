import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DateDesponible() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dates = [
    { day: '16', month: 'JUN 2024' },
    { day: '17', month: 'JAN 2024' },
    { day: '18', month: 'FEB 2024' },
    { day: '19', month: 'APR 2024' },
    { day: '20', month: 'MAY 2024' },
    { day: '21', month: 'AUG 2024' },
    { day: '22', month: 'SEP 2024' },
  ];

  const conferences = [
    {
      id: 1,
      title: 'The Conference Construct Millennial',
      speakers: ['Reena John', 'Lorance'],
      avatars: ['/api/placeholder/40/40', '/api/placeholder/40/40']
    },
    {
      id: 2,
      title: 'Local Business Global Event',
      speakers: ['Martin Luthar'],
      avatars: ['/api/placeholder/40/40']
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? dates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dates.length - 1 ? 0 : prev + 1));
  };

  const visibleDates = 5;
  const startIndex = Math.max(0, currentIndex - Math.floor(visibleDates / 2));
  const displayedDates = dates.slice(startIndex, startIndex + visibleDates);

  return (
    <div className="bg-[#0a1628] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
          Date Desponible
        </h2>
      
        <div className="flex items-center justify-center mb-8 sm:mb-12 gap-3 sm:gap-4">
         
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-shrink-0"
            aria-label="Previous dates"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2 sm:gap-3 overflow-hidden">
            {displayedDates.map((date, index) => (
              <button
                key={index}
                className="bg-[#1a2642] hover:bg-[#243252] rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] transition-colors flex-shrink-0"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {date.day}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {date.month}
                </div>
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-shrink-0"
            aria-label="Next dates"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Conference List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {conferences.map((conference) => (
            <div
              key={conference.id}
              className="bg-[#0f1e31] border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Left: Title */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {conference.title}
                  </h3>
                </div>

                {/* Middle: Speakers */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    {conference.avatars.map((avatar, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#0f1e31] bg-gradient-to-br from-gray-600 to-gray-700 overflow-hidden"
                      >
                        <div className="w-full h-full bg-gray-500"></div>
                      </div>
                    ))}
                  </div>

                  {/* Speaker Names */}
                  <div className="hidden sm:block">
                    <div className="text-sm text-gray-400">Speech by</div>
                    <div className="text-base font-semibold text-white">
                      {conference.speakers.join(' & ')}
                    </div>
                  </div>
                </div>

                {/* Right: Book Button */}
                <button className="px-6 py-2.5 border-2 border-blue-600 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium whitespace-nowrap">
                  Book Ticket
                </button>
              </div>

              {/* Mobile Speaker Names */}
              <div className="sm:hidden mt-3 flex items-center gap-2">
                <span className="text-sm text-gray-400">Speech by</span>
                <span className="text-sm font-semibold text-white">
                  {conference.speakers.join(' & ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}