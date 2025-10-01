import { CheckCircle, TrendingUp, Shield, Clock, Users, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our strategies have delivered consistent growth and improved rankings for our clients."
    },
    {
      icon: Shield,
      title: "White-Hat Techniques",
      description: "We only use ethical, Google-approved SEO practices that ensure long-term success."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "See initial improvements within 30 days and significant results within 3-6 months."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Your dedicated account manager provides regular updates and strategic insights."
    },
    {
      icon: Lightbulb,
      title: "Innovative Strategies",
      description: "We stay ahead of algorithm changes with cutting-edge SEO techniques and tools."
    },
    {
      icon: CheckCircle,
      title: "Transparent Reporting",
      description: "Monthly detailed reports showing your progress with clear metrics and insights."
    }
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
            Why Choose h1copy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise, creative content strategies, and data-driven insights 
            to deliver exceptional SEO results that drive real business growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
              Ready to Transform Your Online Presence?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of successful companies that have boosted their organic traffic and revenue with our proven SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
                onClick={scrollToContact}
              >
                Get Free SEO Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}