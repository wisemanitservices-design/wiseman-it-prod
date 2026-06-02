/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AuditTool from './components/AuditTool';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [preFillScore, setPreFillScore] = useState<number | null>(null);
  const [preFillMsg, setPreFillMsg] = useState<string>('');

  // Handle smooth scroll anchor navigations
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Launch assessment from Hero CTA
  const handleStartAssessment = () => {
    handleScrollToSection('audit');
    // We can also trigger the start behavior in AuditTool if needed
    setTimeout(() => {
      const startBtn = document.getElementById('audit-start-btn');
      if (startBtn) startBtn.click();
    }, 400);
  };

  // Pre-fill parameters trigger from Audit Tool results
  const handlePreFillBooking = (score: number, message: string) => {
    setPreFillScore(score);
    setPreFillMsg(message);
  };

  // Clear custom pre-fills
  const handleClearPreFill = () => {
    setPreFillScore(null);
    setPreFillMsg('');
  };

  // Dynamic viewport tracking (ScrollSpy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'audit', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for accuracy

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="wiseman-applet-root" className="min-h-screen bg-mars-black text-slate-100 selection:bg-mars-red/30 selection:text-mars-gold">
      
      {/* Dynamic Navigation Header */}
      <Header
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
      />

      <main>
        {/* Authoritative Hero Showcase */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onStartAssessment={handleStartAssessment}
        />

        {/* 3 Prioritized Services & Blueprints */}
        <Services
          onScrollToSection={handleScrollToSection}
        />

        {/* Dynamic Posture Assessment Diagnostic Grader */}
        <AuditTool
          onPreFillBooking={handlePreFillBooking}
          onScrollToSection={handleScrollToSection}
        />

        {/* Cyber Threat Intel & Advisory Blog */}
        <Blog />

        {/* Accelerated Acquisition consult booking forms */}
        <ContactForm
          preFillScore={preFillScore}
          preFillMsg={preFillMsg}
          onClearPreFill={handleClearPreFill}
        />
      </main>

      {/* Trust & Accreditations Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
      />

    </div>
  );
}
