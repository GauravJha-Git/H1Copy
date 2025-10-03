import React from 'react';
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Heart,
  Check,
  MapPin,
  User,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutCompanyProps {
  onNavigateHome: () => void;
  onNavigateToContact: () => void;
}

export function AboutCompany({
  onNavigateHome,
  onNavigateToContact,
}: AboutCompanyProps) {
  const deliverables = [
    "Consistent quality: Every piece aligned with your marketing goals and brand voice.",
    "On-time delivery: Deadlines aren't negotiable; they're a promise.",
    "Maximum value: Expert content at transparent, competitive pricing.",
  ];

  const approach = [
    "Original & punchy content — no recycled fluff.",
    "Deep research & fresh POVs — backed by real data and insights.",
    "Audience-first writing — content designed to educate, engage, and convert.",
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "India", flag: "🇮🇳" },
    { name: "Europe", flag: "🇪🇺" },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Back to Home Button */}
      <div className="fixed top-20 left-4 z-40">
        <button
          onClick={onNavigateHome}
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm hover:bg-gray-50 border border-gray-300 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">
            Back to Home
          </span>
        </button>
      </div>

      {/* Hero Section - Centered but Compact */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white via-purple-25/50 to-purple-50/70">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(155, 89, 182, 0.12) 0.5px, transparent 0.5px),
                linear-gradient(90deg, rgba(155, 89, 182, 0.12) 0.5px, transparent 0.5px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          <div
            className="absolute top-20 right-1/6 w-[400px] h-[400px] rounded-full blur-3xl animate-hero-glow-subtle"
            style={{
              background:
                "radial-gradient(circle, rgba(196, 151, 216, 0.18) 0%, rgba(196, 151, 216, 0.08) 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-purple-600 mb-6 border border-purple-200/50 shadow-sm">
              <User className="w-4 h-4" />
              From Freelancer to Founder
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6 mt-1">
              From freelancer to founder: building an agency
              that delivers more
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The story of how one freelancer's vision became a
              B2B SaaS content agency that delivers results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section - Left Aligned */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                  The Journey
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-8 mt-1">
                The story behind h1copy
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  For years, I've written B2B SaaS content
                  across every format — blogs, ebooks, white
                  papers, case studies, LinkedIn ghostwriting,
                  and more. I've helped companies grow traffic,
                  build authority, and generate leads with words
                  that convert.
                </p>

                <p>
                  But as a freelancer, I often felt limited. My
                  clients needed more than I could deliver alone
                  — more bandwidth, more expertise, more
                  services. I wanted to expand, collaborate with
                  talented writers, and build something bigger.
                  And honestly, I doubted myself. Could I really
                  start an agency from scratch?
                </p>

                <p className="text-xl font-semibold text-gray-800">
                  I took the plunge anyway. That leap gave birth
                  to h1copy — a B2B SaaS content agency built to
                  deliver:
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200/50 shadow-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Years of Experience
                  </h3>
                  <p className="text-gray-600">
                    From solo freelancer to agency founder,
                    building scalable content solutions for B2B
                    SaaS companies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section - Right Aligned */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-4 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Promise
                  </h3>
                  <p className="text-gray-600">
                    Every deliverable is crafted with precision,
                    delivered on time, and optimized for maximum
                    impact.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-6">
                  <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                    What We Deliver
                  </span>
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-8 mt-1">
                  Built to deliver excellence
                </h2>
              </div>

              <div className="space-y-6">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.1,
                    }}
                  >
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agency Vision Section - Left Aligned */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                Today's Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-8 mt-1">
              More than just writing words
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Today, h1copy isn't just about writing words. It's
              about building a scalable content engine that
              grows your brand, drives traffic, and turns
              content into revenue. We combine deep research,
              product-led storytelling, SEO, and AI-enhanced
              insights to make content that performs — for
              humans, for search engines, and for LLMs alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Masroor Section - Side by Side */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                  Leadership
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-8 mt-1">
                Meet Masroor Ahmad
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm a B2B SaaS content writer, ghostwriter,
                  and content strategist with a knack for
                  turning complex products into stories that
                  convert. Over the years, I've helped top SaaS
                  brands craft content that resonates with their
                  audience and drives measurable results.
                </p>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    My approach is simple:
                  </h3>
                  <ul className="space-y-3">
                    {approach.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  I also experiment with AI and emerging tools
                  to make content smarter, faster, and more
                  discoverable, but always keep human judgment
                  at the center.
                </p>

                <p className="font-semibold text-gray-800">
                  Starting h1copy allowed me to finally build
                  the team and infrastructure I always wanted,
                  helping more clients with a wider range of
                  content services — without compromise.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MzI2MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Masroor Ahmad - Founder & Lead Strategist"
                  className="w-64 h-80 object-cover object-center rounded-2xl mx-auto shadow-2xl"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Masroor Ahmad
                </h3>
                <div className="space-y-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto"></div>
                  <p className="text-lg font-medium text-gray-700 tracking-wide">
                    Founder & Lead Strategist
                  </p>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-purple-300 mx-auto"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why h1copy Exists Section - Card Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                Our Purpose
              </span>
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-8 mt-1">
              Why h1copy exists
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than an agency. We're partners in your
              growth, delivering content that drives traffic,
              builds authority, and generates leads.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scale Beyond Limits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Great content shouldn't be limited by a single
                writer's bandwidth. We built a team that scales
                with your ambitions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                SaaS companies deserve content that converts —
                consistently, strategically, and creatively. No
                compromises.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Built with Pride
              </h3>
              <p className="text-gray-600 leading-relaxed">
                An agency I'd be proud of, that clients trust,
                and that writers love to be part of. Quality is
                everything.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section - Mixed Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header - Left Aligned */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                Global Reach
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-6 mt-1">
              Where is h1copy located?
            </h2>

            <div className="max-w-3xl">
              <p className="text-2xl font-bold text-gray-800 mb-4">
                Fully remote. Globally connected.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team works from India and beyond, partnering
                with clients in the US, UK, Canada, and Europe.
                Distance is never a barrier to delivering
                impactful results.
              </p>
            </div>
          </motion.div>

          {/* Countries and Map - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div
                    key={country.name}
                    className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">
                      {country.flag}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {country.name}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Remote-First Approach
                </h3>
                <p className="text-gray-600">
                  Working across time zones to serve clients
                  when they need us most, bringing diverse
                  perspectives to every project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 mt-1">
              Ready to partner with us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100 leading-relaxed">
              Join the SaaS companies that trust h1copy to build
              their content engine and drive measurable growth.
            </p>
            <Button
              onClick={onNavigateToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              Let's Talk
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}