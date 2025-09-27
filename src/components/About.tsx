import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Target, Zap, Sparkles, Star, Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const floatingVariants = {
    floating: {
      y: [-8, 8, -8],
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyan-50/50 via-white to-violet-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-200/20 to-violet-200/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-violet-200/20 to-pink-200/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left - Logo and Visual */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div 
              className="bg-gradient-to-br from-cyan-600 via-violet-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden backdrop-blur-sm shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)',
                    'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
                    'linear-gradient(135deg, transparent, rgba(255,255,255,0.1))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="text-6xl text-white mb-6 font-black relative z-10"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 30px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                H1Copy
              </motion.div>
              <motion.div 
                className="text-xl text-cyan-100 mb-8 relative z-10"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SEO & Content Excellence
              </motion.div>
              
              {/* Company metrics */}
              <motion.div className="grid grid-cols-2 gap-6 text-white relative z-10">
                {[
                  { value: "8+", label: "Years Experience", delay: 0 },
                  { value: "500+", label: "Projects Completed", delay: 0.2 },
                  { value: "50+", label: "Team Members", delay: 0.4 },
                  { value: "98%", label: "Success Rate", delay: 0.6 }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: metric.delay,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="cursor-default"
                  >
                    <motion.div 
                      className="text-3xl font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-cyan-200 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Enhanced Floating icons */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30"
              variants={floatingVariants}
              animate="floating"
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Crown className="h-8 w-8 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30"
              variants={floatingVariants}
              animate="floating"
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Target className="h-7 w-7 text-white" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-4 bg-gradient-to-r from-violet-400 to-purple-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <Star className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-700 via-violet-700 to-pink-700 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About H1Copy
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We're a passionate team of SEO specialists, content creators, and digital strategists 
                dedicated to helping businesses achieve sustainable online growth through proven methodologies 
                and cutting-edge techniques.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Since our founding, we've helped over 500 companies across various industries improve 
                their search rankings, increase organic traffic, and drive meaningful conversions. 
                Our data-driven approach ensures every strategy is tailored to your unique business goals.
              </motion.p>
            </motion.div>

            {/* Enhanced Key features */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Certified SEO professionals with years of experience",
                  gradient: "from-cyan-500 to-violet-500",
                  bgGradient: "from-cyan-50 to-violet-50"
                },
                {
                  icon: Target,
                  title: "Results-Driven",
                  description: "Focus on measurable outcomes and ROI",
                  gradient: "from-violet-500 to-pink-500",
                  bgGradient: "from-violet-50 to-pink-50"
                },
                {
                  icon: Zap,
                  title: "Fast Execution",
                  description: "Quick implementation of optimization strategies",
                  gradient: "from-pink-500 to-cyan-500",
                  bgGradient: "from-pink-50 to-cyan-50"
                },
                {
                  icon: Award,
                  title: "Industry Leaders",
                  description: "Recognized experts in SEO and content marketing",
                  gradient: "from-amber-500 to-orange-500",
                  bgGradient: "from-amber-50 to-orange-50"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-br ${feature.bgGradient} border border-white/50 backdrop-blur-sm`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}