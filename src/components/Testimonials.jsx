import React, { useState } from 'react';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202522] tracking-tight gsap-reveal-heading">
            Trusted by Professional Photographers
          </h2>
          <p className="text-sm sm:text-base text-[#737873] gsap-reveal-text">
            Verified reviews from photographers who rely on Lumina for high-volume event delivery.
          </p>
        </div>

        {/* Clean Editorial Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-[#F7F8F6] rounded-2xl p-7 sm:p-10 border border-[#E8EBE7] soft-card-shadow relative gsap-reveal-card">

          <div className="flex items-center gap-1 mb-4 text-[#202522]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#202522]" />
            ))}
          </div>

          <blockquote className="text-base sm:text-lg text-[#202522] leading-relaxed font-serif italic mb-6">
            "{current.quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[#E8EBE7]">
            <div className="flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-11 h-11 rounded-full object-cover border border-[#E8EBE7]"
              />
              <div>
                <h4 className="font-bold text-xs text-[#202522]">{current.name}</h4>
                <p className="text-[11px] text-[#737873]">{current.role} • {current.studio}</p>
                <p className="text-[10px] text-[#648B72] font-semibold">{current.eventsCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg bg-white hover:bg-slate-50 text-[#202522] border border-[#E8EBE7] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg bg-white hover:bg-slate-50 text-[#202522] border border-[#E8EBE7] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
