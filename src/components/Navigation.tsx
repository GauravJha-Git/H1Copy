import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-cyan-200/30 shadow-lg shadow-cyan-100/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-violet-50/50 to-pink-50/50"
        animate={{
          background: [
            'linear-gradient(90deg, rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
            'linear-gradient(90deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))',
            'linear-gradient(90deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05))'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="text-2xl font-black bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              H1Copy
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', section: 'home' },
                { name: 'Services', section: 'services' },
                { name: 'Blog', section: null },
                { name: 'Methodology', section: null, page: 'methodology' as Page },
                { name: 'Contact', section: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-violet-600 hover:bg-clip-text px-3 py-2 transition-all duration-300 font-medium"
                  whileHover={{ 
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={() => handleNavigation({ name: 'Contact', section: 'contact' })}
                className="bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 hover:from-cyan-700 hover:via-violet-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Get Started
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="ml-2 h-4 w-4" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-violet-600 p-2 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-white/90 via-cyan-50/50 to-violet-50/50 backdrop-blur-xl border-t border-gradient-to-r from-cyan-200/50 to-violet-200/50 rounded-b-2xl shadow-xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {[
                  { name: 'Home', section: 'home' },
                  { name: 'Services', section: 'services' },
                  { name: 'Blog', section: null },
                  { name: 'Methodology', section: null, page: 'methodology' as Page },
                  { name: 'Contact', section: 'contact' }
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="block text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-violet-600 hover:bg-clip-text px-3 py-2 w-full text-left font-medium transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div 
                  className="px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => handleNavigation({ name: 'Contact', section: 'contact' })}
                      className="w-full bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 hover:from-cyan-700 hover:via-violet-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}