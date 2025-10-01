import React, { useState } from 'react';
import { ArrowLeft, PenTool, DollarSign, Clock, Users, Star, CheckCircle, Globe, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface WriterNetworkProps {
  onNavigateHome: () => void;
}

export function WriterNetwork({ onNavigateHome }: WriterNetworkProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    portfolio: '',
    specialization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Writer application submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your application! We will review it and get back to you within 2-3 business days.');
      setFormData({ name: '', email: '', experience: '', portfolio: '', specialization: '', message: '' });
    } catch (error) {
      console.error('Application submission error:', error);
      alert('Sorry, there was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Earn $0.10-$0.50 per word based on your experience and specialization.',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work on your own schedule with deadlines that respect your work-life balance.',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a network of professional writers and get support when you need it.',
    },
    {
      icon: Zap,
      title: 'Skill Development',
      description: 'Access to training resources and workshops to enhance your writing skills.',
    },
    {
      icon: Globe,
      title: 'Diverse Projects',
      description: 'Work on content for various industries and expand your expertise.',
    },
    {
      icon: Star,
      title: 'Recognition',
      description: 'Get recognized for excellent work and build your reputation in the industry.',
    },
  ];

  const requirements = [
    'Native or near-native English proficiency',
    '2+ years of content writing experience',
    'Strong understanding of SEO principles',
    'Ability to research and write on various topics',
    'Excellent grammar and proofreading skills',
    'Reliable internet connection and availability',
  ];

  const testimonials = [
    {
      name: 'Jessica Williams',
      role: 'Content Writer',
      content: 'Working with h1copy has been amazing. The projects are interesting, the pay is fair, and the team is incredibly supportive.',
      avatar: '👩‍💻',
      rating: 5,
    },
    {
      name: 'Marcus Thompson',
      role: 'SEO Content Specialist',
      content: 'I have been part of the writer network for 2 years now. The flexibility and quality of projects is unmatched.',
      avatar: '👨‍✍️',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'Technical Writer',
      content: 'h1copy values quality writing and provides excellent feedback. It has helped me grow as a professional writer.',
      avatar: '👩‍🔬',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Back to Home Button */}
      <div className="fixed top-20 left-4 z-40">
        <Button
          onClick={onNavigateHome}
          variant="outline"
          className="flex items-center space-x-2 bg-white hover:bg-gray-50 border-gray-300 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <PenTool className="h-16 w-16 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join the h1copy Writer Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are you a talented freelance writer? Join our exclusive network of content creators and work on 
              exciting SEO and content marketing projects for leading brands.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full text-sm font-semibold text-green-600 border border-green-200">
              ✨ Now Accepting Applications
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Join Our Network?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in supporting our writers with competitive compensation, flexible work, and growth opportunities.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We're Looking For
            </h2>
            <p className="text-xl text-gray-600">
              We're seeking experienced writers who are passionate about creating high-quality content.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Requirements</h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Writers Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from successful writers in our network.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="text-center">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Apply to Join Our Network
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey with h1copy? Fill out the application below.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl p-3 bg-white disabled:opacity-50"
                  >
                    <option value="">Select experience</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-6">4-6 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio URL</label>
                  <Input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://yourportfolio.com"
                    disabled={isSubmitting}
                    className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Specialization *</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl p-3 bg-white disabled:opacity-50"
                >
                  <option value="">Select your specialization</option>
                  <option value="SEO Content">SEO Content Writing</option>
                  <option value="Technical Writing">Technical Writing</option>
                  <option value="Blog Writing">Blog Writing</option>
                  <option value="Marketing Copy">Marketing Copy</option>
                  <option value="Social Media">Social Media Content</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Yourself</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your writing experience, favorite topics, and why you'd like to join our network..."
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-xl disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Join our network of talented freelance writers and start working on exciting projects with leading brands.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg cursor-pointer"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}