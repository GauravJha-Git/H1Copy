import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Content */}
          <div className="items-center text-center ">
            <div className="inline-flex items-center gap-2 bg-purple-50 px-6 py-3 rounded-full text-sm font-bold text-purple-600 mb-8 border border-purple-200">
              About h1copy
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We're Digital Growth Architects
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At h1copy, we don't just write content or optimize websites – we architect digital experiences that transform businesses. Our team of seasoned SEO specialists and content strategists has helped hundreds of companies achieve remarkable growth through data-driven strategies.
              
                From startups to enterprise corporations, we've consistently delivered results that exceed expectations. Our approach combines cutting-edge SEO techniques with compelling storytelling to create content that not only ranks but converts.
              
                What sets us apart is our commitment to understanding your unique business challenges and crafting solutions that drive real, measurable impact on your bottom line.
              </p>
            </div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}