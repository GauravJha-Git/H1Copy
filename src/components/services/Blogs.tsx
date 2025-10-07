import React from 'react';
import { Button } from '../ui/button';
import FloatingLogosSection from '../ui/FloatingCompanies';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Target, TrendingUp, CheckCircle, Plus, Minus, ArrowLeft, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Card } from '../ui/card';

interface BlogsProps {
  onNavigateHome: () => void;
}

export function Blogs({ onNavigateHome }: BlogsProps) {
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
      icon: FileText,
      title: "Specialize in SaaS & B2B blogging ",
      description: "product-led and conversion-focused."
    },
    {
      icon: Users,
      title: "Do the heavy lifting",
      description: "research, briefs, SME interviews, data, and examples."
    },
    {
      icon: Target,
      title: "Write long-form that performs",
      description: "our 2,500–7,000 word blogs get traffic + backlinks"
    },
    {
      icon: TrendingUp,
      title: "Excel at BoFu content",
      description: "ying your product features to customer pain points, outcomes, and conversions."
    },
    {
      icon: TrendingUp,
      title: "Guarantee growth",
      description: "our blogs fuel awareness, traffic, leads, and thought leadership."
    }
  ];

  const benefits = [
    "High-intent traffic — keyword-targeted, intent-driven content.",
    "Thought leadership — content that makes your executives worth following.",
    "BoFu conversions — product-led content that ties features to customer outcomes.",
    "Consistent output — a steady publishing cadence without straining your internal team.",
    "Better ROI — measurable lifts in traffic, leads, and revenue.",
  ];

  const faqs = [
    {
      question: "Are there other ways to get discounts?",
      answer: "Absolutely. If you refer a paying client to us, you'll receive a 5% discount on your own content package for the next 6 months."
    },
    {
      question: "Do you only write for SaaS?",
      answer: "Yes. SaaS and B2B tech are our specialties. We believe deep expertise beats \"generalist\" writing."
    },
    {
      question: "How do you optimize blogs for LLMs (like ChatGPT)?",
      answer: "We apply E-E-A-T (Experience, Expertise, Authority, Trust), showcase real-world insights, use clear question-based headings, and add Schema Markup so that AI models can easily extract and cite your content."
    },
    {
      question: "How do you make sure content is unique?",
      answer: "We go beyond SERPs. We conduct SME interviews, study all internal documents, incorporate fresh perspectives, identify content gaps, and create content that is loved by bots and humans."
    },
    {
      question: "What if I need revisions?",
      answer: "Every package includes several rounds of revisions to make sure the final draft hits the mark."
    },
    {
      question: "Can you handle SEO?",
      answer: "Yes. We optimize every post for search intent, keywords, internal linking, and metadata. However, we don't currently offer full-flagged SEO services — but stay tuned."
    },
    {
      question: "Do you charge by the hour?",
      answer: "No, we don't work on hourly rates. Instead, we provide a fixed price for each B2B blog post project. This way, you'll always know what to expect."
    },
    {
      question: "Do you write anything besides blog posts?",
      answer: "Yes. Along with blog posts, we also create ebooks, white papers, website copy, ghostwriting services, and more. Please reach out to know more."
    },
    {
      question: "How do you onboard me?",
      answer: " Our onboarding process is simple and designed to set us up for success. We'll start by asking a few key questions about your target audience, goals, and current content strategy. If you already have resources like buyer personas, style guides, or product documentation, we'll review those too.From there, we'll create a brand guideline document just for you and make sure we're aligned before we begin writing. This way, every piece of content we create is accurate, consistent, and tailored to your business."
    },
    {
      question: "How does payment work?",
      answer: "We require payment for the first month upfront before starting any work. After that, we invoice you at the end of each month for all completed blog posts.\n\nWe accept payments via:\n- Wire transfer\n- Wise (formerly TransferWise)\n- PayPal\n- UPI (for India-based clients)\n- Stripe (for credit/debit card payments)\n- Bank drafts or checks (where applicable)\n\nIf you prefer another method, let us know, and we'll do our best to accommodate."
    },

    {
      question: " I don't want to be on a retainer. Is that okay?",
      answer: "That's totally fine. Just share your content requirements here, and we'll send you a quote based on exactly what you need — whether it's 2 blog posts this month or 10 next month. Simple and flexible."
    },
    {
      question: "Can I speak with someone to learn more or ask questions?",
      answer: "Absolutely! Just schedule a discovery call with our team, and we'll walk you through our services and answer any questions you have."
    },
    {
      question: "Can you share some samples/ previous work?",
      answer: "Absolutely. Feel free to reach out for samples."
    },

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
            className="absolute top-20 right-1/5 w-[300px] h-[300px] rounded-full blur-3xl animate-hero-glow-subtle"
            style={{
              background: 'radial-gradient(circle, rgba(196, 151, 216, 0.2) 0%, rgba(196, 151, 216, 0.1) 40%, transparent 70%)'
            }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-[250px] h-[250px] rounded-full blur-3xl animate-hero-glow-subtle-2"
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
                Blog writing services 
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                B2B SaaS blog pieces shouldn't be generic fluff that just has to be done for the sake of it. It's one of the most powerful parts of the content marketing story that should expand your brand awareness, position you as a thought leader, and bring in qualified leads that convert. 
                But writing high-quality SaaS blogs week after week — that takes course and serious work. You need strategic, product-led, bottom-of-funnel (BoFu) content that balances SEO with storytelling to make it work. That's where we come in.

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
                  src="https://images.unsplash.com/photo-1661286178487-b8b6d0217427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjB3cml0aW5nfGVufDF8fHx8MTc1OTM0NDAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Content Marketing Strategy"
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
              We don't just write blogs. We:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mb-16">
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
              What you'll gain from our blogs
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
              Blogs packages
            </h2>
            
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Essentials Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$5,000 / month</div>
                
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">10 blogs — 2,000 words each</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SERP & LLM intent analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Screenshots</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Title tag + meta description</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">senior SaaS writer hired</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Slack & email communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">💰 PSA: this plan is 65–75% cheaper than US agencies</span>
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

            {/* Growth Package */}
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
                <h3 className="text-2xl font-bold text-white mb-2">Scale package </h3>
                <div className="text-4xl font-bold text-white mb-4">$8,500 / month</div>
                <p className="text-white">⭐ Recommended for SaaS companies scaling traffic + conversions</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">10 blogs — 4,000 words each</span>
                </li>

                
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">SERP & LLM intent analysis</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Title tag + meta description</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">senior SaaS writer hired</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">2 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Subject matter expert quotes (if requested)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">💰 PSA: this plan is 75% cheaper than US agencies</span>
                </li>
                
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 text-lg font-semibold transition-all duration-300"
              >
                Get started
              </Button>
            </motion.div>

            {/* Scale Package */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dominate package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$13,000 / month</div>
                <p className="text-gray-600">💡 Perfect for SaaS brands investing in thought leadership & category dominance</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">10 blogs — up to 6,000 words each</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Authority content (pillar pages, playbooks, guides)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Title tag + meta description</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Product-led strategy built into every article</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SERP & LLM intent analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">senior SaaS writer hired</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Subject matter expert quotes</span>
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
              Ready to supercharge your blog strategy?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Stop publishing generic, forgettable content. Start building authority, traffic, and revenue with blogs that convert.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Let's make it happen
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
