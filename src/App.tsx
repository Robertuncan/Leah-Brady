/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutSection } from './components/AboutSection';
import { QualityProcess } from './components/QualityProcess';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-neutral-900 pb-14 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <QuoteCalculator />
        <AboutSection />
        <QualityProcess />
        <LocationSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
