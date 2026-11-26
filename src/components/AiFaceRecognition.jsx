import React, { useState, useEffect } from 'react';
import AndroidDeviceFrame from './AndroidDeviceFrame';
import {
  QrCode,
  ArrowRight,
  Download,
  Check,
  Camera,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function AiFaceRecognition({ onOpenAuthModal, onOpenImageModal }) {
  // Active Screen / Step: 0 (Venue QR) | 1 (Selfie Capture) | 2 (AI Matching) | 3 (Full Quality Save)
  const [activeStep, setActiveStep] = useState(0);
  const [standeeHovered, setStandeeHovered] = useState(false);

  const guestSteps = [
    {
      num: '01',
      title: 'Scan Venue QR Code',
      description: 'Guests point their phone camera at a table standee or banner to open the gallery—no app install needed.',
      screenIndex: 0
    },
    {
      num: '02',
      title: 'Take a 2-Second Selfie',
      description: 'Capture a quick selfie right inside Chrome or Safari with zero account registration.',
      screenIndex: 1
    },
    {
      num: '03',
      title: 'AI Matches Your Photos',
      description: 'Our vision engine filters thousands of event shots in under 3 seconds to assemble your personal gallery.',
      screenIndex: 2
    },
    {
      num: '04',
      title: 'Save in Full Quality',
      description: 'Browse matched moments and download full-resolution favorites straight to your phone.',
      screenIndex: 3
    }
  ];

  // Automatic 4-Second Progression Timer (0 -> 1 -> 2 -> 3 -> 0), respecting reduced motion
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeStep]);

  const handleSelectStep = (index) => {
    setActiveStep(index);
  };

  return (
    <section
      id="ai-matching"
      className="py-20 sm:py-24 bg-[#FFFFFF] relative overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[560px] h-[380px] bg-[#FFF5F5] blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 gsap-fade-up">
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#C62828]">
            Guest Photo Discovery
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#202020] tracking-tight leading-[1.12] gsap-reveal-heading">
            One Scan.{' '}
            <span className="font-serif italic font-normal text-[#C62828]">
              Every Moment Found.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            Guests scan a venue QR standee, take a quick selfie in their browser, and unlock their personal photos in full resolution.
          </p>
        </div>

        {/* 2. UNIFIED 3-COLUMN SHOWCASE: QR STANDEE (LEFT) | ANDROID PHONE (CENTER) | 4-STEP CARDS (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative">
          
          {/* LEFT: INTERACTIVE ACRYLIC QR STANDEE */}
          <div className="lg:col-span-3 flex flex-col items-center text-center gsap-fade-up">
            <div
              role="button"
              tabIndex={0}
              aria-label="Preview QR Standee scan step"
              onMouseEnter={() => setStandeeHovered(true)}
              onMouseLeave={() => setStandeeHovered(false)}
              onClick={() => handleSelectStep(0)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectStep(0);
                }
              }}
              className={`w-64 max-w-full bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeStep === 0 || standeeHovered
                  ? 'border-[#C62828] shadow-[0_20px_45px_-12px_rgba(198,40,40,0.14)] -translate-y-1 ring-1 ring-[#C62828]'
                  : 'border-[#E8E8E8] soft-elevated-shadow'
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-[#202020] pb-2 border-b border-[#E8E8E8]/80">
                AARAV & MEERA
              </div>

              {/* QR Code Container with Laser Scanning Beam during Step 01 */}
              <div className="my-4 p-4 bg-[#F7F7F7] rounded-2xl border border-[#E8E8E8] relative overflow-hidden">
                <QrCode
                  className={`w-32 h-32 mx-auto text-[#202020] transition-transform duration-300 ${
                    standeeHovered || activeStep === 0 ? 'scale-105 text-[#C62828]' : ''
                  }`}
                />

                {/* Laser Beam Sweep during Step 01 */}
                {activeStep === 0 && (
                  <div className="absolute inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-[#C62828] to-transparent shadow-[0_0_10px_rgba(198,40,40,0.9)] animate-qr-laser pointer-events-none" />
                )}

                {/* Live Status Badge */}
                {activeStep === 0 && (
                  <div className="absolute inset-x-2 bottom-2 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#C62828] py-1 rounded-lg border border-[#FCEBEC] shadow-xs flex items-center justify-center gap-1.5 animate-in fade-in duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] animate-ping" />
                    <span>Live QR Scanning</span>
                  </div>
                )}

                {activeStep !== 0 && standeeHovered && (
                  <span className="absolute inset-x-3 bottom-2 bg-white/95 text-[10px] font-bold text-[#C62828] py-1 rounded-lg border border-[#FCEBEC] shadow-xs">
                    Preview Step 01
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-[#202020]">Scan for Event Photos</p>
                <p className="text-[10px] text-[#666666]">Works in Chrome & Safari • Zero app</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#C62828]">
                <span className={`w-1.5 h-1.5 rounded-full bg-[#C62828] ${activeStep === 0 ? 'animate-pulse' : ''}`} />
                <span>Table QR Standee</span>
              </div>
            </div>
          </div>

          {/* CENTER: REALISTIC ANDROID SMARTPHONE WITH 4 SYNCHRONIZED LIVE SCREENS */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[#E8E8E8] to-[#C62828]/60" />

            <AndroidDeviceFrame className="w-[285px] sm:w-[300px]" time="9:41">
              <div className="p-4 bg-white min-h-[450px] flex flex-col justify-between text-left select-none">
                
                {/* SCREEN 1: STEP 01 - EVENT GALLERY ACCESS */}
                {activeStep === 0 && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-[#C62828] flex items-center justify-center text-white text-[10px] font-bold">
                          L
                        </div>
                        <span className="text-xs font-bold text-[#202020]">Lumina Gallery</span>
                      </div>
                      <span className="text-[9px] font-semibold text-[#43866A] bg-[#43866A]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" /> QR Verified
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden aspect-[16/9] relative border border-[#E8E8E8]">
                      <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                        alt="Aarav and Meera Wedding Cover"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                        <div>
                          <p className="text-[10px] text-white font-bold">Aarav & Meera Wedding</p>
                          <p className="text-[8px] text-white/80">2,840 photos • Udaipur</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#F7F7F7] rounded-xl border border-[#E8E8E8] space-y-2 text-center">
                      <p className="text-[11px] font-bold text-[#202020]">Find Yourself in 2 Seconds</p>
                      <button
                        onClick={() => handleSelectStep(1)}
                        className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg shadow-xs hover:bg-[#A61F24] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Camera className="w-3 h-3 text-white" />
                        <span>Take Quick Selfie</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {samplePhotos.gallery.slice(0, 3).map((p, idx) => (
                        <img
                          key={idx}
                          src={p.url}
                          alt={p.title}
                          className="rounded-lg aspect-square object-cover border border-[#E8E8E8]"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* SCREEN 2: STEP 02 - SELFIE CAPTURE & FACIAL RECOGNITION */}
                {activeStep === 1 && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                      <span className="text-xs font-bold text-[#202020]">Selfie Registration</span>
                      <span className="text-[9px] text-[#43866A] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#43866A] animate-pulse" /> Front Camera
                      </span>
                    </div>

                    {/* Selfie Preview with Camera Viewfinder Framing & Scan Line */}
                    <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-[#C62828] shadow-xs">
                      <img
                        src={samplePhotos.aiMatchingDemo.guestSelfie}
                        alt="Guest Portrait"
                        className="w-full h-full object-cover"
                      />

                      {/* Viewfinder Corners */}
                      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C62828] rounded-tl pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C62828] rounded-tr pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C62828] rounded-bl pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C62828] rounded-br pointer-events-none" />

                      {/* Moving Face Recognition Scan Line */}
                      <div className="absolute inset-x-3 h-[1.5px] bg-gradient-to-r from-transparent via-[#C62828] to-transparent shadow-[0_0_8px_#C62828] animate-lumina-scan pointer-events-none" />

                      {/* Verified Badge */}
                      <div className="absolute top-2 right-2 bg-[#43866A] text-white p-1 rounded-full shadow-xs">
                        <Check className="w-3 h-3" />
                      </div>

                      <div className="absolute inset-x-3 bottom-2 bg-black/60 backdrop-blur-xs text-[9px] text-white font-medium py-1 px-2 rounded-lg text-center">
                        Face Frame Aligned • 100% Quality
                      </div>
                    </div>

                    <div className="text-center space-y-0.5">
                      <p className="text-xs font-bold text-[#202020]">{samplePhotos.aiMatchingDemo.guestName}</p>
                      <p className="text-[10px] text-[#666666]">Selfie captured via mobile browser • Zero app</p>
                    </div>

                    <button
                      onClick={() => handleSelectStep(2)}
                      className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#A61F24] transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>Scan for Matches →</span>
                    </button>
                  </div>
                )}

                {/* SCREEN 3: STEP 03 - AI PHOTO MATCHING */}
                {activeStep === 2 && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                      <div>
                        <span className="text-xs font-bold text-[#202020]">Your Photos Found</span>
                        <p className="text-[9px] text-[#C62828] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] animate-pulse" />
                          38 Matches Identified
                        </p>
                      </div>
                      <span className="text-[8px] bg-[#FAFAFA] border border-[#E8E8E8] px-2 py-0.5 rounded text-[#666666] font-medium">
                        99.4% Precision
                      </span>
                    </div>

                    {/* Matched Photos Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {samplePhotos.aiMatchingDemo.matchedPhotos.slice(0, 4).map((p, idx) => (
                        <div
                          key={idx}
                          onClick={() => onOpenImageModal && onOpenImageModal(p)}
                          className="group relative rounded-xl overflow-hidden aspect-square border border-[#E8E8E8] cursor-pointer"
                        >
                          <img src={p.url} alt={p.tag} className="w-full h-full object-cover" />
                          <span className="absolute bottom-1 right-1 bg-white/95 text-[8px] font-bold text-[#202020] px-1.5 py-0.5 rounded shadow-xs">
                            {p.confidence}
                          </span>
                          <span className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full bg-white/90 text-[#C62828]">
                            <ZoomIn className="w-2.5 h-2.5" />
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleSelectStep(3)}
                      className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#A61F24] transition-colors"
                    >
                      <Download className="w-3 h-3 text-white" />
                      <span>Proceed to Downloads →</span>
                    </button>
                  </div>
                )}

                {/* SCREEN 4: STEP 04 - FULL QUALITY DOWNLOAD & SAVE */}
                {activeStep === 3 && (
                  <div className="space-y-3.5 animate-in fade-in duration-300 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#43866A]/15 text-[#43866A] flex items-center justify-center mx-auto mt-2 ring-4 ring-[#43866A]/10">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-[#202020]">38 Photos Ready to Save</h5>
                      <p className="text-[10px] text-[#666666]">Original 300 DPI master clarity preserved</p>
                    </div>

                    <div className="p-3 bg-[#F7F7F7] rounded-xl border border-[#E8E8E8] text-left text-[10px] space-y-1.5">
                      <div className="flex justify-between font-semibold text-[#202020]">
                        <span>Destination:</span>
                        <span className="text-[#C62828]">Phone Photos / Cloud</span>
                      </div>
                      <div className="flex justify-between text-[#666666]">
                        <span>Format:</span>
                        <span>Lossless High-Res JPEG</span>
                      </div>
                      <div className="flex justify-between text-[#666666]">
                        <span>Download Size:</span>
                        <span>Full Resolution (Zip)</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                      className="w-full py-2.5 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs cursor-pointer hover:bg-[#A61F24] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-white" />
                      <span>Download All 38 Photos</span>
                    </button>

                    <button
                      onClick={() => handleSelectStep(0)}
                      className="text-[10px] text-[#666666] hover:text-[#C62828] underline cursor-pointer transition-colors"
                    >
                      Restart Walkthrough
                    </button>
                  </div>
                )}

                {/* Bottom Screen Switcher Controls */}
                <div className="pt-2 border-t border-[#E8E8E8] flex items-center justify-between text-[10px] text-[#666666]">
                  <span className="font-medium">Screen {activeStep + 1} of 4</span>
                  
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 3].map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSelectStep(s)}
                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                          activeStep === s ? 'w-4 bg-[#C62828]' : 'w-2 bg-[#E8E8E8] hover:bg-[#D4D4D4]'
                        }`}
                        aria-label={`Show screen ${s + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </AndroidDeviceFrame>
          </div>

          {/* RIGHT: INTERACTIVE 4-STEP JOURNEY WITH AUTOMATIC 4-SECOND PROGRESS */}
          <div className="lg:col-span-4 space-y-2.5 text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#666666] block">
                GUEST EXPERIENCE (CLICK TO PREVIEW)
              </span>

              {/* Status indicator */}
              <span className="text-[11px] font-medium text-[#666666]">
                4s Walkthrough
              </span>
            </div>

            {guestSteps.map((step) => {
              const isCurrent = activeStep === step.screenIndex;

              return (
                <div
                  key={step.num}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isCurrent}
                  onClick={() => handleSelectStep(step.screenIndex)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectStep(step.screenIndex);
                    }
                  }}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#FFF5F5]/70 border-[#C62828] shadow-xs ring-1 ring-[#C62828]'
                      : 'bg-white hover:bg-[#F7F7F7] border-[#E8E8E8]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-xs font-bold font-serif shrink-0 mt-0.5 ${
                        isCurrent ? 'text-[#C62828]' : 'text-[#666666]'
                      }`}
                    >
                      {step.num}
                    </span>

                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#202020]">{step.title}</h4>
                        {isCurrent && (
                          <span className="text-[10px] font-semibold text-[#C62828]">Active</span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#666666] leading-relaxed">{step.description}</p>

                      {/* 4-Second Animated Progress Bar for Active Step */}
                      <div className="w-full bg-[#E8E8E8]/80 h-1 rounded-full mt-2.5 overflow-hidden">
                        {isCurrent ? (
                          <div
                            key={activeStep}
                            className="h-full bg-[#C62828] rounded-full animate-step-progress"
                          />
                        ) : (
                          <div className="h-full w-0" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Privacy & Standee Action */}
            <div className="pt-3 space-y-3">
              <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] text-[11px] text-[#666666]">
                <ShieldCheck className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <span>Selfies are encrypted and used strictly for event photo matching.</span>
              </div>

              <button
                onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C62828] text-white text-xs font-semibold hover:bg-[#A61F24] transition-all shadow-xs cursor-pointer group"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Get Print Standee Templates</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/90 transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
