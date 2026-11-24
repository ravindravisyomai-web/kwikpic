import React, { useState } from 'react';
import AndroidDeviceFrame from './AndroidDeviceFrame';
import {
  Sparkles,
  UploadCloud,
  Camera,
  Check,
  ArrowRight,
  ShieldCheck,
  Download,
  Heart,
  Scan,
  Search,
  Layers,
  CheckCircle2,
  ChevronRight,
  ZoomIn
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function AiFaceRecognition({ onOpenAuthModal, onOpenImageModal }) {
  // Interactive Active Stage: 0 (Upload Selfie) | 1 (Finding Matches) | 2 (Matching Results) | 3 (Personal Gallery)
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      phase: 'EVENT UPLOAD',
      title: 'Every Moment, Organized.',
      description: 'Photographers upload event photographs in bulk, creating an organized collection ready for discovery.',
      icon: UploadCloud,
    },
    {
      step: '02',
      phase: 'GUEST SELFIE',
      title: 'One Selfie Is All It Takes.',
      description: 'Guests upload a selfie through their browser without installing another application.',
      icon: Camera,
    },
    {
      step: '03',
      phase: 'INTELLIGENT MATCHING',
      title: 'Your Moments, Recognized.',
      description: 'AI face recognition helps identify matching photographs from the event collection.',
      icon: Sparkles,
    },
    {
      step: '04',
      phase: 'PERSONAL GALLERY',
      title: 'All Your Memories in One Place.',
      description: 'Explore your matched photographs in a personalized gallery and access available downloads.',
      icon: Layers,
    },
  ];

  return (
    <section id="ai-matching" className="py-24 bg-[#F7F8F6] border-y border-[#E8EBE7] relative overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/80 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 gsap-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8EBE7] text-[#648B72] text-xs font-semibold shadow-[0_1px_2px_rgba(32,37,34,0.02)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI FACE RECOGNITION TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#202522] tracking-tight leading-[1.12] gsap-reveal-heading">
            Find Your Photos <span className="font-serif italic font-normal text-[#648B72]">Without Searching.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#737873] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            Thousands of event moments. One simple selfie. Discover the photographs that capture your memories, instantly and effortlessly.
          </p>
        </div>

        {/* 2. EDITORIAL COMPOSITION: CONNECTED 4-STEP TIMELINE ON LEFT + INTERACTIVE SHOWCASE ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: CONNECTED INTERACTIVE TIMELINE */}
          <div className="lg:col-span-5 space-y-3 relative gsap-stagger-group">
            <div className="text-xs font-bold uppercase tracking-wider text-[#737873] mb-4 flex items-center justify-between">
              <span>Interactive Workflow Journey</span>
              <span className="text-[#648B72] font-semibold">Click to Preview</span>
            </div>

            {stages.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStage === idx;

              return (
                <div
                  key={st.step}
                  onClick={() => setActiveStage(idx)}
                  className={`gsap-stagger-item relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-white border-[#202522] shadow-[0_10px_30px_-10px_rgba(32,37,34,0.08)] ring-1 ring-[#202522]'
                    : 'bg-white/60 hover:bg-white border-[#E8EBE7] hover:border-[#CBD5E1]'
                    }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Badge with active indicator */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${isActive
                        ? 'bg-[#202522] text-white'
                        : 'bg-[#F7F8F6] text-[#737873] border border-[#E8EBE7]'
                        }`}
                    >
                      {st.step}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#648B72]">
                          {st.phase}
                        </span>
                        {isActive && (
                          <span className="flex items-center gap-1 text-[10px] font-semibold text-[#202522]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#648B72] animate-pulse"></span>
                            Active
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-[#202522]">
                        {st.title}
                      </h4>

                      <p className="text-xs text-[#737873] leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: INTERACTIVE DEMONSTRATION WORKSPACE */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E8EBE7] p-5 sm:p-7 soft-elevated-shadow relative min-h-[510px] flex flex-col justify-between">

              {/* Demonstration Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EBE7] text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#202522]">
                    Stage {activeStage + 1} of 4: {stages[activeStage].title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {[0, 1, 2, 3].map((stepIdx) => (
                    <button
                      key={stepIdx}
                      onClick={() => setActiveStage(stepIdx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeStage === stepIdx
                        ? 'w-7 bg-[#202522]'
                        : 'bg-[#E8EBE7] hover:bg-[#CBD5E1]'
                        }`}
                      aria-label={`Go to stage ${stepIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* DYNAMIC STAGE CONTENT AREA */}
              <div className="py-5 flex-1 flex flex-col justify-center">

                {/* ---------------------------------------------------- */}
                {/* STAGE 0: EVENT UPLOAD */}
                {/* ---------------------------------------------------- */}
                {activeStage === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="border-2 border-dashed border-[#E8EBE7] rounded-2xl p-6 bg-[#FAFBF9] text-center space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E8EBE7] flex items-center justify-center mx-auto text-[#648B72] shadow-xs">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <h5 className="text-sm font-bold text-[#202522]">Uploading Master Event Photographs</h5>
                      <p className="text-xs text-[#737873]">Parallel ingestion for bulk high-resolution event shots</p>

                      <div className="max-w-xs mx-auto pt-2 space-y-1">
                        <div className="flex justify-between text-[11px] font-semibold text-[#202522]">
                          <span>Folder: Udaipur_Sangeet_RAW/</span>
                          <span className="text-[#648B72]">1,420 / 2,840</span>
                        </div>
                        <div className="w-full bg-[#E8EBE7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#202522] h-full w-[50%] rounded-full transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2.5 pt-1">
                      {samplePhotos.gallery.slice(0, 4).map((p, i) => (
                        <div key={i} className="relative rounded-lg overflow-hidden aspect-[4/3] border border-[#E8EBE7] bg-[#F7F8F6]">
                          <img src={p.url} alt="Uploaded thumbnail" className="w-full h-full object-cover" />
                          <span className="absolute top-1 right-1 bg-white/90 text-[8px] font-bold text-[#202522] px-1 rounded shadow-xs">
                            RAW
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* STAGE 1: GUEST SELFIE ON AUTHENTIC ANDROID PHONE */}
                {/* ---------------------------------------------------- */}
                {activeStage === 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in duration-200">
                    <AndroidDeviceFrame className="w-64 sm:w-[260px]" time="9:41">
                      <div className="p-4 space-y-3 bg-white text-left">
                        <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                          <span className="text-xs font-bold text-[#202522]">Selfie Verification</span>
                          <span className="text-[9px] text-[#648B72] font-semibold bg-[#648B72]/15 px-2 py-0.5 rounded-full">
                            Camera Active
                          </span>
                        </div>

                        {/* Selfie Preview Screen */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#E8EBE7] bg-[#FAFBF9]">
                          <img
                            src={samplePhotos.aiMatchingDemo.guestSelfie}
                            alt="Guest selfie capture"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur-xs p-2 rounded-xl border border-[#E8EBE7] text-center">
                            <p className="text-[10px] font-bold text-[#202522]">Portrait Captured</p>
                            <p className="text-[9px] text-[#737873]">Zero app download required</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveStage(2)}
                          className="w-full py-2 bg-[#202522] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <span>Discover My Photos</span>
                          <ArrowRight className="w-3 h-3 text-[#E8EBE7]" />
                        </button>
                      </div>
                    </AndroidDeviceFrame>

                    <div className="max-w-xs space-y-2 text-left">
                      <span className="text-[10px] font-bold text-[#648B72] uppercase tracking-wider">Browser Simplicity</span>
                      <h5 className="text-sm font-bold text-[#202522]">No App Download Required</h5>
                      <p className="text-xs text-[#737873] leading-relaxed">
                        Guests open the link directly in their native smartphone browser, grant 1-time camera permission, and take a quick portrait.
                      </p>
                      <button
                        onClick={() => setActiveStage(2)}
                        className="text-xs font-bold text-[#648B72] hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Next: Run Match Simulation</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* STAGE 2: INTELLIGENT MATCHING */}
                {/* ---------------------------------------------------- */}
                {activeStage === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#FAFBF9] p-4 rounded-2xl border border-[#E8EBE7]">

                      {/* Reference Selfie */}
                      <div className="sm:col-span-4 text-center p-3 bg-white rounded-xl border border-[#E8EBE7] shadow-xs">
                        <img
                          src={samplePhotos.aiMatchingDemo.guestSelfie}
                          alt="Selfie"
                          className="w-20 h-20 rounded-xl mx-auto object-cover border border-[#648B72] mb-1.5"
                        />
                        <p className="text-xs font-bold text-[#202522]">{samplePhotos.aiMatchingDemo.guestName}</p>
                        <p className="text-[10px] text-[#737873]">Reference Portrait</p>
                      </div>

                      <div className="sm:col-span-1 hidden sm:flex justify-center text-[#648B72]">
                        <ArrowRight className="w-5 h-5 text-[#648B72]" />
                      </div>

                      {/* Matching Target Photos */}
                      <div className="sm:col-span-7 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-[#202522]">Event Stream Comparison</span>
                          <span className="text-[#648B72] font-semibold text-[11px]">38 Matches Identified</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {samplePhotos.aiMatchingDemo.matchedPhotos.slice(0, 3).map((match, i) => (
                            <div key={i} className="relative rounded-lg overflow-hidden aspect-square border-2 border-[#648B72] shadow-xs">
                              <img src={match.url} alt="Match" className="w-full h-full object-cover" />
                              <div className="absolute top-1 right-1 bg-white text-[#202522] text-[8px] font-bold px-1 rounded shadow-xs">
                                {match.confidence}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#E8EBE7] flex items-center justify-between text-xs text-[#737873]">
                      <span>Facial landmarks accurately mapped across varied lighting and candid angles.</span>
                      <button
                        onClick={() => setActiveStage(3)}
                        className="text-[#202522] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open Personal Gallery</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* STAGE 3: PERSONAL GALLERY */}
                {/* ---------------------------------------------------- */}
                {activeStage === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                      <div>
                        <h5 className="text-xs font-bold text-[#202522]">Ananya’s Curated Event Moments</h5>
                        <p className="text-[11px] text-[#737873]">38 High-Resolution Photographs ready to save</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenAuthModal('signup')}
                          className="px-3 py-1.5 bg-[#202522] text-white text-xs font-semibold rounded-lg hover:bg-[#333A36] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download All (HD)</span>
                        </button>
                      </div>
                    </div>

                    {/* Personal Matched Masonry Preview */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {samplePhotos.aiMatchingDemo.matchedPhotos.map((p, idx) => (
                        <div
                          key={idx}
                          onClick={() => onOpenImageModal && onOpenImageModal(p)}
                          className="group relative rounded-xl overflow-hidden aspect-square border border-[#E8EBE7] bg-[#F7F8F6] cursor-pointer"
                        >
                          <img src={p.url} alt="Photo" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-white text-[10px]">
                            <span className="font-semibold">{p.tag}</span>
                            <span className="text-[9px] text-slate-300">{p.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-center text-xs text-[#737873] pt-1">
                      Photographs preserve full EXIF data and original camera sensor clarity.
                    </p>
                  </div>
                )}

              </div>

              {/* 3. SUBTLE PRIVACY AND TRUST NOTE */}
              <div className="pt-3 border-t border-[#E8EBE7] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#737873]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#648B72]" />
                  <span>Your selfies are used for photo matching and handled according to the platform's privacy policy.</span>
                </div>
                <button
                  onClick={() => onOpenAuthModal('signup')}
                  className="font-semibold text-[#202522] hover:text-[#648B72] transition-colors cursor-pointer"
                >
                  Start Discovery Free →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
