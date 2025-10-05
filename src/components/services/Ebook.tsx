import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Search, TrendingUp, Target, BarChart3, CheckCircle, Plus, Minus, ArrowLeft, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Card } from '../ui/card';
import FloatingLogosSection from '../ui/FloatingCompanies';

interface EbookProps {
  onNavigateHome: () => void;
}

export function Ebook({ onNavigateHome }: EbookProps) {
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
      title: "Specialize in SaaS & B2B ebooks",
      description: "focusing on educational content that nurtures leads and builds trust."
    },
    {
      icon: TrendingUp,
      title: "Do the heavy lifting",
      description: "from topic ideation and outlining to research and expert interviews, we handle the entire process."
    },
    {
      icon: Target,
      title: "Create high-value assets",
      description: "we deliver a polished, ready-to-publish ebook that provides immediate value to your target audience."
    },
    {
      icon: BarChart3,
      title: "Excel at funnel strategy",
      description: "our ebooks are designed to move prospects from awareness to consideration, seamlessly guiding them toward your solution."
    },
    {
      icon: BarChart3,
      title: "Guarantee authority",
      description: "we turn your unique insights into a credible, well-researched guide that positions you as a thought leader."
    }
  ];

  const benefits = [
    "High-quality leads: Ebooks are a proven way to capture contact information from serious prospects.",
    "Brand authority: A comprehensive guide cements your brand as a trusted expert and reliable resource in your industry.",
    "Nurtured prospects: \n A great ebook provides the context and education your audience needs to understand their problem and consider your solution.",
    "Sales enablement: Give your sales team a powerful resource they can share with prospects to build credibility and move deals forward.",
    "Exceptional ROI: Convert website visitors into valuable leads and use a single asset to fuel multiple marketing campaigns.",

  ];

  const faqs = [
    {
    question: "Do you only work with SaaS companies?",
    answer: "Yes. Our focus is SaaS and B2B tech brands. We believe ebooks should showcase deep subject-matter expertise, not just surface-level writing, so we stick to what we know best."
  },
  {
    question: "How are payments handled?",
    answer: "For ebooks, we request payment up front before starting your first project. After that, we’ll invoice you at the end of each month for all completed work.\nWe accept:\n- Wire transfer\n- Wise (formerly TransferWise)\n- PayPal\n- UPI (for India-based clients)\n- Stripe (for credit/debit cards)\n- Bank drafts or checks (where applicable)\nIf you’d like to use a different payment method, just let us know — we’ll do our best to accommodate."
  },
  {
    question: "What if I’m not on a retainer?",
    answer: "No problem at all. You can request a single ebook or a batch, and we’ll provide a custom quote based on your needs. It’s flexible whether you want one this month or several over time."
  },
  {
    question: "How do revisions work?",
    answer: "Every ebook package includes multiple revision rounds to ensure the final draft aligns with your brand’s tone, messaging, and goals."
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes. If you prepay for 6 months' worth of work, you’ll receive a 5% discount."
  },
  {
    question: "Are there any other ways to save?",
    answer: "Definitely. If you refer another paying client, we’ll give you a 5% discount on your own ebook package."
  },
  {
    question: "Can I speak with someone before deciding?",
    answer: "Absolutely. You can book a discovery call with our team, and we’ll walk you through our ebook process, pricing, and answer any questions."
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
                eBook writing services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ebooks are a powerful way to turn your expertise into a valuable, shareable asset. Done right, a well-crafted B2B ebook can capture high-quality leads, nurture prospects through the funnel, and establish your brand as a go-to resource in your industry. <br /><br /> But the challenge of writing an engaging, in-depth ebook that actually converts can be daunting. You need a perfect blend of actionable insights, compelling storytelling, and professional design to make a lasting impact. That’s where we come in.
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
                  src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBvcHRpbWl6YXRpb24lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU5MzQzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SEO Analytics Dashboard"
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
              We don’t just write ebooks. We create strategic lead magnets that drive results. We:
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
              What you’ll gain from our eBooks
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
                  company: "",
                  text: "Working with Masroor has been a wonderful experience for me. He has undeniably got an amazing knowledge of SEO and content writing. Masroor has the ability to explain even complex subjects in an easier way and there's a lot to learn from him. I would highly recommend working with Masroor."
                },
                {
                  name: "Mecyll (Jamila) Gaspary",
                  company: "MG Publications",
                  text: "Masroor is undeniably one of the most knowledgeable people I know about digital marketing, especially in the field of content writing and SEO. His active outreach to other writers and proactive approach to teaching the foundation of digital marketing and content writing are admirable. He's sure the best ones in these departments and the man you need for business."
                },
                {
                  name: "Avhishek Gupta Choudhury",
                  company: "",
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
                    company: "",
                    text: "I've been following him for some time now. Throughout the time, I have been getting a lot of information on SEO from him via his LinkedIn posts."
                  },
                  {
                    name: "Shubham Gupta",
                    company: "",
                    text: "If you're someone who is still figuring out what makes your content rank on Google, look no further. Masroor is the perfect fit for you."
                  },
                  {
                    name: "Anugraha Venugopal",
                    company: "",
                    text: "Those into Content Writing can follow his regular updates to hone their craft."
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
              eBook packages
            </h2>
            
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Knowledge Kickstart</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$900</div>
                <p className="text-gray-600">Perfect for concise eBooks to generate leads or educate your audience.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">strategy session to align on goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 3,000 words (approx. 8–10 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated senior SaaS write</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Research on your topic and industry trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Structured outline to organize content</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 2 expert interviews for credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly email progress updates</span>
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
                <h3 className="text-2xl font-bold text-white mb-2">Thought Leader</h3>
                <div className="text-4xl font-bold text-white mb-4">$2,800</div>
                <p className="text-purple-100">For authoritative, long-form eBooks that showcase thought leadership.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">30-min strategy session</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Up to 10,000 words (approx. 25–30 pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Dedicated senior SaaS writer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Research on your topic and industry trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Structured outline to organize content</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Up to 2 expert interviews for credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">2 rounds of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">Weekly email progress updates</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Package</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">Pricing depends on scope</div>
                <p className="text-gray-600">For specialized projects</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complex topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proprietary data integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced product tie-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">All deliverables tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">💡 Perfect for brands with unique, complex project requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Contact Us for a Quote</span>
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
               Turn your expertise into a lead-generating asset
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Our B2B ebooks turn complex ideas into readable, actionable guides that capture and nurture leads
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Start your ebook
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
