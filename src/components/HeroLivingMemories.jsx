import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Curated authentic event photography for the floating memory frames
export const MEMORY_FRAMES = [
  // 1. Left Top (Midground) — Wedding floral garland celebration
  {
    id: 'frame-1',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80',
    tag: 'Udaipur • Garland Vows',
    match: '99.4%',
    depth: 'mid',
    positionClass: 'top-[11%] left-[1.5%] lg:left-[2.5%] xl:left-[3.5%] 2xl:left-[5.5%]',
    rotation: -4,
    widthClass: 'w-[105px] lg:w-[138px] xl:w-[165px] 2xl:w-[180px]',
    floatDuration: 7.2,
    floatDistance: 12,
    hideOnTablet: false
  },
  // 2. Left Lower-Middle (Foreground) — Candid laughter / guest celebration
  {
    id: 'frame-2',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80',
    tag: 'Reception • Table 04',
    match: '98.9%',
    depth: 'near',
    positionClass: 'top-[58%] left-[1.5%] lg:left-[2.5%] xl:left-[3.5%] 2xl:left-[5%]',
    rotation: 3,
    widthClass: 'w-[105px] lg:w-[140px] xl:w-[175px] 2xl:w-[195px]',
    floatDuration: 8.5,
    floatDistance: 14,
    hideOnTablet: false
  },
  // 3. Left Far Background (Distant) — Romantic couple sunset silhouette
  {
    id: 'frame-3',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=500&q=80',
    tag: 'Sunset Golden Hour',
    match: '99.1%',
    depth: 'far',
    positionClass: 'top-[34%] left-[1%] xl:left-[1.5%] 2xl:left-[2.5%]',
    rotation: -7,
    widthClass: 'w-[125px] xl:w-[135px] 2xl:w-[145px]',
    floatDuration: 9.8,
    floatDistance: 9,
    hideOnTablet: true
  },
  // 4. Right Top (Foreground) — Golden hour couple portrait
  {
    id: 'frame-4',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&q=80',
    tag: 'Portrait • 99.8% Match',
    match: '99.8%',
    depth: 'near',
    positionClass: 'top-[12%] right-[1.5%] lg:right-[2.5%] xl:right-[3.5%] 2xl:right-[5.5%]',
    rotation: 4,
    widthClass: 'w-[105px] lg:w-[140px] xl:w-[175px] 2xl:w-[200px]',
    floatDuration: 8.0,
    floatDistance: 15,
    hideOnTablet: false
  },
  // 5. Right Lower-Middle (Midground) — Corporate conference keynote & summit crowd
  {
    id: 'frame-5',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80',
    tag: 'Fintech Summit • Keynote',
    match: '99.2%',
    depth: 'mid',
    positionClass: 'top-[60%] right-[1.5%] lg:right-[2.5%] xl:right-[3.5%] 2xl:right-[5.5%]',
    rotation: -3,
    widthClass: 'w-[105px] lg:w-[138px] xl:w-[168px] 2xl:w-[185px]',
    floatDuration: 7.6,
    floatDistance: 11,
    hideOnTablet: false
  },
  // 6. Right Far Background (Distant) — Music festival celebration & confetti
  {
    id: 'frame-6',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80',
    tag: 'Music Arena • Live Sync',
    match: '97.8%',
    depth: 'far',
    positionClass: 'top-[36%] right-[1%] xl:right-[1.5%] 2xl:right-[2.5%]',
    rotation: 6,
    widthClass: 'w-[125px] xl:w-[135px] 2xl:w-[150px]',
    floatDuration: 9.2,
    floatDistance: 8,
    hideOnTablet: true
  }
];

/**
 * Shared Polaroid-style photographic memory card used by both desktop floating
 * frames and the mobile horizontal gallery strip.
 */
export function MemoryFrameCard({ frame, shadowClass = 'shadow-[0_14px_30px_-10px_rgba(32,32,32,0.12)]' }) {
  return (
    <div className={`bg-white p-1.5 sm:p-2 rounded-2xl border border-[#E8E8E8] ${shadowClass} group`}>
      {/* Event Photo Container */}
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F7F7F7]">
        <img
          src={frame.image}
          alt={frame.tag}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle natural edge shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />

        {/* Match Percentage Pill */}
        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-white/95 border border-[#E8E8E8] shadow-xs">
          <span className="text-[9px] font-bold text-[#202020] tracking-tight">{frame.match}</span>
        </div>
      </div>

      {/* Bottom Frame Metadata Caption */}
      <div className="mt-1.5 px-0.5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] text-[#666666]">
        <span className="font-medium text-[#202020] truncate">{frame.tag}</span>
        <span className="text-[#C62828] font-semibold text-[8px] uppercase tracking-wider shrink-0">Matched</span>
      </div>
    </div>
  );
}

