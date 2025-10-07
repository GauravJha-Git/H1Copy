import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';



const companies = [
  { 
    name: "GleekFlare", 
    logo: "https://geekflare.com/wp-content/themes/gf/src/CustomOrganization/Organization/Assets/Logo.png"
  },
  { 
    name: "FlowAce", 
    logo: "https://flowace.ai/wp-content/themes/Flowacetheme/assets/images/logo.svg"
  },
  { 
    name: "FreshWorks", 
    logo: "https://dam.freshworks.com/m/1d230ee78c07681a/original/headerLogoLight.webp"
  },
  { 
    name: "TeamSlide", 
    logo: "https://www.teamsli.de/wp-content/uploads/2020/09/Logo-60.png"
  },
  { 
    name: "Zeda", 
    logo: "https://cdn.prod.website-files.com/643e791fbfa5086aedae6e0f/643e79c6df0e5476b5c56b36_Logo.svg"
  },
  { 
    name: "Finessedirect", 
    logo: "https://finessedirect.com/wp-content/uploads/2023/08/finesse-logo.webp"
  },
  { 
    name: "Tetranoodle", 
    logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9FDfp4LPb51L9VV8Ikn8/media/6687c49ea3b05e75a0a15077.svg"
  },
  { 
    name: "Triserv", 
    logo: "https://triserv360.com/wp-content/uploads/2023/04/logo.png"
  },
];

const FloatingLogosSection: React.FC = () => {
  const duplicatedLogos = useMemo(() => [...companies, ...companies], []);

  return (
    <section>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-normal text-gray-900 mb-4">
          Trusted by industry leaders
        </h2>
        <p className="text-lg text-gray-500 mb-10 font-light">
          
        </p>

        {/* Companies Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left space-x-12 whitespace-nowrap">
            {duplicatedLogos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-fit hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-20 h-20 flex-shrink-0">
                  <ImageWithFallback
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-15 h-10 object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FloatingLogosSection;
