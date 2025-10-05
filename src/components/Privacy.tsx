import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">

          {/* Added mt-[100px] for large top margin */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Effective date: 2 October 2025</p>

            <p className="mb-6 leading-7 text-gray-700">
              At <span className="font-semibold">h1copy.com</span>, your privacy matters. This policy explains how we collect,
              use, and protect personal information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">1. Information we collect</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Name, email address, company, and job title via contact forms, newsletter signups, or inquiries</li>
              <li>Analytics data (IP addresses, browser type, pages visited) to improve our website and services</li>
              <li>Any information you provide when engaging with our services (e.g., strategy calls, consultations)</li>
              <li>
                Future offerings: If we provide software, tools, or lead magnets, we may collect additional data required
                to provide those services, such as account credentials or usage information.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">2. How we use your information</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Respond to inquiries and provide requested services</li>
              <li>Improve our website, content, and services</li>
              <li>Send updates, newsletters, or promotional content (if you subscribe)</li>
              <li>Analyze usage patterns to better understand our audience</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">3. Cookies and tracking</h2>
            <p className="mb-4 text-gray-700">
              We use cookies and analytics tools to monitor website performance and improve user experience.
            </p>
            <p className="mb-2 font-medium text-gray-900">International visitors:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>EU visitors: Cookies will not be activated until you give consent via the cookie banner.</li>
              <li>California visitors: We do not sell personal information, but you may opt out of data collection for marketing purposes if requested.</li>
              <li>You can disable cookies via your browser settings, but some features may not function properly.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">4. Data sharing</h2>
            <p className="mb-4 text-gray-700">
              We do not sell or rent your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Service providers who help us run our website or deliver services (e.g., analytics, email platforms)</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">5. User rights (for international visitors)</h2>
            <p className="mb-2 font-medium text-gray-900">EU / GDPR rights:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Access your data, correct inaccuracies, request deletion, restrict processing, request data portability</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mb-2 font-medium text-gray-900">California / CCPA rights:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Know what personal information we collect</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of the sale of your personal information (we do not sell data)</li>
            </ul>
            <p className="mb-6 text-gray-700">
              To exercise any rights, contact us at <a href="mailto:info@h1copy.com" className="text-purple-600 underline">info@h1copy.com</a>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">6. Changes to this policy</h2>
            <p className="mb-6 text-gray-700">
              We may update this policy as our services evolve. Any changes will be reflected on this page with an updated effective date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-900">7. Contact</h2>
            <p className="text-gray-700">
              Questions regarding this Privacy Policy? Email us at <a href="mailto:info@h1copy.com" className="text-purple-600 underline">info@h1copy.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
