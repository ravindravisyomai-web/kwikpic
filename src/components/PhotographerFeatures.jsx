import React from 'react';
import { photographerFeatures } from '../data/content';
import { Check } from 'lucide-react';

export default function PhotographerFeatures({ onOpenAuthModal }) {
  return (
    <section id="photographers" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
            For Photographers & Studios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight gsap-reveal-heading">
            Built to Scale Your Studio Operations
          </h2>
          <p className="text-sm sm:text-base text-[#666666] gsap-reveal-text">
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

                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#FFF5F5] text-[#C62828] border border-[#FCEBEC]">
                    {feat.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                    {feat.description}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {feat.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#202020]">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E8E8E8] flex items-center gap-3">
                    <span className="text-xl font-bold text-[#202020]">{feat.metric}</span>
                    <span className="text-xs text-[#666666]">{feat.metricSubtitle}</span>
                  </div>

                </div>

                {/* UI Preview Side */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-[#F7F7F7] rounded-2xl border border-[#E8E8E8] p-6 soft-card-shadow transition-transform duration-300 hover:-translate-y-1">

                    {feat.id === 'bulk-upload' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8E8E8]">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-[#202020]">Folder: Wedding_Phere_RAW/</span>
                          <span className="text-[#C62828] font-semibold bg-[#FFF5F5] border border-[#FCEBEC] px-2 py-0.5 rounded">142 MB/s</span>
                        </div>
                        <div className="w-full bg-[#E8E8E8] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#C62828] h-full w-3/4 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[11px] text-[#666666] pt-1 border-t border-[#E8E8E8]">
                          <span>2,840 photos queued</span>
                          <span className="text-[#C62828] font-medium">Full EXIF & ratings preserved</span>
                        </div>
                      </div>
                    )}

                    {feat.id === 'client-proofing' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8E8E8] text-xs">
                        <div className="flex justify-between font-bold text-[#202020]">
                          <span>Client Proofing Selection</span>
                          <span className="text-[#C62828] bg-[#FFF5F5] border border-[#FCEBEC] px-2 py-0.5 rounded">54 Selected</span>
                        </div>
                        <p className="text-[11px] text-[#666666] font-mono bg-[#F7F7F7] p-2.5 rounded-lg border border-[#E8E8E8]">
                          DSC_0921.CR3, DSC_0945.CR3, DSC_1002.CR3, DSC_1114.CR3...
                        </p>
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <span className="text-[#666666]">Couples approval state: <strong className="text-[#43866A]">Finalized</strong></span>
                          <span className="text-[#C62828] font-semibold">Lightroom XML Export →</span>
                        </div>
                      </div>
                    )}

                    {feat.id === 'studio-branding' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8E8E8] text-xs">
                        <div className="flex justify-between items-center pb-2 border-b border-[#E8E8E8]">
                          <span className="font-bold text-[#202020]">Custom Studio Domain</span>
                          <span className="text-[10px] bg-[#43866A]/10 text-[#43866A] font-semibold px-2 py-0.5 rounded-full">SSL Active</span>
                        </div>
                        <div className="p-2.5 bg-[#FAFAFA] rounded-lg border border-[#E8E8E8] font-mono text-[11px] text-[#202020] flex items-center justify-between">
                          <span>photos.artisanstudios.com</span>
                          <span className="text-[#43866A] text-[10px] font-bold">LIVE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] pt-1 text-[#666666]">
                          <div className="p-2 bg-[#F7F7F7] rounded border border-[#E8E8E8]">
                            <span className="block font-semibold text-[#202020]">Watermark:</span>
                            <span>Studio Logo (Bottom Corner)</span>
                          </div>
                          <div className="p-2 bg-[#F7F7F7] rounded border border-[#E8E8E8]">
                            <span className="block font-semibold text-[#202020]">White-Label:</span>
                            <span>Powered by Lumina removed</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.id === 'lossless-storage' && (
                      <div className="space-y-3 bg-white p-5 rounded-xl border border-[#E8E8E8] text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#202020]">Granular Delivery Control</span>
                          <span className="text-[10px] font-bold text-[#C62828] bg-[#FFF5F5] border border-[#FCEBEC] px-2 py-0.5 rounded">300 DPI Master</span>
                        </div>
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAFAFA] border border-[#E8E8E8] text-[11px]">
                            <span className="text-[#202020] font-medium">Guest Access:</span>
                            <span className="text-[#666666]">Optimized Social Web-Ready (Watermarked)</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAFAFA] border border-[#E8E8E8] text-[11px]">
                            <span className="text-[#202020] font-medium">Client / Couple Access:</span>
                            <span className="text-[#C62828] font-semibold">Uncompressed Master RAW (Clean)</span>
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
