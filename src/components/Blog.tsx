import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Navigation } from './Navigation';

interface BlogProps {
  onNavigateHome: () => void;
}

export function Blog({ onNavigateHome }: BlogProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coming soon! Stay tuned for insights, tips, and updates from the h1copy team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Blog Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on bringing you valuable content about SEO, content marketing, 
              and digital growth strategies. Check back soon for expert insights and actionable tips.
            </p>
            <Button
              onClick={onNavigateHome}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold cursor-pointer"
            >
              Return to Home
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}