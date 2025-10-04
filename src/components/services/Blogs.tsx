import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  Users,
  Target,
  TrendingUp,
  Plus,
  Minus,
  ArrowLeft,
  Quote,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import FloatingLogosSection from "../ui/FloatingCompanies";

interface BlogsProps {
  onNavigateHome: () => void;
}

export function Blogs({ onNavigateHome }: BlogsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    const element = document.getElementById("testimonials");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: FileText,
      title: "Specialize in SaaS & B2B blogging",
      description: "Product-led and conversion-focused.",
    },
    {
      icon: Users,
      title: "Do the heavy lifting",
      description: "Research, briefs, SME interviews, data, and examples.",
    },
    {
      icon: Target,
      title: "Write long-form that performs",
      description: "Our 2,500–7,000 word blogs get traffic + backlinks.",
    },
    {
      icon: TrendingUp,
      title: "Excel at BoFu content",
      description:
        "Tie your product features to customer pain points, outcomes, and conversions.",
    },
    {
      icon: TrendingUp,
      title: "Guarantee growth",
      description:
        "Our blogs fuel awareness, traffic, leads, and thought leadership.",
    },
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
      answer: "Absolutely. If you refer a paying client to us, you'll receive a 5% discount on your own content package for the next 6 months.",
    },
    {
      question: "Do you only write for SaaS?",
      answer: "Yes. SaaS and B2B tech are our specialties.",
    },
    {
      question: "How do you optimize blogs for LLMs (like ChatGPT)?",
      answer: "We apply E-E-A-T (Experience, Expertise, Authority, Trust), showcase real-world insights, use clear question-based headings, and add Schema Markup.",
    },
    {
      question: "How do you make sure content is unique?",
      answer: "We go beyond SERPs, conduct SME interviews, study internal documents, identify content gaps, and create content loved by bots and humans.",
    },
    {
      question: "What if I need revisions?",
      answer: "Every package includes several rounds of revisions to make sure the final draft hits the mark.",
    },
    {
      question: "Can you handle SEO?",
      answer: "Yes. We optimize every post for search intent, keywords, internal linking, and metadata.",
    },
    {
      question: "Do you charge by the hour?",
      answer: "No, we provide a fixed price for each B2B blog post project.",
    },
    {
      question: "Do you write anything besides blog posts?",
      answer: "Yes. Along with blog posts, we also create ebooks, white papers, website copy, ghostwriting services, and more. Please reach out to know more.",
    },
    {
      question: "How do you onboard me?",
      answer: "Our onboarding process is simple: we ask about your audience, goals, and existing resources, then create a tailored brand guideline.",
    },
    {
      question: "How does payment work?",
      answer: "We require payment for the first month upfront. We accept Wire transfer, Wise, PayPal, UPI (India), Stripe, or Bank drafts/checks.",
    },
    {
      question: "I don't want to be on a retainer. Is that okay?",
      answer: "That's fine. We'll send a quote based on exactly what you need.",
    },
    {
      question: "Can I speak with someone to learn more?",
      answer: "Absolutely! Schedule a discovery call with our team.",
    },
    {
      question: "Can you share some samples/ previous work?",
      answer: "Absolutely. Feel free to reach out for samples.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Marketing Head",
      quote:
        "These blogs boosted our traffic by 3x and helped convert more leads. Truly top-notch work!",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Jane Smith",
      role: "CEO",
      quote:
        "The content quality and research is outstanding. Highly recommend for any SaaS company!",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
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
          <span className="text-sm font-semibold text-gray-700">Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden min-h-[80vh]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Blog writing services</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                B2B Blog writing that drives traffic, leads & conversions...
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
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661286178487-b8b6d0217427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Content Marketing Strategy"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Companies Section */}
      <FloatingLogosSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why work with us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We don't just write blogs. We:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}>
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of our Blogs</h2>
          </motion.div>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            {benefits.map((b, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? <Minus className="h-5 w-5 text-purple-600" /> : <Plus className="h-5 w-5 text-purple-600" />}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Testimonials</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }}>
                <Quote className="w-6 h-6 text-purple-600 mb-4" />
                <p className="text-gray-700 mb-4">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-600 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 bg-purple-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl mb-8">Let’s create blogs that drive traffic and conversions for your SaaS business.</p>
        <Button onClick={scrollToContact} className="bg-white text-purple-600 px-8 py-4 text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
