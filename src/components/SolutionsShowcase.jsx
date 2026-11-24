import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Heart, 
  Building2, 
  GraduationCap, 
  PartyPopper, 
  Trophy, 
  Music, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { solutionsData, useCasesData } from '../data/solutionsData';

export default function SolutionsShowcase() {
  const [activeTab, setActiveTab] = useState('industries'); // 'industries' | 'events'

  const industries = Object.values(solutionsData);
  const eventTypes = Object.values(useCasesData);

  return (
    <section id="solutions-showcase" className="py-24 bg-[#FAFBF9] border-y border-[#E8EBE7] relative overflow-hidden">
      
      {/* Subtle ambient sage glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#648B72]/5 blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 gsap-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8EBE7] text-[#648B72] text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS & USE CASES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#202522] tracking-tight leading-[1.15] gsap-reveal-heading">
            Tailored for Every Scale. <span className="text-[#648B72] font-serif italic font-normal">Engineered for Every Event.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#737873] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            From multi-day destination weddings to high-attendance corporate summits and university graduations, discover workflows built specifically for your audience.
          </p>
        </div>

        {/* 2. CATEGORY TOGGLE (By Industry vs By Event Type) */}
        <div className="flex items-center justify-center mb-12 gsap-fade-up">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-[#E8EBE7] shadow-xs gap-1">
            <button
              onClick={() => setActiveTab('industries')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'industries'
                  ? 'bg-[#202522] text-white shadow-xs'
                  : 'text-[#737873] hover:text-[#202522] hover:bg-[#F7F8F6]'
              }`}
            >
              <Camera className={`w-4 h-4 ${activeTab === 'industries' ? 'text-[#648B72]' : 'text-[#737873]'}`} />
              <span>Solutions by Industry</span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-[#202522] text-white shadow-xs'
                  : 'text-[#737873] hover:text-[#202522] hover:bg-[#F7F8F6]'
              }`}
            >
              <Layers className={`w-4 h-4 ${activeTab === 'events' ? 'text-[#648B72]' : 'text-[#737873]'}`} />
              <span>Solutions by Event Type</span>
            </button>
          </div>
        </div>

        {/* 3. DYNAMIC SHOWCASE CARDS */}
        {activeTab === 'industries' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-group">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/solutions/${ind.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8EBE7] hover:border-[#202522] transition-all flex flex-col justify-between soft-card-shadow hover:-translate-y-1.5 gsap-stagger-item"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#F7F8F6] relative">
                    <img
                      src={ind.heroImage}
                      alt={ind.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#202522] px-2 py-0.5 rounded shadow-xs border border-[#E8EBE7]">
                      Industry
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#202522] group-hover:text-[#648B72] transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#737873] leading-relaxed line-clamp-2">
                      {ind.heroSubline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#E8EBE7]/80 mt-3 flex items-center justify-between text-xs font-bold text-[#202522]">
                  <span>Explore Workflow</span>
                  <ChevronRight className="w-4 h-4 text-[#648B72] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger-group">
            {eventTypes.slice(0, 6).map((evt) => (
              <Link
                key={evt.slug}
                to={`/use-cases/${evt.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8EBE7] hover:border-[#202522] transition-all flex flex-col justify-between soft-card-shadow hover:-translate-y-1.5 gsap-stagger-item"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-[#F7F8F6] relative">
                    <img
                      src={evt.heroImage}
                      alt={evt.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#202522] px-2 py-0.5 rounded shadow-xs border border-[#E8EBE7]">
                      Use Case
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#202522] group-hover:text-[#648B72] transition-colors leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#737873] leading-relaxed line-clamp-2">
                      {evt.heroSubline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#E8EBE7]/80 mt-3 flex items-center justify-between text-xs font-bold text-[#202522]">
                  <span>View Event Case</span>
                  <ChevronRight className="w-4 h-4 text-[#648B72] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* 4. BOTTOM HUB NAVIGATION BANNER */}
        <div className="mt-14 text-center gsap-fade-up">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F7F8F6] border border-[#E8EBE7] text-xs font-bold text-[#202522] hover:text-[#648B72] transition-all shadow-xs hover:-translate-y-0.5"
          >
            <span>Explore All 10 Solutions & Use Cases in Solutions Hub</span>
            <ArrowRight className="w-4 h-4 text-[#648B72]" />
          </Link>
        </div>

      </div>
    </section>
  );
}