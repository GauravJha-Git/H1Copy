import { useState, useEffect } from 'react';
import { Star, Quote, Sparkles, Heart, Award, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CompaniesAndReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const companies = [
    { name: "TechCorp", logo: "🚀", gradient: "from-cyan-500 to-violet-500" },
    { name: "GrowthLab", logo: "📈", gradient: "from-violet-500 to-pink-500" },
    { name: "Digital Solutions", logo: "💻", gradient: "from-pink-500 to-cyan-500" },
    { name: "InnovateCo", logo: "💡", gradient: "from-amber-500 to-orange-500" },
    { name: "ScaleUp", logo: "📊", gradient: "from-emerald-500 to-teal-500" },
    { name: "CloudTech", logo: "☁️", gradient: "from-indigo-500 to-purple-500" },
    { name: "DataFlow", logo: "🔄", gradient: "from-rose-500 to-pink-500" },
    { name: "WebMasters", logo: "🌐", gradient: "from-teal-500 to-cyan-500" },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      role: "Marketing Director",
      content: "H1Copy transformed our online presence completely. Our organic traffic increased by 200% in just 6 months, and we're now ranking #1 for our main keywords.",
      rating: 5,
      avatar: "👩‍💼",
      gradient: "from-cyan-500 to-violet-500"
    },
    {
      name: "Michael Chen",
      company: "GrowthLab",
      role: "CEO",
      content: "The team's expertise in SEO is unmatched. They provided clear strategies, regular updates, and delivered results beyond our expectations. Highly recommended!",
      rating: 5,
      avatar: "👨‍💼",
      gradient: "from-violet-500 to-pink-500"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Solutions",
      role: "VP of Marketing",
      content: "Working with H1Copy was a game-changer. Their data-driven approach and transparent reporting helped us understand exactly how our SEO investment was paying off.",
      rating: 5,
      avatar: "👩‍🚀",
      gradient: "from-pink-500 to-cyan-500"
    },
    {
      name: "David Park",
      company: "InnovateCo",
      role: "Founder",
      content: "Professional, knowledgeable, and results-driven. H1Copy helped us dominate our niche with strategic content and technical SEO improvements.",
      rating: 5,
      avatar: "👨‍🎯",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Lisa Thompson",
      company: "ScaleUp",
      role: "Growth Manager",
      content: "The ROI from our SEO investment with H1Copy has been incredible. We've seen consistent growth month over month and our leads have tripled.",
      rating: 5,
      avatar: "👩‍💻",
      gradient: "from-emerald-500 to-teal-500"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-cyan-50/50 via-white to-violet-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-violet-200/10 to-pink-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-200/10 to-violet-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 4 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-700 via-violet-700 to-pink-700 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity },
              scale: { type: "spring", stiffness: 300 }
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We've helped companies across various industries achieve their SEO goals
          </motion.p>
          
          {/* Enhanced Animated Companies Marquee */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/60 via-white/80 to-white/60 backdrop-blur-sm p-6 shadow-lg border border-white/50">
            <motion.div 
              className="flex animate-scroll-left space-x-6 whitespace-nowrap"
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...companies, ...companies].map((company, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center space-x-3 bg-gradient-to-r ${company.gradient} px-6 py-4 rounded-xl min-w-fit shadow-lg text-white font-semibold`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.span 
                    className="text-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {company.logo}
                  </motion.span>
                  <span className="text-lg">{company.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Reviews Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-black mb-6 bg-gradient-to-r from-violet-700 via-pink-700 to-cyan-700 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Don't just take our word for it - hear from our satisfied clients
          </motion.p>
        </motion.div>

        {/* Enhanced Main Review Display */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentReview}
              className={`bg-gradient-to-br ${reviews[currentReview].gradient} rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,255,255,0.2), transparent)',
                    'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                    'linear-gradient(135deg, transparent, rgba(255,255,255,0.2))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="absolute top-6 left-6"
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <Quote className="h-12 w-12 text-white/30" />
              </motion.div>

              <div className="text-center relative z-10">
                <motion.div 
                  className="text-8xl mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    y: [0, -3, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {reviews[currentReview].avatar}
                </motion.div>
                
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      <Star className="h-8 w-8 text-yellow-300 fill-current mx-1" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.blockquote 
                  className="text-2xl text-white italic mb-8 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  "{reviews[currentReview].content}"
                </motion.blockquote>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="text-xl text-white font-bold">{reviews[currentReview].name}</div>
                  <div className="text-white/80 text-lg">{reviews[currentReview].role} at {reviews[currentReview].company}</div>
                </motion.div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-1/4 right-6 text-white/20"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Heart className="h-6 w-6" />
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 left-8 text-white/20"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              >
                <Award className="h-8 w-8" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <motion.button
            onClick={prevReview}
            className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white rounded-full p-4 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
          
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-600 text-sm font-medium">
              {currentReview + 1} of {reviews.length}
            </div>
          </motion.div>
          
          <motion.button
            onClick={nextReview}
            className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white rounded-full p-4 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Enhanced Review Navigation Dots */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentReview 
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentReview && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced All Reviews Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className={`bg-gradient-to-br ${review.gradient} bg-opacity-5 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg relative overflow-hidden group`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Subtle animated background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-5`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="flex items-center mb-4 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.span 
                  className="text-3xl mr-3"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {review.avatar}
                </motion.span>
                <div>
                  <div className="text-gray-900 font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.company}</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex mb-4 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {review.content}
              </motion.p>

              {/* Floating accent */}
              <motion.div
                className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-r ${review.gradient} rounded-full opacity-20`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}