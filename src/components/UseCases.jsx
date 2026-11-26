import React from 'react';
import { useCases } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function UseCases({ onOpenAuthModal }) {
  return (
    <section id="use-cases" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
            Versatile Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight">
            Tailored For Every Event Scale
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Trusted across intimate family celebrations, wedding weekends, and high-attendance corporate conclaves.
          </p>
        </div>

        {/* 4 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] soft-card-shadow flex flex-col justify-between smooth-hover hover:-translate-y-1 hover:border-[#C62828]/50"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#F7F7F7] relative">
                  <img
                    src={uc.img}
                    alt={uc.title}
                    className="w-full h-full object-cover smooth-hover hover:scale-103"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-white/95 text-[10px] font-semibold text-[#202020] px-2 py-0.5 rounded shadow-xs border border-[#E8E8E8]">
                    {uc.tag}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-[#202020]">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-3 border-t border-[#E8E8E8] mt-1 flex items-center justify-between text-xs text-[#C62828] font-semibold">
                <span>{uc.stat}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C62828]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
