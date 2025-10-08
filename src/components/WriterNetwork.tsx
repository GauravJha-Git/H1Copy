import React from 'react';
import { ArrowLeft, PenTool, DollarSign, Clock, Users, Star, CheckCircle, Globe, Zap, ExternalLink,FileText, CalendarClock, Home, Target, BookOpen, BadgeDollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

interface WriterNetworkProps {
  onNavigateHome: () => void;
}

export function WriterNetwork({ onNavigateHome }: WriterNetworkProps) {
  const benefits = [
    {
    icon: FileText, // 📄 Clear briefs/resources
    title: 'Clarity and support',
    description: 'Every project comes with clear briefs, client guidelines, outlines, and resources. Our editors and content leads are available to provide feedback and help you deliver your best work.',
  },
  {
    icon: CalendarClock, // ⏳ Flexible schedule
    title: 'Consistent, flexible work',
    description: 'Enjoy a steady flow of assignments while keeping control of your time. Whether you want to take on a few projects or a full workload, we’ll match opportunities to your bandwidth and goals.',
  },
  {
    icon: Home, // 🏡 Remote-friendly
    title: 'Fully remote, fully supported',
    description: 'Work from anywhere and create your ideal schedule. Our remote-first setup is designed for independence and work life balance.',
  },
  {
    icon: Target, // 🎯 Meaningful impact
    title: 'Do meaningful work',
    description: 'We focus on content that helps our clients attract leads, grow revenue, and build brand authority. You’ll see the impact of your writing and take pride in measurable outcomes.',
  },
  {
    icon: BookOpen, // 📚 Learning + B2B strategy
    title: 'B2B writing and strategy',
    description: 'Go beyond basic blog writing. Learn how to write thought leadership, product-led content, and SEO-driven pieces for leading SaaS and tech brands.',
  },
  {
    icon: Users, // 👥 Community of professionals
    title: 'Join a community of pros',
    description: 'Collaborate with experienced writers, editors, and strategists who value learning, feedback, and professional growth. You’ll be part of a team that genuinely cares about quality and creativity.',
  },
  {
    icon: BadgeDollarSign, // 💲 Fair pay
    title: 'Fair pay, transparent process',
    description: 'We value your time and expertise. Our rates are competitive, payments are timely, and expectations are clearly communicated.',
  },
  {
    icon: TrendingUp, // 📈 Growth opportunities
    title: 'Room to grow',
    description: 'Writers who excel can move into editing or strategy roles, take on leadership responsibilities, or focus on specific industries they’re passionate about.',
  },

    
  ];

  const requirements = [
    "1. Submit your application: click the “fill out the form” button and complete our application form. Share your background, samples, and areas of expertise so we can get to know you.",
    "2. Application review: our team will carefully review your samples to understand your strengths, experience, and style.",
    "3. Approval & onboarding: if selected, we’ll reach out to onboard you and match you with clients and projects that fit your skills and interests.",
    "4. Start as a freelancer: once matched, you’ll work with our team to define a workflow that suits your schedule."

  ];

  const testimonials = [
    {
      name: 'Harshit Baluja',
      role: 'Writer and Editor',
      content: "Working with Masroor has been a wonderful experience for me. He has undeniably got an amazing knowledge of SEO and content writing. Masroor has the ability to explain even complex subjects in an easier way and there's a lot to learn from him. I would highly recommend working with Masroor.",
      avatar: '👨‍💻',
    },
    {
      name: 'Asir Muntasir',
      role: 'SaaS Writer',
      content: 'Working with h1copy was a positive experience. Great projects, communication was smooth, and the overall work environment was professional and collaborative.',
      avatar: '🦊',
    },
    
  ];

  // Placeholder for Google Form URL - to be updated later
  const handleApplyClick = () => {
    // TODO: Replace with actual Google Form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdT_G5ow_tyV7E1eQW6WVtQdKlgru6ycyS8xU61Nra0zZfntA/viewform?usp=sharing&ouid=107041587092142532421', '_blank');
    // alert('Google Form link will be added here soon!');
  };

  return (
    <div className="min-h-screen bg-white pt-16">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <PenTool className="h-16 w-16 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              On a mission to make organic growth easier for your B2B SaaS brand
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are you a freelance writer or editor looking to work with leading B2B SaaS & tech companies worldwide?
            </p>
            <Button
              onClick={handleApplyClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer inline-flex items-center gap-3"
            >
              Fill out the form
              <ExternalLink className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why join our network?
            </h2>
            
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to join?
            </h2>
            
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The process:</h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What our freelancers say
            </h2>
            
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 place-items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="text-center">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Button Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Apply to join our network
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your journey with h1copy? Click below to fill out our application form.
            </p>

            <motion.div
              className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-center">
                <PenTool className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start your application
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Fill out our comprehensive application form to join our network of talented freelance writers.
                </p>
                
                <Button
                  onClick={handleApplyClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer inline-flex items-center gap-3"
                >
                  Apply now
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Excited to join us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Ready to start your journey with h1copy? Click below to fill out our application form.
            </p>
            <Button
              onClick={handleApplyClick}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg cursor-pointer inline-flex items-center gap-2"
            >
              Fill out the form
              <ExternalLink className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}