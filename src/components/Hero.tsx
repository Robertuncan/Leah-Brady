import React from 'react';
import { MessageCircle, Phone, ArrowDown, MapPin, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import heroImage from '../assets/images/hero_digital_print_studio_1790957603958.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Direct Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Business type & Area kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-3">
              <span>Digital Printing Service</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-500">Grays, Essex</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-900 font-display leading-[1.15] text-balance">
              Print Your Ideas, <br className="hidden sm:inline" />
              <span className="text-orange-600">Make an Impact.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Professional digital printing service delivered with sharp resolution, premium paper stocks, and exact color balance. From daily business stationery and visiting cards to wide-format posters and custom banners.
            </p>

            {/* Local Trust Signal */}
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-neutral-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>26 Trefoil House Crest Avenue, Grays, RM17 6RP</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-700" />
                <span>Small & Bulk Runs</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-700" />
                <span>Direct Proof Verification</span>
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20I'd%20like%20to%20get%20a%20quote%20for%20a%20digital%20print%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 transition-transform group-hover:scale-110" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-neutral-700" />
                <span>Call {BUSINESS_INFO.phoneDisplayLocal}</span>
              </a>

              <a
                href="#quote-estimator"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
                <span>Build a Quote</span>
              </a>
            </div>

            {/* Quick stats / reassurance bar */}
            <div className="mt-10 pt-6 border-t border-neutral-100 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-neutral-900 font-display tabular-nums">12</p>
                <p className="text-xs text-neutral-500 mt-0.5">Core Print Services</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 font-display">1-on-1</p>
                <p className="text-xs text-neutral-500 mt-0.5">Direct Communication</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 font-display">Grays</p>
                <p className="text-xs text-neutral-500 mt-0.5">Local Service Point</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Studio Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm aspect-[4/3] lg:aspect-[5/4]">
              <img
                src={heroImage}
                alt="Digital printing workbench with crisp paper stocks, print swatches and precision finishes"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay reassurance card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-neutral-200/70 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-neutral-900">Custom Dimensions & Paper Weights</p>
                  <p className="text-[11px] text-neutral-500">From 100gsm stationery to 450gsm dense cardstock</p>
                </div>
                <a
                  href="#services"
                  className="p-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                  aria-label="View all services"
                >
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
