import React from 'react';
import { photographerFeatures } from '../data/content';
import { Check } from 'lucide-react';

export default function PhotographerFeatures({ onOpenAuthModal }) {
  return (
    <section id="photographers" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
            For Photographers & Studios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202522] tracking-tight gsap-reveal-heading">
            Built to Scale Your Studio Operations
          </h2>
          <p className="text-sm sm:text-base text-[#737873] gsap-reveal-text">
            Replace scattered Google Drive links and delayed proofing with an efficient, client-ready workflow.
          </p>
        </div>

        {/* Alternating Clean Editorial Layout with Scroll Reveals */}
        <div className="space-y-20">
          {photographerFeatures.map((feat, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feat.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center gsap-reveal-card ${isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>

                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#F7F8F6] text-[#648B72] border border-[#E8EBE7]">
                    {feat.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#202522] tracking-tight leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#737873] leading-relaxed">
                    {feat.description}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {feat.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#648B72] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#202522]">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E8EBE7] flex items-center gap-3">
                    <span className="text-xl font-bold text-[#202522]">{feat.metric}</span>
                    <span className="text-xs text-[#737873]">{feat.metricSubtitle}</span>
                  </div>

                </div>

                {/* UI Preview Side */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-[#F7F8F6] rounded-2xl border border-[#E8EBE7] p-6 soft-card-shadow transition-transform duration-300 hover:-translate-y-1">

                    {feat.id === 'ai-matching' && (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-semibold text-[#202522]">
                          <span>Face Identification Precision</span>
                          <span className="text-[#648B72]">99.4% Verified</span>
                        </div>
                        <div className="w-full bg-[#E8EBE7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#648B72] h-full w-[99.4%] rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                          <div className="bg-white p-2.5 rounded-lg border border-[#E8EBE7]">
                            <p className="text-[10px] text-[#737873]">Sunlight</p>
                            <p className="font-bold text-[#202522] mt-0.5">99.7%</p>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-[#E8EBE7]">
                            <p className="text-[10px] text-[#737873]">Reception</p>
                            <p className="font-bold text-[#202522] mt-0.5">98.9%</p>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-[#E8EBE7]">
                            <p className="text-[10px] text-[#737873]">Sunglasses</p>
                            <p className="font-bold text-[#202522] mt-0.5">97.8%</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.id === 'bulk-upload' && (
                      <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E8EBE7]">
                        <div className="flex justify-between text-xs">
                          <span className="font-bold text-[#202522]">Folder: Wedding_Phere_RAW/</span>
                          <span className="text-[#648B72] font-semibold">142 MB/s</span>
                        </div>
                        <div className="w-full bg-[#E8EBE7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#202522] h-full w-3/4 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[11px] text-[#737873]">
                          <span>2,840 photos queued</span>
                          <span>Full EXIF retained</span>
                        </div>
                      </div>
                    )}

                    {feat.id === 'qr-experience' && (
                      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E8EBE7]">
                        <div className="w-20 h-20 bg-[#F7F8F6] rounded-lg border border-[#E8EBE7] flex items-center justify-center font-bold text-xs text-[#202522]">
                          QR Code
                        </div>
                        <div className="space-y-1 text-xs">
                          <p className="font-bold text-[#202522]">Print-Ready PDF Export</p>
                          <p className="text-[#737873]">Generate elegant acrylic standees and table tent cards customized with your studio brand.</p>
                        </div>
                      </div>
                    )}

                    {feat.id === 'client-proofing' && (
                      <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E8EBE7] text-xs">
                        <div className="flex justify-between font-bold text-[#202522]">
                          <span>Client Proofing Selection</span>
                          <span className="text-[#648B72]">54 Photos Selected</span>
                        </div>
                        <p className="text-[11px] text-[#737873] font-mono bg-[#F7F8F6] p-2 rounded border border-[#E8EBE7]">
                          DSC_0921.CR3, DSC_0945.CR3, DSC_1002.CR3, DSC_1114.CR3...
                        </p>
                        <p className="text-[10px] text-[#648B72] font-semibold pt-1">
                          Direct 1-Click Adobe Lightroom XML Export
                        </p>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
