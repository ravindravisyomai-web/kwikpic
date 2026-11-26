import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import { solutionsData, useCasesData } from '../data/solutionsData';
import { initGlobalScrollTriggers, ScrollTrigger } from '../utils/gsapScroll';

export default function SolutionsHub({ onOpenAuthModal }) {
  const industries = Object.values(solutionsData);
  const eventTypes = Object.values(useCasesData);
  const hubRef = useRef(null);

  useEffect(() => {
    const cleanup = initGlobalScrollTriggers(hubRef);
    return () => {
      cleanup();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={hubRef} className="pt-24 pb-20 bg-[#FFFFFF] min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 lg:py-20 bg-[#FAFAFA] border-b border-[#E8E8E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F5] border border-[#FCEBEC] text-[#C62828] text-xs font-semibold shadow-xs gsap-fade-up">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS FOR EVERY MOMENT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#202020] tracking-tight leading-[1.12] gsap-fade-up">
            One Platform. Every Event. <span className="font-serif italic font-normal text-[#C62828]">Every Memory.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed gsap-fade-up">
            Whether you are a professional photographer, wedding studio, business, or event organizer, Lumina helps make event photo sharing a more seamless experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 gsap-fade-up">
            <button
              onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/90" />
            </button>
            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#202020] bg-white border border-[#E8E8E8] hover:border-[#C62828] hover:text-[#C62828] hover:bg-[#FFF5F5] transition-all cursor-pointer shadow-xs"
            >
              <span>Explore Solutions</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE BY INDUSTRY */}
      <section id="industries" className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
              Customer Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight">
              Solutions by Industry
            </h2>
            <p className="text-sm text-[#666666]">
              Tailored workflows engineered specifically for your professional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-group">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="group bg-[#F7F7F7] rounded-2xl overflow-hidden border border-[#E8E8E8] hover:border-[#C62828] transition-all flex flex-col justify-between soft-card-shadow hover:-translate-y-1 gsap-stagger-item"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-white relative">
                    <img
                      src={ind.heroImage}
                      alt={ind.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 text-[10px] font-bold text-[#202020] px-2 py-0.5 rounded shadow-xs border border-[#E8E8E8]">
                      Industry
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#202020] group-hover:text-[#C62828] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                      {ind.heroSubline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-[#E8E8E8] mt-1 flex items-center justify-between text-xs font-bold text-[#202020] group-hover:text-[#C62828] transition-colors">
                  <span>Explore Solution</span>
                  <ChevronRight className="w-4 h-4 text-[#C62828] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY EVENT TYPE */}
      <section className="py-20 bg-[#FAFAFA] border-y border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
              Event Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight">
              Solutions by Event
            </h2>
            <p className="text-sm text-[#666666]">
              From intimate family milestones to multi-thousand attendee summits and stadiums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger-group">
            {eventTypes.map((evt) => (
              <Link
                key={evt.slug}
                to={`/use-cases/${evt.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] hover:border-[#C62828] transition-all flex flex-col justify-between soft-card-shadow hover:-translate-y-1 gsap-stagger-item"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-[#F7F7F7] relative">
                    <img
                      src={evt.heroImage}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 text-[10px] font-bold text-[#202020] px-2 py-0.5 rounded shadow-xs border border-[#E8E8E8]">
                      Event Use Case
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#202020] group-hover:text-[#C62828] transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                      {evt.heroSubline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-[#E8E8E8] mt-1 flex items-center justify-between text-xs font-bold text-[#202020] group-hover:text-[#C62828] transition-colors">
                  <span>View Event Workflow</span>
                  <ChevronRight className="w-4 h-4 text-[#C62828] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW LUMINA WORKS OVERVIEW */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
              Seamless Workflow
            </span>
            <h2 className="text-3xl font-bold text-[#202020]">
              How Lumina Works for Every Gathering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gsap-stagger-group">
            {[
              { num: '01', title: 'Create Event Gallery', desc: 'Setup event title, branding, watermark, and folders in 60s.' },
              { num: '02', title: 'Bulk Photo Upload', desc: 'Direct-to-cloud upload of RAW and high-res JPEG files.' },
              { num: '03', title: 'Instant QR Code Access', desc: 'Place branded acrylic standees for guests to scan on-site.' },
              { num: '04', title: 'Automated Discovery', desc: 'Guests snap a 2-second selfie and receive all their photos instantly.' },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] space-y-3 flex flex-col justify-between gsap-stagger-item transition-transform duration-300 hover:-translate-y-1">
                <div className="space-y-2">
                  <span className="text-xs font-serif font-black text-[#C62828]">STEP {s.num}</span>
                  <h4 className="text-sm font-bold text-[#202020]">{s.title}</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">{s.desc}</p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center font-bold text-xs text-[#202020]">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gsap-fade-up">
          <div className="relative overflow-hidden p-8 sm:p-14 rounded-3xl bg-[#FAFAFA] border border-[#E8E8E8] soft-elevated-shadow text-center space-y-5">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C62828] to-transparent opacity-80" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#202020] tracking-tight">
              Ready to Upgrade Your Photo Delivery?
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] max-w-lg mx-auto">
              Get started with 1,000 free photos. No credit card required. Setup your first event in 60 seconds.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                className="px-7 py-3 rounded-xl bg-[#C62828] hover:bg-[#A61F24] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Start Free Account
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
