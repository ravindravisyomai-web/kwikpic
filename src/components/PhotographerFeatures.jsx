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

                    {feat.id === 'bulk-upload' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8EBE7]">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-[#202522]">Folder: Wedding_Phere_RAW/</span>
                          <span className="text-[#648B72] font-semibold bg-[#648B72]/15 px-2 py-0.5 rounded">142 MB/s</span>
                        </div>
                        <div className="w-full bg-[#E8EBE7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#202522] h-full w-3/4 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[11px] text-[#737873] pt-1 border-t border-[#E8EBE7]">
                          <span>2,840 photos queued</span>
                          <span className="text-[#648B72] font-medium">Full EXIF & ratings preserved</span>
                        </div>
                      </div>
                    )}

                    {feat.id === 'client-proofing' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8EBE7] text-xs">
                        <div className="flex justify-between font-bold text-[#202522]">
                          <span>Client Proofing Selection</span>
                          <span className="text-[#648B72] bg-[#648B72]/15 px-2 py-0.5 rounded">54 Selected</span>
                        </div>
                        <p className="text-[11px] text-[#737873] font-mono bg-[#F7F8F6] p-2.5 rounded-lg border border-[#E8EBE7]">
                          DSC_0921.CR3, DSC_0945.CR3, DSC_1002.CR3, DSC_1114.CR3...
                        </p>
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <span className="text-[#737873]">Couples approval state: <strong className="text-[#202522]">Finalized</strong></span>
                          <span className="text-[#648B72] font-semibold">Lightroom XML Export →</span>
                        </div>
                      </div>
                    )}

                    {feat.id === 'studio-branding' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8EBE7] text-xs">
                        <div className="flex justify-between items-center pb-2 border-b border-[#E8EBE7]">
                          <span className="font-bold text-[#202522]">Custom Studio Domain</span>
                          <span className="text-[10px] bg-[#648B72]/15 text-[#648B72] font-semibold px-2 py-0.5 rounded-full">SSL Active</span>
                        </div>
                        <div className="p-2.5 bg-[#FAFBF9] rounded-lg border border-[#E8EBE7] font-mono text-[11px] text-[#202522] flex items-center justify-between">
                          <span>photos.artisanstudios.com</span>
                          <span className="text-[#648B72] text-[10px] font-bold">LIVE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] pt-1 text-[#737873]">
                          <div className="p-2 bg-[#F7F8F6] rounded border border-[#E8EBE7]">
                            <span className="block font-semibold text-[#202522]">Watermark:</span>
                            <span>Studio Logo (Bottom Corner)</span>
                          </div>
                          <div className="p-2 bg-[#F7F8F6] rounded border border-[#E8EBE7]">
                            <span className="block font-semibold text-[#202522]">White-Label:</span>
                            <span>Powered by Lumina removed</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.id === 'lossless-storage' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8EBE7] text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#202522]">Granular Delivery Control</span>
                          <span className="text-[10px] font-bold text-[#648B72] bg-[#648B72]/15 px-2 py-0.5 rounded">300 DPI Master</span>
                        </div>
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAFBF9] border border-[#E8EBE7] text-[11px]">
                            <span className="text-[#202522] font-medium">Guest Access:</span>
                            <span className="text-[#737873]">Optimized Social Web-Ready (Watermarked)</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAFBF9] border border-[#E8EBE7] text-[11px]">
                            <span className="text-[#202522] font-medium">Client / Couple Access:</span>
                            <span className="text-[#648B72] font-semibold">Uncompressed Master RAW (Clean)</span>
                          </div>
                        </div>
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
