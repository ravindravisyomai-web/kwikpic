import React from 'react';
import { verifiedStats } from '../data/content';

export default function TrustSection() {
  const partners = [
    'Canon Professional Guild',
    'Sony Alpha Creators',
    'WedMeGood Featured',
    'Nikon Artisans Network',
    'EventX Media Collective'
  ];

  return (
    <section className="py-14 bg-[#F7F7F7] border-y border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Verified Product Metrics with Staggered Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-[#E8E8E8] gsap-stagger-group">
          {verifiedStats.map((stat, idx) => (
            <div key={idx} className="gsap-stagger-item space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#C62828]">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#666666]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Endorsements with Smooth Fade */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 gsap-fade-up">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#666666] uppercase">
            <span>Trusted By Independent Studios & Event Organizers</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-[#666666]">
            {partners.map((p, i) => (
              <span key={i} className="hover:text-[#C62828] transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
