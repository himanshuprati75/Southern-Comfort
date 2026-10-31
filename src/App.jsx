import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustShield from './components/TrustShield';
import CostCalculator from './components/CostCalculator';
import LeadCaptureForm from './components/LeadCaptureForm';
import ServicesGrid from './components/ServicesGrid';
import CraftsmanshipGallery from './components/CraftsmanshipGallery';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CallModal from './components/CallModal';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  const [selectedIssue, setSelectedIssue] = useState('ac-repair');
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // State-synchronized issue handler that scrolls to calculator or lead form
  const handleSelectIssue = (issueId) => {
    setSelectedIssue(issueId);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lock-in quote handler that transitions from calculator to dispatch form
  const handleLockInQuote = (serviceId) => {
    setSelectedIssue(serviceId);
    const formElement = document.getElementById('dispatch-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-warmOrange-500 selection:text-white">
      {/* 1. Header with 5-Tab Separated Navigation */}
      <Header onOpenCallModal={() => setIsCallModalOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero Section: 3-Second Psychological Hook & Issue Selector */}
        <Hero 
          onSelectIssue={handleSelectIssue}
          onOpenCallModal={() => setIsCallModalOpen(true)}
        />

        {/* 3. 4-Pillar Authority & Trust Shield */}
        <TrustShield onOpenCallModal={() => setIsCallModalOpen(true)} />

        {/* 4. Value-First Cost & Response Estimator (Reciprocity Sequence) */}
        <CostCalculator 
          selectedIssue={selectedIssue}
          onSelectIssue={setSelectedIssue}
          onLockInQuote={handleLockInQuote}
        />

        {/* 5. State-Synchronized Lead Capture Form with $50 Voucher */}
        <LeadCaptureForm 
          selectedIssue={selectedIssue}
          onOpenCallModal={() => setIsCallModalOpen(true)}
        />

        {/* 6. Complete Services Grid with Category Tab Filters */}
        <ServicesGrid 
          onSelectService={handleSelectIssue}
          onOpenCallModal={() => setIsCallModalOpen(true)}
        />

        {/* 7. Craftsmanship Project Gallery with Modal Lightbox */}
        <CraftsmanshipGallery />

        {/* 8. About Us: Roy & Kendra Pierce Story */}
        <AboutUs onOpenCallModal={() => setIsCallModalOpen(true)} />

        {/* 9. Verified Customer Testimonials */}
        <Testimonials />

        {/* 10. Searchable Regional Coverage Matrix */}
        <ServiceAreas onOpenCallModal={() => setIsCallModalOpen(true)} />

        {/* 11. FAQ Accordion */}
        <FAQ onOpenCallModal={() => setIsCallModalOpen(true)} />
      </main>

      {/* 12. Complete Footer with NAP & Email */}
      <Footer onOpenCallModal={() => setIsCallModalOpen(true)} />

      {/* 13. Desktop 1-Click Call & Callback Modal */}
      <CallModal 
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      {/* 14. Mobile Sticky Bottom Lifeline CTA */}
      <MobileStickyCTA />
    </div>
  );
}
