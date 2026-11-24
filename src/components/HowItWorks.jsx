import React from 'react';
import { Camera, UploadCloud, QrCode, Smile } from 'lucide-react';

export default function HowItWorks({ onOpenAuthModal }) {
  const steps = [
    {
      num: '01',
      title: 'Create an Event',
      desc: 'Set up your event name, date, sub-event folders, and custom watermarking in under 60 seconds.'
    },
    {
      num: '02',
      title: 'Upload Photographs',
      desc: 'Direct drag-and-drop of thousands of high-res JPEGs or camera RAWs with parallel multi-threading.'
    },
    {
      num: '03',
      title: 'Share the QR Code',
      desc: 'Place the generated QR code on event tables, venue banners, or digital invitation cards.'
    },
    {
      num: '04',
      title: 'Guests Discover Photos',
      desc: 'Guests snap a 2-second selfie in their browser and immediately browse their personal memories.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F7F8F6] border-y border-[#E8EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Smooth Entrance */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
            Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202522] tracking-tight gsap-reveal-heading">
            How It Works in 4 Steps
          </h2>
          <p className="text-sm sm:text-base text-[#737873] gsap-reveal-text">
            A clean, predictable process for both professional photographers and event attendees.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline with Staggered Entrance and Smooth Hover */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative gsap-stagger-group">
          {steps.map((st, i) => (
            <div key={i} className="gsap-stagger-item">
              <div className="bg-white rounded-2xl p-6 border border-[#E8EBE7] soft-card-shadow flex flex-col justify-between space-y-4 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-[#202522]">
                <div className="space-y-3">
                  <span className="text-xs font-black font-serif text-[#648B72] tracking-widest">
                    STEP {st.num}
                  </span>
                  <h4 className="text-base font-bold text-[#202522] leading-snug">
                    {st.title}
                  </h4>
                  <p className="text-xs text-[#737873] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-lg bg-[#F7F8F6] border border-[#E8EBE7] flex items-center justify-center text-xs font-bold text-[#202522]">
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
