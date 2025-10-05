import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const companyButtonRef = useRef<HTMLButtonElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Hover handlers for Services dropdown
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  // Hover handlers for Company dropdown
  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    setIsCompanyDropdownOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 200);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        companyDropdownRef.current &&
        companyButtonRef.current &&
        !companyDropdownRef.current.contains(event.target as Node) &&
        !companyButtonRef.current.contains(event.target as Node)
      ) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    };
  }, []);

  // Handle scroll for home page sections
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-choose-us', 'companies-reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith('/services/');
  const isCompanyActive = () => location.pathname.startsWith('/company/');

  const services = [
    { name: 'eBooks', path: '/services/seo-optimization' },
    { name: 'Blogs', path: '/services/content-marketing' },
    { name: 'White Papers', path: '/services/technical-seo' },
    { name: 'LinkedIN Ghostwriting', path: '/services/local-seo' },
  ];

  const companyPages = [
    { name: 'About Company', path: '/company/about' },
    { name: 'Freelancers Network', path: '/company/writer-network' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <ImageWithFallback
                src="/logo.png"
                alt="h1copy logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold text-purple-600">h1copy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home */}
              {location.pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('home')}
                  className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === 'home'
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Home
                </button>
              ) : (
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              )}

              {/* Services */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  ref={buttonRef}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    isServiceActive() || isServicesDropdownOpen
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 transition-all duration-200 origin-top ${
                    isServicesDropdownOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <Link
                to="/methodology"
                className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive('/methodology')
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Methodology
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive('/blog')
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Blog
              </Link>

              {/* Company */}
              <div
                className="relative"
                ref={companyDropdownRef}
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
              >
                <button
                  ref={companyButtonRef}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    isCompanyActive() || isCompanyDropdownOpen
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Company
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 transition-all duration-200 origin-top ${
                    isCompanyDropdownOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {companyPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer"
                      onClick={() => setIsCompanyDropdownOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Work with us button */}
              {location.pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Work with us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              ) : (
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Work with us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Home */}
              {location.pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('home')}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors w-full text-left cursor-pointer"
                >
                  Home
                </button>
              ) : (
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}

              {/* Services */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-purple-600 transition-colors cursor-pointer"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Methodology */}
              <Link
                to="/methodology"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Methodology
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Company */}
              <div>
                <button
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Company
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileCompanyOpen && (
                  <div className="pl-6 space-y-1">
                    {companyPages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-purple-600 transition-colors cursor-pointer"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileCompanyOpen(false);
                        }}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Work with us button */}
              {location.pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-3 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Contact
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              ) : (
                <Link
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="mt-4 w-full inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-3 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Contact
                  {/* <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" /> */}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
