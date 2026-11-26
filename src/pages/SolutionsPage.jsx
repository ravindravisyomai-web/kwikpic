import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { solutionsData } from '../data/solutionsData';
import AndroidDeviceFrame from '../components/AndroidDeviceFrame';
import PhotographerFeatures from '../components/PhotographerFeatures';
import { initGlobalScrollTriggers, ScrollTrigger } from '../utils/gsapScroll';
import { 
  ArrowRight, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function SolutionsPage({ onOpenAuthModal, onOpenImageModal }) {
  const { slug } = useParams();
  const data = solutionsData[slug] || solutionsData['photographers'];
  const [openFaq, setOpenFaq] = React.useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    const cleanup = initGlobalScrollTriggers(pageRef);
    return () => {
      cleanup();
      ScrollTrigger.refresh();
    };
  }, [slug]);

  return (
    <div ref={pageRef} className="pt-24 pb-20 bg-[#FFFFFF] min-h-screen overflow-hidden">
      
      {/* 1. BREADCRUMBS & HERO */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA] border-b border-[#E8E8E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-[#666666] mb-6 gsap-fade-up">
            {data.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.name}>
                {idx > 0 && <span>/</span>}
                {idx === data.breadcrumbs.length - 1 ? (
                  <span className="text-[#202020] font-semibold">{crumb.name}</span>
                ) : (
                  <Link to={crumb.href} className="hover:text-[#C62828] transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F5] border border-[#FCEBEC] text-[#C62828] text-xs font-semibold shadow-xs gsap-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]"></span>
                <span>{data.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#202020] tracking-tight leading-[1.12] gsap-fade-up">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl gsap-fade-up">
                {data.heroSubline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 gsap-fade-up">
                <button
                  onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <span>Start Free with Lumina</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/90" />
                </button>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#202020] bg-white border border-[#E8E8E8] hover:border-[#C62828] hover:text-[#C62828] hover:bg-[#FFF5F5] transition-all cursor-pointer shadow-xs"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              <div className="pt-6 border-t border-[#E8E8E8] grid grid-cols-3 gap-4 gsap-stagger-group">
                {data.stats.map((s, i) => (
                  <div key={i} className="gsap-stagger-item">
                    <div className="text-xl sm:text-2xl font-bold text-[#202020]">{s.value}</div>
                    <div className="text-[11px] text-[#666666]">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>

            <div className="lg:col-span-5 relative gsap-fade-up">
              <div className="rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-[0_20px_50px_-15px_rgba(32,32,32,0.12)] aspect-[4/3] bg-white">
                <img 
                  src={data.heroImage} 
                  alt={data.title}
                  className="w-full h-full object-cover gsap-reveal-image"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. INDUSTRY CHALLENGES */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
              The Core Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">
              Why Traditional Photo Distribution Fails
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-stagger-group">
            {data.challenges.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] space-y-3 gsap-stagger-item transition-transform duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] border border-[#FCEBEC] flex items-center justify-center font-bold text-xs text-[#C62828]">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-[#202020]">{c.title}</h3>
                <p className="text-xs text-[#666666] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PLATFORM CAPABILITIES */}
      <section className="py-20 bg-[#FAFAFA] border-y border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-2 gsap-fade-up">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
                  Platform Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">
                  Engineered Exactly for {data.title}
                </h2>
              </div>

              <div className="space-y-6 gsap-stagger-group">
                {data.features.map((f, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#E8E8E8] space-y-2 soft-card-shadow gsap-stagger-item">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C62828] bg-[#FFF5F5] border border-[#FCEBEC] px-2 py-0.5 rounded-md">
                      {f.badge}
                    </span>
                    <h4 className="text-sm font-bold text-[#202020]">{f.title}</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center gsap-fade-up">
              <AndroidDeviceFrame className="w-[285px] sm:w-[300px]" time="9:41">
                <div className="p-4 bg-white min-h-[460px] space-y-3.5 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                    <span className="text-xs font-bold text-[#202020]">Lumina Experience</span>
                    <span className="text-[9px] text-[#43866A] font-semibold bg-[#43866A]/10 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] text-[#888888] uppercase font-semibold">Specialized Portal</span>
                    <h5 className="text-xs font-bold text-[#202020]">{data.title} Experience</h5>
                    <p className="text-[10px] text-[#C62828]">Automated guest delivery enabled</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative rounded-xl overflow-hidden aspect-square border border-[#E8E8E8]">
                      <img src={samplePhotos.gallery[0].url} alt="t" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 bg-white/90 text-[8px] font-bold text-[#202020] px-1 rounded shadow-xs">
                        99.4%
                      </span>
                    </div>
                    <div className="relative rounded-xl overflow-hidden aspect-square border border-[#E8E8E8]">
                      <img src={samplePhotos.gallery[1].url} alt="t" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 bg-white/90 text-[8px] font-bold text-[#202020] px-1 rounded shadow-xs">
                        99.8%
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F7F7F7] rounded-xl border border-[#E8E8E8] text-[10px] space-y-1">
                    <div className="flex justify-between font-semibold text-[#202020]">
                      <span>Original RAW Quality:</span>
                      <span className="text-[#43866A]">100% Retained</span>
                    </div>
                    <div className="flex justify-between text-[#666666]">
                      <span>Guest App Download:</span>
                      <span>Zero (Web Browser)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                    className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg shadow-xs hover:bg-[#A61F24] cursor-pointer transition-colors"
                  >
                    Open Live Demo Gallery
                  </button>
                </div>
              </AndroidDeviceFrame>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5. DEDICATED STUDIO OPERATIONS ENGINE (PHOTOGRAPHERS & STUDIOS) */}
      {(slug === 'photographers' || (!slug && data.slug === 'photographers')) && (
        <PhotographerFeatures onOpenAuthModal={onOpenAuthModal} />
      )}

      {/* 4. WORKFLOW PIPELINE */}
      <section id="workflow" className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
              Operational Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">
              How the Solution Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gsap-stagger-group">
            {data.workflow.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] space-y-3 flex flex-col justify-between gsap-stagger-item transition-transform duration-300 hover:-translate-y-1">
                <div className="space-y-2">
                  <span className="text-xs font-black font-serif text-[#C62828]">STEP {st.step}</span>
                  <h4 className="text-sm font-bold text-[#202020]">{st.title}</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">{st.desc}</p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-xs font-bold text-[#202020]">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 bg-[#FAFAFA] border-y border-[#E8E8E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12 gsap-fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 gsap-stagger-group">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`bg-white rounded-xl border overflow-hidden soft-card-shadow gsap-stagger-item transition-colors ${isOpen ? 'border-[#C62828]' : 'border-[#E8E8E8]'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#202020]">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C62828]' : 'text-[#666666]'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#666666] leading-relaxed border-t border-[#E8E8E8] pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. RELATED USE CASES */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#E8E8E8] gsap-fade-up">
            <div>
              <h3 className="text-lg font-bold text-[#202020]">Related Use Cases</h3>
              <p className="text-xs text-[#666666]">Explore specific event scenarios where this solution applies</p>
            </div>
            <Link to="/solutions" className="text-xs font-semibold text-[#C62828] hover:underline flex items-center gap-1">
              <span>View All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 gsap-stagger-group">
            {data.relatedUseCases.map((uc, i) => (
              <Link 
                key={i} 
                to={uc.href}
                className="p-5 rounded-xl border border-[#E8E8E8] bg-[#F7F7F7] hover:bg-white hover:border-[#C62828] transition-all flex items-center justify-between group gsap-stagger-item"
              >
                <span className="font-bold text-xs text-[#202020] group-hover:text-[#C62828] transition-colors">{uc.name}</span>
                <ChevronRight className="w-4 h-4 text-[#C62828] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gsap-fade-up">
          <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-[#FAFAFA] border border-[#E8E8E8] soft-elevated-shadow text-center space-y-5">
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
