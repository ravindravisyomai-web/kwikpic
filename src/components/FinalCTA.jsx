import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function FinalCTA({ onOpenAuthModal }) {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-3xl overflow-hidden border border-[#E8EBE7] bg-[#F7F8F6] p-8 sm:p-14 lg:p-16 soft-elevated-shadow gsap-reveal-card">
          <div className="max-w-2xl mx-auto text-center space-y-5">

            <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72] gsap-fade-up">
              Start Today
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202522] tracking-tight leading-tight gsap-reveal-heading">
              Make Every Event Easier to Remember.
            </h2>

            <p className="text-sm sm:text-base text-[#737873] leading-relaxed gsap-reveal-text">
              Join thousands of wedding photographers and event planners who deliver thousands of event photos with zero friction.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 gsap-fade-up">
              <button
                onClick={() => onOpenAuthModal('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#202522] hover:bg-[#333A36] transition-all shadow-xs cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#737873] gsap-fade-up">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#648B72]" /> 1,000 Free Photos Included
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#648B72]" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#648B72]" /> Setup in Under 60 Seconds
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
