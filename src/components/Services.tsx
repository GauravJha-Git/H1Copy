import { Search, FileText, Settings, MapPin, Link, BarChart3,BookOpen, FileCheck, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: FileText,
      title: "Blogs",
      description: "We specialize in B2B SaaS blogs that are product-led, long-form, and built to rank. From top-of-funnel visibility to bottom-of-funnel conversions, our blogs deliver traffic, leads, and thought leadership that compound over time.",
      features: ["Long-form product-led blogs","BOFU conversion piece","Thought leadership content","SEO-driven traffic blogs",],
      page: "services/blogs"
    },
    {
      icon: MessageCircle,
      title: "LinkedIn ghostwriting",
      description: "We help executives and founders become voices worth following. Our ghostwriting turns your expertise into engaging narratives that build authority, grow followers, and spark conversations that matter.",
      features: ["Executive LinkedIn posts", "Personal brand storytelling", "Audience growth strategy", "Engagement-focused content"],
      page: "services/linkedin-ghostwriting"
    },
    {
      icon: BookOpen,
      title: "eBooks",
      description: "Deep-dive guides that do more than educate — they generate leads. We create eBooks that combine research, design, and storytelling to position your brand as the go-to authority.",
      features: ["Lead generation eBooks", "Industry deep dives", "Educational resources", "Visual-rich guides"],
      page: "services/ebooks"
    },
    {
      icon: FileCheck,
      title: "White papers",
      description: "Serious problems require serious insights. Our white papers combine research, strategy, and clarity to give your audience actionable value while reinforcing your brand's authority.",
      features: ["Research-backed white papers", "Industry reports", "Data-driven analysis", "Solution-driven content"],
      page: "services/white-papers"
    }
  ];

   const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (servicePage: string) => {
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
            Services we offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with your team to craft high-performing content that builds trust, drives demand, and positions your brand as a leader.
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
                className="bg-white rounded-2xl p-8 border border-purple-200/40 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between min-h-[26rem]"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110 mx-auto">
                  <IconComponent className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm text-left">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
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
                  className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  onClick={() => handleLearnMore(service.page)}
                >
                  Learn more
                </Button>
              </div>
            );
          })}
        </motion.div>

         {/* Bottom CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-purple-600 rounded-3xl p-8 lg:p-12 text-white ">
            <h3 className="text-3xl font-bold mb-4 ">
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

        {/* Process Section */}


        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our predictable content workflow
            </h3>
            
          </div>

          
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Onboard",
                description: "We kick things off with clarity. From brand guidelines and style docs to ICPs and buyer personas, we gather everything upfront. Every question gets answered on day one, so we write with confidence from the start."
              },
              {
                number: "2",
                title: "Research",
                description: "Generic content won’t cut it. We dig deep — SERP analysis, webinars, SME interviews, internal team insights — to ensure every piece is data-backed, unique, and tuned to your audience’s needs and pain points."
              },
              {
                number: "3",
                title: "Brief & build",
                description: "Whether you provide the brief or we create one, we map content to your strategy, funnel stage, and goals. Outlines, CTAs, internal links — every detail is aligned so you know exactly how each piece moves the needle."
              },
              {
                number: "4",
                title: "Deliver & scale",
                description: "From first draft to final polish, we deliver on time and on brand. With repeatable systems, transparent packages, and proven workflows, scaling high-quality content becomes effortless."
              }
            ].map((step, index) => (
              <div key={step.number} className="text-left group">
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