import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompaniesAndReviews } from './components/CompaniesAndReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Methodology } from './components/Methodology';
import { Blog } from './components/Blog';
import { Ebook } from './components/services/Ebook';
import { Blogs } from './components/services/Blogs';
import { WhitePaper } from './components/services/WhitePaper';
import { LinkGhost } from './components/services/LinkGhost';
import { AboutCompany } from './components/AboutCompany';
import { WriterNetwork } from './components/WriterNetwork';
import Privacy from './components/Privacy';
import TermsPage from './components/TermsAndCondition';

// Home Page Component
function HomePage() {
  const navigate = useNavigate();

  const navigateToPage = (page: string) => {
    navigate(`/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>H1copy | Product-led content for B2B SaaS</title>
        <meta name="description" content="h1copy helps B2B SaaS brands with product-led content that’s loved by humans, LLM and AI." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <Services onNavigate={navigateToPage} />
        <WhyChooseUs />
        <CompaniesAndReviews />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout wrapper for pages with navigation and footer
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

// Page wrapper for service pages that include contact form
function ServicePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}

// Individual page components with navigation
function MethodologyPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>SaaS content methodology | h1copy</title>
        <meta name="description" content="Research-driven, product-led, and optimized for SEO & AI. Scale your B2B content, boost pipeline, and drive revenue." />
      </Helmet>
      <PageLayout>
        <Methodology onNavigateHome={() => navigate('/')} />
      </PageLayout>
    </>
  );
}

function BlogPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>The h1copy blog</title>
        <meta name="description" content="SaaS marketing tips, thought-leadership articles, product-led content strategies, and LLM & SEO insights." />
      </Helmet>
      <PageLayout>
        <Blog onNavigateHome={() => navigate('/')} />
      </PageLayout>
    </>
  );
}

function EbookPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>B2B SaaS eBook writing services</title>
        <meta name="description" content="h1copy creates product-led B2B SaaS eBooks that capture leads, nurture prospects, and build brand authority." />
      </Helmet>
      <ServicePageLayout>
        <Ebook onNavigateHome={() => navigate('/')} />
      </ServicePageLayout>
    </>
  );
}

function BlogsPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>B2B SaaS blog writing services</title>
        <meta name="description" content="h1copy creates product-led B2B SaaS blogs full of SME insights and conversion-focused content." />
      </Helmet>
      <ServicePageLayout>
        <Blogs onNavigateHome={() => navigate('/')} />
      </ServicePageLayout>
    </>
  );
}

function WhitePaperPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>B2B SaaS white paper writing services</title>
        <meta name="description" content="h1copy crafts research-driven B2B SaaS white papers that position your brand as an industry authority and generate qualified leads." />
      </Helmet>
      <ServicePageLayout>
        <WhitePaper onNavigateHome={() => navigate('/')} />
      </ServicePageLayout>
    </>
  );
}

function LinkGhostPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Ghostwriting services for B2B SaaS leaders</title>
        <meta name="description" content="Grow your LinkedIn, boost engagement, build authority, and generate leads with ghostwritten posts in your voice." />
      </Helmet>
      <ServicePageLayout>
        <LinkGhost onNavigateHome={() => navigate('/')} />
      </ServicePageLayout>
    </>
  );
}

function AboutCompanyPage() {
  const navigate = useNavigate();
  
  const navigateToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>About h1copy | B2B SaaS content agency</title>
        <meta name="description" content="h1copy helps B2B SaaS brands grow with product-led high-impact content that’s optimized for LLMs and search engines." />
      </Helmet>
      <PageLayout>
        <AboutCompany 
          onNavigateHome={() => navigate('/')} 
          onNavigateToContact={navigateToContact}
        />
      </PageLayout>
    </>
  );
}

function WriterNetworkPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Join h1copy freelancers network</title>
        <meta name="description" content="Join h1copy's network of expert writers specializing in B2B SaaS content. Collaborate on high-impact projects and grow your freelance career." />
      </Helmet>
      <PageLayout>
        <WriterNetwork onNavigateHome={() => navigate('/')} />
      </PageLayout>
    </>
  );
}



export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/ebooks" element={<EbookPage />} />
        <Route path="/services/blogs" element={<BlogsPage />} />
        <Route path="/services/white-papers" element={<WhitePaperPage />} />
        <Route path="/services/linkedin-ghostwriting" element={<LinkGhostPage />} />
        <Route path="/company/about" element={<AboutCompanyPage />} />
        <Route path="/company/freelancers-network" element={<WriterNetworkPage />} />
        {/* Redirect old URL to new one */}
        <Route path="/company/writer-network" element={<Navigate to="/company/freelancers-network" replace />} />
        {/* Redirect old routes to new ones for backward compatibility */}
        <Route path="/services/seo-optimization" element={<Navigate to="/services/ebooks" replace />} />
        <Route path="/services/content-marketing" element={<Navigate to="/services/blogs" replace />} />
        <Route path="/services/technical-seo" element={<Navigate to="/services/white-papers" replace />} />
        <Route path="/services/local-seo" element={<Navigate to="/services/linkedin-ghostwriting" replace />} />
        {/* Handle preview_page.html and other unmatched paths */}
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}