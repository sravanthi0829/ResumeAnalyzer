import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SubmissionPortal } from './components/SubmissionPortal';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { IndustryBenchmarks } from './components/IndustryBenchmarks';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'n8n-embed') {
      const el = document.getElementById('upload-studio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Also trigger the embed tab if possible
        const embedBtn = el.querySelector('button:nth-child(2)') as HTMLButtonElement | null;
        if (embedBtn) {
          embedBtn.click();
        }
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Hero Section */}
      <Hero
        onStartAnalysis={() => handleScrollToSection('upload-studio')}
        onOpenLiveForm={() => handleScrollToSection('n8n-embed')}
      />

      {/* Main Submission & n8n Form Hub */}
      <SubmissionPortal />

      {/* Core Capabilities Bento */}
      <CapabilitiesBento />

      {/* Role Benchmarks & ATS Keywords */}
      <IndustryBenchmarks />

      {/* FAQ Section */}
      <FaqSection />

      {/* Quiet Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
