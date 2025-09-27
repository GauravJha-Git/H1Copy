export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Moving Bubbles - Very Visible */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/30 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-purple-300/40 rounded-full animate-bounce-slow-delay"></div>
      <div className="absolute bottom-40 left-32 w-28 h-28 bg-emerald-300/35 rounded-full animate-bounce-slow-delay-2"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-300/45 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300/40 rounded-full animate-bounce-slow-delay"></div>
      <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-indigo-300/25 rounded-full animate-bounce-slow-delay-2"></div>
      
      {/* Floating Squares */}
      <div className="absolute top-24 left-1/2 w-12 h-12 bg-blue-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 right-1/2 w-8 h-8 bg-purple-400/40 rotate-45 animate-spin-slow-reverse"></div>
      <div className="absolute top-2/3 left-20 w-10 h-10 bg-emerald-400/35 rotate-45 animate-spin-slow"></div>
      
      {/* Moving Gradient Waves */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20 animate-slide-right"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-emerald-100/15 via-transparent to-yellow-100/15 animate-slide-left"></div>
      
      {/* Pulsing Rings */}
      <div className="absolute top-20 right-40 w-40 h-40 border-2 border-blue-400/20 rounded-full animate-pulse-ring"></div>
      <div className="absolute bottom-24 left-40 w-32 h-32 border-2 border-purple-400/25 rounded-full animate-pulse-ring-delay"></div>
      <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-emerald-400/30 rounded-full animate-pulse-ring-delay-2"></div>
      
      {/* Diagonal Moving Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-move-horizontal"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-move-horizontal-reverse"></div>
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-move-vertical"></div>
      
      {/* Corner Decorations with Animation */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-200/25 to-transparent rounded-br-full animate-scale-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-purple-200/25 to-transparent rounded-tl-full animate-scale-pulse-delay"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-200/20 to-transparent rounded-bl-full animate-scale-pulse-delay-2"></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-gradient-to-tr from-yellow-200/20 to-transparent rounded-tr-full animate-scale-pulse"></div>
    </div>
  );
}