import React, { useState } from 'react';
import { 
  CreditCard, 
  BookOpen, 
  Layers, 
  Image as ImageIcon, 
  Flag, 
  Tag, 
  Mail, 
  Award, 
  Briefcase, 
  Camera, 
  UtensilsCrossed, 
  BookMarked,
  MessageCircle,
  ArrowUpRight,
  Check
} from 'lucide-react';
import { MAIN_SERVICES, ServiceItem, BUSINESS_INFO } from '../data/servicesData';

// Map service id to relevant icon
const iconMap: Record<string, React.ReactNode> = {
  'visiting-cards': <CreditCard className="w-5 h-5 text-orange-600" />,
  'brochure-printing': <BookOpen className="w-5 h-5 text-orange-600" />,
  'flyer-leaflet-printing': <Layers className="w-5 h-5 text-orange-600" />,
  'poster-printing': <ImageIcon className="w-5 h-5 text-orange-600" />,
  'banner-printing': <Flag className="w-5 h-5 text-orange-600" />,
  'sticker-label-printing': <Tag className="w-5 h-5 text-orange-600" />,
  'invitation-card-printing': <Mail className="w-5 h-5 text-orange-600" />,
  'certificate-printing': <Award className="w-5 h-5 text-orange-600" />,
  'business-stationery-printing': <Briefcase className="w-5 h-5 text-orange-600" />,
  'photo-canvas-printing': <Camera className="w-5 h-5 text-orange-600" />,
  'menu-card-printing': <UtensilsCrossed className="w-5 h-5 text-orange-600" />,
  'book-catalogue-printing': <BookMarked className="w-5 h-5 text-orange-600" />
};

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Marketing', 'Corporate', 'Events & Display', 'Publishing'];

  const filteredServices = selectedCategory === 'All'
    ? MAIN_SERVICES
    : MAIN_SERVICES.filter(s => s.category === selectedCategory);

  const createWhatsAppLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello Leah, I'm interested in ordering or getting a quote for ${serviceName}. Could you share available options and pricing?`
    );
    return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              Capabilities & Offerings
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display">
              Digital Printing Services
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
              High-resolution digital output across 12 core formats. Fast setup, sharp detail reproduction, and tailored paper stocks for businesses, events, and individuals.
            </p>
          </div>

          {/* Interactive Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-lg shadow-2xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const editorialIndex = String(MAIN_SERVICES.findIndex(s => s.id === service.id) + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-orange-500 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top line: Icon and Editorial Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                      {iconMap[service.id]}
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      #{editorialIndex}
                    </span>
                  </div>

                  {/* Title & Category Indicator */}
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-orange-600 transition-colors">
                    {service.name}
                  </h3>
                  
                  <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <span>{service.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Digital Press</span>
                  </div>

                  {/* Short Scannable Description */}
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Quick specs preview */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                    <div className="text-xs text-neutral-500">
                      <span className="font-medium text-neutral-700">Common sizes: </span>
                      {service.standardSizes.slice(0, 2).join(', ')}
                    </div>
                    <div className="text-xs text-neutral-500">
                      <span className="font-medium text-neutral-700">Popular stocks: </span>
                      {service.popularFinishes.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>

                {/* Card CTA: WhatsApp Direct Action */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <a
                    href={createWhatsAppLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="text-xs text-neutral-500 hover:text-neutral-900 font-medium transition-colors"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for viewing detailed service specifications */}
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    {activeService.category} Specification
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-950 mt-1 font-display">
                    {activeService.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="text-neutral-400 hover:text-neutral-950 p-1.5 rounded-lg hover:bg-neutral-100"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                {activeService.shortDesc}
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200/60">
                  <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
                    Recommended Uses
                  </p>
                  <p className="text-neutral-700 text-xs">{activeService.typicalUses}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                    Available Finishes & Stocks
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {activeService.popularFinishes.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                    Standard & Bespoke Dimensions
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {activeService.standardSizes.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold text-neutral-700 hover:text-neutral-950"
                >
                  Call {BUSINESS_INFO.phoneDisplayLocal}
                </a>

                <a
                  href={createWhatsAppLink(activeService.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Quote on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
