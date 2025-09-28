import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
type Page = 'home' | 'methodology';

interface NavigationProps {
  currentPage?: Page;
  onNavigate?: (page: Page) => void;
}

export function Navigation({ currentPage = 'home', onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (item: { name: string; section: string | null; page?: Page }) => {
    if (item.page && onNavigate) {
      onNavigate(item.page);
      setIsMenuOpen(false);
    } else if (item.section) {
      if (currentPage !== 'home' && onNavigate) {
        // If not on home page, navigate to home first then scroll
        onNavigate('home');
        setTimeout(() => scrollToSection(item.section!), 100);
      } else {
        scrollToSection(item.section);
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', section: 'home', page: 'home' as Page },
    { name: 'Services', section: 'services', page: null },
    { name: 'Methodology', section: null, page: 'methodology' as Page },
    { name: 'Blog', section: null, page: null },
    { name: 'Contact', section: 'contact', page: null },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group transition-transform duration-200 hover:scale-105"
            onClick={() => onNavigate?.('home')}
          >
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-purple-700">
              <span className="text-white font-bold text-sm">H1</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-purple-600">H1Copy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  (item.page === currentPage) || (item.page === 'home' && currentPage === 'home')
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => handleNavigation({ name: 'Contact', section: 'contact', page: null })}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    (item.page === currentPage) || (item.page === 'home' && currentPage === 'home')
                      ? 'text-purple-600 bg-purple-50' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-2 px-4">
                <Button 
                  onClick={() => handleNavigation({ name: 'Contact', section: 'contact', page: null })}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}