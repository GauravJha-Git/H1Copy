import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CompaniesAndReviews() {

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
      name: "tetranoodle", 
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9FDfp4LPb51L9VV8Ikn8/media/6687c49ea3b05e75a0a15077.svg"
    },
    { 
      name: "Triserv", 
      logo: "https://triserv360.com/wp-content/uploads/2023/04/logo.png"
    },
  ];

  const reviews = [
    {
      name: "Chandan Kumar",
      company: "Geekflare",
      role: "Founder",
      content: "h1copy transformed our online presence completely. Our organic traffic increased significantly and we're now ranking well for our main keywords.",
      avatar: "👩‍💼"
    },
          {
        name: "Shamshad Ahmad",
        company: "Triserv 360",
        role: "Founder",
        content: "What stood out to us about h1copy is their ability to combine strategy with storytelling. Instead of generic content, they deliver well-researched, in-depth writing that feels fresh and original. It’s rare to find a partner who can consistently deliver that balance of clarity and creativity. They are also great when it comes to product-led content that translates technical features and doesn't sound forceful.",
        avatar: "🧑‍💼"
      },
      {
        name: "Harshit Baluja",
        company: "Writer and Editor",
        role: "Writer and Editor",
        content: "Working with Masroor has been a wonderful experience for me. He has undeniably got an amazing knowledge of SEO and content writing. Masroor has the ability to explain even complex subjects in an easier way and there's a lot to learn from him. I would highly recommend working with Masroor.",
        avatar: "👨‍🎓"
      },
      {
        name: "Mecyll (Jamila) Gaspary",
        company: "MG Publications",
        role: "Founder",
        content: "Masroor is undeniably one of the most knowledgeable people I know about digital marketing, especially in the field of content writing and SEO. His active outreach to other writers and proactive approach to teaching the foundation of digital marketing and content writing are admirable. He's sure the best ones in these departments and the man you need for business.",
        avatar: "👩‍💼"
      },
      {
        name: "Avhishek Gupta Choudhury",
        company: "Digital Marketing Professional",
        role: "Digital Marketing Professional",
        content: "A company or organization would be well served by his expertise.",
        avatar: "🧑‍💻"
      },
      {
        name: "Shikha Sehrawat",
        company: "Simplifying web3 for normies",
        role: "Simplifying web3 for normies",
        content: "Masroor is the one for you if you want your content to be visible on the top of search results.",
        avatar: "👩‍🎓"
      },
      {
        name: "Mashhood Siddiqui",
        company: "Y Combinator School",
        role: "",
        content: "Masroor helped us with some web content and social media content. Masroor also consulted us on content strategies for LinkedIn and BlogPost. Moreover, he possesses in-depth knowledge of blog posts and SEO content writing. We had a great time working with Masroor and would look forward to future content writing needs. I personally advocate for him on content creation such as WordPress blogs, SEO content, and articles.",
        avatar: "🧑‍🎤"
      },
      {
        name: "Mukund Bista",
        company: "",
        role: "Marketing Scholar",
        content: "I've been following him for some time now. Throughout the time, I have been getting a lot of information on SEO from him via his LinkedIn posts.",
        avatar: "👨‍🏫"
      },
      {
        name: "Shubham Gupta",
        company: "",
        role: "Content Marketer",
        content: "If you're someone who is still figuring out what makes your content rank on Google, look no further. Masroor is the perfect fit for you.",
        avatar: "🧑‍🎨"
      },
      {
        name: "Anugraha Venugopal",
        company: "",
        role: "",
        content: "Those into Content Writing can follow his regular updates to hone their craft.",
        avatar: "👩‍🏫"
      }

  ];

  // keep marquee-only behavior; no manual rotation needed
  useEffect(() => {}, []);

  return (
    <section data-section="reviews" id="reviews" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-gray-500 mb-10 font-light">
          {/* just for space */}
          </p>
          
          {/* Companies Marquee */}
          <div className="overflow-hidden">
              <div className="flex animate-scroll-left space-x-12 whitespace-nowrap">
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center min-w-fit hover:opacity-80 transition-opacity duration-300"
                  >
                    <div className="w-20 h-20 flex-shrink-20">
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

        {/* Reviews Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Proof in their words
          </h2>
          {/* <p className="text-lg text-gray-500 font-light">
            Don't just take our word for it
          </p> */}
        </motion.div>

        {/* Marquee-style testimonials (same feel as services pages) */}
        <div className="overflow-hidden marquee">
          <div className="marquee-track space-x-6">
            {(() => {
              const items = reviews.map(r => ({
                name: r.name,
                company: r.company,
                text: r.content
              }));
              const track = items.concat(items);
              return (
                <>
                  {track.map((t, idx) => (
                    <div key={`a-${idx}`} className="inline-block">
                      <div className="flex-shrink-0 w-80">
                        <div className="bg-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:border-purple-300 h-96 overflow-hidden">
                          <div className="flex flex-col items-center justify-center h-full text-left">
                            <Quote className="h-6 w-6 text-purple-300 mb-3 flex-shrink-0" />
                            <p className="text-gray-700 mb-3 italic leading-relaxed text-sm whitespace-normal">"{t.text}"</p>
                            <div className="w-full text-right">
                              <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                              <div className="text-purple-600 text-xs">{t.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {track.map((t, idx) => (
                    <div key={`b-${idx}`} className="inline-block">
                      <div className="flex-shrink-0 w-80">
                        <div className="bg-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:border-purple-300 h-96 overflow-hidden">
                          <div className="flex flex-col items-center justify-center h-full text-left">
                            <Quote className="h-6 w-6 text-purple-300 mb-3 flex-shrink-0" />
                            <p className="text-gray-700 mb-3 italic leading-relaxed text-sm whitespace-normal">"{t.text}"</p>
                            <div className="w-full text-right">
                              <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                              <div className="text-purple-600 text-xs">{t.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}