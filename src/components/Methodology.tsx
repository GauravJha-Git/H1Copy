import { motion } from 'motion/react';
import { MethodologyBackground } from './MethodologyBackground';
import { ArrowRight, Target, Search, TrendingUp, BarChart3, Users, Lightbulb, Rocket, CheckCircle, ArrowDown, ArrowLeft } from 'lucide-react';

interface MethodologyProps {
  onNavigateHome: () => void;
}

export function Methodology({ onNavigateHome }: MethodologyProps) {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business, competitors, and target audience to understand the landscape and identify opportunities.",
      icon: Search,
      features: ["Competitor Analysis", "Keyword Research", "Technical SEO Audit", "Market Analysis"]
    },
    {
      number: "02", 
      title: "Strategy Development",
      description: "Based on our findings, we craft a comprehensive SEO strategy tailored to your specific goals and market position.",
      icon: Target,
      features: ["Content Strategy", "Link Building Plan", "Technical Roadmap", "Performance Metrics"]
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our team executes the strategy with precision, implementing on-page optimizations, creating content, and building authority.",
      icon: Rocket,
      features: ["Content Creation", "Technical Optimization", "Link Acquisition", "Performance Monitoring"]
    },
    {
      number: "04",
      title: "Growth & Optimization",
      description: "We continuously monitor, analyze, and optimize your campaigns to ensure sustained growth and maximum ROI.",
      icon: TrendingUp,
      features: ["Performance Analysis", "Strategy Refinement", "Scaling Opportunities", "Reporting & Insights"]
    }
  ];

  const principles = [
    {
      title: "Data-Driven Decisions",
      description: "Every strategy is backed by comprehensive data analysis and market research.",
      icon: BarChart3
    },
    {
      title: "Transparent Communication",
      description: "Regular updates, detailed reporting, and clear communication throughout the process.",
      icon: Users
    },
    {
      title: "Innovation & Adaptation",
      description: "Staying ahead of algorithm changes and industry trends to maintain competitive advantage.",
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen relative">
      <MethodologyBackground />
      
      {/* Fixed Back Button */}
      <motion.div
        className="fixed top-20 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.button
          onClick={onNavigateHome}
          className="group flex items-center gap-2 bg-white/95 backdrop-blur-xl shadow-md hover:shadow-lg rounded-xl px-4 py-3 border border-gray-200/50 transition-all duration-300"
          whileHover={{ 
            scale: 1.02,
            y: -1,
            boxShadow: "0 8px 25px rgba(6, 182, 212, 0.15)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ x: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-violet-600 transition-colors duration-200" />
          </motion.div>
          <span className="text-sm font-semibold text-gray-700 group-hover:text-violet-600 transition-colors duration-200">
            Back to Home
          </span>
        </motion.button>
      </motion.div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-violet-100 px-6 py-3 rounded-full text-sm font-bold text-gray-700 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Rocket className="w-4 h-4 text-violet-600" />
                  Our Strategic Approach
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-tight"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Methodology
                </motion.h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                A proven 4-step process that transforms your online presence
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Drives measurable growth through strategic SEO and content marketing excellence
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full text-sm font-bold text-gray-600 mb-4 shadow-lg border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-4 h-4 text-cyan-600" />
                Our Proven Framework
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent leading-tight">
                The Process
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our systematic approach ensures consistent results and sustainable growth for every client
              </p>
            </motion.div>

            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 30px 60px rgba(6, 182, 212, 0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-violet-50/30 opacity-50"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-6 mb-8">
                          <motion.div
                            className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-violet-500 to-pink-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-lg"
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {step.number}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-3 leading-tight">{step.title}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {step.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-white/50"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 + 0.3, duration: 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 2, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                            >
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                              <span className="font-semibold text-gray-700">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Outer glow ring */}
                      <motion.div
                        className="absolute inset-0 w-36 h-36 bg-gradient-to-br from-cyan-400/30 via-violet-500/30 to-pink-500/30 rounded-full blur-xl"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Main icon container */}
                      <motion.div
                        className="relative w-36 h-36 bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl"
                        whileHover={{ 
                          rotate: 5,
                          boxShadow: "0 30px 60px rgba(139, 92, 246, 0.4)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {/* Inner glow */}
                        <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <step.icon className="w-18 h-18 text-white relative z-10" strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden flex justify-center mt-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <ArrowDown className="w-8 h-8 text-violet-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full text-sm font-bold text-gray-600 mb-8 shadow-lg border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Lightbulb className="w-4 h-4 text-violet-600" />
                What Drives Us
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Core Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The fundamental principles that guide every decision and strategy we implement
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 text-center relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      y: -8,
                      boxShadow: "0 30px 60px rgba(6, 182, 212, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Subtle background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-violet-50/40 to-pink-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <motion.div
                        className="relative mb-8"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {/* Icon glow effect */}
                        <motion.div
                          className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-3xl blur-lg mx-auto"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                          <principle.icon className="w-10 h-10 text-white relative z-10" />
                        </div>
                      </motion.div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-4 leading-tight">{principle.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-cyan-600 via-violet-600 to-pink-600 rounded-[2rem] p-16 text-center text-white relative overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 40px 80px rgba(6, 182, 212, 0.4)"
              }}
            >
              {/* Animated background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,255,255,0.15), transparent)',
                    'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.15))',
                    'linear-gradient(135deg, transparent, rgba(255,255,255,0.15))'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-8 right-8 w-2 h-2 bg-white/30 rounded-full"
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-12 left-12 w-3 h-3 bg-white/20 rounded-full"
                animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Rocket className="w-4 h-4" />
                  Ready to Scale?
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-black mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Transform Your SEO Strategy
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Let's discuss how our proven methodology can drive growth for your business
                </motion.p>
                
                <motion.button
                  onClick={() => {
                    onNavigateHome();
                    // Scroll to contact section after navigation
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }, 100);
                  }}
                  className="group bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Today
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}