import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Settings, Zap, Smartphone, Code, CheckCircle, Plus, Minus, ArrowLeft, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Card } from '../ui/card';
import FloatingLogosSection from '../ui/FloatingCompanies';

interface WhitePaperProps {
  onNavigateHome: () => void;
}

export function WhitePaper({ onNavigateHome }: WhitePaperProps) {
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
      icon: Zap,
      title: "Specialize in B2B & SaaS white papers",
      description: "focusing on thought leadership and lead generation."
    },
    {
      icon: Smartphone,
      title: "Do the heavy lifting",
      description: "conducting deep research, SME interviews, and data analysis to provide original insights."
    },
    {
      icon: Code,
      title: "Create long-term value",
      description: "we deliver a single, powerful asset that can be repurposed into blogs, social posts, and webinars."
    },
    {
      icon: Settings,
      title: "Excel at problem-solving",
      description: "we frame a core industry problem and position your solution as the definitive answer."
    },
    {
      icon: Settings,
      title: "Guarantee authority",
      description: "our white papers build credibility, support your sales teams, and move buyers through the funnel."
    }
  ];

  const benefits = [
    "Qualified leads — a high-value content offer that attracts prospects who are actively researching solutions.",
    "Market authority — content that positions your brand as a thought leader and expert in your field.",
    "Sales enablement — a valuable resource that your sales team can use to move deals forward and stay top-of-mind with prospects.",
    "Efficient content engine — a single piece of content that can be repurposed into dozens of other assets, from blog posts to email campaigns.",
    "Better ROI — measurable engagement that proves your content is helping your business grow"
  ];

  const faqs = [
            {
          "question": "What makes a B2B white paper different from a blog post?",
          "answer": "A white paper is a formal, research-driven, often gated asset designed to guide a buyer through a complex problem. A blog post is typically more conversational and focused on a single topic, often for SEO, and is never gated."
        },
        {
          "question": "How do you ensure the content is unique?",
          "answer": "We go beyond a simple search. Our white papers are built on original insights, proprietary data, and interviews with subject matter experts to ensure the content is fresh and valuable."
        },
        {
          "question": "Do you offer discounts?",
          "answer": "Yes. We provide a 5% discount when you prepay for 6 months of work. It can be any kind of service."
        },
        {
          "question": "Are there other ways to get discounts?",
          "answer": "Absolutely. If you refer a paying client to us, you’ll receive a 5% discount on your own package for the next 6 months."
        },
        {
          "question": "Do you only write for SaaS?",
          "answer": "Yes. SaaS and B2B tech are our specialties. We focus on white papers that demonstrate deep industry expertise, rather than generic content."
        },
        {
          "question": "What if I need revisions?",
          "answer": "Every white paper package includes several rounds of revisions to ensure the final document perfectly reflects your messaging and goals."
        },
        {
          "question": "How does payment work?",
          "answer": "We require payment for the first white paper upfront before starting any work. After that, we invoice you at the end of each month for all completed projects. We accept payments via Wire transfer, Wise (formerly TransferWise), PayPal, UPI (for India-based clients), Stripe (credit/debit card payments), Bank drafts or checks (where applicable). If you prefer another method, just let us know, and we’ll do our best to accommodate."
        },
        {
          "question": "I don’t want to be on a retainer. Is that okay?",
          "answer": "That’s totally fine. Share your white paper requirements, and we’ll send a quote based on exactly what you need."
        },
        {
          "question": "Can I speak with someone to learn more or ask questions?",
          "answer": "Absolutely! Schedule a discovery call with our team, and we’ll walk you through our white paper services and answer any questions you have."
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
            className="absolute bottom-20 left-1/5 w-[300px] h-[300px] rounded-full blur-3xl animate-hero-glow-subtle"
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
                White paper services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In the B2B SaaS space, decision-makers are drowning in generic content. They’re looking for genuine insights, not just another sales pitch. A well-crafted white paper cuts through the noise, establishing your brand as a true authority and generating high-quality leads that are ready to engage. <br />
                But creating a standout white paper — one that’s data-driven, strategic, and visually compelling — requires a unique skillset. It's a blend of deep research, persuasive writing, and sophisticated design. That’s where we come in.

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
                  src="https://images.unsplash.com/photo-1668903678359-e810dd966016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBTRU8lMjB3ZWJzaXRlJTIwb3B0aW1pemF0aW9ufGVufDF8fHx8MTc1OTM0NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technical SEO Website Optimization"
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don’t just write documents. We build strategic assets that work for your business. We:
            </p>
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
              What you’ll gain from our white papers
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
              What Our Technical SEO Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from businesses we've helped with technical SEO
            </p>
          </motion.div>

          {/* Testimonials Scrolling Animation */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 whitespace-nowrap">
              {[
                {
                  name: "Thomas Anderson",
                  company: "E-commerce Elite",
                  text: "h1copy's technical SEO audit uncovered critical issues that were killing our search performance. Their site speed optimization reduced our load time dramatically."
                },
                {
                  name: "Sofia Patel",
                  company: "DataDriven Corp",
                  text: "The technical SEO team's expertise is exceptional. They implemented schema markup across our entire site and fixed crawl errors we didn't even know existed."
                },
                {
                  name: "Carlos Rodriguez",
                  company: "TechSolutions Pro",
                  text: "Their mobile optimization work was game-changing. They transformed our site from mobile-unfriendly to lightning-fast on all devices."
                },
                {
                  name: "Emma Thompson",
                  company: "DigitalFirst",
                  text: "The technical audit was incredibly thorough. They identified and resolved site speed issues, implemented proper schema markup, and optimized our entire technical infrastructure."
                },
                {
                  name: "Ryan O'Connor",
                  company: "InnovateTech",
                  text: "Working with their technical SEO specialists was enlightening. They didn't just fix problems - they taught us best practices for ongoing technical optimization."
                },
                {
                  name: "Maya Singh",
                  company: "CloudScale",
                  text: "The schema markup implementation was perfect. They structured our data in ways that significantly improved our search appearance."
                }
              ].concat([
                {
                  name: "Thomas Anderson",
                  company: "E-commerce Elite",
                  text: "h1copy's technical SEO audit uncovered critical issues that were killing our search performance. Their site speed optimization reduced our load time dramatically."
                },
                {
                  name: "Sofia Patel",
                  company: "DataDriven Corp",
                  text: "The technical SEO team's expertise is exceptional. They implemented schema markup across our entire site and fixed crawl errors we didn't even know existed."
                },
                {
                  name: "Carlos Rodriguez",
                  company: "TechSolutions Pro",
                  text: "Their mobile optimization work was game-changing. They transformed our site from mobile-unfriendly to lightning-fast on all devices."
                },
                {
                  name: "Emma Thompson",
                  company: "DigitalFirst",
                  text: "The technical audit was incredibly thorough. They identified and resolved site speed issues, implemented proper schema markup, and optimized our entire technical infrastructure."
                },
                {
                  name: "Ryan O'Connor",
                  company: "InnovateTech",
                  text: "Working with their technical SEO specialists was enlightening. They didn't just fix problems - they taught us best practices for ongoing technical optimization."
                },
                {
                  name: "Maya Singh",
                  company: "CloudScale",
                  text: "The schema markup implementation was perfect. They structured our data in ways that significantly improved our search appearance."
                }
              ]).map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-white rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:border-green-300 h-full">
                    <div className="flex items-start">
                      <Quote className="h-6 w-6 text-green-300 mr-3 flex-shrink-0 mt-1" />
                      
                      <div className="whitespace-normal">
                        <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                          <div className="text-green-600 text-xs">{testimonial.company}</div>
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
              White paper packages
            </h2>
            
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Audit Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Research sparkt</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$700</div>
                <p className="text-gray-600">Great for concise, high-impact white papers to generate leads or educate your audience.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">strategy session to align goals and audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 2,000 words (approx. 5 – 7 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Senior SaaS writer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Extensive research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive outline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">expert interviews for high-value perspectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Transcripts of all interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly email updates + bi-weekly status calls</span>
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

            {/* Complete Optimization Package */}
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
                <h3 className="text-2xl font-bold text-white mb-2">Insight engine</h3>
                <div className="text-4xl font-bold text-white mb-4">$1,500</div>
                <p className="text-purple-100">Ideal for more detailed white papers that build authority and attract leads.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">strategy session to align goals and audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Up to 4,000 words (approx. 10–12 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Senior SaaS writer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Extensive research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Comprehensive outline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">expert interviews for high-value perspectives</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Transcripts of all interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">3 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Weekly email updates + bi-weekly status calls</span>
                </li>
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 text-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Advanced Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thought authority</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$2,500</div>
                <p className="text-gray-600">For authoritative, long-form white papers that establish thought leadership.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">strategy session to align goals and audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 6,000 words (15–20 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Senior SaaS writer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Extensive research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive outline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">expert interviews for high-value perspectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Transcripts of all interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly email updates + bi-weekly status calls</span>
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
              Turn insights into authoritative white papers
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We create research-driven white papers that generate qualified leads and position you a trusted industry expert.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Let’s write your white paper
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
