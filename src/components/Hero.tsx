import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { HeroBackgroundAnimation } from './HeroBackgroundAnimation';
import { ArrowRight, TrendingUp, Sparkles, Zap, Target, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative pt-16 bg-gradient-to-br from-cyan-50 via-violet-50 to-pink-50 overflow-hidden min-h-screen">
      <HeroBackgroundAnimation />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-32 left-10 text-cyan-400 opacity-60"
        variants={floatingVariants}
        animate="floating"
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>
      <motion.div 
        className="absolute top-64 right-16 text-violet-400 opacity-60"
        variants={floatingVariants}
        animate="floating"
        transition={{ delay: 1 }}
      >
        <Zap className="h-6 w-6" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-20 text-pink-400 opacity-60"
        variants={floatingVariants}
        animate="floating"
        transition={{ delay: 2 }}
      >
        <Target className="h-7 w-7" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Quote and small text */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 via-violet-100 to-pink-100 border border-cyan-200 text-cyan-700 rounded-full backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs tracking-wide font-medium">✨ Trusted by 500+ Companies Worldwide</span>
              </motion.div>
              <motion.blockquote 
                className="text-lg text-gray-700 italic leading-relaxed"
                variants={itemVariants}
              >
                "Success in SEO isn't just about rankings—it's about creating meaningful connections with your audience."
              </motion.blockquote>
            </motion.div>

            {/* Main headline */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 
                className="text-4xl lg:text-5xl text-gray-900 leading-tight font-black"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                We help companies
                <motion.span 
                  className="bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                > dominate </motion.span>
                search results
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Transform your online presence with data-driven SEO strategies and content that converts. 
                Get more traffic, leads, and revenue with our proven methodologies.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-5" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  onClick={() => scrollToSection('reviews')}
                  className="bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 hover:from-cyan-700 hover:via-violet-700 hover:to-pink-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">See Our Results</span>
                  <TrendingUp className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-violet-500 text-violet-600 hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 hover:text-white hover:border-transparent px-10 py-4 text-lg transition-all duration-300 group backdrop-blur-sm bg-white/50"
                >
                  Let's Talk
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-3 border-t border-gradient-to-r from-cyan-200 via-violet-200 to-pink-200"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="text-2xl bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                >
                  500+
                </motion.div>
                <div className="text-xs text-gray-600 mt-0.5">Happy Clients</div>
              </motion.div>
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="text-2xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  150%
                </motion.div>
                <div className="text-xs text-gray-600 mt-0.5">Avg. Traffic Increase</div>
              </motion.div>
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="text-2xl bg-gradient-to-r from-pink-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  98%
                </motion.div>
                <div className="text-xs text-gray-600 mt-0.5">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Growth Graph */}
          <motion.div 
            className="relative max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {/* Growth Badge - positioned outside overflow container */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-5 py-3 rounded-full shadow-xl border-2 border-white/20 z-50"
              animate={{ 
                boxShadow: [
                  "0 8px 25px rgba(16, 185, 129, 0.4)",
                  "0 12px 35px rgba(6, 182, 212, 0.6)",
                  "0 8px 25px rgba(16, 185, 129, 0.4)"
                ],
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <span className="text-sm font-bold">+150% Growth</span>
            </motion.div>
            
            <motion.div 
              className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50 overflow-hidden"
              whileHover={{ y: -5, shadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 opacity-30 rounded-3xl"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
                    'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
                    'linear-gradient(135deg, #ec4899, #06b6d4, #8b5cf6)',
                    'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1734503937317-3b88a42ac50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0JTIwZ3JhcGglMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU4OTkyMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Growth Analytics Dashboard"
                  className="w-full h-56 object-cover rounded-2xl relative z-10"
                />
              </motion.div>
              
              <motion.div 
                className="mt-8 grid grid-cols-2 gap-4 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-cyan-50 via-violet-50 to-violet-100 p-4 rounded-2xl text-center border border-cyan-200/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="text-2xl bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    85%
                  </motion.div>
                  <div className="text-xs text-gray-600 mt-0.5">Keyword Rankings</div>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-violet-50 via-pink-50 to-pink-100 p-4 rounded-2xl text-center border border-violet-200/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="text-2xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    3.2x
                  </motion.div>
                  <div className="text-xs text-gray-600 mt-0.5">Organic Traffic</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Floating elements */}
            <motion.div 
              className="absolute -top-4 -left-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-2 border-white/30"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 8px 20px rgba(245, 158, 11, 0.4)",
                  "0 12px 30px rgba(249, 115, 22, 0.6)",
                  "0 8px 20px rgba(245, 158, 11, 0.4)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.2 }}
            >
              <TrendingUp className="h-7 w-7 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 border-white/30"
              animate={{ 
                scale: [1, 1.2, 1],
                y: [0, -5, 0],
                boxShadow: [
                  "0 8px 20px rgba(139, 92, 246, 0.4)",
                  "0 12px 30px rgba(168, 85, 247, 0.6)",
                  "0 8px 20px rgba(139, 92, 246, 0.4)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              whileHover={{ scale: 1.3 }}
            >
              <Star className="h-8 w-8 text-white" />
            </motion.div>
            
            {/* Additional floating elements */}
            <motion.div 
              className="absolute top-1/2 -left-8 bg-gradient-to-r from-cyan-400 to-violet-400 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                x: [0, 10, 0],
                y: [0, -8, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              <Sparkles className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}