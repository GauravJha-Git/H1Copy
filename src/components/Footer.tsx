import React from "react";
import { Linkedin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold mb-4 text-white">h1copy</div>
              <p className="text-gray-300 leading-relaxed">
                We make your SaaS impossible to ignore
              </p>
            </div>

            <div className="flex space-x-4">
              {[
                {
                  icon: Linkedin,
                  color: "bg-blue-700",
                  label: "Connect on LinkedIn",
                  link: "https://www.linkedin.com/in/-masroorahmad/",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Blogs", path: "/services/blogs" },
                { name: "eBooks", path: "/services/ebooks" },
                { name: "White papers", path: "/services/white-papers" },
                { name: "LinkedIn ghostwriting", path: "/services/linkedin-ghostwriting" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company & resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Methodology", path: "/methodology" },
                { name: "About company", path: "/company/about" },
                { name: "Freelancers network", path: "/company/freelancers-network" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 h1copy. All rights reserved.&nbsp; |
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-blue-500 hover:underline mx-2 transition-colors"
            >
               &nbsp;Privacy Policy
            </Link>{" "}
            |&nbsp;
            <Link
              to="/terms"
              className="text-gray-500 hover:text-blue-500 hover:underline mx-2 transition-colors"
            >
              Terms & condition
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
