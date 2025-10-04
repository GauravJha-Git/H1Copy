import React, { useMemo } from 'react';

const FloatingLogosSection: React.FC = () => {
  const logoData = useMemo(() => [
    { id: 1, name: 'TechCorp', url: 'https://via.placeholder.com/120x60/6366f1/ffffff?text=TechCorp' },
    { id: 2, name: 'DataFlow', url: 'https://via.placeholder.com/120x60/10b981/ffffff?text=DataFlow' },
    { id: 3, name: 'CloudSync', url: 'https://via.placeholder.com/120x60/f59e0b/ffffff?text=CloudSync' },
    { id: 4, name: 'InnovateLab', url: 'https://via.placeholder.com/120x60/ef4444/ffffff?text=InnovateLab' },
    { id: 5, name: 'ScaleUp', url: 'https://via.placeholder.com/120x60/8b5cf6/ffffff?text=ScaleUp' },
    { id: 6, name: 'GrowthPro', url: 'https://via.placeholder.com/120x60/06b6d4/ffffff?text=GrowthPro' }
  ], []);

  const duplicatedLogos = useMemo(() => [...logoData, ...logoData], [logoData]);

  return (
    <div className="bg-white py-16">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          animation: scroll 25s linear infinite;
          will-change: transform;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
        .logo-item {
          transition: all 0.3s ease;
        }
        .logo-item:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We've helped companies across various industries achieve their SEO goals
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex scroll-container">
            {duplicatedLogos.map((logo, idx) => (
              <div key={`${logo.id}-${idx}`} className="flex-shrink-0 mx-6 sm:mx-8 logo-item">
                <img
                  src={logo.url}
                  alt={logo.name}
                  loading="lazy"
                  className="h-14 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 filter drop-shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingLogosSection;
