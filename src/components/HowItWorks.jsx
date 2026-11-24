import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks({ onOpenAuthModal }) {
  const steps = [
    {
      stepNum: '01',
      name: 'Sign Up',
      description: 'Sign up using phone number or email ID and register your face by clicking a selfie',
      icon: '/images/face-recognition.png',
      badge: 'Quick 30s Setup'
    },
    {
      stepNum: '02',
      name: 'Join and Create Groups',
      description: 'Join and create private or public event groups and upload photos to share them with people present there!',
      icon: '/images/calendar1.png',
      badge: 'Zero Compression'
    },
    {
      stepNum: '03',
      name: 'Share Memories',
      description: 'Anecdotes are sweeter when they’re shared! Upload photos from multiple sources to take a trip down memory lane with people you’ve experienced them with.',
      icon: '/images/photos1.png',
      badge: 'Instant AI Delivery'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F7F8F6] border-y border-[#E8EBE7] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#648B72]/5 blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#202522]/3 blur-[100px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2-COLUMN LAYOUT MATCHING KWIKPIC EXACT STRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT COLUMN: VISUAL SHOWCASE GRAPHIC (get-started-img) */}
          <div className="lg:col-span-6 flex justify-center items-center gsap-fade-up">
            <div className="relative w-full max-w-[540px] flex items-center justify-center">
              
              {/* Subtle ambient backdrop circle behind mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#648B72]/15 via-white/80 to-[#648B72]/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none -z-10" />

              {/* Reference Visual Illustration Mockup */}
              <div className="w-full relative rounded-2xl overflow-hidden p-2 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/images/get-started.png"
                  alt="How Lumina Works - Mobile App & Photo Sharing Showcase"
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(32,37,34,0.12)] mx-auto"
                  loading="lazy"
                />

                {/* Floating badge for added polish */}
                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8EBE7] shadow-lg text-[11px] font-semibold text-[#202522]">
                  <span className="w-2 h-2 rounded-full bg-[#648B72] animate-pulse"></span>
                  <span>99.9% Facial Recognition Match</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: STEP-BY-STEP GET STARTED WORKFLOW (get-started-info) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">

            {/* Header Block matching Kwikpic */}
            <div className="space-y-2.5 gsap-fade-up">
              <span className="text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#648B72] block">
                HOW LUMINA WORKS?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#202522] tracking-tight leading-[1.18] gsap-reveal-heading">
                Get Started with Lumina
              </h2>

              {/* Accent Underline Bar */}
              <div className="w-14 h-1 bg-[#648B72] rounded-full my-3 gsap-draw-line" />

              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed max-w-lg gsap-reveal-text">
                A simple 3-step workflow designed to deliver thousands of event photos with zero friction for photographers and attendees.
              </p>
            </div>

            {/* Sequential 3-Step Cards with Floating Icons & Connecting Connectors */}
            <div className="space-y-5 pt-2 gsap-stagger-group relative">
              {steps.map((st, idx) => {
                const isLast = idx === steps.length - 1;

                return (
                  <div key={st.stepNum} className="relative flex items-start gap-5 sm:gap-6 group gsap-stagger-item">
                    
                    {/* Vertical Connector Line between steps */}
                    {!isLast && (
                      <div 
                        className="absolute left-[36px] sm:left-[38px] top-[74px] sm:top-[76px] w-[2px] h-[calc(100%-48px)] bg-gradient-to-b from-[#648B72]/40 via-[#E8EBE7] to-[#E8EBE7] -z-0" 
                        aria-hidden="true"
                      />
                    )}

                    {/* Step Icon Container (76px x 76px matching reference) */}
                    <div className="w-[72px] h-[72px] sm:w-[76px] sm:h-[76px] rounded-full bg-white border border-[#E8EBE7] shadow-[1px_4px_16px_rgba(32,37,34,0.08),-1px_-1px_10px_rgba(32,37,34,0.04)] flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#648B72] group-hover:shadow-[0_8px_24px_rgba(100,139,114,0.18)]">
                      <img
                        src={st.icon}
                        alt={st.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Step Info Block */}
                    <div className="flex-1 pt-1.5 space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#648B72] bg-[#648B72]/15 px-2 py-0.5 rounded-md">
                          Step {st.stepNum}
                        </span>
                        <span className="text-[10px] text-[#737873] font-medium hidden sm:inline">
                          • {st.badge}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#202522] tracking-tight group-hover:text-[#648B72] transition-colors">
                        {st.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#737873] leading-relaxed max-w-md">
                        {st.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom CTA trigger button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 gsap-fade-up">
              <button
                onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#202522] hover:bg-[#333A36] transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <span>Get Started with Lumina Free</span>
                <ArrowRight className="w-4 h-4 text-[#E8EBE7]" />
              </button>

              <span className="text-xs text-[#737873] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#648B72]" /> 1,000 Free Photos • No Card Required
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
