import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [service, setService] = useState('Visiting Card Printing');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = encodeURIComponent(
      `Hello Leah,\nMy name is ${name || 'Customer'}.\nContact: ${phoneOrEmail}\nService: ${service}\nMessage: ${details}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${formatted}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display">
            Start Your Print Project
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            Reach out directly for quotations, turnaround queries, or file checks. We reply quickly during working hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Leah,%20I'd%20like%20to%20inquire%20about%20a%20print%20job`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-orange-50/70 border border-orange-200/80 hover:border-orange-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    Fastest Response
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950">
                    Message on WhatsApp
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    +44 7414 009017 · Click to open chat
                  </p>
                </div>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="block p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-400 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Direct Phone Line
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950">
                    {BUSINESS_INFO.phoneFormatted}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Local UK mobile: {BUSINESS_INFO.phoneDisplayLocal}
                  </p>
                </div>
              </div>
            </a>

            {/* Workshop Address Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Physical Location
                  </span>
                  <h3 className="text-sm font-bold text-neutral-950 mt-0.5">
                    26 Trefoil House Crest Avenue
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Grays, England, RM17 6RP
                  </p>
                  <a
                    href={BUSINESS_INFO.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-orange-600 hover:text-orange-700"
                  >
                    View map directions →
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-neutral-950 font-display mb-1">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              Fill in your details below to launch a structured inquiry directly on WhatsApp or initiate contact.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-950">Inquiry Initiated!</h4>
                <p className="text-xs text-emerald-800 mt-1">
                  WhatsApp has opened with your message. If you didn't see the tab, you can also reach Leah directly at <strong>{BUSINESS_INFO.phoneFormatted}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-md hover:bg-emerald-100"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Phone Number / Contact
                    </label>
                    <input
                      type="text"
                      required
                      value={phoneOrEmail}
                      onChange={(e) => setPhoneOrEmail(e.target.value)}
                      placeholder="e.g. 07123 456789"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Visiting Card Printing">Visiting Card Printing</option>
                    <option value="Brochure Printing">Brochure Printing</option>
                    <option value="Flyer & Leaflet Printing">Flyer & Leaflet Printing</option>
                    <option value="Poster Printing">Poster Printing</option>
                    <option value="Banner Printing">Banner Printing</option>
                    <option value="Sticker & Label Printing">Sticker & Label Printing</option>
                    <option value="Invitation Card Printing">Invitation Card Printing</option>
                    <option value="Certificate Printing">Certificate Printing</option>
                    <option value="Business Stationery Printing">Business Stationery Printing</option>
                    <option value="Photo & Canvas Printing">Photo & Canvas Printing</option>
                    <option value="Menu Card Printing">Menu Card Printing</option>
                    <option value="Book & Catalogue Printing">Book & Catalogue Printing</option>
                    <option value="Other / Bespoke Digital Print">Other / Bespoke Digital Print</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Project Details & Target Date
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell us about desired quantity, paper type, size, or artwork readiness..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
