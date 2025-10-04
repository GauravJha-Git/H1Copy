import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CompaniesAndReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const companies = [
    { 
      name: "GleekFlare", 
      logo: "https://geekflare.com/wp-content/themes/gf/src/CustomOrganization/Organization/Assets/Logo.png"
    },
    { 
      name: "FlowAce", 
      logo: "https://flowace.ai/wp-content/themes/Flowacetheme/assets/images/logo.svg"
    },
    { 
      name: "FreshWorks", 
      logo: "https://dam.freshworks.com/m/1d230ee78c07681a/original/headerLogoLight.webp"
    },
    { 
      name: "TeamSlide", 
      logo: "https://www.teamsli.de/wp-content/uploads/2020/09/Logo-60.png"
    },
    { 
      name: "Zeda", 
      logo: "https://cdn.prod.website-files.com/643e791fbfa5086aedae6e0f/643e79c6df0e5476b5c56b36_Logo.svg"
    },
    { 
      name: "Finessedirect", 
      logo: "https://finessedirect.com/wp-content/uploads/2023/08/finesse-logo.webp"
    },
    { 
      name: "tetranoodle", 
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9FDfp4LPb51L9VV8Ikn8/media/6687c49ea3b05e75a0a15077.svg"
    },
    { 
      name: "Triserv", 
      logo: "https://triserv360.com/wp-content/uploads/2023/04/logo.png"
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      role: "Marketing Director",
      content: "h1copy transformed our online presence completely. Our organic traffic increased significantly and we're now ranking well for our main keywords.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "GrowthLab", 
      role: "CEO",
      content: "The team's expertise in SEO is unmatched. They provided clear strategies, regular updates, and delivered results beyond our expectations. Highly recommended!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Solutions",
      role: "VP of Marketing",
      content: "Working with h1copy was a game-changer. Their data-driven approach and transparent reporting helped us understand exactly how our SEO investment was paying off.",
      rating: 5,
      avatar: "👩‍🚀"
    },
    {
      name: "David Park",
      company: "InnovateCo",
      role: "Founder",
      content: "Professional, knowledgeable, and results-driven. h1copy helped us dominate our niche with strategic content and technical SEO improvements.",
      rating: 5,
      avatar: "👨‍🎯"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section data-section="reviews" id="reviews" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-normal text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-500 mb-10 font-light">
            We've helped companies across various industries achieve their SEO goals
          </p>
          
          {/* Companies Marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-12 whitespace-nowrap">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center min-w-fit hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="w-16 h-16 flex-shrink-0">
                    <ImageWithFallback
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-normal text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-500 font-light">
            Don't just take our word for it
          </p>
        </motion.div>

        {/* Main Review Display - Simplified */}
        <motion.div 
          className="max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentReview}
              className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-6">
                  {reviews[currentReview].avatar}
                </div>
                
                <blockquote className="text-xl text-gray-600 mb-8 leading-relaxed font-light italic">
                  "{reviews[currentReview].content}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-lg font-normal text-gray-900">{reviews[currentReview].name}</div>
                  <div className="text-gray-500 font-light">{reviews[currentReview].role} at {reviews[currentReview].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Minimal Navigation */}
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={prevReview}
            className="text-gray-400 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {/* Simple Dots */}
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentReview 
                    ? 'bg-purple-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextReview}
            className="text-gray-400 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}