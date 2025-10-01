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
import { SeoOptimization } from './components/services/SeoOptimization';
import { ContentMarketing } from './components/services/ContentMarketing';
import { TechnicalSeo } from './components/services/TechnicalSeo';
import { LocalSeo } from './components/services/LocalSeo';
import { AboutCompany } from './components/AboutCompany';
import { WriterNetwork } from './components/WriterNetwork';

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

function SeoOptimizationPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <SeoOptimization onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
  );
}

function ContentMarketingPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <ContentMarketing onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
  );
}

function TechnicalSeoPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <TechnicalSeo onNavigateHome={() => navigate('/')} />
    </ServicePageLayout>
  );
}

function LocalSeoPage() {
  const navigate = useNavigate();
  return (
    <ServicePageLayout>
      <LocalSeo onNavigateHome={() => navigate('/')} />
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
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/seo-optimization" element={<SeoOptimizationPage />} />
        <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
        <Route path="/services/technical-seo" element={<TechnicalSeoPage />} />
        <Route path="/services/local-seo" element={<LocalSeoPage />} />
        <Route path="/company/about" element={<AboutCompanyPage />} />
        <Route path="/company/writer-network" element={<WriterNetworkPage />} />
        {/* Handle preview_page.html and other unmatched paths */}
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}