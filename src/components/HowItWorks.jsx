import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  ScanFace,
  FolderPlus,
  UploadCloud,
  Sparkles,
  QrCode,
  Lock,
  Wifi,
  Battery
} from 'lucide-react';
import { samplePhotos } from '../data/content';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Step 01 Visual Preview: Compact realistic smartphone UI showing
 * profile creation + live facial recognition selfie scan frame.
 */
function StepOneProfilePreview() {
  return (
    <div className="relative h-[265px] sm:h-[280px] w-full rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] overflow-hidden pt-5 px-4 flex flex-col items-center justify-end select-none">
      {/* Subtle warm ambient radial */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C62828]/8 blur-2xl rounded-full pointer-events-none" />

      {/* Realistic Smartphone Frame (Bottom-anchored editorial crop) */}
      <div className="relative w-full max-w-[232px] bg-white rounded-t-[28px] border-t-[5px] border-x-[5px] border-[#202020] shadow-[0_20px_40px_-15px_rgba(32,32,32,0.18)] px-3.5 pt-2.5 pb-4 flex flex-col gap-2.5 transition-transform duration-500 group-hover:-translate-y-1">
        {/* Mini Status Bar & Punch-hole Camera */}
        <div className="flex items-center justify-between text-[9px] font-semibold text-[#202020] pb-1 border-b border-[#E8E8E8]/70">
          <span>9:41</span>
          <div className="w-2.5 h-2.5 rounded-full bg-[#202020]" />
          <div className="flex items-center gap-1">
            <Wifi className="w-2.5 h-2.5" />
            <Battery className="w-3 h-3 fill-[#202020]" />
          </div>
        </div>

        {/* Profile Creation Header + Input Pill */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#202020]">Create Profile</span>
            <span className="text-[8px] font-semibold text-[#C62828] bg-[#FFF5F5] border border-[#FCEBEC] px-1.5 py-0.5 rounded-full">
              Step 1/1
            </span>
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-[#F7F7F7] border border-[#E8E8E8] flex items-center justify-between text-[9px] text-[#666666]">
            <span className="truncate font-medium text-[#202020]">ananya@lumina.events</span>
            <Check className="w-2.5 h-2.5 text-[#43866A] shrink-0" />
          </div>
        </div>

        {/* Selfie Capture Frame with Facial Recognition Scan */}
        <div className="relative rounded-xl bg-[#1A1A1A] p-1.5 border border-[#E8E8E8] overflow-hidden">
          <div className="relative h-[94px] rounded-lg overflow-hidden">
            <img
              src={samplePhotos.aiMatchingDemo.guestSelfie}
              alt="Guest selfie face registration preview"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#202020]/15 pointer-events-none" />

            {/* Viewfinder Corner Brackets */}
            <div className="absolute inset-2 pointer-events-none">
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/90 rounded-tl-xs" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white/90 rounded-tr-xs" />
              <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white/90 rounded-bl-xs" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/90 rounded-br-xs" />
            </div>

            {/* Animated Facial Recognition Scanning Line */}
            <div
              className="animate-lumina-scan absolute left-2 right-2 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C62828] to-transparent shadow-[0_0_10px_#C62828] pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating Scan Tag */}
            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between px-2 py-1 rounded-md bg-white/92 backdrop-blur-xs text-[8px] font-semibold text-[#202020] shadow-xs">
              <span className="flex items-center gap-1">
                <ScanFace className="w-2.5 h-2.5 text-[#C62828]" />
                Face Registered
              </span>
              <span className="text-[#43866A] font-bold">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Step 02 Visual Preview: Studio event creation dashboard showing
 * active event configuration, live photo upload progress, and album folders.
 */
function StepTwoEventPreview() {
  const albums = [
    {
      name: 'Haldi & Mehendi',
      count: '840',
      img: samplePhotos.gallery[0].url
    },
    {
      name: 'Grand Ceremony',
      count: '1,020',
      img: samplePhotos.gallery[1].url
    },
    {
      name: 'Reception Gala',
      count: '620',
      img: samplePhotos.gallery[6].url
    }
  ];

  return (
    <div className="relative h-[265px] sm:h-[280px] w-full rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] overflow-hidden p-4 flex flex-col justify-center select-none">
      {/* Subtle ambient accent */}
      <div className="absolute -bottom-12 -right-10 w-44 h-44 bg-[#C62828]/8 blur-2xl rounded-full pointer-events-none" />

      {/* Event Dashboard Card */}
      <div className="relative bg-white rounded-xl border border-[#E8E8E8] shadow-[0_14px_30px_-12px_rgba(32,32,32,0.1)] p-3.5 space-y-3 transition-transform duration-500 group-hover:-translate-y-1">
        {/* Mini Window Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E8E8E8]" />
            <span className="w-2 h-2 rounded-full bg-[#E8E8E8]" />
            <span className="text-[9px] font-mono text-[#666666] ml-1">studio/events/new</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#202020] bg-[#F7F7F7] border border-[#E8E8E8] px-2 py-0.5 rounded-md">
            <Lock className="w-2.5 h-2.5 text-[#C62828]" />
            Private Group
          </span>
        </div>

        {/* Event Header + New Folder Trigger */}
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-[#202020] truncate">Aarav & Meera Wedding</p>
            <p className="text-[9px] text-[#666666]">Udaipur Palace • 3 Sub-Albums</p>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#C62828] text-white text-[9px] font-semibold shrink-0">
            <FolderPlus className="w-2.5 h-2.5 text-white" />
            <span>Add Photos</span>
          </div>
        </div>

        {/* Animated Upload Progress Bar */}
        <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#E8E8E8] space-y-1.5">
          <div className="flex items-center justify-between text-[9px]">
            <span className="flex items-center gap-1.5 font-semibold text-[#202020]">
              <UploadCloud className="w-3 h-3 text-[#C62828]" />
              Bulk RAW & JPEG Sync
            </span>
            <span className="text-[#C62828] font-bold">2,480 / 2,480</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#E8E8E8] overflow-hidden">
            <div className="animate-lumina-upload h-full rounded-full bg-gradient-to-r from-[#C62828] to-[#A61F24]" />
          </div>
        </div>

        {/* Event Album Thumbnails Grid */}
        <div className="grid grid-cols-3 gap-2">
          {albums.map((alb) => (
            <div key={alb.name} className="space-y-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E8E8E8] bg-[#F7F7F7]">
                <img
                  src={alb.img}
                  alt={alb.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-black/65 backdrop-blur-xs text-[8px] font-semibold text-white">
                  {alb.count}
                </span>
              </div>
              <p className="text-[9px] font-medium text-[#202020] truncate">{alb.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Step 03 Visual Preview: Instant AI photo discovery gallery with
 * matched face badges and a crisp QR code sharing card.
 */
function StepThreeDiscoverPreview() {
  const photos = samplePhotos.aiMatchingDemo.matchedPhotos.slice(0, 4);

  return (
    <div className="relative h-[265px] sm:h-[280px] w-full rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] overflow-hidden p-4 flex flex-col justify-between select-none">
      {/* Subtle ambient glow */}
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#C62828]/8 blur-2xl rounded-full pointer-events-none" />

      {/* Discovery Header Pill */}
      <div className="relative z-10 flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-[#E8E8E8] shadow-xs">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={samplePhotos.aiMatchingDemo.guestSelfie}
            alt="Guest avatar"
            loading="lazy"
            className="w-5 h-5 rounded-full object-cover border border-[#C62828]"
          />
          <span className="text-[10px] font-bold text-[#202020] truncate">My Moments</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#C62828] bg-[#FFF5F5] border border-[#FCEBEC] px-2 py-0.5 rounded-full shrink-0">
          <Sparkles className="w-2.5 h-2.5" />
          38 Matched
        </span>
      </div>

      {/* Matched Photos Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 my-2 flex-1 min-h-0">
        {photos.slice(0, 2).map((photo, idx) => (
          <div
            key={photo.tag}
            className="relative h-full min-h-0 rounded-xl overflow-hidden border border-[#E8E8E8] bg-white shadow-xs group/photo"
          >
            <img
              src={photo.url}
              alt={photo.tag}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

            {/* Subtle AI scan shimmer on primary card */}
            {idx === 0 && (
              <div
                className="animate-lumina-scan absolute left-1.5 right-1.5 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C62828] to-transparent pointer-events-none"
                aria-hidden="true"
              />
            )}

            {/* AI Face Match Confidence Tag */}
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-white/92 backdrop-blur-xs border border-[#E8E8E8] flex items-center gap-1 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] animate-pulse" />
              <span className="text-[8px] font-bold text-[#202020]">{photo.confidence}</span>
            </div>

            <span className="absolute bottom-1.5 left-2 text-[9px] font-medium text-white truncate max-w-[90%]">
              {photo.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Floating QR Sharing Card Bar */}
      <div className="how-float-badge relative z-20 bg-white rounded-xl border border-[#E8E8E8] p-2.5 shadow-[0_12px_28px_-8px_rgba(32,32,32,0.14)] flex items-center justify-between gap-2.5 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#202020] text-white flex items-center justify-center shrink-0">
            <QrCode className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-[#202020] truncate">Instant Event QR Access</p>
            <p className="text-[9px] text-[#666666] truncate">lumina.app/e/aarav-meera</p>
          </div>
        </div>
        <span className="px-2 py-1 rounded-md bg-[#FFF5F5] border border-[#FCEBEC] text-[9px] font-semibold text-[#C62828] shrink-0">
          Share
        </span>
      </div>
    </div>
  );
}

export default function HowItWorks({ onOpenAuthModal }) {
  const sectionRef = useRef(null);

  const steps = [
    {
      num: '01',
      status: 'Profile Ready',
      title: 'Create Your Profile',
      description:
        "Sign up with your phone number or email and register your face with a simple selfie. You're ready to discover your event memories.",
      renderPreview: () => <StepOneProfilePreview />
    },
    {
      num: '02',
      status: 'Photos Uploaded',
      title: 'Create & Organize Events',
      description:
        'Create private or public event groups, upload photographs and organize all your event memories in one place.',
      renderPreview: () => <StepTwoEventPreview />
    },
    {
      num: '03',
      status: 'Photos Found',
      title: 'Discover & Share Memories',
      description:
        'Guests can instantly find their photos using AI-powered discovery and access event galleries through a simple QR code.',
      renderPreview: () => <StepThreeDiscoverPreview />
    }
  ];

  // Lightweight GSAP ScrollTrigger entrance & floating micro-elements
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.how-header-reveal',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true
          }
        }
      );

      gsap.fromTo(
        '.how-step-card',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.how-cards-grid',
            start: 'top 94%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-28 bg-[#FAFAFA] border-y border-[#E8E8E8] relative overflow-hidden"
    >
      {/* Subtle ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[360px] bg-gradient-to-b from-[#C62828]/5 to-transparent blur-[110px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="how-header-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF5F5] border border-[#FCEBEC] text-[#C62828] text-[11px] font-bold tracking-[0.12em] uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="how-header-reveal text-[clamp(1.75rem,3.6vw,2.85rem)] font-bold text-[#202020] tracking-tight leading-[1.14]">
            Your Event Memories,{' '}
            <span className="font-serif italic font-normal text-[#C62828]">
              Three Simple Steps.
            </span>
          </h2>

          <p className="how-header-reveal text-[clamp(0.9375rem,1.35vw,1.1rem)] text-[#666666] max-w-2xl mx-auto leading-relaxed">
            From creating your event to discovering and sharing every special moment, Lumina makes everything effortless.
          </p>
        </div>

        {/* SUBTLE HORIZONTAL PROGRESSION TRACK (Desktop lg+) */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-6 px-12 relative" aria-hidden="true">
          <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-[#C62828]/25 via-[#C62828]/55 to-[#C62828]/25" />
          {steps.map((st) => (
            <div
              key={`track-${st.num}`}
              className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FCEBEC] text-[10px] font-bold tracking-wider text-[#C62828] shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
              <span>STEP {st.num}</span>
            </div>
          ))}
        </div>

        {/* 3-COLUMN EDITORIAL FEATURE CARDS (2-col on Tablet with balanced 3rd card, 1-col on Mobile) */}
        <div className="how-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {steps.map((step, idx) => {
            // On tablet (md), center the 3rd card at matching column width for balanced composition
            const tabletSpanClass =
              idx === 2
                ? 'md:col-span-2 md:w-full md:max-w-[calc(50%-0.75rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0'
                : '';

            return (
              <article
                key={step.num}
                className={`how-step-card group bg-white rounded-3xl border border-[#E8E8E8] p-5 sm:p-6 flex flex-col justify-between soft-card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C62828]/50 hover:shadow-[0_24px_48px_-16px_rgba(32,32,32,0.1)] ${tabletSpanClass}`}
              >
                <div className="space-y-4">
                  {/* Top Step Number & Status Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#888888]">
                      STEP <span className="text-[#C62828]">{step.num}</span>
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF5F5] border border-[#FCEBEC] text-[10px] font-semibold text-[#C62828]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] animate-pulse" />
                      <span>{step.status}</span>
                    </div>
                  </div>

                  {/* Unique Interactive Product UI Preview */}
                  {step.renderPreview()}
                </div>

                {/* Title & Description Below Visual Preview */}
                <div className="pt-5 mt-1 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#202020] tracking-tight group-hover:text-[#C62828] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
