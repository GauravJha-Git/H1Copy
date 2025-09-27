import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ArrowUp, Sparkles, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/5 to-violet-600/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/5 to-cyan-600/5 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 10 }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-violet-400 opacity-20"
        animate={{ 
          y: [0, -8, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-cyan-400 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Star className="h-5 w-5" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <motion.div 
                className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                H1Copy
              </motion.div>
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transforming businesses through data-driven SEO strategies and compelling content 
                that drives real results.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { 
                  icon: Twitter, 
                  gradient: "from-blue-400 to-blue-600",
                  label: "Follow us on Twitter"
                },
                { 
                  icon: Linkedin, 
                  gradient: "from-blue-600 to-blue-800",
                  label: "Connect on LinkedIn"
                },
                { 
                  icon: Facebook, 
                  gradient: "from-blue-700 to-blue-900",
                  label: "Like us on Facebook"
                },
                { 
                  icon: Instagram, 
                  gradient: "from-purple-600 to-pink-600",
                  label: "Follow us on Instagram"
                }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href="#" 
                  className={`bg-gradient-to-r ${social.gradient} p-2 rounded-lg transition-all duration-300 shadow-lg`}
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Services */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Content Marketing", 
                "Technical SEO",
                "Local SEO",
                "Link Building",
                "SEO Audits"
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <motion.a 
                    href="#" 
                    className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-400 hover:bg-clip-text transition-all duration-300 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {[
                { name: "Home", action: () => scrollToSection('home') },
                { name: "About Us", action: () => scrollToSection('about') },
                { name: "Services", action: null },
                { name: "Blog", action: null },
                { name: "Case Studies", action: null },
                { name: "Contact", action: () => scrollToSection('contact') }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <motion.button 
                    onClick={link.action || undefined}
                    className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Contact Info
            </motion.h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  color: "text-cyan-400",
                  title: "hello@h1copy.com",
                  subtitle: "General inquiries"
                },
                {
                  icon: Phone,
                  color: "text-emerald-400",
                  title: "+1 (555) 123-4567",
                  subtitle: "Mon-Fri, 9AM-6PM EST"
                },
                {
                  icon: MapPin,
                  color: "text-violet-400",
                  title: "123 SEO Street",
                  subtitle: "Digital City, DC 12345"
                }
              ].map((contact, index) => (
                <motion.div 
                  key={contact.title}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <contact.icon className={`h-5 w-5 ${contact.color} mt-0.5`} />
                  </motion.div>
                  <div>
                    <p className="text-gray-300">{contact.title}</p>
                    <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>



        {/* Enhanced Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            © 2024 H1Copy. All rights reserved. | Privacy Policy | Terms of Service
          </motion.div>
          
          <motion.button 
            onClick={scrollToTop}
            className="bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 p-3 rounded-xl transition-all duration-300 group shadow-lg"
            aria-label="Back to top"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}