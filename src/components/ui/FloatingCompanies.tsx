import React from 'react';

const FloatingLogosSection: React.FC = () => {
  const logoData = [
    { id: 1, name: 'Company 1', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+1' },
    { id: 2, name: 'Company 2', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+2' },
    { id: 3, name: 'Company 3', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+3' },
    { id: 4, name: 'Company 4', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+4' },
    { id: 5, name: 'Company 5', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+5' },
    { id: 6, name: 'Company 6', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+6' },
    { id: 7, name: 'Company 7', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+7' },
    { id: 8, name: 'Company 8', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+8' },
    { id: 9, name: 'Company 9', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+9' },
    { id: 10, name: 'Company 10', url: 'https://via.placeholder.com/150x80/ffffff/333333?text=Logo+10' }
  ];

  return (
    <div className="bg-white py-16">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-500">
            We've helped companies across various industries achieve their SEO goals
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex scroll-container">
            {logoData.concat(logoData).map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 mx-8">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
