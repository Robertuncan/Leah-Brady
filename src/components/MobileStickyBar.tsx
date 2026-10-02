import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-100 text-neutral-900 font-semibold text-xs active:bg-neutral-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-neutral-700" />
          <span>Call Leah</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20I'd%20like%20to%20inquire%20about%20a%20digital%20printing%20order`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-orange-600 text-white font-semibold text-xs active:bg-orange-700 transition-colors shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
