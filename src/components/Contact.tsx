import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Grow Your Business Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to dominate search results? Get in touch with our SEO experts for a free consultation 
            and discover how we can boost your online presence.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl"
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
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl">
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
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your SEO goals and challenges..."
                  rows={5}
                  className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: ["hello@h1copy.com", "support@h1copy.com"]
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: ["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM EST"]
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    content: ["123 SEO Street", "Digital City, DC 12345"]
                  }
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              
              <p className="text-gray-600 mb-6">
                Stay updated with the latest SEO trends and insights
              </p>
              
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
                    className={`${social.color} text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}