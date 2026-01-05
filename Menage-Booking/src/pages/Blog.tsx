import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, ArrowRight, Building2, TrendingUp, Users } from 'lucide-react';
import Footer from "../components/Footer";


interface BusinessService {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  stats?: {
    clients?: string;
    growth?: string;
    rating?: string;
  };
}

export default function About() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [services, setServices] = useState<BusinessService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using a combination of APIs to create business services data
    const fetchBusinessServices = async () => {
      try {
        // Fetch random business-related data
        const response = await fetch('https://api.publicapis.org/entries');
        const data = await response.json();
        
        // Filter for business-related categories
        const businessApis = data.entries
          .filter((entry: any) => 
            entry.Category === 'Business' || 
            entry.Category === 'Finance' || 
            entry.Category === 'Jobs' ||
            entry.Category === 'Transportation' ||
            entry.Category === 'News' ||
            entry.Category === 'Development' ||
            entry.Category === 'Social'
          )
          .slice(0, 15);

        const servicesData: BusinessService[] = businessApis.map((api: any, index: number) => ({
          id: `service-${index}`,
          title: api.API || 'Business Service',
          description: api.Description || 'Comprehensive business solution for modern enterprises',
          category: 'Business',
          image: `https://picsum.photos/seed/${index + 500}/600/400`,
          stats: {
            clients: `${Math.floor(Math.random() * 500 + 100)}+`,
            growth: `${Math.floor(Math.random() * 40 + 10)}%`,
            rating: `${(Math.random() * 1 + 4).toFixed(1)}`
          }
        }));

        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching business services:', error);
        // Fallback data
        setServices([
          {
            id: '1',
            title: 'Digital Marketing Solutions',
            description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively',
            category: 'Marketing',
            image: 'https://picsum.photos/seed/501/600/400',
            stats: { clients: '250+', growth: '35%', rating: '4.8' }
          },
          {
            id: '2',
            title: 'Financial Consulting',
            description: 'Expert financial advisory services to optimize your business operations and maximize profitability',
            category: 'Finance',
            image: 'https://picsum.photos/seed/502/600/400',
            stats: { clients: '180+', growth: '28%', rating: '4.9' }
          },
          {
            id: '3',
            title: 'HR Management Systems',
            description: 'Streamline your human resources processes with our comprehensive HR management platform',
            category: 'HR',
            image: 'https://picsum.photos/seed/503/600/400',
            stats: { clients: '320+', growth: '42%', rating: '4.7' }
          },
          {
            id: '4',
            title: 'Business Analytics',
            description: 'Data-driven insights and analytics solutions to make informed business decisions',
            category: 'Analytics',
            image: 'https://picsum.photos/seed/504/600/400',
            stats: { clients: '190+', growth: '31%', rating: '4.8' }
          },
          {
            id: '5',
            title: 'Cloud Infrastructure',
            description: 'Scalable and secure cloud computing solutions for modern enterprises',
            category: 'Technology',
            image: 'https://picsum.photos/seed/505/600/400',
            stats: { clients: '410+', growth: '48%', rating: '4.9' }
          },
          {
            id: '6',
            title: 'Legal Services',
            description: 'Comprehensive legal consulting and compliance management for businesses of all sizes',
            category: 'Legal',
            image: 'https://picsum.photos/seed/506/600/400',
            stats: { clients: '145+', growth: '22%', rating: '4.6' }
          },
          {
            id: '7',
            title: 'Cybersecurity Solutions',
            description: 'Protect your business from cyber threats with advanced security measures and monitoring',
            category: 'Security',
            image: 'https://picsum.photos/seed/507/600/400',
            stats: { clients: '275+', growth: '38%', rating: '4.9' }
          },
          {
            id: '8',
            title: 'E-commerce Platform',
            description: 'Build and scale your online store with our powerful e-commerce solutions',
            category: 'Retail',
            image: 'https://picsum.photos/seed/508/600/400',
            stats: { clients: '380+', growth: '45%', rating: '4.8' }
          },
          {
            id: '9',
            title: 'Project Management',
            description: 'Efficient project tracking and team collaboration tools for seamless workflow',
            category: 'Management',
            image: 'https://picsum.photos/seed/509/600/400',
            stats: { clients: '290+', growth: '33%', rating: '4.7' }
          },
          {
            id: '10',
            title: 'Supply Chain Optimization',
            description: 'Streamline your supply chain operations with intelligent logistics solutions',
            category: 'Logistics',
            image: 'https://picsum.photos/seed/510/600/400',
            stats: { clients: '165+', growth: '27%', rating: '4.6' }
          },
          {
            id: '11',
            title: 'Customer Relationship Management',
            description: 'Enhance customer engagement and retention with powerful CRM tools',
            category: 'Sales',
            image: 'https://picsum.photos/seed/511/600/400',
            stats: { clients: '425+', growth: '51%', rating: '4.9' }
          },
          {
            id: '12',
            title: 'Business Intelligence',
            description: 'Transform raw data into actionable insights with advanced BI solutions',
            category: 'Analytics',
            image: 'https://picsum.photos/seed/512/600/400',
            stats: { clients: '210+', growth: '36%', rating: '4.8' }
          },
          {
            id: '13',
            title: 'Content Management System',
            description: 'Create, manage, and publish content effortlessly with our intuitive CMS',
            category: 'Technology',
            image: 'https://picsum.photos/seed/513/600/400',
            stats: { clients: '340+', growth: '41%', rating: '4.7' }
          },
          {
            id: '14',
            title: 'Email Marketing Automation',
            description: 'Automate your email campaigns and nurture leads with intelligent workflows',
            category: 'Marketing',
            image: 'https://picsum.photos/seed/514/600/400',
            stats: { clients: '295+', growth: '39%', rating: '4.8' }
          },
          {
            id: '15',
            title: 'Virtual Meeting Solutions',
            description: 'Connect teams remotely with high-quality video conferencing and collaboration',
            category: 'Communication',
            image: 'https://picsum.photos/seed/515/600/400',
            stats: { clients: '520+', growth: '55%', rating: '4.9' }
          }
        ]);
        setLoading(false);
      }
    };

    fetchBusinessServices();
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a1628]' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-[#0a1628]' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
           <div className="flex items-center space-x-2">
  <div className="w-auto h-16 rounded-lg overflow-hidden flex items-center justify-center">
     <img src="image/logo.png" alt="Logo" className="w-full h-full object-cover" />
  </div>
