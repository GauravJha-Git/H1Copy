import { CheckCircle, TrendingUp, Shield, Clock, Users, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: "Consistent quality",
      description: "We don’t believe in hit-or-miss content. Your brand deserves writing that’s always sharp, accurate, and aligned with your marketing goals. With our dedicated teams and proven processes, you can count on consistent quality across every piece of content."
    },
    {
      icon: Clock,
      title: "On-time delivery ",
      description: "Deadlines aren’t just dates on a calendar. We’ve built our workflows to deliver content on time. If we say it’s EOD, it’s EOD. No last-minute scrambles, no excuses. We want you to focus on your business goals, rather than worrying about follow-ups. "
    },
    {
      icon: Shield,
      title: "Value for money",
      description: "We are lean and resourceful, which makes us keep our costs very competitive. You don’t have to stay in the same loop — paying more money for less value. Plus, our pricing is transparent and designed to maximize your ROI. "
    },
    {
      icon: Users,
      title: "We offer all 3",
      description: "Most businesses face a tough choice. You can get great quality and fast delivery, but at a high cost. Or, a low price often means a lack of quality or missed deadlines. We believe you deserve all three. We're built to deliver consistent quality, on-time delivery, and unmatched value"
    },
    
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why choose h1copy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise, creative content strategies, and data-driven insights 
            to deliver exceptional SEO results that drive real business growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Content should drive growth, not just fill pages
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
              We help B2B SaaS companies turn content into a growth channel that educates, converts, and builds trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
                onClick={scrollToContact}
              >
                Work with us
              </button>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}