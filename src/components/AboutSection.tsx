import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import stationeryImage from '../assets/images/print_stationery_samples_1790957619674.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm aspect-[4/3]">
              <img
                src={stationeryImage}
                alt="Tactile printed stationery and visiting cards on neutral surface"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-neutral-200 text-xs text-neutral-800 flex items-center justify-between">
                <span className="font-semibold">Tangible, Professional Results</span>
                <span className="text-neutral-500 font-mono">Grays, RM17</span>
              </div>
            </div>
          </div>

          {/* Editorial Content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              About the Service
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display">
              Dedicated Digital Printing for Grays & Beyond
            </h2>

            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              <strong>Leah Brady</strong> is an independent digital printing service operating from 26 Trefoil House Crest Avenue in Grays, England. We focus on producing clean, high-impact printed collateral with crisp text, accurate color fidelity, and dependable finishing.
            </p>

            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Whether you need 100 urgent business cards for an upcoming meeting, a full batch of event flyers, wide-format posters for a shopfront, or branded stationery for your practice, you work directly with your printer. That means no impersonal ticket systems, no automated bot replies, and rapid answers to your file setup questions.
            </p>

            {/* Practical Trust Points (grounded strictly in facts) */}
            <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Direct WhatsApp & Call Access</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Talk directly to your printer to confirm paper weight, file dimensions, and timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">File Pre-Flight & Digital Proofs</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Every file is reviewed for correct bleed, resolution, and margins prior to the print run.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">12 Versatile Product Categories</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    From business stationery and certificates to banners, canvas prints, and menus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Local Presence in Grays</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Convenient Essex location at RM17 6RP for straightforward local logistics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20I'd%20like%20to%20discuss%20a%20print%20job`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors shadow-xs"
              >
                <span>Discuss Your Job Directly</span>
              </a>

              <a
                href="#quality"
                className="text-xs font-semibold text-neutral-700 hover:text-neutral-950 underline underline-offset-4 transition-colors"
              >
                See our quality assurance steps →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
