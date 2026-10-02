import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark (Display Face, no badges or tags) */}
        <a 
          href="#" 
          className="text-2xl font-bold tracking-tight text-neutral-950 font-display flex items-center gap-2 group"
        >
          <span className="w-3 h-3 rounded-full bg-orange-600 inline-block transition-transform duration-200 group-hover:scale-125" />
          <span>{BUSINESS_INFO.name}</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
          <a href="#quote-estimator" className="hover:text-orange-600 transition-colors">Quote Builder</a>
          <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
          <a href="#quality" className="hover:text-orange-600 transition-colors">Print Assurance</a>
          <a href="#location" className="hover:text-orange-600 transition-colors">Location</a>
          <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-500" />
            <span>{BUSINESS_INFO.phoneDisplayLocal}</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Leah,%20I'd%20like%20to%20inquire%20about%20a%20digital%20printing%20order`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-950 rounded-md hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-neutral-800">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-orange-600 transition-colors"
            >
              All 12 Services
            </a>
            <a 
              href="#quote-estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-orange-600 transition-colors"
            >
              Instant Quote Builder
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-orange-600 transition-colors"
            >
              About the Service
            </a>
            <a 
              href="#quality" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-orange-600 transition-colors"
            >
              Quality & Proofing Process
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-orange-600 transition-colors"
            >
              Location & Workshop
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-orange-600 transition-colors"
            >
              Contact & Hours
            </a>
          </nav>
          
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Leah,%20I'd%20like%20to%20inquire%20about%20a%20digital%20printing%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-600" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
