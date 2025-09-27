export function MethodologyBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Moving Bubbles - Fewer elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-cyan-200/15 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-40 right-32 w-20 h-20 bg-violet-200/20 rounded-full animate-bounce-slow-delay"></div>
      <div className="absolute bottom-32 left-40 w-18 h-18 bg-pink-200/15 rounded-full animate-bounce-slow-delay-2"></div>
      
      {/* Minimal Floating Squares */}
      <div className="absolute top-32 left-1/2 w-8 h-8 bg-cyan-300/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-violet-300/25 rotate-45 animate-spin-slow-reverse"></div>
      
      {/* Very Subtle Gradient Waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-violet-50/20 animate-slide-right"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-50/15 via-transparent to-transparent animate-slide-left"></div>
      
      {/* Minimal Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-100/15 to-transparent rounded-br-full animate-scale-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-100/15 to-transparent rounded-tl-full animate-scale-pulse-delay"></div>
    </div>
  );
}