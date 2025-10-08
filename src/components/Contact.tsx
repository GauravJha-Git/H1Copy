import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

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
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,     // ✅ from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // ✅ from .env
        {
          name: formData.name,
          email: formData.email,
          message: formData.message || 'No message provided'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY      // ✅ from .env
      );

      console.log('EmailJS result:', result.text);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Thank You for Your Message! We Will Get Back to You Soon.');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, There Was an Error Sending Your Message. Please Try Again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
             Stop tolerating generic fluff 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We do content your audience, AI, and search engines can’t ignore
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-4xl w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="gap-4 items-center">
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
        </motion.div>
      </div>
    </section>
  );
}
