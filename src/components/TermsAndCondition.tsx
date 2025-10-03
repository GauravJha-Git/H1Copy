import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <button
            onClick={() => navigate('/')}
            className="fixed top-20 left-4 z-50 flex items-center gap-2 bg-white shadow-md rounded-xl px-4 py-3 border border-gray-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Back to Home</span>
          </button>

      <section className=" px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          

          <div className="bg-white text-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 mt-[5px]">Terms & Conditions</h1>
            <p className="text-sm text-gray-500 mb-8">Effective date: 2 October 2025</p>

        <p className="mb-4">
          By accessing or using <span className="font-semibold">h1copy.com</span> website and services, you agree to these terms.
        </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">1. Services</h2>
            <p className="mb-6 text-gray-700">
          We currently provide content creation services including blogs, ebooks, and white papers and a few more for B2B SaaS companies.  
          Future offerings: Strategy, marketing services, software/tools, or lead magnets.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">2. Payment and revisions</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Payments are made via invoice or offline methods.</li>
              <li>Service packages include specified revision rounds; additional work may incur extra charges, agreed upon before starting.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">3. Intellectual property</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Content created by us remains our property until full payment is received.</li>
              <li>Upon payment, ownership transfers to you, except for pre-existing tools, templates, or proprietary content.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">4. Disclaimers and limitation of liability</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Services focus on content creation and related guidance. We do not guarantee business results, revenue, or legal compliance for your company.</li>
              <li>Our total liability is limited to the amount paid for services provided.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">5. Governing law</h2>
            <p className="mb-6 text-gray-700">
              These terms are governed by the laws of India, specifically Uttar Pradesh. Any disputes will be subject to the jurisdiction of courts in Uttar Pradesh.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">6. Third-party services</h2>
            <p className="mb-6 text-gray-700">
              If we use third-party tools or services (analytics, email platforms, software), their terms and privacy policies may apply.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">7. International visitors</h2>
            <p className="mb-6 text-gray-700">
              EU and California visitors: Data protection and privacy rights as outlined in our Privacy Policy apply.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">8. Changes to terms</h2>
            <p className="mb-6 text-gray-700">
              We may update these terms as our offerings evolve. Continued use of our website or services constitutes acceptance of updated terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">9. Contact</h2>
            <p className="text-gray-700">
              For questions regarding these Terms & Conditions, email us at <a href="mailto:info@h1copy.com" className="text-purple-600 underline">info@h1copy.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
