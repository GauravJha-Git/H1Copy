import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission here
      console.log('Form submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Thank You for Your Message! We Will Get Back to You Soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, There Was an Error Sending Your Message. Please Try Again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
                    disabled={isSubmitting}
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl disabled:opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  // placeholder="Tell us about your SEO goals and challenges..."
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl disabled:opacity-50"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  <Send className={`ml-3 h-5 w-5 transition-transform duration-200 ${isSubmitting ? '' : 'group-hover:translate-x-1'}`} />
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Information & Social Media Combined */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in touch
            </h3>
            
            {/* Email Contact */}
            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-900">Email</h4>
                <p className="text-gray-600">hello@h1copy.com</p>
                <p className="text-gray-600">support@h1copy.com</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Follow us for smarter content marketing
              </h4>
              
            
              
              <div className="flex space-x-4">
                {[
                  
                  { 
                    icon: Linkedin, 
                    color: "bg-blue-700",
                    label: "Connect on LinkedIn"
                  }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href="#" 
                    className={`${social.color} text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
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