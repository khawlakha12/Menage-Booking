import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your login logic here
      // navigate('/dashboard');
    }
  };

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
              <a href="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</a>
              <a href="/reservation" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</a>
              <a href="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</a>
              <a href="/blog" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
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
            <div className="md:hidden py-4 space-y-3">
              <a href="/" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Accueil</a>
              <a href="/reservation" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Réservation</a>
              <a href="/about" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>À propos</a>
              <a href="/blog" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
              <a href="/contact" className={`block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Login Form Section */}
      <div className="flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
        <div className="w-full max-w-6xl">
          {/* Login Card with Split Layout */}
          <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-white'} rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2 min-h-[600px]`}>
            
            {/* Left Side - Form */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              {/* Back Button */}
              <a 
                href="/" 
                className={`inline-flex items-center gap-2 mb-8 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors w-fit`}
              >
                <ArrowLeft size={20} />
                <span>Retour à l'accueil</span>
              </a>

              {/* Header */}
              <div className="mb-8">
                <div className={`inline-block px-4 py-1.5 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Menage Booking
                  </span>
                </div>
                <h1 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                  Connexion
                </h1>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Connectez-vous pour gérer vos réservations
                </p>
              </div>

              {/* Form */}
              <div className="space-y-5">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Adresse email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl ${
                        isDark 
                          ? 'bg-[#1a2642] text-white border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-200 focus:border-blue-500'
                      } border-2 focus:outline-none transition-colors placeholder:text-gray-500`}
                      placeholder="exemple@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl ${
                        isDark 
                          ? 'bg-[#1a2642] text-white border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-200 focus:border-blue-500'
                      } border-2 focus:outline-none transition-colors placeholder:text-gray-500`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff size={20} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                      ) : (
                        <Eye size={20} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className={`ml-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Se souvenir de moi
                    </span>
                  </label>
                  <a 
                    href="/forgot-password" 
                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    Mot de passe oublié?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Se connecter
                </button>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button
                    type="button"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 ${
                      isDark 
                        ? 'bg-[#1a2642] border-gray-700 hover:bg-[#243252] text-white' 
                        : 'bg-white border-gray-200 hover:border-gray-300 text-gray-700'
                    } transition-all hover:scale-[1.02]`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-semibold">Google</span>
                  </button>
                  <button
                    type="button"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 ${
                      isDark 
                        ? 'bg-[#1a2642] border-gray-700 hover:bg-[#243252] text-white' 
                        : 'bg-white border-gray-200 hover:border-gray-300 text-gray-700'
                    } transition-all hover:scale-[1.02]`}
                  >
                     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span className="text-sm font-semibold">Apple</span>
                  </button>
                </div>
              </div>

              {/* Sign Up Link */}
              <p className={`text-sm mt-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Vous n'avez pas de compte?{' '}
                <a href="/register" className="text-blue-500 hover:text-blue-400 font-semibold underline">
                  Inscrivez-vous
                </a>
              </p>

              {/* Terms */}
              <p className={`text-xs mt-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                En continuant, vous acceptez nos{' '}
                <a href="/terms" className="underline hover:text-gray-300">
                  Conditions d'utilisation
                </a>
              </p>
            </div>

            {/* Right Side - Image & Info */}
            <div className={`hidden lg:block relative ${isDark ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900' : 'bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100'} p-12`}>
              <div className="h-full flex flex-col justify-between">
                {/* Top Section */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-gray-900 font-semibold text-sm mb-8">
                    <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></span>
                    Réservation en ligne 24/7
                  </div>
                  
                  <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Simplifiez vos<br />réservations
                  </h2>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
                    Gérez facilement tous vos services de ménage en un seul endroit
                  </p>
                </div>

                {/* Image Placeholder */}
                <div className="relative">
                  <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-[#1a2642]' : 'bg-white'} p-6`}>
                    {/* Calendar Preview */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Janvier 2026</span>
                        <div className="flex gap-1">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-500"></div>
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-500"></div>
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
                          <div key={i} className={`text-center text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {day}
                          </div>
                        ))}
                        {[...Array(31)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`aspect-square flex items-center justify-center text-sm rounded-lg ${
                              i === 4 ? 'bg-yellow-400 text-gray-900 font-bold' : 
                              isDark ? 'text-gray-300 hover:bg-[#243252]' : 'text-gray-700 hover:bg-gray-100'
                            } transition-colors cursor-pointer`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Booking Card */}
                    <div className={`${isDark ? 'bg-[#0f1f3a]' : 'bg-gray-50'} rounded-xl p-4`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Service de Ménage
                        </span>
                        <span className="text-xs text-yellow-500 font-semibold">14:00 - 16:00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white"></div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-white"></div>
                        </div>
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          2 personnes assignées
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className={`absolute -top-6 -right-6 ${isDark ? 'bg-white' : 'bg-gray-900'} rounded-2xl shadow-xl p-4`}>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${isDark ? 'text-gray-900' : 'text-white'}`}>98%</div>
                      <div className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>5000+</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Réservations</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>24/7</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Disponible</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>4.9★</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Note moyenne</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}