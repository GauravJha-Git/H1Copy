import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompaniesAndReviews } from './components/CompaniesAndReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Methodology } from './components/Methodology';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CompaniesAndReviews />
      <Contact />
    </>
  );
}

function MethodologyPage() {
  return <Methodology />;
}

export default function App() {
  const location = useLocation();
  const currentPage = location.pathname === '/methodology' ? 'methodology' : 'home';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}