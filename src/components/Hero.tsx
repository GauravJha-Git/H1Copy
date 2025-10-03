import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 overflow-hidden min-h-[80vh]">
      {/* Enhanced Grid Background with Radical Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-purple-25/30 via-white to-purple-50/60">
        {/* Multi-Layer Grid System */}
        
        {/* Fine Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(155, 89, 182, 0.15) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(155, 89, 182, 0.15) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        {/* Medium Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(155, 89, 182, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(155, 89, 182, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Bold Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(155, 89, 182, 0.35) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(155, 89, 182, 0.35) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '120px 120px',
          }}
        />
        
        {/* Diagonal Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(155, 89, 182, 0.2) 0.5px, transparent 0.5px),
              linear-gradient(-45deg, rgba(155, 89, 182, 0.2) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Enhanced Radial Glow Effects - Lighter Colors */}
        <div 
          className="absolute top-20 left-1/5 w-[500px] h-[500px] rounded-full blur-3xl animate-hero-glow-subtle"
          style={{
            background: 'radial-gradient(circle, rgba(196, 151, 216, 0.25) 0%, rgba(196, 151, 216, 0.15) 40%, rgba(196, 151, 216, 0.08) 70%, transparent 100%)'
          }}
        />
        <div 
          className="absolute top-32 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl animate-hero-glow-subtle-2"
          style={{
            background: 'radial-gradient(circle, rgba(183, 129, 205, 0.22) 0%, rgba(196, 151, 216, 0.12) 50%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-[350px] h-[350px] rounded-full blur-3xl animate-hero-float-subtle"
          style={{
            background: 'radial-gradient(circle, rgba(196, 151, 216, 0.28) 0%, rgba(196, 151, 216, 0.14) 60%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-40 right-1/5 w-[300px] h-[300px] rounded-full blur-3xl animate-hero-float-subtle-3"
          style={{
            background: 'radial-gradient(circle, rgba(183, 129, 205, 0.2) 0%, rgba(196, 151, 216, 0.1) 70%, transparent 100%)'
          }}
        />
        
        {/* Central Mega Glow - Lighter */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-3xl animate-hero-float-subtle-2"
          style={{
            background: 'radial-gradient(ellipse, rgba(196, 151, 216, 0.18) 0%, rgba(196, 151, 216, 0.12) 30%, rgba(196, 151, 216, 0.06) 60%, transparent 100%)'
          }}
        />
        
        {/* Particle Elements */}
        <div className="absolute top-16 right-1/3 w-6 h-6 bg-purple-400/30 rounded-full animate-hero-dot-float blur-sm" />
        <div className="absolute top-28 left-1/6 w-4 h-4 bg-purple-500/25 rounded-full animate-hero-dot-float-2 blur-sm" />
        <div className="absolute bottom-32 right-1/6 w-5 h-5 bg-purple-300/35 rounded-full animate-hero-dot-float-3 blur-sm" />
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-600/20 rounded-full animate-hero-dot-float blur-sm" />
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-purple-400/25 rounded-full animate-hero-dot-float-2 blur-sm" />
        
        {/* Enhanced Line Accents */}
        <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-hero-line-fade" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent animate-hero-line-fade-2" />
        <div className="absolute top-1/4 left-0 h-full w-px bg-gradient-to-b from-transparent via-purple-200/20 to-transparent animate-hero-line-fade opacity-60" />
        <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-purple-300/15 to-transparent animate-hero-line-fade-2 opacity-60" />
        
        {/* Corner Accent Glows - Lighter Colors */}
        <div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(196, 151, 216, 0.2) 0%, rgba(196, 151, 216, 0.08) 70%, transparent 100%)'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(183, 129, 205, 0.18) 0%, rgba(196, 151, 216, 0.06) 70%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(196, 151, 216, 0.22) 0%, rgba(196, 151, 216, 0.09) 70%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(183, 129, 205, 0.15) 0%, rgba(196, 151, 216, 0.04) 70%, transparent 100%)'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl text-gray-900 leading-tight font-black">
              Product-led content for B2B SaaS that’s loved by humans, LLMs, and search engines
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We help you drive traffic, build brand recognition, and generate leads with expert-driven content for sustainable, compounding growth.

            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Work with us
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}