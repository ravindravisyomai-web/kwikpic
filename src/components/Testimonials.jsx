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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight gsap-reveal-heading">
            Trusted by Professional Photographers
          </h2>
          <p className="text-sm sm:text-base text-[#666666] gsap-reveal-text">
            Real feedback from photography studios and event organizers using Lumina.
          </p>
        </div>

        {/* Clean Editorial Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-[#F7F7F7] rounded-2xl p-7 sm:p-10 border border-[#E8E8E8] soft-card-shadow relative gsap-reveal-card">

          <div className="flex items-center gap-1 mb-4 text-[#C62828]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C62828]" />
            ))}
          </div>

          <blockquote className="text-base sm:text-lg text-[#202020] leading-relaxed font-serif italic mb-6">
            "{current.quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[#E8E8E8]">
            <div className="flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-11 h-11 rounded-full object-cover border border-[#E8E8E8]"
              />
              <div>
                <h4 className="font-bold text-xs text-[#202020]">{current.name}</h4>
                <p className="text-[11px] text-[#666666]">{current.role} • {current.studio}</p>
                <p className="text-[10px] text-[#C62828] font-semibold">{current.eventsCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg bg-white hover:bg-[#FFF5F5] hover:border-[#C62828] text-[#202020] hover:text-[#C62828] border border-[#E8E8E8] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg bg-white hover:bg-[#FFF5F5] hover:border-[#C62828] text-[#202020] hover:text-[#C62828] border border-[#E8E8E8] transition-colors cursor-pointer"
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
