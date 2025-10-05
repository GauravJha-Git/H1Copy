import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Star, Users, Building, CheckCircle, Plus, Minus, ArrowLeft, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Card } from '../ui/card';
import FloatingLogosSection from '../ui/FloatingCompanies';

interface LinkGhostProps {
  onNavigateHome: () => void;
}

export function LinkGhost({ onNavigateHome }: LinkGhostProps) {
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
      title: "Specialize in B2B SaaS + Tech",
      description: "we know your ICP, buyer journey, and pain points."
    },
    {
      icon: Building,
      title: "Write in your voice",
      description: "our ghostwriting feels natural, not “agency-polished."
    },
    {
      icon: Star,
      title: "Do the heavy lifting",
      description: "from interviews and briefs to scheduling and posting"
    },
    {
      icon: Users,
      title: "Optimize your profile",
      description: "so every visitor sees credibility and expertise."
    },
    {
      icon: Users,
      title: "Drive outcomes",
      description: "our clients see lifts in engagement, followers, and inbound leads."
    }
  ];

  const benefits = [
    "A growing personal brand — more followers, visibility, and credibility.",
      "High-quality engagement — prospects, VCs, partners, and talent interacting with your posts.",
      "Inbound opportunities — messages and meeting requests from qualified leads.",
      "Consistent visibility — stay top-of-mind without spending hours writing.",
      "Better ROI — a compounding asset that lowers reliance on ads and cold outreach." 

  ];

  const faqs = [
            {
          "question": "How much of my time will this take?",
          "answer": "1 hour per month. We handle everything else."
        },
        {
          "question": "Do you post directly on my LinkedIn?",
          "answer": "Yes. With your permission, we schedule and publish posts so you stay consistent. If this makes you uncomfortable, we offer the content that you can post."
        },
        {
          "question": "Can you guarantee leads?",
          "answer": "We can’t guarantee leads, but our clients consistently see inbound opportunities, meeting requests, and pipeline growth."
        },
        {
          "question": "How does payment work?",
          "answer": "First month upfront, then monthly invoicing. We accept wire transfer, Wise, PayPal, Stripe, and bank transfers."
        },
        {
          "question": "Can I test this for just a month?",
          "answer": "Yes. No long-term retainers required. But we encourage at least 4 months of subscription to compound the content effect."
        },
        {
          "question": "Do you only ghostwrite for SaaS and B2B tech?",
          "answer": "Yes. Our ghostwriting is exclusively focused on SaaS and B2B tech leaders. That way, we can capture your expertise and voice without sacrificing depth or accuracy."
        },
        {
          "question": "Can I see some samples before we get started?",
          "answer": "Of course you can. Please reach out to request samples."
        },
        {
          "question": "What if the draft doesn’t sound like me?",
          "answer": "That’s where revisions come in. Every ghostwriting package includes revision so we can refine the draft until it truly reflects your voice and perspective."
        },
        {
          "question": "Do you offer discounts?",
          "answer": "Yes. If you prepay for 6 months of ghostwriting services, you’ll receive a 5% discount."
        },
        {
          "question": "Are there any referral perks?",
          "answer": "Definitely. If you refer a client who signs up with us, you’ll get 5% off your ghostwriting package for the next 6 months."
        },
        {
          "question": "Can we talk before I commit?",
          "answer": "Of course. You can book a discovery call with our team, and we’ll discuss your ghostwriting goals, process, and answer any questions you have."
        },
        {
          "question": "Do you also offer ghostwriting for X (Twitter)?",
          "answer": "Yes. Some of our clients prefer LinkedIn + X (Twitter) content strategy. Please reach out to get a quote."
        },
        {
          "question": "How about some other writing services other than Ghostwriting?",
          "answer": "Yes, we also offer blogs, ebooks, white papers, and more. Please reach out if you have a query."
        }

  ];

  return (
    <div className="min-h-screen bg-white">
      
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
                LinkedIn ghostwriting services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In B2B SaaS, people buy from people – not soulless company accounts. Your buyers trust executives, founders, and thought leaders who share insights, personal stories, and expertise on LinkedIn. The problem? Writing content that feels authentic, performs with the algorithm, and consistently attracts the right audience takes time (a lot of it).
                <br /><br />
                That’s where we come in. We ghostwrite, optimize, and publish LinkedIn content that:
                <br /><br />
                Grows your personal brand. <br />
                Builds a community of prospects, peers, and partners. <br />
                Turns likes and comments into qualified leads. <br />
                Helps you become a celebrity in your niche. <br />



              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
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

      {/* Floating Companies Section */}
      <FloatingLogosSection />

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
              Why work with us?
            </h2>
            
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
              What you’ll gain from our ghostwriting
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
            {/* Local Starter Package
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Influence Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$1000 / month</div>
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
            </motion.div> */}

            {/* Local Pro Package */}
            <motion.div
              className="bg-purple-600 rounded-3xl p-8 border-2 border-purple-600 relative overflow-hidden "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Influence Package</h3>
                <div className="text-4xl font-bold text-white mb-4">$1000 / month</div>
              
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">16 LinkedIn posts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Ghostwritten LinkedIn posts in your voice</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">LinkedIn content calendar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">LinkedIn optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Monthly analytics + performance update</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Proven content ghostwriters</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Email, chat, phone support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Monthly remote recording session (1h)</span>
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
            {/* <motion.div
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
            </motion.div> */}
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
              Turn your LinkedIn into a lead engine?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Your posts should sound like you. It should also bring all the recognition and leads you deserve. 
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Help me with LinkedIn
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
