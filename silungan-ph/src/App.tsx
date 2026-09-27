import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UnderstandingSection } from './components/UnderstandingSection';
import { HistorySection } from './components/HistorySection';
import { ContemporarySection } from './components/ContemporarySection';
import { IssuesSection } from './components/IssuesSection';
import { AnalysisSection } from './components/AnalysisSection';
import { MultimediaHub } from './components/MultimediaHub';
import { KwentoSilungan } from './components/KwentoSilungan';
import { SilongTala } from './components/SilongTala';
import { SupportSection } from './components/SupportSection';
import { ConclusionSection } from './components/ConclusionSection';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = [
        'home',
        'explore',
        'history',
        'today',
        'issues',
        'analysis',
        'multimedia',
        'kwento-silungan',
        'silong-tala',
        'support',
        'conclusion',
        'references',
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FC] text-[#24202B]">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>

        <UnderstandingSection />
        <HistorySection />
        <ContemporarySection />
        <IssuesSection />
        <AnalysisSection />
        <MultimediaHub />
        <KwentoSilungan />
        <SilongTala />
        <SupportSection />
        <ConclusionSection onExploreReferences={() => handleNavigate('references')} />
        <ReferencesSection />
      </main>

      {/* Academic Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#4C3575] text-white shadow-lg hover:bg-[#7C5CFC] transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7C5CFC]"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
