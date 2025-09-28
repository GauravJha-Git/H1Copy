import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold mb-4 text-white">
                H1Copy
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through data-driven SEO strategies and compelling content 
                that drives real results.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {[
                { 
                  icon: Twitter, 
                  color: "bg-blue-500",
                  label: "Follow us on Twitter"
                },
                { 
                  icon: Linkedin, 
                  color: "bg-blue-700",
                  label: "Connect on LinkedIn"
                },
                { 
                  icon: Facebook, 
                  color: "bg-blue-600",
                  label: "Like us on Facebook"
                },
                { 
                  icon: Instagram, 
                  color: "bg-purple-600",
                  label: "Follow us on Instagram"
                }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href="#" 
                  className={`${social.color} p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Content Marketing", 
                "Technical SEO",
                "Local SEO",
                "Link Building",
                "SEO Audits"
              ].map((service, index) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", action: () => scrollToSection('home') },
                { name: "About Us", action: () => scrollToSection('about') },
                { name: "Services", action: null },
                { name: "Blog", action: null },
                { name: "Case Studies", action: null },
                { name: "Contact", action: () => scrollToSection('contact') }
              ].map((link, index) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action || undefined}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Contact Info
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "hello@h1copy.com",
                  subtitle: "General inquiries"
                },
                {
                  icon: Phone,
                  title: "+1 (555) 123-4567",
                  subtitle: "Mon-Fri, 9AM-6PM EST"
                },
                {
                  icon: MapPin,
                  title: "123 SEO Street",
                  subtitle: "Digital City, DC 12345"
                }
              ].map((contact, index) => (
                <div 
                  key={contact.title}
                  className="flex items-start space-x-3"
                >
                  <contact.icon className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">{contact.title}</p>
                    <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 H1Copy. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}