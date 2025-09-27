import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook, Instagram, Sparkles, Star, Zap, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="contact" className="py-20 bg-gradient-to-br from-violet-50/50 via-pink-50/50 to-cyan-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/10 to-pink-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/10 to-violet-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 10 }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-violet-400 opacity-30"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-pink-400 opacity-30"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Star className="h-6 w-6" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-black mb-6 bg-gradient-to-r from-violet-700 via-pink-700 to-cyan-700 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity },
              scale: { type: "spring", stiffness: 300 }
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Let's Grow Your Business Together
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to dominate search results? Get in touch with our SEO experts for a free consultation 
            and discover how we can boost your online presence.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced Contact Form */}
          <motion.div 
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-violet-50/30 via-pink-50/30 to-cyan-50/30"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03))',
                  'linear-gradient(90deg, rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03))',
                  'linear-gradient(135deg, rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03))'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6 relative z-10 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Send Us a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-2 border-violet-200 focus:border-violet-500 rounded-xl transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full border-2 border-violet-200 focus:border-violet-500 rounded-xl transition-all duration-300"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border-2 border-violet-200 focus:border-violet-500 rounded-xl transition-all duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="w-full border-2 border-violet-200 focus:border-violet-500 rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seo-audit">SEO Audit</SelectItem>
                    <SelectItem value="keyword-research">Keyword Research</SelectItem>
                    <SelectItem value="content-optimization">Content Optimization</SelectItem>
                    <SelectItem value="technical-seo">Technical SEO</SelectItem>
                    <SelectItem value="link-building">Link Building</SelectItem>
                    <SelectItem value="local-seo">Local SEO</SelectItem>
                    <SelectItem value="full-service">Full-Service SEO</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your SEO goals and challenges..."
                  rows={5}
                  className="w-full border-2 border-violet-200 focus:border-violet-500 rounded-xl transition-all duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 hover:from-violet-700 hover:via-pink-700 hover:to-cyan-700 text-white py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </form>

            {/* Floating accent */}
            <motion.div
              className="absolute top-6 right-6 text-violet-400 opacity-20"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Heart className="h-6 w-6" />
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Details */}
            <motion.div 
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-violet-50/30 to-pink-50/30"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03))',
                    'linear-gradient(90deg, rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03))',
                    'linear-gradient(135deg, rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03))'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6 relative z-10 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Get in Touch
              </motion.h3>
              
              <div className="space-y-6 relative z-10">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: ["hello@h1copy.com", "support@h1copy.com"],
                    gradient: "from-cyan-500 to-violet-500",
                    bgGradient: "from-cyan-100 to-violet-100"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: ["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM EST"],
                    gradient: "from-violet-500 to-pink-500",
                    bgGradient: "from-violet-100 to-pink-100"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    content: ["123 SEO Street", "Digital City, DC 12345"],
                    gradient: "from-pink-500 to-cyan-500",
                    bgGradient: "from-pink-100 to-cyan-100"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-r ${item.bgGradient} p-3 rounded-xl shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`h-6 w-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating accent */}
              <motion.div
                className="absolute top-6 right-6 text-cyan-400 opacity-20"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap className="h-6 w-6" />
              </motion.div>
            </motion.div>

            {/* Enhanced Social Media */}
            <motion.div 
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-cyan-50/30 to-violet-50/30"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03))',
                    'linear-gradient(90deg, rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03))',
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03))'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6 relative z-10 bg-gradient-to-r from-pink-600 to-cyan-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Follow Us
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Stay updated with the latest SEO trends and insights
              </motion.p>
              
              <motion.div 
                className="flex space-x-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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
                    className={`bg-gradient-to-r ${social.gradient} text-white p-3 rounded-xl shadow-lg transition-all duration-300`}
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Floating accent */}
              <motion.div
                className="absolute bottom-6 right-6 text-pink-400 opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -8, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}