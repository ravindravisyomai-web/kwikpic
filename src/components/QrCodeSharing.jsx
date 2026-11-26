import React, { useState } from 'react';
import AndroidDeviceFrame from './AndroidDeviceFrame';
import {
  QrCode,
  ArrowRight,
  Download,
  Check,
  Camera,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function QrCodeSharing({ onOpenAuthModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [standeeHovered, setStandeeHovered] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const workflowSteps = [
    {
      num: '01',
      title: 'Scan Event QR Standee',
      description: 'Point your camera at acrylic table standees or venue entrance banners to access the gallery in seconds.',
      screenIndex: 0,
    },
    {
      num: '02',
      title: 'Instant Front-Camera Selfie',
      description: 'Capture a quick selfie in your mobile browser with zero app installation or account signup required.',
      screenIndex: 1,
    },
    {
      num: '03',
      title: 'Browse Your Matched Moments',
      description: 'Face matching filters through thousands of event photos to pull together your personal collection.',
      screenIndex: 2,
    },
    {
      num: '04',
      title: '1-Tap Full-Resolution Downloads',
      description: 'Save individual favorites or download your entire memory collection directly to your device storage.',
      screenIndex: 3,
    },
  ];

  const handleDownloadSample = () => {
    setDownloadTriggered(true);
    setTimeout(() => setDownloadTriggered(false), 2500);
    if (onOpenAuthModal) {
      onOpenAuthModal('signup');
    }
  };

  return (
    <section id="qr-sharing" className="py-24 bg-[#FFFFFF] relative overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#FFF5F5] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 gsap-fade-up">
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#C62828]">
            Instant On-Site Sharing
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#202020] tracking-tight leading-[1.12] gsap-reveal-heading">
            One Scan.<br />
            <span className="font-serif italic font-normal text-[#C62828]">
              A World of Memories.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            Place dynamic QR codes on wedding tables, conference banners, or invitation cards. Guests scan with their Android camera to access event photos instantly.
          </p>
        </div>

        {/* 2. THREE-COLUMN BALANCED COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: INTERACTIVE ACRYLIC QR STANDEE */}
          <div className="lg:col-span-3 flex flex-col items-center text-center gsap-fade-up">
            <div
              onMouseEnter={() => setStandeeHovered(true)}
              onMouseLeave={() => setStandeeHovered(false)}
              onClick={() => setActiveStep(0)}
              className={`w-64 max-w-full bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer ${standeeHovered || activeStep === 0
                ? 'border-[#C62828] shadow-[0_20px_45px_-12px_rgba(198,40,40,0.14)] -translate-y-1 ring-1 ring-[#C62828]'
                : 'border-[#E8E8E8] soft-elevated-shadow'
                }`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-[#202020] pb-2 border-b border-[#E8E8E8]/80">
                AARAV & MEERA
              </div>

              <div className="my-4 p-4 bg-[#F7F7F7] rounded-2xl border border-[#E8E8E8] relative group">
                <QrCode className={`w-36 h-36 mx-auto text-[#202020] transition-transform duration-300 ${standeeHovered ? 'scale-105 text-[#C62828]' : ''
                  }`} />

                {standeeHovered && (
                  <span className="absolute inset-x-2 bottom-2 bg-white/95 text-[10px] font-bold text-[#C62828] py-1 rounded-lg border border-[#FCEBEC] shadow-xs">
                    Tap to Scan
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-[#202020]">Scan for Event Photos</p>
                <p className="text-[10px] text-[#666666]">Point Android camera • Zero app install</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#C62828]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] animate-pulse"></span>
                <span>Active Table Standee</span>
              </div>
            </div>

            <p className="text-[11px] text-[#666666] mt-3">
              Click standee to test scan activation.
            </p>
          </div>

          {/* CENTER: REALISTIC ANDROID SMARTPHONE */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[#E8E8E8] to-[#C62828]/60" />

            <AndroidDeviceFrame className="w-[285px] sm:w-[300px]" time="9:41">
              <div className="p-4 bg-white min-h-[460px] flex flex-col justify-between text-left">

                {activeStep === 0 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-[#C62828] flex items-center justify-center text-white text-[10px] font-bold">
                          L
                        </div>
                        <span className="text-xs font-bold text-[#202020]">Lumina Gallery</span>
                      </div>
                      <span className="text-[9px] font-semibold text-[#43866A] bg-[#43866A]/10 px-2 py-0.5 rounded-full">
                        QR Verified
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden aspect-[16/9] relative border border-[#E8E8E8]">
                      <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                        alt="Event Cover"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                        <div>
                          <p className="text-[10px] text-white font-bold">Aarav & Meera Wedding</p>
                          <p className="text-[8px] text-white/80">2,840 photos • Udaipur</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#F7F7F7] rounded-xl border border-[#E8E8E8] space-y-2 text-center">
                      <p className="text-[11px] font-bold text-[#202020]">Find Yourself in 2 Seconds</p>
                      <button
                        onClick={() => setActiveStep(1)}
                        className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg shadow-xs hover:bg-[#A61F24] flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Camera className="w-3 h-3 text-white" />
                        <span>Take Quick Selfie</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {samplePhotos.gallery.slice(0, 3).map((p, idx) => (
                        <img key={idx} src={p.url} alt="t" className="rounded-lg aspect-square object-cover border border-[#E8E8E8]" />
                      ))}
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                      <span className="text-xs font-bold text-[#202020]">Selfie Capture</span>
                      <span className="text-[9px] text-[#43866A] font-semibold">Front Camera</span>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-[#C62828] shadow-xs">
                      <img
                        src={samplePhotos.aiMatchingDemo.guestSelfie}
                        alt="Guest Portrait"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#43866A] text-white p-1 rounded-full shadow-xs">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="text-center space-y-1">
                      <p className="text-xs font-bold text-[#202020]">Ananya Sharma</p>
                      <p className="text-[10px] text-[#666666]">Selfie captured via Android Chrome</p>
                    </div>

                    <button
                      onClick={() => setActiveStep(2)}
                      className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#A61F24]"
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>Scan for Matches →</span>
                    </button>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                      <div>
                        <span className="text-xs font-bold text-[#202020]">Your Photos Found</span>
                        <p className="text-[9px] text-[#C62828] font-semibold">38 Matches in Event</p>
                      </div>
                      <span className="text-[8px] bg-[#FAFAFA] border border-[#E8E8E8] px-2 py-0.5 rounded text-[#43866A] font-semibold">
                        Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {samplePhotos.aiMatchingDemo.matchedPhotos.slice(0, 4).map((p, idx) => (
                        <div key={idx} className="relative rounded-xl overflow-hidden aspect-square border border-[#E8E8E8]">
                          <img src={p.url} alt="match" className="w-full h-full object-cover" />
                          <span className="absolute bottom-1 right-1 bg-white/90 text-[8px] font-bold text-[#202020] px-1 rounded shadow-xs">
                            {p.confidence}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveStep(3)}
                      className="w-full py-2 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#A61F24]"
                    >
                      <Download className="w-3 h-3 text-white" />
                      <span>Proceed to Downloads →</span>
                    </button>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#43866A]/15 text-[#43866A] flex items-center justify-center mx-auto mt-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-[#202020]">38 Photos Ready to Save</h5>
                      <p className="text-[10px] text-[#666666]">Full original resolution RAW/JPEG without loss</p>
                    </div>

                    <div className="p-3 bg-[#F7F7F7] rounded-xl border border-[#E8E8E8] text-left text-[10px] space-y-1.5">
                      <div className="flex justify-between font-semibold text-[#202020]">
                        <span>Destination:</span>
                        <span className="text-[#C62828]">Google Photos / Device</span>
                      </div>
                      <div className="flex justify-between text-[#666666]">
                        <span>Format:</span>
                        <span>Full Resolution 300 DPI</span>
                      </div>
                    </div>

                    <button
                      onClick={handleDownloadSample}
                      className="w-full py-2.5 bg-[#C62828] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs cursor-pointer hover:bg-[#A61F24]"
                    >
                      <Download className="w-3.5 h-3.5 text-white" />
                      <span>{downloadTriggered ? 'Downloading 38 Photos...' : 'Save All to Phone'}</span>
                    </button>

                    <button
                      onClick={() => setActiveStep(0)}
                      className="text-[10px] text-[#666666] hover:text-[#C62828] underline cursor-pointer"
                    >
                      Restart Walkthrough
                    </button>
                  </div>
                )}

                {/* Screen Switcher Controls on Phone Footer */}
                <div className="pt-2 border-t border-[#E8E8E8] flex items-center justify-between text-[10px] text-[#666666]">
                  <span>Screen {activeStep + 1} of 4</span>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3].map((s) => (
                      <button
                        key={s}
                        onClick={() => setActiveStep(s)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeStep === s ? 'w-4 bg-[#C62828]' : 'bg-[#E8E8E8]'
                          }`}
                        aria-label={`Show screen ${s + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </AndroidDeviceFrame>

          </div>

          {/* RIGHT: INTERACTIVE VERTICAL JOURNEY */}
          <div className="lg:col-span-4 space-y-2.5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#666666] mb-3 block">
              Guest Discovery Journey
            </span>

            {workflowSteps.map((step) => {
              const isCurrent = activeStep === step.screenIndex;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(step.screenIndex)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${isCurrent
                    ? 'bg-[#FFF5F5]/70 border-[#C62828] shadow-xs ring-1 ring-[#C62828]'
                    : 'bg-white hover:bg-[#F7F7F7] border-[#E8E8E8]'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-bold font-serif shrink-0 mt-0.5 ${isCurrent ? 'text-[#C62828]' : 'text-[#888888]'
                      }`}>
                      {step.num}
                    </span>

                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-[#202020]">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-[#666666] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Template Download CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleDownloadSample}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C62828] text-white text-xs font-semibold hover:bg-[#A61F24] transition-all shadow-xs cursor-pointer group"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download Print Standee Templates</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/90 transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
