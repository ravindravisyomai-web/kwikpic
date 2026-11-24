import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCasesData } from '../data/solutionsData';
import AndroidDeviceFrame from '../components/AndroidDeviceFrame';
import { initGlobalScrollTriggers, ScrollTrigger } from '../utils/gsapScroll';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  QrCode, 
  Camera, 
  Download, 
  ChevronRight, 
  ChevronDown, 
  Layers,
  Heart
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function UseCasesPage({ onOpenAuthModal, onOpenImageModal }) {
  const { slug } = useParams();
  const data = useCasesData[slug] || useCasesData['weddings'];
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
      <section className="py-12 lg:py-16 bg-[#F7F8F6] border-b border-[#E8EBE7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-[#737873] mb-6 gsap-fade-up">
            {data.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.name}>
                {idx > 0 && <span>/</span>}
                {idx === data.breadcrumbs.length - 1 ? (
                  <span className="text-[#202522] font-semibold">{crumb.name}</span>
                ) : (
                  <Link to={crumb.href} className="hover:text-[#202522] transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8EBE7] text-[#648B72] text-xs font-semibold shadow-xs gsap-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[#648B72]"></span>
                <span>{data.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#202522] tracking-tight leading-[1.12] gsap-fade-up">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#737873] leading-relaxed max-w-xl gsap-fade-up">
                {data.heroSubline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 gsap-fade-up">
                <button
                  onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#202522] hover:bg-[#333A36] transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <span>Host Your Event Free</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8EBE7]" />
                </button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#202522] bg-white border border-[#E8EBE7] hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore Workflow</span>
                </a>
              </div>

              <div className="pt-6 border-t border-[#E8EBE7] flex flex-wrap items-center gap-6 text-xs text-[#737873] gsap-fade-up">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#648B72]" />
                  <span>Instant guest photo access</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#648B72]" />
                  <span>Zero mobile app download</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#648B72]" />
                  <span>300 DPI master resolutions</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 relative gsap-fade-up">
              <div className="rounded-2xl overflow-hidden border border-[#E8EBE7] shadow-[0_20px_50px_-15px_rgba(32,37,34,0.12)] aspect-[4/3] bg-white">
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

      {/* 2. CORE EVENT HIGHLIGHTS */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
              Specialized Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202522]">
              Designed For {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-group">
            {data.highlights.map((h, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F7F8F6] border border-[#E8EBE7] space-y-3 flex flex-col justify-between gsap-stagger-item transition-transform duration-300 hover:-translate-y-1">
                <div className="space-y-2">
                  <span className="w-7 h-7 rounded-lg bg-white border border-[#E8EBE7] flex items-center justify-center font-bold text-xs text-[#648B72]">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-bold text-[#202522]">{h.title}</h3>
                  <p className="text-xs text-[#737873] leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ANDROID EXPERIENCE DEMO */}
      <section className="py-20 bg-[#F7F8F6] border-y border-[#E8EBE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left gsap-fade-up">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
                Guest Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#202522]">
                How Guests Experience {data.title}
              </h2>
              <p className="text-sm text-[#737873] leading-relaxed">
                Whether guests are attending a glamorous wedding ceremony, high-energy festival, or campus graduation, they can point their native Android camera at any table standee or projection screen to view all of their moments in 2 seconds.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E8EBE7]">
                  <Check className="w-4 h-4 text-[#648B72] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[#202522]">Zero App Download Barrier: </span>
                    <span className="text-[#737873]">Works smoothly on Android Chrome and mobile browsers without requiring App Store logins.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E8EBE7]">
                  <Check className="w-4 h-4 text-[#648B72] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[#202522]">Original File Clarity: </span>
                    <span className="text-[#737873]">Download high-resolution master files directly to phone gallery without compression artifacts.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center gsap-fade-up">
              <AndroidDeviceFrame className="w-[285px] sm:w-[300px]" time="9:41">
                <div className="p-4 bg-white min-h-[460px] space-y-3.5 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                    <span className="text-xs font-bold text-[#202522]">Lumina Live</span>
                    <span className="text-[9px] text-[#648B72] font-semibold bg-[#648B72]/15 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] text-[#737873] uppercase font-semibold">Curated Album</span>
                    <h5 className="text-xs font-bold text-[#202522]">{data.title}</h5>
                    <p className="text-[10px] text-[#648B72]">38 photos matched of you</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <img src={samplePhotos.aiMatchingDemo.matchedPhotos[0].url} alt="t" className="rounded-xl aspect-square object-cover border border-[#E8EBE7]" />
                    <img src={samplePhotos.aiMatchingDemo.matchedPhotos[1].url} alt="t" className="rounded-xl aspect-square object-cover border border-[#E8EBE7]" />
                  </div>

                  <button
                    onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                    className="w-full py-2 bg-[#202522] text-white text-[10px] font-semibold rounded-lg shadow-xs hover:bg-[#333A36]"
                  >
                    Save All to Camera Roll
                  </button>
                </div>
              </AndroidDeviceFrame>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WORKFLOW */}
      <section id="how-it-works" className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 gsap-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
              Connected Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202522]">
              4 Steps to Seamless Event Sharing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gsap-stagger-group">
            {data.workflow.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F7F8F6] border border-[#E8EBE7] space-y-3 flex flex-col justify-between gsap-stagger-item transition-transform duration-300 hover:-translate-y-1">
                <div className="space-y-2">
                  <span className="text-xs font-black font-serif text-[#648B72]">STEP {st.step}</span>
                  <h4 className="text-sm font-bold text-[#202522]">{st.title}</h4>
                  <p className="text-xs text-[#737873] leading-relaxed">{st.desc}</p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E8EBE7] flex items-center justify-center text-xs font-bold text-[#202522]">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="py-20 bg-[#F7F8F6] border-y border-[#E8EBE7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12 gsap-fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202522]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 gsap-stagger-group">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-[#E8EBE7] overflow-hidden soft-card-shadow gsap-stagger-item">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#202522]">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#737873] shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#202522]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#737873] leading-relaxed border-t border-[#E8EBE7] pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. RELATED SOLUTIONS */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#E8EBE7] gsap-fade-up">
            <div>
              <h3 className="text-lg font-bold text-[#202522]">Related Industry Solutions</h3>
              <p className="text-xs text-[#737873]">Explore who uses Lumina to power this use case</p>
            </div>
            <Link to="/solutions" className="text-xs font-semibold text-[#648B72] hover:underline flex items-center gap-1">
              <span>View All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 gsap-stagger-group">
            {data.relatedSolutions.map((sol, i) => (
              <Link 
                key={i} 
                to={sol.href}
                className="p-5 rounded-xl border border-[#E8EBE7] bg-[#F7F8F6] hover:bg-white hover:border-[#202522] transition-all flex items-center justify-between group gsap-stagger-item"
              >
                <span className="font-bold text-xs text-[#202522] group-hover:text-[#648B72] transition-colors">{sol.name}</span>
                <ChevronRight className="w-4 h-4 text-[#737873] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gsap-fade-up">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#202522] text-white text-center space-y-5">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Create an Unforgettable Event Memory Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Start with 1,000 free photos. Instant QR code generation. Zero guest app downloads.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                className="px-7 py-3 rounded-xl bg-white text-[#202522] text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer shadow-xs"
              >
                Host Your Event Free
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
