import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-50 px-6 py-3 rounded-full text-sm font-bold text-purple-600 mb-8 border border-purple-200">
              About H1Copy
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We're Digital Growth Architects
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At H1Copy, we don't just write content or optimize websites – we architect digital experiences that transform businesses. Our team of seasoned SEO specialists and content strategists has helped hundreds of companies achieve remarkable growth through data-driven strategies.
              </p>
              <p>
                From startups to enterprise corporations, we've consistently delivered results that exceed expectations. Our approach combines cutting-edge SEO techniques with compelling storytelling to create content that not only ranks but converts.
              </p>
              <p>
                What sets us apart is our commitment to understanding your unique business challenges and crafting solutions that drive real, measurable impact on your bottom line.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative group">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our expert team collaborating on SEO strategies"
                className="w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}