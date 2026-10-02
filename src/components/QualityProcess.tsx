import React from 'react';
import { Check, ShieldCheck, FileCheck, Eye, Layers, PackageCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import posterImage from '../assets/images/large_format_posters_1790957632193.jpg';

export const QualityProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pre-Flight File Verification',
      desc: 'We examine your artwork files for proper resolution (300 DPI recommended), color model (CMYK vs RGB), and 3mm bleed margins to prevent white trimming lines.',
      icon: <FileCheck className="w-5 h-5 text-orange-600" />
    },
    {
      num: '02',
      title: 'Digital Proof Confirmation',
      desc: 'Before executing any full print run, we review digital layouts with you via WhatsApp or phone so you can verify text, layout alignment, and sizing.',
      icon: <Eye className="w-5 h-5 text-orange-600" />
    },
    {
      num: '03',
      title: 'Precision Calibration & Print',
      desc: 'Modern digital press equipment produces deep blacks, vibrant hues, and razor-sharp fine lines without the banding or ink bleed of standard desktop printers.',
      icon: <Layers className="w-5 h-5 text-orange-600" />
    },
    {
      num: '04',
      title: 'Finishing & Careful Handover',
      desc: 'Clean guillotine cutting, scored folds, smooth lamination, and protective packaging ensure your finished products leave the workshop in immaculate condition.',
      icon: <PackageCheck className="w-5 h-5 text-orange-600" />
    }
  ];

  return (
    <section id="quality" className="py-16 lg:py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
            Quality Assurance & Reassurance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Confidence in Every Print Run
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Printing mistakes cost time and money. Our four-step quality checklist ensures every job is reviewed and confirmed before final production.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-neutral-800/80 rounded-xl p-6 border border-neutral-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-400">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-700/60 flex items-center gap-1.5 text-[11px] text-neutral-400">
                <Check className="w-3.5 h-3.5 text-orange-400" />
                <span>Verified before print</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner with Large Format Visual */}
        <div className="mt-12 bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Surprise Guarantee</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Unsure if your artwork is print-ready?
            </h3>

            <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-xl">
              Send your PDF, image, or draft file directly to Leah via WhatsApp. We will let you know immediately if the resolution, margins, and layout are suitable for your chosen print size.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20could%20you%20check%20if%20my%20file%20is%20ready%20for%20printing?`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-950 bg-orange-500 hover:bg-orange-400 rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send File for Free Check on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-xs font-semibold text-neutral-300 hover:text-white"
              >
                Call: {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
            <img
              src={posterImage}
              alt="Crisp wide-format posters and canvas prints showcase"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-800 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};
