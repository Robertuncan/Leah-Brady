import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle, Clock, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            Local Service & Workshop
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display">
            Based in Grays, England
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Conveniently situated in Grays, RM17 for direct collection, local courier drop-offs, and Essex order coordination.
          </p>
        </div>

        {/* Location Card & Map Link */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-950">Workshop & Mailing Address</h3>
                  <p className="text-xs text-neutral-500">Grays, Thurrock, England</p>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200/80 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Full Location Details
                </p>
                <p className="text-base font-semibold text-neutral-900 leading-snug">
                  {BUSINESS_INFO.address}
                </p>
                <p className="mt-2 text-xs text-neutral-600 font-mono">
                  Postcode: {BUSINESS_INFO.postcode}
                </p>
              </div>

              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-neutral-800">Local Area Handover:</strong> Arrangements can be coordinated directly for collection or local dispatch throughout Grays and surrounding areas.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-neutral-800">Direct Contact:</strong> Please message or call prior to visiting to confirm job status and collection readiness.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20I'd%20like%20to%20arrange%20collection%20or%20delivery%20in%20Grays`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-orange-600" />
                <span>Ask about Collection</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs flex flex-col">
            <div className="p-4 bg-neutral-100 border-b border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-600" />
                <span className="font-semibold text-neutral-800">Map View · Grays RM17 6RP</span>
              </div>
              <span className="text-neutral-500 font-mono">Thurrock, Essex</span>
            </div>

            <div className="relative flex-1 min-h-[300px] bg-neutral-200 flex items-center justify-center p-6 overflow-hidden">
              {/* Stylized vector map graphic */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Map road lines illustration */}
              <svg className="absolute inset-0 w-full h-full stroke-neutral-300 fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,150 Q200,80 400,200 T800,100" strokeWidth="6" />
                <path d="M100,-50 L250,450" strokeWidth="4" />
                <path d="M350,-50 Q400,200 650,450" strokeWidth="5" />
                <path d="M-50,280 L750,220" strokeWidth="3" />
              </svg>

              {/* Central Pin Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-neutral-300 shadow-lg max-w-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-3 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-neutral-950 font-display text-base">
                  Leah Brady Digital Printing
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  26 Trefoil House Crest Avenue, Grays, RM17 6RP
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-center gap-2 text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Orders Accepted
                  </span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-neutral-600">Local & Regional</span>
                </div>
                <div className="mt-4">
                  <a
                    href={BUSINESS_INFO.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700"
                  >
                    <span>View Exact Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