export default function HeroLivingMemories({ mousePos }) {
  const containerRef = useRef(null);
  const ambientLightRef = useRef(null);
  const framesRef = useRef([]);

  // Store frames in ref array
  framesRef.current = [];
  const addToFramesRef = (el) => {
    if (el && !framesRef.current.includes(el)) {
      framesRef.current.push(el);
    }
  };

  /* -------------------------------------------------------------
   * GSAP TIMELINE: LOAD ENTRANCE & CONTINUOUS FLOAT FOR PHOTO FRAMES
   * ------------------------------------------------------------- */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      // Soft ambient studio light entrance
      if (ambientLightRef.current) {
        gsap.fromTo(
          ambientLightRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' }
        );
      }

      // Floating photo frames entrance
      if (framesRef.current.length > 0) {
        gsap.fromTo(
          framesRef.current,
          {
            opacity: 0,
            y: 16,
            scale: 0.95,
          },
          {
            opacity: (index) => {
              const depth = MEMORY_FRAMES[index]?.depth;
              if (depth === 'near') return 1;
              if (depth === 'mid') return 0.94;
              return 0.85;
            },
            y: 0,
            scale: 1,
            duration: 0.55,
            delay: 0.15,
            stagger: 0.05,
            ease: 'power3.out',
            onComplete: () => {
              // Initiate independent continuous sinusoidal floating on inner containers
              if (!prefersReducedMotion) {
                framesRef.current.forEach((frame, idx) => {
                  const conf = MEMORY_FRAMES[idx] || {};
                  const duration = conf.floatDuration || 8;
                  const distance = conf.floatDistance || 12;
                  const inner = frame.querySelector('.hero-frame-float-inner');

                  if (inner) {
                    gsap.to(inner, {
                      y: distance,
                      rotation: idx % 2 === 0 ? 1.5 : -1.5,
                      duration: duration,
                      repeat: -1,
                      yoyo: true,
                      ease: 'sine.inOut',
                      delay: idx * 0.2,
                    });
                  }
                });
              }
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f7f7f7 100%)',
      }}
    >
      {/* 1. SOFT EDITORIAL STUDIO AMBIENT LIGHTING */}
      <div
        ref={ambientLightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 68% 58% at 50% 44%, rgba(255, 255, 255, 0.96) 0%, rgba(250, 250, 250, 0.45) 55%, rgba(245, 245, 245, 0.35) 100%)',
          transform: `translate3d(${mousePos?.x ? mousePos.x * 0.18 : 0}px, ${mousePos?.y ? mousePos.y * 0.18 : 0}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 2. SUBTLE BOTTOM TONAL BLEND INTO NEXT SECTION */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%)',
        }}
      />

      {/* 3. FLOATING PHOTOGRAPHIC MEMORY FRAMES */}
      <div className="absolute inset-0 w-full h-full z-2">
        {MEMORY_FRAMES.map((frame) => {
          const depthMultiplier = frame.depth === 'near' ? 1.0 : frame.depth === 'mid' ? 0.6 : 0.3;
          const parallaxX = (mousePos?.x || 0) * depthMultiplier;
          const parallaxY = (mousePos?.y || 0) * depthMultiplier;

          const shadowClass =
            frame.depth === 'near'
              ? 'shadow-[0_22px_45px_-14px_rgba(32,32,32,0.16),0_4px_12px_-2px_rgba(32,32,32,0.06)] ring-1 ring-black/[0.04]'
              : frame.depth === 'mid'
              ? 'shadow-[0_16px_32px_-12px_rgba(32,32,32,0.12),0_2px_8px_-2px_rgba(32,32,32,0.04)]'
              : 'shadow-[0_10px_24px_-10px_rgba(32,32,32,0.09)]';

          const visibilityClass = frame.hideOnTablet ? 'hidden xl:block' : 'hidden md:block';

          return (
            <div
              key={frame.id}
              ref={addToFramesRef}
              className={`hero-memory-frame absolute ${frame.positionClass} ${frame.widthClass} ${visibilityClass} transition-transform duration-300 ease-out`}
              style={{
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) rotate(${frame.rotation}deg)`,
                willChange: 'transform, opacity',
              }}
            >
              {/* Inner floating container animated by GSAP */}
              <div className="hero-frame-float-inner w-full h-full">
                <MemoryFrameCard frame={frame} shadowClass={shadowClass} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Clean horizontal scroll gallery strip displayed below hero content on mobile (<768px)
 * so photographic memory cards never overlap text or CTA buttons.
 */
export function HeroMobileMemoryStrip() {
  return (
    <div className="md:hidden w-full mt-9">
      <div className="flex items-stretch gap-3 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
        {MEMORY_FRAMES.map((frame) => (
          <div
            key={`mobile-${frame.id}`}
            className="w-[146px] sm:w-[164px] shrink-0 snap-center"
          >
            <MemoryFrameCard
              frame={frame}
              shadowClass="shadow-[0_12px_24px_-8px_rgba(32,32,32,0.12)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
