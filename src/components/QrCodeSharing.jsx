import React, { useState } from 'react';
import AndroidDeviceFrame from './AndroidDeviceFrame';
import {
  QrCode,
  ArrowRight,
  Download,
  Check,
  Camera,
  Image as ImageIcon,
  Heart,
  Search,
  Sparkles,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Share2,
  FileText
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function QrCodeSharing({ onOpenAuthModal }) {
  // Active Screen / Step: 0 (Event Gallery) | 1 (Selfie Upload) | 2 (Matched Photographs) | 3 (Download Photos)
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
      description: 'Neural face matching filters through thousands of event photos to assemble your personal collection.',
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
    // Provide actual client feedback
    if (onOpenAuthModal) {
      onOpenAuthModal('signup');
    }
  };

  return (
    <section id="qr-sharing" className="py-24 bg-[#FFFFFF] relative overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#F7F8F6] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 gsap-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F6] border border-[#E8EBE7] text-[#648B72] text-xs font-semibold">
            <QrCode className="w-3.5 h-3.5" />
            <span>INSTANT ON-SITE SHARING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#202522] tracking-tight leading-[1.12] gsap-reveal-heading">
            One Scan.<br />
            <span className="font-serif italic font-normal text-[#648B72]">
              A World of Memories.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#737873] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            Place dynamic QR codes on wedding tables, conference banners, or invitation cards. Guests scan with their Android camera to access event photos instantly.
          </p>
        </div>

        {/* 2. THREE-COLUMN BALANCED COMPOSITION: QR STANDEE (LEFT) | ANDROID PHONE (CENTER) | CONNECTED JOURNEY (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: INTERACTIVE ACRYLIC QR STANDEE */}
          <div className="lg:col-span-3 flex flex-col items-center text-center gsap-fade-up">
            <div
              onMouseEnter={() => setStandeeHovered(true)}
              onMouseLeave={() => setStandeeHovered(false)}
              onClick={() => setActiveStep(0)}
              className={`w-64 max-w-full bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer ${standeeHovered || activeStep === 0
                ? 'border-[#202522] shadow-[0_20px_45px_-12px_rgba(32,37,34,0.12)] -translate-y-1 ring-1 ring-[#202522]'
                : 'border-[#E8EBE7] soft-elevated-shadow'
                }`}
            >
              {/* Acrylic Glass Header Top Bar */}
              <div className="text-[10px] font-black uppercase tracking-widest text-[#202522] pb-2 border-b border-[#E8EBE7]/80">
                AARAV & MEERA
              </div>

              {/* QR Code Matrix Frame */}
              <div className="my-4 p-4 bg-[#F7F8F6] rounded-2xl border border-[#E8EBE7] relative group">
                <QrCode className={`w-36 h-36 mx-auto text-[#202522] transition-transform duration-300 ${standeeHovered ? 'scale-105 text-[#648B72]' : ''
                  }`} />

                {standeeHovered && (
                  <span className="absolute inset-x-2 bottom-2 bg-white/95 text-[10px] font-bold text-[#648B72] py-1 rounded-lg border border-[#E8EBE7] shadow-xs">
                    Tap to Scan
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-[#202522]">Scan for Event Photos</p>
                <p className="text-[10px] text-[#737873]">Point Android camera • Zero app install</p>
              </div>

              {/* Physical Standee Base visual accent */}
              <div className="mt-4 pt-3 border-t border-[#E8EBE7] flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#648B72]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#648B72] animate-pulse"></span>
                <span>Active Table Standee</span>
              </div>
            </div>

            <p className="text-[11px] text-[#737873] mt-3">
              Click standee to test scan activation.
            </p>
          </div>

          {/* CENTER: REALISTIC ANDROID SMARTPHONE WITH 4 CONNECTED LIVE SCREENS */}
          <div className="lg:col-span-5 flex justify-center relative">

            {/* Visual connector line towards phone on desktop */}
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[#E8EBE7] to-[#648B72]/60" />

            <AndroidDeviceFrame className="w-[285px] sm:w-[300px]" time="9:41">
              <div className="p-4 bg-white min-h-[460px] flex flex-col justify-between text-left">

                {/* ---------------------------------------------------- */}
                {/* SCREEN 01: EVENT GALLERY (Android Chrome browser experience) */}
                {/* ---------------------------------------------------- */}
                {activeStep === 0 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {/* Chrome App Bar */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-[#202522] flex items-center justify-center text-white text-[10px] font-bold">
                          L
                        </div>
                        <span className="text-xs font-bold text-[#202522]">Lumina Gallery</span>
                      </div>
                      <span className="text-[9px] font-semibold text-[#648B72] bg-[#648B72]/15 px-2 py-0.5 rounded-full">
                        QR Verified
                      </span>
                    </div>

                    {/* Event Banner */}
                    <div className="rounded-xl overflow-hidden aspect-[16/9] relative border border-[#E8EBE7]">
                      <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                        alt="Event Cover"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                        <div>
                          <p className="text-[10px] text-white font-bold">Aarav & Meera Wedding</p>
                          <p className="text-[8px] text-slate-300">2,840 photos • Udaipur</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Card: Upload Selfie to find photos */}
                    <div className="p-3 bg-[#F7F8F6] rounded-xl border border-[#E8EBE7] space-y-2 text-center">
                      <p className="text-[11px] font-bold text-[#202522]">Find Yourself in 2 Seconds</p>
                      <button
                        onClick={() => setActiveStep(1)}
                        className="w-full py-2 bg-[#202522] text-white text-[10px] font-semibold rounded-lg shadow-xs hover:bg-[#333A36] flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Camera className="w-3 h-3 text-[#E8EBE7]" />
                        <span>Take Quick Selfie</span>
                      </button>
                    </div>

                    {/* Small preview grid */}
                    <div className="grid grid-cols-3 gap-1.5">
                      {samplePhotos.gallery.slice(0, 3).map((p, idx) => (
                        <img key={idx} src={p.url} alt="t" className="rounded-lg aspect-square object-cover border border-[#E8EBE7]" />
                      ))}
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* SCREEN 02: SELFIE UPLOAD */}
                {/* ---------------------------------------------------- */}
                {activeStep === 1 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                      <span className="text-xs font-bold text-[#202522]">Selfie Capture</span>
                      <span className="text-[9px] text-[#648B72] font-semibold">Front Camera</span>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-[#648B72] shadow-xs">
                      <img
                        src={samplePhotos.aiMatchingDemo.guestSelfie}
                        alt="Guest Portrait"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#648B72] text-white p-1 rounded-full shadow-xs">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="text-center space-y-1">
                      <p className="text-xs font-bold text-[#202522]">Ananya Sharma</p>
                      <p className="text-[10px] text-[#737873]">Selfie captured via Android Chrome</p>
                    </div>

                    <button
                      onClick={() => setActiveStep(2)}
                      className="w-full py-2 bg-[#202522] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#333A36]"
                    >
                      <Sparkles className="w-3 h-3 text-[#648B72]" />
                      <span>Scan for Matches →</span>
                    </button>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* SCREEN 03: MATCHED PHOTOGRAPHS */}
                {/* ---------------------------------------------------- */}
                {activeStep === 2 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                      <div>
                        <span className="text-xs font-bold text-[#202522]">Your Photos Found</span>
                        <p className="text-[9px] text-[#648B72] font-semibold">38 Matches in Event</p>
                      </div>
                      <span className="text-[8px] bg-[#FAFBF9] border border-[#E8EBE7] px-2 py-0.5 rounded text-[#737873]">
                        Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {samplePhotos.aiMatchingDemo.matchedPhotos.slice(0, 4).map((p, idx) => (
                        <div key={idx} className="relative rounded-xl overflow-hidden aspect-square border border-[#E8EBE7]">
                          <img src={p.url} alt="match" className="w-full h-full object-cover" />
                          <span className="absolute bottom-1 right-1 bg-white/90 text-[8px] font-bold text-[#202522] px-1 rounded shadow-xs">
                            {p.confidence}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveStep(3)}
                      className="w-full py-2 bg-[#202522] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#333A36]"
                    >
                      <Download className="w-3 h-3 text-[#E8EBE7]" />
                      <span>Proceed to Downloads →</span>
                    </button>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* SCREEN 04: DOWNLOAD PHOTOS */}
                {/* ---------------------------------------------------- */}
                {activeStep === 3 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#648B72]/15 text-[#648B72] flex items-center justify-center mx-auto mt-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-[#202522]">38 Photos Ready to Save</h5>
                      <p className="text-[10px] text-[#737873]">Full original resolution RAW/JPEG without loss</p>
                    </div>

                    <div className="p-3 bg-[#F7F8F6] rounded-xl border border-[#E8EBE7] text-left text-[10px] space-y-1.5">
                      <div className="flex justify-between font-semibold text-[#202522]">
                        <span>Destination:</span>
                        <span className="text-[#648B72]">Google Photos / Device</span>
                      </div>
                      <div className="flex justify-between text-[#737873]">
                        <span>Format:</span>
                        <span>Full Resolution 300 DPI</span>
                      </div>
                    </div>

                    <button
                      onClick={handleDownloadSample}
                      className="w-full py-2.5 bg-[#202522] text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs cursor-pointer hover:bg-[#333A36]"
                    >
                      <Download className="w-3.5 h-3.5 text-[#E8EBE7]" />
                      <span>{downloadTriggered ? 'Downloading 38 Photos...' : 'Save All to Phone'}</span>
                    </button>

                    <button
                      onClick={() => setActiveStep(0)}
                      className="text-[10px] text-[#737873] hover:text-[#202522] underline cursor-pointer"
                    >
                      Restart Walkthrough
                    </button>
                  </div>
                )}

                {/* Screen Switcher Controls on Phone Footer */}
                <div className="pt-2 border-t border-[#E8EBE7] flex items-center justify-between text-[10px] text-[#737873]">
                  <span>Screen {activeStep + 1} of 4</span>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3].map((s) => (
                      <button
                        key={s}
                        onClick={() => setActiveStep(s)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeStep === s ? 'w-4 bg-[#202522]' : 'bg-[#E8EBE7]'
                          }`}
                        aria-label={`Show screen ${s + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </AndroidDeviceFrame>

          </div>

          {/* RIGHT: INTERACTIVE VERTICAL JOURNEY (5 Steps) */}
          <div className="lg:col-span-4 space-y-2.5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#737873] mb-3 block">
              Guest Discovery Journey
            </span>

            {workflowSteps.map((step, idx) => {
              const isCurrent = activeStep === step.screenIndex;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(step.screenIndex)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${isCurrent
                    ? 'bg-[#FAFBF9] border-[#202522] shadow-xs ring-1 ring-[#202522]'
                    : 'bg-white hover:bg-[#F7F8F6] border-[#E8EBE7]'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-bold font-serif shrink-0 mt-0.5 ${isCurrent ? 'text-[#648B72]' : 'text-[#737873]'
                      }`}>
                      {step.num}
                    </span>

                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-[#202522]">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-[#737873] leading-relaxed">
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
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#202522] text-white text-xs font-semibold hover:bg-[#333A36] transition-all shadow-xs cursor-pointer group"
              >
                <Download className="w-3.5 h-3.5 text-[#648B72]" />
                <span>Download Print Standee Templates</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8EBE7] transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
