import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompaniesAndReviews } from './components/CompaniesAndReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Methodology } from './components/Methodology';

type Page = 'home' | 'methodology';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'methodology') {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation 
          currentPage={currentPage}
          onNavigate={navigateToPage}
        />
        <Methodology onNavigateHome={() => navigateToPage('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation 
        currentPage={currentPage}
        onNavigate={navigateToPage}
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CompaniesAndReviews />
      <Contact />
      <Footer />
    </div>
  );
}