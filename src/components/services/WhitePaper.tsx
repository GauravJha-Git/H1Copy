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
                In the B2B SaaS space, decision-makers are drowning in generic content. They’re looking for genuine insights, not just another sales pitch. A well-crafted white paper cuts through the noise, establishing your brand as a true authority and generating high-quality leads that are ready to engage.
                But creating a standout white paper — one that’s data-driven, strategic, and visually compelling — requires a unique skillset. It's a blend of deep research, persuasive writing, and sophisticated design. That’s where we come in.

              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Get started today
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
                  src="/h1copy-white-papers-services.png"
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
              Proof in their words
            </h2>
           
          </motion.div>

          {/* Testimonials Scrolling Animation */}
          {/* Testimonials Scrolling Animation */}
                    <div className="overflow-hidden marquee">
                      <div className="marquee-track space-x-6">
                        {(() => {
                          const items = [
                           {
                              name: "Chandan Kumar",
                              company: "Geekflare",
                              text: "I had the pleasure of working with Masroor on several SaaS topics, where he crafted engaging and actionable articles that truly resonated with Geekflare audience. Highly recommended for anyone seeking top-tier B2B coverage!"
                            },
                          {
                            name: "Shamshad Ahmad",
                            company: "Triserv 360",
                            text: "What stood out to us about h1copy is their ability to combine strategy with storytelling. Instead of generic content, they deliver well-researched, in-depth writing that feels fresh and original. It’s rare to find a partner who can consistently deliver that balance of clarity and creativity. They are also great when it comes to product-led content that translates technical features and doesn't sound forceful."
                          },
                          {
                            name: "Harshit Baluja",
                            company: "Writer and Editor",
                            text: "Working with Masroor has been a wonderful experience for me. He has undeniably got an amazing knowledge of SEO and content writing. Masroor has the ability to explain even complex subjects in an easier way and there's a lot to learn from him. I would highly recommend working with Masroor."
                          },
                          {
                            name: "Mecyll (Jamila) Gaspary",
                            company: "MG Publications",
                            text: "Masroor is undeniably one of the most knowledgeable people I know about digital marketing, especially in the field of content writing and SEO. His active outreach to other writers and proactive approach to teaching the foundation of digital marketing and content writing are admirable. He's sure the best ones in these departments and the man you need for business."
                          },
                          {
                            name: "Avhishek Gupta Choudhury",
                            company: "Digital Marketing Professional",
                            text: "A company or organization would be well served by his expertise."
                          },
                        ].concat([
                          {
                              name: "Shikha Sehrawat",
                              company: "Simplifying web3 for normies",
                              text: "Masroor is the one for you if you want your content to be visible on the top of search results."
                            },
                            {
                              name: "Mashhood Siddiqui",
                              company: "Y Combinator School",
                              text: "Masroor helped us with some web content and social media content. Masroor also consulted us on content strategies for LinkedIn and BlogPost. Moreover, he possesses in-depth knowledge of blog posts and SEO content writing. We had a great time working with Masroor and would look forward to future content writing needs. I personally advocate for him on content creation such as WordPress blogs, SEO content, and articles."
                            },
                            {
                              name: "Mukund Bista",
                              company: "Marketing Scholar",
                              text: "I've been following him for some time now. Throughout the time, I have been getting a lot of information on SEO from him via his LinkedIn posts."
                            },
                            {
                              name: "Shubham Gupta",
                              company: "Content Marketer",
                              text: "If you're someone who is still figuring out what makes your content rank on Google, look no further. Masroor is the perfect fit for you."
                            },
                            {
                              name: "Anugraha Venugopal",
                              company: "",
                              text: "Those into Content Writing can follow his regular updates to hone their craft."
                            },
                            {
                              name: "Yuvraj Anand",
                              company: "Founder at Cultured Media",
                              text: "Working with h1copy was like having a creative partner who speaks our language."
                            }
                        ]);
                          const track = items.concat(items);
                          return (
                            <>
                              {track.map((testimonial, index) => (
                                <div key={`a-${index}`} className="inline-block">
                                  <div className="flex-shrink-0 w-80">
                                    <div className="bg-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:border-purple-300 h-auto">
                                      <div className="flex items-start">
                                        <Quote className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0 mt-1" />
                                        
                                        <div className="whitespace-normal">
                                          <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">"{testimonial.text}"</p>
                                          
                                          <div className="text-right">
                                            <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                                            <div className="text-purple-600 text-xs">{testimonial.company}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              {track.map((testimonial, index) => (
                                <div key={`b-${index}`} className="inline-block">
                                  <div className="flex-shrink-0 w-80">
                                    <div className="bg-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:border-purple-300 h-auto">
                                      <div className="flex items-start">
                                        <Quote className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0 mt-1" />
                                        
                                        <div className="whitespace-normal">
                                          <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">"{testimonial.text}"</p>
                                          
                                          <div className="text-right">
                                            <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                                            <div className="text-purple-600 text-xs">{testimonial.company}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          );
                        })()}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Research spark</h3>
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
                Get started
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
                Popular
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
                Get started
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
                Get started
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
              Frequently asked questions (FAQs)
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