</div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</Link>
              <Link to="/reservation" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</Link>
              <Link to="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</Link>
              <Link to="/blog" className={`${isDark ? 'text-blue-500 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</Link>
              <Link to="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-blue-600 hover:text-blue-700'} transition-colors font-medium`}>Contact</Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
                           <Link 
               to="/connexion" 
               className={`hidden md:block px-4 py-2 rounded-lg ${
                 isDark 
                   ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' 
                   : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
               } transition-all duration-200`}
             >
               Connexion
             </Link>
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
              <Link to="/" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</Link>
              <Link to="/reservation" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</Link>
              <Link to="/about" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</Link>
              <Link to="/blog" className="block text-blue-500 hover:text-blue-400 transition-colors font-medium">Blog</Link>
              <Link to="/contact" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
              <div className="pt-3 space-y-2">
                <a href='/connexion' className={`block w-full px-4 py-2 text-center ${isDark ? 'text-blue-400' : 'text-gray-700'}`}>Connexion</a>
                 <a href='/register' className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">Inscription</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Business Services Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 md:mb-16">
            <div className="mb-6 lg:mb-0 max-w-2xl">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Business Services
              </h1>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                Discover a wealth of professional business solutions meticulously crafted to provide you with comprehensive services for your enterprise growth.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Home
              </Link>
              <ArrowRight size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
              <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Services</span>
            </div>
          </div>

          {/* Services Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[...Array(15)].map((_, i) => (
                <div key={i} className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} rounded-2xl overflow-hidden animate-pulse`}>
                  <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-300'} h-56 sm:h-64 w-full`}></div>
                  <div className="p-5 md:p-6 space-y-3">
                    <div className={`h-4 ${isDark ? 'bg-gray-800' : 'bg-gray-300'} rounded w-3/4`}></div>
                    <div className={`h-4 ${isDark ? 'bg-gray-800' : 'bg-gray-300'} rounded w-1/2`}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {services.map((service) => (
                <article 
                  key={service.id}
                  className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg ${isDark ? 'shadow-black/20' : 'shadow-gray-200'} group`}
                >
                  <div className="relative overflow-hidden h-56 sm:h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-1.5">
                      <Building2 size={14} />
                      {service.category}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-gray-900'} line-clamp-2 leading-tight group-hover:text-blue-500 transition-colors min-h-[3.5rem]`}>
                      {service.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed`}>
                      {service.description}
                    </p>
                    
                    {/* Stats Section */}
                    {service.stats && (
                      <div className={`grid grid-cols-3 gap-3 mb-4 pb-4 border-b ${isDark ? 'border-gray-700/30' : 'border-gray-200'}`}>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users size={14} className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                          </div>
                          <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {service.stats.clients}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <TrendingUp size={14} className={`${isDark ? 'text-green-400' : 'text-green-600'}`} />
                          </div>
                          <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {service.stats.growth}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <span className={`text-yellow-500`}>★</span>
                          </div>
                          <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {service.stats.rating}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Rating</div>
                        </div>
                      </div>
                    )}
                    
                    <button className="w-full text-blue-500 hover:text-blue-400 transition-colors flex items-center justify-center space-x-1.5 group/btn py-2">
                      <span className="text-xs sm:text-sm font-semibold">Learn More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}