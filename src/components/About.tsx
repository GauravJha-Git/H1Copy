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
              Content that sells without selling
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Most agencies will tell you they “understand SaaS,” but then ship you basic content that doesn’t solve any problem. At h1copy, we specialize in product-led content that doesn’t just explain your product but gets people to try, trust, and buy.
                We know the magic happens when content drives action. That’s why we go beyond surface-level guides to create content that converts: product walkthroughs, competitor breakdowns, real use cases, customer stories, and screenshots that show, not just tell the value.
                Every piece we create from TOFU to BOFU is rooted in your product and your ICP’s jobs-to-be-done. We zoom in on the exact features your buyers care about, weave in social proof, and structure CTAs that feel natural, not pushy. The result? Your content finally starts turning readers into signups and signups into paying users.

              </p>
            </div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}