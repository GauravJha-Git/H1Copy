import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
    <PageLayout>
      <Methodology onNavigateHome={() => navigate('/')} />
    </PageLayout>
  );
}

function BlogPage() {
  const navigate = useNavigate();
  return <Blog onNavigateHome={() => navigate('/')} />;
}

function EbookPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <Ebook onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
  );
}

function BlogsPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <Blogs onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
  );
}

function WhitePaperPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <WhitePaper onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
  );
}

function LinkGhostPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <LinkGhost onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
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
    <PageLayout>
      <AboutCompany 
        onNavigateHome={() => navigate('/')} 
        onNavigateToContact={navigateToContact}
      />
    </PageLayout>
  );
}

function WriterNetworkPage() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <WriterNetwork onNavigateHome={() => navigate('/')} />
    </PageLayout>
  );
}



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/seo-optimization" element={<EbookPage />} />
        <Route path="/services/content-marketing" element={<BlogsPage />} />
        <Route path="/services/technical-seo" element={<WhitePaperPage />} />
        <Route path="/services/local-seo" element={<LinkGhostPage />} />
        <Route path="/company/about" element={<AboutCompanyPage />} />
        <Route path="/company/writer-network" element={<WriterNetworkPage />} />
        {/* Handle preview_page.html and other unmatched paths */}
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}