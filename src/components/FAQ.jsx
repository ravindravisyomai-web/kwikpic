import React, { useState } from 'react';
import { faqs } from '../data/content';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-28 bg-[#FFFFFF] border-y border-[#E8EBE7] text-[#202522] relative overflow-hidden">

      {/* Subtle ambient sage radial glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-[#648B72]/6 blur-[140px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#648B72]/4 blur-[100px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 mb-16 gsap-fade-up">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#F7F8F6] border border-[#E8EBE7] text-[#648B72] text-xs font-semibold tracking-wide shadow-xs">
            <span>FAQs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#202522] tracking-tight leading-[1.2] max-w-2xl mx-auto gsap-reveal-heading">
            Have Questions? Here Are Quick Answers To Some Of The Most Common Queries
          </h2>

          <p className="text-xs sm:text-sm text-[#737873] max-w-lg mx-auto gsap-reveal-text">
            Everything you need to know about AI face matching, guest QR access, and photography studio workflows.
          </p>
        </div>

        {/* CHAT-PILL CONVERSATIONAL FAQ LIST */}
        <div className="space-y-4 gsap-stagger-group">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="gsap-stagger-item space-y-3 transition-all duration-300">

                {/* QUESTION ROW: Circular '?' Avatar + Rounded Question Pill */}
                <div
                  onClick={() => toggle(idx)}
                  className="flex items-center gap-3 sm:gap-3.5 cursor-pointer group"
                >
                  {/* Left Circular Question Mark Avatar */}
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 shadow-xs ${isOpen
                    ? 'bg-[#202522] text-white border-[#202522]'
                    : 'bg-[#F7F8F6] text-[#202522] border-[#E8EBE7] group-hover:border-[#648B72] group-hover:bg-white'
                    }`}>
                    <span className="font-bold text-sm sm:text-base">?</span>
                  </div>

                  {/* Horizontal Rounded Question Pill Container */}
                  <div className={`flex-1 flex items-center justify-between px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border transition-all duration-200 shadow-xs ${isOpen
                    ? 'bg-white border-[#202522] ring-1 ring-[#202522]'
                    : 'bg-[#F7F8F6] hover:bg-white border-[#E8EBE7] hover:border-[#CBD5E1]'
                    }`}>
                    <span className="text-xs sm:text-sm font-medium text-[#202522] tracking-wide pr-3">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#737873] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#648B72]' : 'group-hover:text-[#202522]'
                      }`} />
                  </div>
                </div>

                {/* EXPANDED ANSWER CHAT BUBBLE (Indented below with Message Avatar on right) */}
                {isOpen && (
                  <div className="pl-14 sm:pl-14.5 pr-1 sm:pr-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="flex items-start sm:items-center gap-3">
                      {/* Smooth Rounded Answer Chat Bubble */}
                      <div className="flex-1 p-5 sm:p-6 rounded-[26px] bg-white border border-[#E8EBE7] shadow-[0_10px_30px_rgba(32,37,34,0.06)] text-xs sm:text-sm text-[#525754] leading-relaxed">
                        <p className="font-normal text-[#202522]/90">
                          {faq.a}
                        </p>
                      </div>

                      {/* Right Conversational Message Bubble Avatar */}
                      <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-[#F7F8F6] border border-[#E8EBE7] items-center justify-center text-[#648B72] shrink-0 shadow-xs">
                        <MessageCircle className="w-5 h-5 fill-[#648B72]/15" />
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* BOTTOM SUPPORT CALLOUT */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-[#F7F8F6] border border-[#E8EBE7] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-white border border-[#E8EBE7] flex items-center justify-center text-[#648B72] shrink-0 shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm text-[#202522]">Have custom studio requirements or questions?</p>
              <p className="text-xs text-[#737873]">Our support and solutions engineering team responds within 2 hours.</p>
            </div>
          </div>
          <a
            href="mailto:support@lumina.ai"
            className="px-5 py-2.5 bg-[#202522] hover:bg-[#333A36] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}
