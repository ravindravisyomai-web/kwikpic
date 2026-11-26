import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA({ onOpenAuthModal }) {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-14 lg:p-16 soft-elevated-shadow gsap-reveal-card">
          {/* Subtle top editorial red hairline accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C62828] to-transparent opacity-80" />

          <div className="max-w-2xl mx-auto text-center space-y-5">

            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#C62828] gsap-fade-up">
              Start Today
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202020] tracking-tight leading-tight gsap-reveal-heading">
              Make Every Event Easier to{' '}
              <span className="font-serif italic font-normal text-[#C62828]">Remember.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed gsap-reveal-text">
              Join thousands of wedding photographers and event planners who deliver thousands of event photos with zero friction.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 gsap-fade-up">
              <button
                onClick={() => onOpenAuthModal('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] transition-all shadow-xs cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#666666] gsap-fade-up">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C62828]" /> 1,000 Free Photos Included
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C62828]" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C62828]" /> Setup in Under 60 Seconds
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
