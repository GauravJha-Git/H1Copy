import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Star, Users, Building, CheckCircle, Plus, Minus, ArrowLeft, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Card } from '../ui/card';

interface LocalSeoProps {
  onNavigateHome: () => void;
}

export function LocalSeo({ onNavigateHome }: LocalSeoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: MapPin,
      title: "Google My Business Optimization",
      description: "Complete optimization of your Google Business Profile to maximize local search visibility."
    },
    {
      icon: Building,
      title: "Local Citation Building",
      description: "Build consistent business listings across local directories and platforms to improve local authority."
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Strategic review acquisition and management to build trust and improve local search rankings."
    },
    {
      icon: Users,
      title: "Local Keyword Optimization",
      description: "Target location-specific keywords to capture customers searching in your area."
    }
  ];

  const benefits = [
    "Increase local search visibility by 250-400%",
    "Appear in Google's local map pack",
    "Drive more foot traffic to your business",
    "Improve online review ratings and quantity",
    "Dominate local search results in your area",
    "Monthly local SEO performance reports"
  ];

  const faqs = [
    {
      question: "What is Local SEO and who needs it?",
      answer: "Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches. Any business that serves customers in a specific geographic area needs local SEO - restaurants, retail stores, service providers, healthcare practices, etc."
    },
    {
      question: "How do you optimize Google My Business?",
      answer: "We complete and optimize your profile with accurate business information, high-quality photos, service descriptions, regular posts, and respond to customer reviews. We also optimize for local keywords and ensure consistency across all platforms."
    },
    {
      question: "What are local citations and why are they important?",
      answer: "Local citations are mentions of your business name, address, and phone number (NAP) on other websites. They help establish trust with search engines and improve your local search rankings. We build citations on relevant local directories and platforms."
    },
    {
      question: "How do you help with online reviews?",
      answer: "We implement review generation strategies, help you respond professionally to all reviews, and provide systems to encourage satisfied customers to leave positive reviews. We also help address negative reviews appropriately."
    },
    {
      question: "How long does it take to see local SEO results?",
      answer: "Local SEO can show results faster than traditional SEO. You may see improvements in local search visibility within 2-8 weeks, with significant results typically appearing within 3-6 months of consistent optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 bg-white shadow-md rounded-xl px-4 py-3 border border-gray-200 transition-all duration-300 hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">
            Back to Home
          </span>
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden min-h-[80vh]">
        {/* Grid Background with Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-purple-25/30 via-white to-purple-50/60">
          {/* Fine Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(rgba(155, 89, 182, 0.15) 0.5px, transparent 0.5px),
                linear-gradient(90deg, rgba(155, 89, 182, 0.15) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '20px 20px',
            }}
          />
          
          {/* Radial Glow Effects */}
          <div 
            className="absolute top-20 left-1/4 w-[300px] h-[300px] rounded-full blur-3xl animate-hero-glow-subtle"
            style={{
              background: 'radial-gradient(circle, rgba(196, 151, 216, 0.2) 0%, rgba(196, 151, 216, 0.1) 40%, transparent 70%)'
            }}
          />
          <div 
            className="absolute bottom-32 right-1/5 w-[250px] h-[250px] rounded-full blur-3xl animate-hero-glow-subtle-2"
            style={{
              background: 'radial-gradient(circle, rgba(183, 129, 205, 0.18) 0%, rgba(196, 151, 216, 0.08) 50%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Local SEO
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dominate local search results and attract more customers in your area. 
                Optimize your Google My Business, build local citations, and become the go-to business in your location.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button 
                  onClick={scrollToTestimonials}
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View Success Stories
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMFNFTyUyMGJ1c2luZXNzJTIwbG9jYXRpb258ZW58MXx8fHwxNzU5MzQ0MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Local SEO Business Location"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What's Included in Our Local SEO Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive local SEO helps your business dominate local search results and attract nearby customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Results You Can Expect
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Local SEO Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from local businesses we've helped dominate their markets
            </p>
          </motion.div>

          {/* Testimonials Scrolling Animation */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 whitespace-nowrap">
              {[
                {
                  name: "Maria Gonzalez",
                  company: "Downtown Dental",
                  text: "h1copy transformed our local presence completely. Our Google My Business optimization brought us from page 3 to the top 3 local results."
                },
                {
                  name: "Jake Williams",
                  company: "Williams Law Firm",
                  text: "The local SEO expertise is outstanding. They optimized our Google My Business profile, built quality local citations, and developed a review management system."
                },
                {
                  name: "Sarah Chen",
                  company: "Chen's Restaurant",
                  text: "Their local keyword strategy was brilliant. They identified exactly what our local customers were searching for and optimized our content accordingly."
                },
                {
                  name: "David Johnson",
                  company: "Johnson Plumbing Services",
                  text: "The local citation building was incredibly thorough. They got us listed on every relevant local directory and fixed inconsistent NAP information across the web."
                },
                {
                  name: "Lisa Patterson",
                  company: "Patterson Real Estate",
                  text: "Their review management system is fantastic. They helped us implement a process that consistently generates positive reviews while properly handling negative feedback."
                },
                {
                  name: "Michael Torres",
                  company: "Torres Auto Repair",
                  text: "The Google My Business optimization was a game-changer. They optimized every aspect of our profile and implemented local keywords that actually bring in customers."
                }
              ].concat([
                {
                  name: "Maria Gonzalez",
                  company: "Downtown Dental",
                  text: "h1copy transformed our local presence completely. Our Google My Business optimization brought us from page 3 to the top 3 local results."
                },
                {
                  name: "Jake Williams",
                  company: "Williams Law Firm",
                  text: "The local SEO expertise is outstanding. They optimized our Google My Business profile, built quality local citations, and developed a review management system."
                },
                {
                  name: "Sarah Chen",
                  company: "Chen's Restaurant",
                  text: "Their local keyword strategy was brilliant. They identified exactly what our local customers were searching for and optimized our content accordingly."
                },
                {
                  name: "David Johnson",
                  company: "Johnson Plumbing Services",
                  text: "The local citation building was incredibly thorough. They got us listed on every relevant local directory and fixed inconsistent NAP information across the web."
                },
                {
                  name: "Lisa Patterson",
                  company: "Patterson Real Estate",
                  text: "Their review management system is fantastic. They helped us implement a process that consistently generates positive reviews while properly handling negative feedback."
                },
                {
                  name: "Michael Torres",
                  company: "Torres Auto Repair",
                  text: "The Google My Business optimization was a game-changer. They optimized every aspect of our profile and implemented local keywords that actually bring in customers."
                }
              ]).map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-white rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300 h-full">
                    <div className="flex items-start">
                      <Quote className="h-6 w-6 text-orange-300 mr-3 flex-shrink-0 mt-1" />
                      
                      <div className="whitespace-normal">
                        <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                          <div className="text-orange-600 text-xs">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Local SEO Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the ideal local SEO solution to dominate search results in your area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Local Starter Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Local Starter</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$599</div>
                <p className="text-gray-600">Perfect for single locations</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Google Business Profile optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Local keyword research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">NAP consistency audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic citation building</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly ranking report</span>
                </li>
              </ul>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 text-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Local Pro Package */}
            <motion.div
              className="bg-purple-600 rounded-3xl p-8 border-2 border-purple-600 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Local Pro</h3>
                <div className="text-4xl font-bold text-white mb-4">$1,199</div>
                <p className="text-purple-100">Ideal for growing businesses</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Everything in Local Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Advanced citation building</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Review management setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Local content optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Competitor analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Bi-weekly progress reports</span>
                </li>
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 text-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Local Enterprise Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Local Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$2,199</div>
                <p className="text-gray-600">For multi-location businesses</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Local Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-location optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced schema markup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Local link building campaign</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly strategy calls</span>
                </li>
              </ul>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 text-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's optimize your local presence and help customers in your area find and choose your business.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Start Local Optimization
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our local SEO service
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-purple-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-purple-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}