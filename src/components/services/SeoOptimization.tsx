import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Search, TrendingUp, Target, BarChart3, CheckCircle, Plus, Minus, ArrowLeft, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Card } from '../ui/card';

interface SeoOptimizationProps {
  onNavigateHome: () => void;
}

export function SeoOptimization({ onNavigateHome }: SeoOptimizationProps) {
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
      icon: Search,
      title: "Keyword Research & Analysis",
      description: "Comprehensive keyword research to identify high-value opportunities and optimize for search intent."
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Technical and content optimization to improve page relevance and search engine rankings."
    },
    {
      icon: Target,
      title: "Competitor Analysis",
      description: "Deep analysis of competitor strategies to identify gaps and opportunities in your market."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Regular monitoring and reporting of keyword rankings, traffic growth, and conversion metrics."
    }
  ];

  const benefits = [
    "Increase organic traffic by 150-300%",
    "Improve search engine rankings for target keywords",
    "Higher conversion rates from qualified traffic",
    "Better user experience and site performance",
    "Long-term sustainable growth",
    "Detailed monthly performance reports"
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. While some improvements can be seen within 2-3 months, significant results typically appear after 4-6 months of consistent optimization efforts."
    },
    {
      question: "What's included in your SEO optimization service?",
      answer: "Our comprehensive SEO service includes keyword research, on-page optimization, technical SEO audits, content optimization, competitor analysis, and monthly reporting."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "While we can't guarantee specific rankings due to Google's algorithm changes, we focus on sustainable strategies that consistently improve your search visibility and organic traffic."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, bounce rate improvements, and overall ROI from organic search."
    },
    {
      question: "Can you work with my existing website?",
      answer: "Yes! We can optimize any website regardless of the platform (WordPress, Shopify, custom builds, etc.). We'll conduct a thorough audit and implement improvements accordingly."
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
            className="absolute top-20 left-1/5 w-[300px] h-[300px] rounded-full blur-3xl animate-hero-glow-subtle"
            style={{
              background: 'radial-gradient(circle, rgba(196, 151, 216, 0.2) 0%, rgba(196, 151, 216, 0.1) 40%, transparent 70%)'
            }}
          />
          <div 
            className="absolute top-32 right-1/4 w-[250px] h-[250px] rounded-full blur-3xl animate-hero-glow-subtle-2"
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
                SEO Optimization
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Boost your search engine rankings with our comprehensive SEO optimization strategies. 
                Drive more organic traffic, increase visibility, and dominate your competition in search results.
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
                  src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBvcHRpbWl6YXRpb24lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU5MzQzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SEO Analytics Dashboard"
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
              What's Included in Our SEO Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive SEO optimization covers every aspect needed to improve your search rankings
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
              What Our SEO Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from businesses we've helped with SEO optimization
            </p>
          </motion.div>

          {/* Testimonials Scrolling Animation */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 whitespace-nowrap">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechStart Solutions",
                  text: "h1copy's SEO optimization transformed our online presence. We went from page 3 to top 3 rankings for our main keywords within months. Their keyword research was incredibly thorough."
                },
                {
                  name: "Michael Chen", 
                  company: "GrowthLab",
                  text: "The team's expertise in on-page optimization is unmatched. They didn't just improve our rankings - they improved our entire site structure and user experience."
                },
                {
                  name: "Emily Rodriguez",
                  company: "Digital Dynamics", 
                  text: "What impressed me most was their systematic approach to SEO. Every recommendation was backed by data and their technical audits uncovered critical issues."
                },
                {
                  name: "David Thompson",
                  company: "InnovateCorp",
                  text: "h1copy's SEO team delivered exceptional results. Their comprehensive approach covered everything from technical SEO to content optimization."
                },
                {
                  name: "Lisa Park",
                  company: "ScaleUp Ventures",
                  text: "The technical SEO audit was a game-changer. They identified and fixed crawling issues, improved our site speed, and optimized our schema markup."
                },
                {
                  name: "James Wilson",
                  company: "NextGen Digital",
                  text: "Their on-page optimization expertise is outstanding. They transformed our content strategy and optimized every element for both users and search engines."
                }
              ].concat([
                {
                  name: "Sarah Johnson",
                  company: "TechStart Solutions",
                  text: "h1copy's SEO optimization transformed our online presence. We went from page 3 to top 3 rankings for our main keywords within months. Their keyword research was incredibly thorough."
                },
                {
                  name: "Michael Chen", 
                  company: "GrowthLab",
                  text: "The team's expertise in on-page optimization is unmatched. They didn't just improve our rankings - they improved our entire site structure and user experience."
                },
                {
                  name: "Emily Rodriguez",
                  company: "Digital Dynamics", 
                  text: "What impressed me most was their systematic approach to SEO. Every recommendation was backed by data and their technical audits uncovered critical issues."
                },
                {
                  name: "David Thompson",
                  company: "InnovateCorp",
                  text: "h1copy's SEO team delivered exceptional results. Their comprehensive approach covered everything from technical SEO to content optimization."
                },
                {
                  name: "Lisa Park",
                  company: "ScaleUp Ventures",
                  text: "The technical SEO audit was a game-changer. They identified and fixed crawling issues, improved our site speed, and optimized our schema markup."
                },
                {
                  name: "James Wilson",
                  company: "NextGen Digital",
                  text: "Their on-page optimization expertise is outstanding. They transformed our content strategy and optimized every element for both users and search engines."
                }
              ]).map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:border-purple-300 h-full">
                    <div className="flex items-start">
                      <Quote className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0 mt-1" />
                      
                      <div className="whitespace-normal">
                        <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                          <div className="text-purple-600 text-xs">{testimonial.company}</div>
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
              Choose Your SEO Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect SEO optimization package for your business needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$499</div>
                <p className="text-gray-600">Perfect for small businesses</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Keyword research & analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">On-page optimization for up to 10 pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Technical SEO audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly progress report</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic competitor analysis</span>
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

            {/* Professional Package */}
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
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-white mb-4">$999</div>
                <p className="text-purple-100">Best for growing businesses</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Everything in Starter plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">On-page optimization for up to 25 pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Advanced competitor analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Content optimization recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Local SEO optimization</span>
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

            {/* Enterprise Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$1,999</div>
                <p className="text-gray-600">For large-scale operations</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Professional plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited page optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced technical SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom SEO strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly performance calls</span>
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
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's work together to improve your SEO and drive more organic traffic to your website.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Start Your SEO Journey
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
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
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