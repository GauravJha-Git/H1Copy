import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Target, Search, TrendingUp, BarChart3, Users, Lightbulb, Rocket, CheckCircle, ArrowDown, ArrowLeft } from 'lucide-react';

export function Methodology() {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white">
      {/* Fixed Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-white shadow-md rounded-xl px-4 py-3 border border-gray-200 transition-all duration-300 hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">
            Back to Home
          </span>
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 px-6 py-3 rounded-full text-sm font-bold text-purple-600 mb-6 border border-purple-200">
              <Rocket className="w-4 h-4" />
              Our Strategic Approach
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Methodology
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              A proven 4-step process that transforms your online presence
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Drives measurable growth through strategic SEO and content marketing excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full text-sm font-bold text-gray-600 mb-4 border border-gray-200">
              <Target className="w-4 h-4 text-purple-600" />
              Our Proven Framework
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white font-bold text-2xl">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                        <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200"
                        >
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="font-semibold text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 group">
                  <div className="w-36 h-36 bg-purple-100 rounded-3xl flex items-center justify-center border border-purple-200 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110 group-hover:shadow-lg">
                    <step.icon className="w-18 h-18 text-purple-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowDown className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-sm font-bold text-gray-600 mb-8 border border-gray-200">
              <Lightbulb className="w-4 h-4 text-purple-600" />
              What Drives Us
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
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
                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
              >
                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-purple-200 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                  <principle.icon className="w-10 h-10 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-purple-600 rounded-3xl p-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Rocket className="w-4 h-4" />
              Ready to Scale?
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Transform Your SEO Strategy
            </h2>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our proven methodology can drive growth for your business
            </p>
            
            <button
              onClick={() => {
                navigate('/');
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
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}