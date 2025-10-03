import React from 'react';
import { ArrowLeft, PenTool, DollarSign, Clock, Users, Star, CheckCircle, Globe, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

interface WriterNetworkProps {
  onNavigateHome: () => void;
}

export function WriterNetwork({ onNavigateHome }: WriterNetworkProps) {
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
    },
    {
      name: 'Marcus Thompson',
      role: 'SEO Content Specialist',
      content: 'I have been part of the freelancer network for 2 years now. The flexibility and quality of projects is unmatched.',
      avatar: '👨‍✍️',
    },
    {
      name: 'Sarah Chen',
      role: 'Technical Writer',
      content: 'h1copy values quality writing and provides excellent feedback. It has helped me grow as a professional writer.',
      avatar: '👩‍🔬',
    },
  ];

  // Placeholder for Google Form URL - to be updated later
  const handleApplyClick = () => {
    // TODO: Replace with actual Google Form URL
    // window.open('GOOGLE_FORM_URL_HERE', '_blank');
    alert('Google Form link will be added here soon!');
  };

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
              Join the h1copy freelancers network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are you a talented freelance writer? Join our exclusive network of content creators and work on 
              exciting SEO and content marketing projects for leading brands.
            </p>
            <Button
              onClick={handleApplyClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer inline-flex items-center gap-3"
            >
              Apply Now
              <ExternalLink className="h-5 w-5" />
            </Button>
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
              Why join our network?
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
              What we're looking for
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
              What our freelancers say
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
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  
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

      {/* Application Button Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Apply to join our network
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your journey with h1copy? Click below to fill out our application form.
            </p>

            <motion.div
              className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-center">
                <PenTool className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start your application
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Fill out our comprehensive application form to join our network of talented freelance writers.
                </p>
                
                <Button
                  onClick={handleApplyClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer inline-flex items-center gap-3"
                >
                  Apply Now
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
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
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Join our network of talented freelance writers and start working on exciting projects with leading brands.
            </p>
            <Button
              onClick={handleApplyClick}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg cursor-pointer inline-flex items-center gap-2"
            >
              Apply Now
              <ExternalLink className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}