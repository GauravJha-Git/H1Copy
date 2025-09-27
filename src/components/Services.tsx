import { Search, FileText, Settings, MapPin, Link, BarChart3, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive keyword research, on-page optimization, and technical SEO to improve your search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Technical Audits", "Competitor Analysis"],
      gradient: "from-cyan-500 to-violet-500",
      bgGradient: "from-cyan-50 to-violet-50",
      borderGradient: "from-cyan-200 to-violet-200"
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Strategic content creation that engages your audience and drives organic traffic to your website.",
      features: ["Content Strategy", "Blog Writing", "SEO Copywriting", "Content Optimization"],
      gradient: "from-violet-500 to-pink-500",
      bgGradient: "from-violet-50 to-pink-50",
      borderGradient: "from-violet-200 to-pink-200"
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from crawling and indexing your website effectively.",
      features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "Crawl Error Fixes"],
      gradient: "from-pink-500 to-cyan-500",
      bgGradient: "from-pink-50 to-cyan-50",
      borderGradient: "from-pink-200 to-cyan-200"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords"],
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderGradient: "from-amber-200 to-orange-200"
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Earn high-quality backlinks from authoritative websites to boost your domain authority.",
      features: ["Guest Posting", "Resource Page Links", "Broken Link Building", "PR Outreach"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderGradient: "from-emerald-200 to-teal-200"
    },
    {
      icon: BarChart3,
      title: "SEO Analytics",
      description: "Track, measure, and optimize your SEO performance with detailed reporting and insights.",
      features: ["Performance Tracking", "ROI Analysis", "Custom Reports", "Conversion Optimization"],
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderGradient: "from-rose-200 to-pink-200"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-violet-50/50 via-white to-pink-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-200/10 to-violet-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/10 to-cyan-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 5 }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-r from-violet-300/15 to-pink-300/15 rounded-full blur-2xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-r from-cyan-300/15 to-violet-300/15 rounded-full blur-2xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, delay: 8 }}
      />
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-64 left-8 w-20 h-20 bg-gradient-to-br from-pink-200/20 to-cyan-200/20 transform rotate-45 blur-xl"
        animate={{
          x: [0, 5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-64 right-8 w-24 h-24 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />
      
      {/* Small floating particles */}
      <motion.div
        className="absolute top-40 left-1/3 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-6 h-6 bg-violet-400/30 rounded-full blur-sm"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />
      <motion.div
        className="absolute top-1/2 left-12 w-3 h-3 bg-pink-400/40 rounded-full blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-5 h-5 bg-amber-400/35 rounded-full blur-sm"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          opacity: [0.35, 0.7, 0.35]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
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
            Our SEO Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive SEO solutions tailored to your business needs. From technical optimization 
            to content strategy, we cover every aspect of search engine optimization.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl shadow-lg border border-gradient-to-br ${service.borderGradient} p-8 relative overflow-hidden group`}
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
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
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
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 + 0.6 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: featureIndex * 0.2 
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10"
                >
                  <Button 
                    variant="outline" 
                    className={`w-full border-2 border-gradient-to-r ${service.borderGradient} hover:bg-gradient-to-r ${service.gradient} hover:text-white hover:border-transparent transition-all duration-300 font-semibold`}
                    onClick={scrollToContact}
                  >
                    Learn More
                  </Button>
                </motion.div>

                {/* Floating accent */}
                <motion.div
                  className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full opacity-20`}
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

        {/* Enhanced Process Section */}
        <motion.div 
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-violet-50/30 to-pink-50/30"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03))',
                'linear-gradient(90deg, rgba(139, 92, 246, 0.03), rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03))',
                'linear-gradient(135deg, rgba(236, 72, 153, 0.03), rgba(6, 182, 212, 0.03), rgba(139, 92, 246, 0.03))'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div 
            className="text-center mb-12 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-700 via-violet-700 to-pink-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Our Proven Process
            </motion.h3>
            <p className="text-xl text-gray-600">
              We follow a systematic approach to deliver consistent SEO results
            </p>
          </motion.div>
          
          {/* Process Steps with Connecting Lines */}
          <div className="relative">
            {/* Connecting Lines - Desktop */}
            <div className="hidden md:block absolute top-10 left-0 right-0 z-0">
              <div className="flex justify-between items-center px-10">
                {/* Line 1 to 2 */}
                <motion.div
                  className="flex-1 mx-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-1 bg-gradient-to-r from-cyan-300 to-violet-300 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                </motion.div>

                {/* Line 2 to 3 */}
                <motion.div
                  className="flex-1 mx-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-1 bg-gradient-to-r from-violet-300 to-pink-300 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                      }}
                    />
                  </div>

                </motion.div>

                {/* Line 3 to 4 */}
                <motion.div
                  className="flex-1 mx-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-1 bg-gradient-to-r from-pink-300 to-amber-300 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                      }}
                    />
                  </div>

                </motion.div>
              </div>
            </div>

            {/* Mobile Connecting Lines - Vertical */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-24 bottom-0 w-1 z-0">
              <motion.div
                className="h-full bg-gradient-to-b from-cyan-300 via-violet-300 via-pink-300 to-amber-300 rounded-full overflow-hidden"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-full h-20 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full"
                  animate={{
                    y: ['-100%', 'calc(300% + 60px)']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>

            <motion.div 
              className="grid md:grid-cols-4 gap-8 relative z-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  number: "1",
                  title: "Audit & Analysis",
                  description: "Comprehensive website audit and competitor analysis",
                  gradient: "from-cyan-500 to-violet-500",
                  bgGradient: "from-cyan-100 to-violet-100",
                  icon: "🔍"
                },
                {
                  number: "2",
                  title: "Strategy Development",
                  description: "Custom SEO strategy based on your goals and market",
                  gradient: "from-violet-500 to-pink-500",
                  bgGradient: "from-violet-100 to-pink-100",
                  icon: "📋"
                },
                {
                  number: "3",
                  title: "Implementation",
                  description: "Execute optimization techniques and content strategies",
                  gradient: "from-pink-500 to-cyan-500",
                  bgGradient: "from-pink-100 to-cyan-100",
                  icon: "⚙️"
                },
                {
                  number: "4",
                  title: "Monitor & Optimize",
                  description: "Continuous monitoring and optimization for better results",
                  gradient: "from-amber-500 to-orange-500",
                  bgGradient: "from-amber-100 to-orange-100",
                  icon: "📊"
                }
              ].map((step, index) => (
                <motion.div 
                  key={step.number}
                  className="text-center relative"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {/* Step Badge */}
                  <motion.div 
                    className={`bg-gradient-to-r ${step.bgGradient} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white relative z-10`}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.span 
                      className={`text-3xl font-black bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {step.number}
                    </motion.span>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -2, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <span className="text-lg">{step.icon}</span>
                    </motion.div>
                  </motion.div>

                  {/* Process Card */}
                  <motion.div
                    className={`bg-gradient-to-br ${step.bgGradient} p-6 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(6, 182, 212, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.h4 
                      className="text-lg font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {step.title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>

                  {/* Step Progress Indicator */}
                  <motion.div
                    className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${step.gradient} rounded-full`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-6 right-6 text-cyan-400 opacity-30"
            animate={{ 
              y: [0, -8, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 left-6 text-violet-400 opacity-30"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}