import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CompaniesAndReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const companies = [
    { 
      name: "TechFlow", 
      logo: "https://images.unsplash.com/photo-1640342538716-286e4e27e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMHN5bWJvbCUyMGNsZWFufGVufDF8fHx8MTc1OTQ4MDg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "GrowthLab", 
      logo: "https://images.unsplash.com/photo-1674978037981-fef8cbf2b3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmQlMjBsb2dvfGVufDF8fHx8MTc1OTQ4MDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Digital Solutions", 
      logo: "https://images.unsplash.com/photo-1520865649274-dfc80824ab25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzU5NDA2ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "InnovateCo", 
      logo: "https://images.unsplash.com/photo-1758629277674-d9f1fa726795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ28lMjBzeW1ib2x8ZW58MXx8fHwxNzU5NDgwODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "ScaleTech", 
      logo: "https://images.unsplash.com/photo-1758641682181-1a817db17df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBpZGVudGl0eXxlbnwxfHx8fDE3NTk0ODA4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "CloudFlow", 
      logo: "https://images.unsplash.com/photo-1660071155921-7204712d7d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsb2dvJTIwaWNvbnxlbnwxfHx8fDE3NTk0ODA4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "DataPlex", 
      logo: "https://images.unsplash.com/photo-1623738244303-a645cef7aafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzU5NDgwODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "WebCore", 
      logo: "https://images.unsplash.com/photo-1696041756040-c910a971f222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkaWdpdGFsJTIwYWdlbmN5JTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU5NDM3MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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