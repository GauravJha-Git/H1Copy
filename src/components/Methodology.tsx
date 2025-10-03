import { motion } from 'motion/react';
import { ArrowRight, Target, Search, TrendingUp, BarChart3, Users, Lightbulb, Rocket, CheckCircle, ArrowLeft, FileText, Zap, Shield, Star, Brain, BookOpen, Code } from 'lucide-react';
import { Footer } from './Footer';

interface MethodologyProps {
  onNavigateHome: () => void;
}

export function Methodology({ onNavigateHome }: MethodologyProps) {
  const methodologySteps = [
    {
      number: "1",
      title: "Foundation: onboarding & alignment",
      description: "Every project starts with clarity. We build a knowledge base around your brand, so every piece of content is accurate, consistent, and tied to your goals.",
      icon: Target,
      items: [
        "Brand guideline doc → tone, ICPs, messaging framework",
        "Kickoff Q&A → target audience, content objectives, and success metrics", 
        "Content strategy alignment → where your content fits in the funnel",
        "Access setup → style guides, product screenshots, knowledge base"
      ]
    },
    {
      number: "2", 
      title: "Research & content differentiation",
      description: "We don't rehash what's already ranking — we find white space and unique angles that make your content stand out.",
      icon: Search,
      items: [
        "SERP + search intent analysis (top 10–15 results, \"People also ask\")",
        "Direct SME interviews or curated expert quotes for credibility",
        "Competitive analysis + industry trends (Gartner, Statista, Forrester)",
        "Unique POV → we highlight what your brand believes",
        "Data-driven storytelling → stats, case studies, customer insights"
      ]
    },
    {
      number: "3",
      title: "Execution: operationalized editorial",
      description: "We've built a repeatable editorial process that scales without losing quality.",
      icon: Rocket,
      items: [
        "Detailed briefs with keyword targets, intent, and funnel fit",
        "Structured outlines with use cases, stats, and product touchpoints",
        "Parallel workflows (research, SME interviews, drafting, editing)",
        "Consistent QA checklists (voice, tone, accuracy, SEO)",
        "Content refresh playbooks to keep assets ranking long after publishing"
      ]
    }
  ];

  const productLedFeatures = [
    { icon: FileText, title: "Tool 101", desc: "Play with your product, study demos, create a feature cheatsheet" },
    { icon: Users, title: "Product use cases", desc: "Show how real users solve problems with specific features" },
    { icon: BarChart3, title: "Comparison content", desc: "Transparent, data-backed, high-conversion assets" },
    { icon: Star, title: "Customer voice", desc: "We weave in testimonials, reviews, and case studies" }
  ];

  const geoFeatures = [
    { icon: Shield, title: "E-E-A-T at the core", desc: "Highlight firsthand product knowledge and expert bylines" },
    { icon: Code, title: "Structured for extraction", desc: "Question-based headings and bullet lists LLMs can parse" },
    { icon: Brain, title: "Schema & technical hygiene", desc: "Proper markup and linking for AI understanding" },
    { icon: BookOpen, title: "Fresh & original", desc: "Insights and perspectives models haven't seen before" }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 bg-white shadow-md rounded-xl px-4 py-3 border border-gray-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">
            Back to Home
          </span>
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh]">
        {/* Enhanced Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/70 via-white via-purple-25/40 to-purple-50/60">
          {/* Strategic Grid Pattern - Content Focus */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(155, 89, 182, 0.18) 0.5px, transparent 0.5px),
                linear-gradient(90deg, rgba(155, 89, 182, 0.18) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '24px 24px',
            }}
          />
          
          {/* Medium Content Grid */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(155, 89, 182, 0.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(155, 89, 182, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: '72px 72px',
            }}
          />
          
          {/* Document/Process Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(155, 89, 182, 0.15) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(155, 89, 182, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          
          {/* Radial Methodology Glows */}
          <div 
            className="absolute top-16 left-1/6 w-[400px] h-[400px] rounded-full blur-3xl animate-hero-glow-subtle"
            style={{
              background: 'radial-gradient(circle, rgba(196, 151, 216, 0.22) 0%, rgba(196, 151, 216, 0.12) 50%, transparent 100%)'
            }}
          />
          <div 
            className="absolute top-24 right-1/5 w-[350px] h-[350px] rounded-full blur-3xl animate-hero-glow-subtle-2"
            style={{
              background: 'radial-gradient(circle, rgba(183, 129, 205, 0.18) 0%, rgba(196, 151, 216, 0.08) 60%, transparent 100%)'
            }}
          />
          <div 
            className="absolute bottom-16 left-1/4 w-[300px] h-[300px] rounded-full blur-3xl animate-hero-float-subtle"
            style={{
              background: 'radial-gradient(circle, rgba(196, 151, 216, 0.25) 0%, rgba(196, 151, 216, 0.10) 70%, transparent 100%)'
            }}
          />
          
          {/* Central Process Glow */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl animate-hero-float-subtle-2"
            style={{
              background: 'radial-gradient(ellipse, rgba(196, 151, 216, 0.15) 0%, rgba(196, 151, 216, 0.08) 40%, rgba(196, 151, 216, 0.03) 70%, transparent 100%)'
            }}
          />
          
          {/* Process Flow Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent animate-hero-line-fade" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-hero-line-fade-2" />
          <div className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-purple-200/12 to-transparent animate-hero-line-fade opacity-50" />
          <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-purple-300/10 to-transparent animate-hero-line-fade-2 opacity-50" />
          
          {/* Methodology Process Dots */}
          <div className="absolute top-20 right-1/4 w-5 h-5 bg-purple-400/25 rounded-full animate-hero-dot-float blur-sm" />
          <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-purple-500/20 rounded-full animate-hero-dot-float-2 blur-sm" />
          <div className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-purple-300/30 rounded-full animate-hero-dot-float-3 blur-sm" />
          <div className="absolute top-2/5 right-1/3 w-3 h-3 bg-purple-600/15 rounded-full animate-hero-dot-float blur-sm" />
          
          {/* Corner Strategy Accents */}
          <div 
            className="absolute top-0 left-0 w-48 h-48 rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(196, 151, 216, 0.18) 0%, rgba(196, 151, 216, 0.06) 70%, transparent 100%)'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(183, 129, 205, 0.15) 0%, rgba(196, 151, 216, 0.04) 70%, transparent 100%)'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-purple-600 mb-8 border border-purple-200/50 shadow-sm">
              <Rocket className="w-4 h-4" />
              Proven SaaS Content Methodology
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              A proven playbook for SaaS content that converts
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              After working with so many clients from different B2B SaaS niches, we've built a system to research, plan, and deliver content that ranks, resonates, and drives revenue.
            </p>

            <p className="text-base text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              We don't just "write blogs." We operationalize a scalable content engine that balances brand voice, SEO, and product-led storytelling — so every asset pulls its weight across the funnel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3-Part Methodology */}
      <section className="relative pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(155, 89, 182, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(155, 89, 182, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Enhanced Title Section */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 via-purple-50 to-purple-100/50 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-200/50 shadow-sm">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mt-1">
                  Our 3-part methodology
                </h2>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              A systematic approach to creating content that drives results
            </p>
          </motion.div>

          {/* Enhanced Steps Layout */}
          <div className="space-y-8">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
              >
                {/* Step Connection Line */}
                {index < methodologySteps.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-purple-200 z-0"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group-hover:border-purple-200">
                  {/* Step Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Enhanced Number Badge */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <div className="hidden md:flex items-center gap-2">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
                          <step.icon className="w-5 h-5 text-purple-500" />
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Enhanced List Items */}
                      <div className="bg-gradient-to-br from-purple-50/50 to-white p-6 rounded-xl border border-purple-100/50">
                        <ul className="space-y-3">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-4 group/item">
                              <div className="relative mt-1.5">
                                <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                                <div className="absolute inset-0 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-0 group-hover/item:opacity-75"></div>
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-led Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Product-led content methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most agencies stop at "top-of-funnel." We specialize in product-led, BOFU content that connects directly to your SaaS product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {productLedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">We map every feature back to:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Who it's for", "What job it solves", "When & how to use it", "Why it's better than alternatives"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Generative Engine Optimization */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Making content LLM-friendly (a.k.a. Generative Engine Optimization)
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Search engines aren't the only way your buyers discover information anymore. AI assistants like ChatGPT, Perplexity, Gemini, and more increasingly cite and recommend sources directly inside answers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {geoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1.2, duration: 0.8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Editing that sharpens, not flattens
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Most editing is treated like a red pen exercise. Our editing playbook goes further — we shape content so it's strategic, sharp, and compelling.
            </p>
          </motion.div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Our editing approach:</h3>
                <ul className="space-y-3">
                  {[
                    "Argument-first editing → ensure content is actually persuasive",
                    "Logic & flow checks → every paragraph earns its place",
                    "Cutting fluff (last, not first) → weak ideas, not just long sentences",
                    "Developmental feedback → actionable insights for writers"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Quality assurance:</h3>
                <ul className="space-y-3">
                  {[
                    "Fact-checking & credibility → claims backed by proof",
                    "Voice alignment → fine-tune tone and word choice",
                    "Line editing and copy editing → clean, professional finish",
                    "Strategic alignment → content convinces, educates, converts"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why this works
            </h2>
          </motion.div>

          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
            <p className="text-lg text-gray-700 mb-6">
              Most SaaS content fails because it's either too shallow (SEO fluff) or too salesy (feature dumps). Our methodology strikes a balance:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Research depth</h3>
                <p className="text-sm text-gray-600">Industry credibility</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Editorial system</h3>
                <p className="text-sm text-gray-600">Quality at scale</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Product integration</h3>
                <p className="text-sm text-gray-600">Real impact on pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-purple-600 rounded-2xl p-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your content strategy?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how our proven methodology can drive growth for your SaaS business
            </p>
            
            <button
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
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg group cursor-pointer"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}