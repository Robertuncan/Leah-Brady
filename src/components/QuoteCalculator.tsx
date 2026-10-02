import React, { useState } from 'react';
import { MessageCircle, Check, Copy, Send, SlidersHorizontal, Sparkles } from 'lucide-react';
import { MAIN_SERVICES, BUSINESS_INFO } from '../data/servicesData';

export const QuoteCalculator: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('visiting-cards');
  const [quantity, setQuantity] = useState<string>('250');
  const [finish, setFinish] = useState<string>('Standard Silk');
  const [artworkStatus, setArtworkStatus] = useState<string>('Print-ready PDF');
  const [userNotes, setUserNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const selectedService = MAIN_SERVICES.find(s => s.id === selectedServiceId) || MAIN_SERVICES[0];

  const quantityOptions = ['50', '100', '250', '500', '1000', 'Custom quantity'];

  const getWhatsAppMessage = () => {
    let msg = `Hello Leah, I'd like to request a quote for a digital printing project:\n\n`;
    msg += `• Product: ${selectedService.name}\n`;
    msg += `• Quantity: ${quantity}\n`;
    msg += `• Preferred Finish: ${finish}\n`;
    msg += `• Artwork Status: ${artworkStatus}\n`;
    if (userNotes.trim()) {
      msg += `• Additional Notes: ${userNotes.trim()}\n`;
    }
    msg += `\nPlease let me know your estimated price and turnaround time. Thank you!`;
    return msg;
  };

  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quote-estimator" className="py-16 lg:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            Fast Quote Builder
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display">
            Configure Your Print Order
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Select your specifications below to generate a formatted inquiry sent directly to Leah on WhatsApp for immediate pricing and turnaround.
          </p>
        </div>

        {/* Builder Container */}
        <div className="mt-10 bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Select Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  1. Select Print Product
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => {
                    setSelectedServiceId(e.target.value);
                    const newSvc = MAIN_SERVICES.find(s => s.id === e.target.value);
                    if (newSvc && newSvc.popularFinishes.length > 0) {
                      setFinish(newSvc.popularFinishes[0]);
                    }
                  }}
                  className="w-full px-3.5 py-3 rounded-lg bg-white border border-neutral-300 text-sm font-medium text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  {MAIN_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Quantity selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  2. Approximate Quantity
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {quantityOptions.map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`py-2 px-2 text-xs font-medium rounded-md transition-colors text-center truncate ${
                        quantity === qty
                          ? 'bg-neutral-900 text-white shadow-2xs font-semibold'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Paper / Finish options */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  3. Finish & Stock
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedService.popularFinishes.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFinish(f)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        finish === f
                          ? 'bg-orange-600 text-white font-semibold'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Artwork readiness */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  4. Artwork Readiness
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Print-ready PDF / AI',
                    'Image / Sketch / Logo only',
                    'Need assistance with sizing'
                  ].map((art) => (
                    <button
                      key={art}
                      type="button"
                      onClick={() => setArtworkStatus(art)}
                      className={`p-2.5 text-left text-xs font-medium rounded-md transition-colors ${
                        artworkStatus === art
                          ? 'bg-neutral-900 text-white font-semibold'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {art}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Custom notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  5. Specific Instructions or Target Date (Optional)
                </label>
                <input
                  type="text"
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder="e.g. Need by Thursday for an event in Grays, double-sided"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

            </div>

            {/* Live Message Preview & Direct Action (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider">
                      Live Message Summary
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">WhatsApp</span>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 font-mono text-xs text-neutral-800 whitespace-pre-wrap leading-relaxed border border-neutral-200/80">
                  {getWhatsAppMessage()}
                </div>

                <p className="mt-3 text-[11px] text-neutral-500 leading-normal">
                  Sending this message opens WhatsApp directly with your specs ready to send to Leah Brady (+44 7414 009017).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Send Request on WhatsApp</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                  >
                    <span>Or Call Leah</span>
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
