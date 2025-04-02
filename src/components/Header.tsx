import React, { useState } from 'react';
import { Globe, Home, Brain, Video, GraduationCap, Search, BookOpen, ChevronDown, Briefcase, Languages, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileMenu } from './ProfileMenu';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'ar', name: 'العربية' }
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">GeoLearn</h1>
          </div>
          
          {/* Search Bar - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:block flex-1 max-w-xl px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search geography topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <BookOpen size={20} />
                <span>Explore Geography</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-50">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div>
                    <h3 className="font-semibold mb-2">Physical Geography</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Landforms</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Climate Systems</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Ecosystems</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Human Geography</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Population</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Cultural Geography</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600">Economic Geography</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/skills" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <GraduationCap size={20} />
              <span>Skill Tests</span>
            </Link>
            <Link to="/careers" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Briefcase size={20} />
              <span>Careers</span>
            </Link>
            <Link to="/interviews" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Video size={20} />
              <span>AI Interview</span>
            </Link>

            {/* Language Selector - Desktop */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Languages size={20} />
                <span>{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-50 max-h-96 overflow-y-auto">
                <div className="sticky top-0 bg-gray-50 px-4 py-2 font-semibold text-sm text-gray-600">
                  Indian Languages
                </div>
                {languages
                  .filter(lang => ['hi', 'bn', 'te', 'ta', 'mr', 'gu', 'kn', 'ml', 'pa'].includes(lang.code))
                  .map((language) => (
                    <button
                      key={language.code}
                      onClick={() => setSelectedLanguage(language.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-blue-50 ${
                        selectedLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                <div className="sticky top-0 bg-gray-50 px-4 py-2 font-semibold text-sm text-gray-600">
                  Other Languages
                </div>
                {languages
                  .filter(lang => !['hi', 'bn', 'te', 'ta', 'mr', 'gu', 'kn', 'ml', 'pa'].includes(lang.code))
                  .map((language) => (
                    <button
                      key={language.code}
                      onClick={() => setSelectedLanguage(language.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-blue-50 ${
                        selectedLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
              </div>
            </div>

            <ProfileMenu />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search - Shown below header on mobile */}
        <div className="mt-4 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search geography topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col">
              <Link to="/" className="flex items-center gap-2 p-4 text-gray-600 hover:bg-gray-50">
                <Home size={20} />
                <span>Home</span>
              </Link>
              
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center justify-between w-full p-4 text-gray-600 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={20} />
                  <span>Explore Geography</span>
                </div>
                <ChevronDown size={16} className={`transform transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isExploreOpen && (
                <div className="bg-gray-50 px-4 py-2">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Physical Geography</h3>
                    <ul className="space-y-2 ml-6">
                      <li><a href="#" className="text-gray-600">Landforms</a></li>
                      <li><a href="#" className="text-gray-600">Climate Systems</a></li>
                      <li><a href="#" className="text-gray-600">Ecosystems</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Human Geography</h3>
                    <ul className="space-y-2 ml-6">
                      <li><a href="#" className="text-gray-600">Population</a></li>
                      <li><a href="#" className="text-gray-600">Cultural Geography</a></li>
                      <li><a href="#" className="text-gray-600">Economic Geography</a></li>
                    </ul>
                  </div>
                </div>
              )}

              <Link to="/skills" className="flex items-center gap-2 p-4 text-gray-600 hover:bg-gray-50">
                <GraduationCap size={20} />
                <span>Skill Tests</span>
              </Link>
              
              <Link to="/careers" className="flex items-center gap-2 p-4 text-gray-600 hover:bg-gray-50">
                <Briefcase size={20} />
                <span>Careers</span>
              </Link>
              
              <Link to="/interviews" className="flex items-center gap-2 p-4 text-gray-600 hover:bg-gray-50">
                <Video size={20} />
                <span>AI Interview</span>
              </Link>

              {/* Language Selector - Mobile */}
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center justify-between w-full p-4 text-gray-600 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <Languages size={20} />
                  <span>{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                </div>
                <ChevronDown size={16} className={`transform transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div className="bg-gray-50 px-4 py-2">
                  <div className="mb-2">
                    <h3 className="font-semibold text-sm text-gray-600 mb-2">Indian Languages</h3>
                    <div className="space-y-2">
                      {languages
                        .filter(lang => ['hi', 'bn', 'te', 'ta', 'mr', 'gu', 'kn', 'ml', 'pa'].includes(lang.code))
                        .map((language) => (
                          <button
                            key={language.code}
                            onClick={() => {
                              setSelectedLanguage(language.code);
                              setIsLanguageOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left rounded-lg ${
                              selectedLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                            }`}
                          >
                            {language.name}
                          </button>
                        ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-600 mb-2">Other Languages</h3>
                    <div className="space-y-2">
                      {languages
                        .filter(lang => !['hi', 'bn', 'te', 'ta', 'mr', 'gu', 'kn', 'ml', 'pa'].includes(lang.code))
                        .map((language) => (
                          <button
                            key={language.code}
                            onClick={() => {
                              setSelectedLanguage(language.code);
                              setIsLanguageOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left rounded-lg ${
                              selectedLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                            }`}
                          >
                            {language.name}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}