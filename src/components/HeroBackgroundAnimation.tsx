import { motion } from 'framer-motion';

export function HeroBackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Gradient Orbs with Motion */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 via-violet-400/15 to-pink-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-violet-400/12 via-pink-400/18 to-cyan-400/8 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/8 via-cyan-400/12 to-violet-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Animated Floating Dots with Enhanced Colors */}
      <motion.div 
        className="absolute top-1/5 left-1/5 w-3 h-3 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full shadow-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full shadow-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full shadow-lg"
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full shadow-lg"
        animate={{
          y: [0, 12, 0],
          x: [0, -6, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Enhanced Diagonal Lines with Gradients */}
      <motion.div 
        className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          height: ['10rem', '12rem', '10rem'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-t from-transparent via-violet-400/25 to-transparent"
        animate={{
          opacity: [0.2, 0.7, 0.2],
          height: ['8rem', '10rem', '8rem'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-0 w-px h-24 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent"
        animate={{
          opacity: [0.4, 0.9, 0.4],
          height: ['6rem', '8rem', '6rem'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Dynamic Corner Glows */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-cyan-200/10 via-violet-200/5 to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-pink-200/12 via-cyan-200/6 to-transparent"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Subtle Mesh Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #06b6d4 1px, transparent 1px),
            linear-gradient(0deg, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}