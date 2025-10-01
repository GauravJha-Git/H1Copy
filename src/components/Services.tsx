import { Search, FileText, Settings, MapPin, Link, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive keyword research, on-page optimization, and technical SEO to improve your search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Technical Audits", "Competitor Analysis"],
      page: "services/seo-optimization"
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Strategic content creation that engages your audience and drives organic traffic to your website.",
      features: ["Content Strategy", "Blog Writing", "SEO Copywriting", "Content Optimization"],
      page: "services/content-marketing"
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from crawling and indexing your website effectively.",
      features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "Crawl Error Fixes"],
      page: "services/technical-seo"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords"],
      page: "services/local-seo"
    }
  ];

  const handleLearnMore = (servicePage: Page) => {
    if (onNavigate) {
      onNavigate(servicePage);
    } else {
      // Fallback to scrolling to contact if no navigation is provided
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our SEO Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive SEO solutions tailored to your business needs. From technical optimization 
            to content strategy, we cover every aspect of search engine optimization.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105"
                  onClick={() => handleLearnMore(service.page)}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-xl text-gray-600">
              We follow a systematic approach to deliver consistent SEO results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Audit & Analysis",
                description: "Comprehensive website audit and competitor analysis"
              },
              {
                number: "2",
                title: "Strategy Development",
                description: "Custom SEO strategy based on your goals and market"
              },
              {
                number: "3",
                title: "Implementation",
                description: "Execute optimization techniques and content strategies"
              },
              {
                number: "4",
                title: "Monitor & Optimize",
                description: "Continuous monitoring and optimization for better results"
              }
            ].map((step, index) => (
              <div key={step.number} className="text-center group">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
                  <span className="text-3xl font-bold text-purple-600">
                    {step.number}
                  </span>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}