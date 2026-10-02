import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What file formats and specifications should I supply?',
      a: 'We recommend print-ready PDF files in CMYK color format at 300 DPI resolution, with a 3mm bleed and 3mm quiet inner margin. High-resolution PNG, JPEG, and vector Illustrator (AI/EPS) files are also supported.'
    },
    {
      q: 'Is there a minimum order quantity (MOQ)?',
      a: 'Because digital printing does not require physical plate setups like traditional litho, we can produce short runs efficiently — whether you need 25 invitation cards, a single roller banner, or 1,000 corporate flyers.'
    },
    {
      q: 'Will I see a proof before printing begins?',
      a: 'Yes. Before any job enters final production, we confirm layout details and digital proofs with you directly via WhatsApp or phone so you are confident in sizing and positioning.'
    },
    {
      q: 'Can you produce custom sizes and non-standard cuts?',
      a: 'Absolutely. In addition to standard UK dimensions (A6, A5, A4, A3, DL, and 85×55mm business cards), we accommodate bespoke trimming, die-cut sticker shapes, and custom banner lengths.'
    },
    {
      q: 'How does collection or local handover in Grays work?',
      a: 'Once your job has been printed, trimmed, and packaged, we will message you directly to confirm it is ready for collection or local handover at 26 Trefoil House Crest Avenue, Grays.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-neutral-50/50 border-b border-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            Clear Answers
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Essential facts about artwork preparation, turnaround, and digital print runs.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-neutral-900 hover:text-orange-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-orange-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500">
            Have a question about a specific file or custom material?{' '}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20I%20have%20a%20question%20about%20a%20print%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 hover:underline"
            >
              Ask Leah on WhatsApp →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
