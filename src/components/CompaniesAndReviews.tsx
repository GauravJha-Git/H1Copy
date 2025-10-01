import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CompaniesAndReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const companies = [
    { name: "TechCorp", logo: "🚀" },
    { name: "GrowthLab", logo: "📈" },
    { name: "Digital Solutions", logo: "💻" },
    { name: "InnovateCo", logo: "💡" },
    { name: "ScaleUp", logo: "📊" },
    { name: "CloudTech", logo: "☁️" },
    { name: "DataFlow", logo: "🔄" },
    { name: "WebMasters", logo: "🌐" },
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
    },
    {
      name: "Lisa Thompson",
      company: "ScaleUp",
      role: "Growth Manager",
      content: "The ROI from our SEO investment with h1copy has been incredible. We've seen consistent growth month over month and our leads have increased significantly.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Navigation functions
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section data-section="reviews" id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We've helped companies across various industries achieve their SEO goals
          </p>
          
          {/* Companies Marquee */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 whitespace-nowrap">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-purple-100 px-6 py-4 rounded-xl min-w-fit text-purple-600 font-semibold border border-purple-200"
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="text-lg">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Main Review Display */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentReview}
              className="bg-purple-600 rounded-3xl p-8 lg:p-12 text-white"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-6 left-6">
                <Quote className="h-12 w-12 text-white/30" />
              </div>

              <div className="text-center relative z-10">
                <div className="text-8xl mb-6">
                  {reviews[currentReview].avatar}
                </div>
                

                
                <blockquote className="text-2xl italic mb-8 leading-relaxed font-medium">
                  "{reviews[currentReview].content}"
                </blockquote>
                
                <div>
                  <div className="text-xl font-bold">{reviews[currentReview].name}</div>
                  <div className="text-purple-100 text-lg">{reviews[currentReview].role} at {reviews[currentReview].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <button
            onClick={prevReview}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="text-center px-4">
            <div className="text-gray-600 text-sm font-medium">
              {currentReview + 1} of {reviews.length}
            </div>
          </div>
          
          <button
            onClick={nextReview}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Review Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentReview 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>


      </div>
    </section>
  );
}