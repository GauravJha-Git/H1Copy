import { CheckCircle, TrendingUp, Shield, Clock, Users, Lightbulb, Sparkles, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our strategies have delivered an average 150% increase in organic traffic for our clients.",
      gradient: "from-cyan-500 to-violet-500",
      bgGradient: "from-cyan-50 to-violet-50",
      borderGradient: "from-cyan-200 to-violet-200"
    },
    {
      icon: Shield,
      title: "White-Hat Techniques",
      description: "We only use ethical, Google-approved SEO practices that ensure long-term success.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderGradient: "from-emerald-200 to-teal-200"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "See initial improvements within 30 days and significant results within 3-6 months.",
      gradient: "from-violet-500 to-pink-500",
      bgGradient: "from-violet-50 to-pink-50",
      borderGradient: "from-violet-200 to-pink-200"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Your dedicated account manager provides regular updates and strategic insights.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderGradient: "from-amber-200 to-orange-200"
    },
    {
      icon: Lightbulb,
      title: "Innovative Strategies",
      description: "We stay ahead of algorithm changes with cutting-edge SEO techniques and tools.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderGradient: "from-pink-200 to-rose-200"
    },
    {
      icon: CheckCircle,
      title: "Transparent Reporting",
      description: "Monthly detailed reports showing your progress with clear metrics and insights.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderGradient: "from-indigo-200 to-purple-200"
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-pink-50/50 via-white to-cyan-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-violet-200/10 to-pink-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-cyan-200/10 to-violet-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 10 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-black mb-6 bg-gradient-to-r from-pink-700 via-violet-700 to-cyan-700 bg-clip-text text-transparent"
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
            Why Choose H1Copy?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We combine technical expertise, creative content strategies, and data-driven insights 
            to deliver exceptional SEO results that drive real business growth.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gradient-to-br ${feature.borderGradient} relative overflow-hidden group`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>

                {/* Floating accent */}
                <motion.div
                  className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-r ${feature.gradient} rounded-full opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)"
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

            <motion.h3 
              className="text-3xl font-black mb-4 relative z-10"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 30px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Transform Your Online Presence?
            </motion.h3>
            <motion.p 
              className="text-cyan-100 mb-8 max-w-2xl mx-auto text-lg relative z-10"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Join hundreds of successful companies that have boosted their organic traffic and revenue with our proven SEO strategies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button 
                className="bg-white text-violet-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
              >
                <span className="flex items-center">
                  Get Free SEO Audit
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="ml-2 h-4 w-4" />
                  </motion.div>
                </span>
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "#7c3aed"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-6 right-6 text-white/30"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Star className="h-8 w-8" />
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 text-white/30"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap className="h-6 w-6" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-8 text-white/20"
              animate={{ 
                x: [0, 10, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}