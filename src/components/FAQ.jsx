import React, { useState, useEffect } from 'react';
import { faqs } from '../data/content';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

/**
 * Reusable Chat-Pill Conversational FAQ Accordion
 */
export function FaqChatList({ items = [], inactiveBg = 'bg-[#F7F7F7]' }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [items]);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4 gsap-stagger-group">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className="gsap-stagger-item space-y-3 transition-all duration-300">
            {/* QUESTION ROW: Circular '?' Avatar + Rounded Question Pill */}
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full text-left flex items-center gap-3 sm:gap-3.5 cursor-pointer group focus:outline-none"
            >
              {/* Left Circular Question Mark Avatar */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 shadow-xs ${
                  isOpen
                    ? 'bg-[#C62828] text-white border-[#C62828]'
                    : `${inactiveBg} text-[#202020] border-[#E8E8E8] group-hover:border-[#C62828] group-hover:text-[#C62828] group-hover:bg-white`
                }`}
              >
                <span className="font-bold text-sm sm:text-base">?</span>
              </div>

              {/* Horizontal Rounded Question Pill Container */}
              <div
                className={`flex-1 flex items-center justify-between px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border transition-all duration-200 shadow-xs ${
                  isOpen
                    ? 'bg-white border-[#C62828] ring-1 ring-[#C62828]'
                    : `${inactiveBg} hover:bg-white border-[#E8E8E8] hover:border-[#C62828]/50`
                }`}
              >
                <span className="text-xs sm:text-sm font-medium text-[#202020] tracking-wide pr-3">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#666666] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C62828]' : 'group-hover:text-[#C62828]'
                  }`}
                />
              </div>
            </button>

            {/* EXPANDED ANSWER CHAT BUBBLE */}
            {isOpen && (
              <div className="pl-14 sm:pl-14.5 pr-1 sm:pr-4 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="flex-1 p-5 sm:p-6 rounded-[26px] bg-white border border-[#E8E8E8] shadow-[0_10px_30px_rgba(32,32,32,0.06)] text-xs sm:text-sm text-[#666666] leading-relaxed">
                    <p className="font-normal text-[#202020]/90">{faq.a}</p>
                  </div>

                  <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-[#FFF5F5] border border-[#FCEBEC] items-center justify-center text-[#C62828] shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-[#C62828]/15" />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-[#FFFFFF] border-y border-[#E8E8E8] text-[#202020] relative overflow-hidden">
      {/* Subtle ambient warmth radial effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-[#C62828]/4 blur-[140px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#FFF5F5] blur-[100px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 mb-16 gsap-fade-up">
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#C62828]">
            FAQs
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#202020] tracking-tight leading-[1.2] max-w-2xl mx-auto gsap-reveal-heading">
            Common Questions, Clear Answers
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] max-w-lg mx-auto gsap-reveal-text">
            Quick answers on AI face matching, guest QR access, download quality, and studio privacy.
          </p>
        </div>

        {/* CHAT-PILL CONVERSATIONAL FAQ LIST */}
        <FaqChatList items={faqs} />

        {/* BOTTOM SUPPORT CALLOUT */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-[#FAFAFA] border border-[#E8E8E8] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5F5] border border-[#FCEBEC] flex items-center justify-center text-[#C62828] shrink-0 shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm text-[#202020]">Have custom studio requirements or questions?</p>
              <p className="text-xs text-[#666666]">Our support and solutions engineering team responds within 2 hours.</p>
            </div>
          </div>
          <a
            href="mailto:support@lumina.ai"
            className="px-5 py-2.5 bg-[#C62828] hover:bg-[#A61F24] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
