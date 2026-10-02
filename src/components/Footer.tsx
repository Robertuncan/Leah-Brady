import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs py-14 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <a href="#" className="text-xl font-bold font-display text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span>{BUSINESS_INFO.name}</span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. High-precision digital printing service based in Grays, England.
            </p>
            <p className="text-[11px] text-neutral-500">
              Visiting cards, flyers, banners, brochures, posters, stickers, invitations, and corporate stationery.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  12 Print Services
                </a>
              </li>
              <li>
                <a href="#quote-estimator" className="hover:text-white transition-colors">
                  Instant Quote Builder
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Service
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors">
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Workshop
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +44 7414 009017
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  Phone: {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Local Area Focus */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3">
              Service Area
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Serving Grays, Thurrock, and wider Essex with responsive digital print production. Small runs and bulk commercial orders handled with individual care.
            </p>
            <div className="mt-4">
              <a
                href={BUSINESS_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-semibold"
              >
                <span>Find us on Google Maps →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Digital printing service.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
