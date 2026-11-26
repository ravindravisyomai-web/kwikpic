import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
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
    <section id="solutions-showcase" className="py-24 bg-[#FAFAFA] border-y border-[#E8E8E8] relative overflow-hidden">
      
      {/* Subtle ambient warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#C62828]/4 blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 gsap-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F5] border border-[#FCEBEC] text-[#C62828] text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS & USE CASES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#202020] tracking-tight leading-[1.15] gsap-reveal-heading">
            Tailored for Every Scale. <span className="text-[#C62828] font-serif italic font-normal">Engineered for Every Event.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            Explore photo-sharing workflows built for photography studios, weddings, corporate events, and campuses.
          </p>
        </div>

        {/* 2. CATEGORY TOGGLE (By Industry vs By Event Type) */}
        <div className="flex items-center justify-center mb-12 gsap-fade-up">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-[#E8E8E8] shadow-xs gap-1">
            <button
              onClick={() => setActiveTab('industries')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'industries'
                  ? 'bg-[#C62828] text-white shadow-xs'
                  : 'text-[#666666] hover:text-[#C62828] hover:bg-[#FFF5F5]'
              }`}
            >
              <Camera className={`w-4 h-4 ${activeTab === 'industries' ? 'text-white' : 'text-[#666666]'}`} />
              <span>Solutions by Industry</span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-[#C62828] text-white shadow-xs'
                  : 'text-[#666666] hover:text-[#C62828] hover:bg-[#FFF5F5]'
              }`}
            >
              <Layers className={`w-4 h-4 ${activeTab === 'events' ? 'text-white' : 'text-[#666666]'}`} />
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
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] hover:border-[#C62828] transition-all flex flex-col justify-between soft-card-shadow hover:-translate-y-1.5 gsap-stagger-item"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#F7F7F7] relative">
                    <img
                      src={ind.heroImage}
                      alt={ind.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#202020] px-2 py-0.5 rounded shadow-xs border border-[#E8E8E8]">
                      Industry
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#202020] group-hover:text-[#C62828] transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                      {ind.heroSubline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-[#E8E8E8]/80 mt-1 flex items-center justify-between text-xs font-bold text-[#202020] group-hover:text-[#C62828] transition-colors">
                  <span>Explore Workflow</span>
                  <ChevronRight className="w-4 h-4 text-[#C62828] transform group-hover:translate-x-1 transition-transform" />
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
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] hover:border-[#C62828] transition-all flex flex-col justify-between soft-card-shadow hover:-translate-y-1.5 gsap-stagger-item"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-[#F7F7F7] relative">
                    <img
                      src={evt.heroImage}
                      alt={evt.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#202020] px-2 py-0.5 rounded shadow-xs border border-[#E8E8E8]">
                      Use Case
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#202020] group-hover:text-[#C62828] transition-colors leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                      {evt.heroSubline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-[#E8E8E8]/80 mt-1 flex items-center justify-between text-xs font-bold text-[#202020] group-hover:text-[#C62828] transition-colors">
                  <span>View Event Case</span>
                  <ChevronRight className="w-4 h-4 text-[#C62828] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* 4. BOTTOM HUB NAVIGATION BANNER */}
        <div className="mt-14 text-center gsap-fade-up">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#FFF5F5] border border-[#E8E8E8] hover:border-[#C62828] text-xs font-bold text-[#202020] hover:text-[#C62828] transition-all shadow-xs hover:-translate-y-0.5"
          >
            <span>Explore All 10 Solutions & Use Cases</span>
            <ArrowRight className="w-4 h-4 text-[#C62828]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
