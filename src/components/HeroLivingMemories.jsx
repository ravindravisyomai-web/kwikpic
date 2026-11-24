import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Curated authentic event photography for the floating memory frames
const MEMORY_FRAMES = [
  // 1. Left Top (Midground) — Wedding floral garland celebration
  {
    id: 'frame-1',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80',
    tag: 'Udaipur • Garland Vows',
    match: '99.4%',
    depth: 'mid', // midground
    positionClass: 'top-[12%] left-[2%] lg:left-[4%] xl:left-[6%]',
    rotation: -4,
    widthClass: 'w-[140px] sm:w-[160px] lg:w-[180px]',
    floatDuration: 7.2,
    floatDistance: 12,
    hideOnMobile: true
  },
  // 2. Left Lower-Middle (Foreground) — Candid laughter / guest celebration
  {
    id: 'frame-2',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80',
    tag: 'Reception • Table 04',
    match: '98.9%',
    depth: 'near', // foreground
    positionClass: 'top-[54%] left-[1.5%] lg:left-[3.5%] xl:left-[5%]',
    rotation: 3,
    widthClass: 'w-[150px] sm:w-[175px] lg:w-[195px]',
    floatDuration: 8.5,
    floatDistance: 14,
    hideOnMobile: false // visible as subtle edge element
  },
  // 3. Left Far Background (Distant) — Romantic couple sunset silhouette
  {
    id: 'frame-3',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=500&q=80',
    tag: 'Sunset Golden Hour',
    match: '99.1%',
    depth: 'far', // background
    positionClass: 'top-[34%] left-[0.5%] lg:left-[1.5%] xl:left-[2.5%]',
    rotation: -7,
    widthClass: 'w-[115px] sm:w-[130px] lg:w-[145px]',
    floatDuration: 9.8,
    floatDistance: 9,
    hideOnMobile: true
  },
  // 4. Right Top (Foreground) — Golden hour couple portrait
  {
    id: 'frame-4',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&q=80',
    tag: 'Portrait • 99.8% Match',
    match: '99.8%',
    depth: 'near', // foreground
    positionClass: 'top-[14%] right-[2%] lg:right-[4%] xl:right-[6%]',
    rotation: 4,
    widthClass: 'w-[155px] sm:w-[180px] lg:w-[200px]',
    floatDuration: 8.0,
    floatDistance: 15,
    hideOnMobile: false
  },
  // 5. Right Lower-Middle (Midground) — Corporate conference keynote & summit crowd
  {
    id: 'frame-5',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80',
    tag: 'Fintech Summit • Keynote',
    match: '99.2%',
    depth: 'mid', // midground
    positionClass: 'top-[58%] right-[1.5%] lg:right-[3.5%] xl:right-[5.5%]',
    rotation: -3,
    widthClass: 'w-[145px] sm:w-[165px] lg:w-[185px]',
    floatDuration: 7.6,
    floatDistance: 11,
    hideOnMobile: true
  },
  // 6. Right Far Background (Distant) — Music festival celebration & confetti
  {
    id: 'frame-6',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80',
    tag: 'Music Arena • Live Sync',
    match: '97.8%',
    depth: 'far', // background
    positionClass: 'top-[36%] right-[0.5%] lg:right-[1.5%] xl:right-[2.5%]',
    rotation: 6,
    widthClass: 'w-[120px] sm:w-[135px] lg:w-[150px]',
    floatDuration: 9.2,
    floatDistance: 8,
    hideOnMobile: true
  }
];

export default function HeroLivingMemories({ mousePos }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
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
   * 1. CANVAS PARTICLE NETWORK (AI MEMORY PARTICLES & CONNECTING LINES)
   * ------------------------------------------------------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive particle count (lean & highly performant)
    const particleCount = isMobile ? 14 : 32;
    const maxLineDistance = isMobile ? 85 : 125;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Particle pool definition
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35),
      vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35),
      radius: Math.random() * 1.5 + 1.2,
      baseAlpha: Math.random() * 0.35 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    }));

    // Mouse coordinates in canvas local space
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMoveLocal = (e) => {
      if (prefersReducedMotion || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMoveLocal, { passive: true });

    // Pause when off-screen to save battery/GPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Canvas animation loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += p.pulseSpeed;

          // Wrap edges smoothly
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          // Gentle mouse repulsion/attraction
          const dx = p.x - currentMouseX;
          const dy = p.y - currentMouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 1) {
            const force = (140 - dist) / 140 * 0.015;
            p.x += (dx / dist) * force * 10;
            p.y += (dy / dist) * force * 10;
          }
        }

        const currentAlpha = p.baseAlpha + Math.sin(p.pulse) * 0.1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 139, 114, ${Math.max(0.05, currentAlpha)})`;
        ctx.fill();

        // Connect nearby particles with subtle sage neural threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
          const maxDistSq = maxLineDistance * maxLineDistance;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            const lineAlpha = (1 - distance / maxLineDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 139, 114, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMoveLocal);
      observer.disconnect();
    };
  }, []);

  /* -------------------------------------------------------------
   * 2. GSAP TIMELINE: LOAD ENTRANCE, CONTINUOUS FLOAT & SCROLLTRIGGER
   * ------------------------------------------------------------- */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      // PHASE 1: Ambient light entrance (0 - 1s)
      if (ambientLightRef.current) {
        gsap.fromTo(
          ambientLightRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
        );
      }

      // PHASE 2: Floating frames entrance (1 - 2s)
      if (framesRef.current.length > 0) {
        gsap.fromTo(
          framesRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.92,
          },
          {
            opacity: (index) => {
              const depth = MEMORY_FRAMES[index]?.depth;
              if (depth === 'near') return 0.98;
              if (depth === 'mid') return 0.90;
              return 0.75;
            },
            y: 0,
            scale: 1,
            duration: 1.0,
            delay: 0.4,
            stagger: 0.1,
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

      // PHASE 3: Canvas particle network fade in
      if (canvasRef.current) {
        gsap.fromTo(
          canvasRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, delay: 0.8, ease: 'power2.out' }
        );
      }

      // Note: Hero background remains permanently alive and visible while scrolling.
      // It does not disappear when scrolling down.
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. AMBIENT SAGE LIGHTING (Subtle radial light movement) */}
      <div
        ref={ambientLightRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] lg:w-[1100px] h-[550px] bg-gradient-to-tr from-[#648B72]/12 via-[#EBF2ED]/60 to-[#648B72]/15 blur-[140px] rounded-full pointer-events-none -z-10"
        style={{
          transform: `translate(calc(-50% + ${mousePos?.x ? mousePos.x * 0.3 : 0}px), calc(-50% + ${mousePos?.y ? mousePos.y * 0.3 : 0}px))`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* 2. SUBTLE 35mm FILM-GRAIN TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.032] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. ARCHITECTURAL SAGE DOT MATRIX */}
      <div className="absolute inset-0 bg-[radial-gradient(#648B72_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-[0.14] pointer-events-none" />

      {/* 4. CANVAS AI MEMORY PARTICLES & CONNECTING THREADS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-1"
      />

      {/* 5. FLOATING PHOTOGRAPHIC MEMORY FRAMES */}
      <div className="absolute inset-0 w-full h-full z-2">
        {MEMORY_FRAMES.map((frame, idx) => {
          // Depth factor determines parallax sensitivity and blur
          const depthMultiplier = frame.depth === 'near' ? 1.0 : frame.depth === 'mid' ? 0.6 : 0.3;
          const parallaxX = (mousePos?.x || 0) * depthMultiplier;
          const parallaxY = (mousePos?.y || 0) * depthMultiplier;

          // Depth-based shadow & blur styling
          const blurClass = frame.depth === 'far' ? 'blur-[0.7px]' : '';
          const shadowClass =
            frame.depth === 'near'
              ? 'shadow-[0_20px_45px_-12px_rgba(32,37,34,0.16)] ring-1 ring-black/[0.04]'
              : frame.depth === 'mid'
              ? 'shadow-[0_14px_30px_-10px_rgba(32,37,34,0.12)]'
              : 'shadow-[0_8px_20px_-8px_rgba(32,37,34,0.08)]';

          const visibilityClass = frame.hideOnMobile ? 'hidden md:block' : 'block';

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
                {/* Premium White Gallery / Polaroid Frame */}
                <div className={`bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 rounded-2xl border border-[#E8EBE7] ${shadowClass} group`}>
                  
                  {/* Event Photo Container */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F7F8F6]">
                    <img
                      src={frame.image}
                      alt={frame.tag}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${blurClass}`}
                    />
                    
                    {/* Subtle top glare reflection */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/25 pointer-events-none" />

                    {/* AI Match Badge Pill */}
                    <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8EBE7]/80 flex items-center gap-1 shadow-xs">
                      <span className="w-1 h-1 rounded-full bg-[#648B72] animate-pulse"></span>
                      <span className="text-[9px] font-bold text-[#202522] tracking-tight">{frame.match}</span>
                    </div>
                  </div>

                  {/* Bottom Frame Metadata Caption */}
                  <div className="mt-1.5 px-0.5 flex items-center justify-between text-[9px] sm:text-[10px] text-[#737873]">
                    <span className="font-medium text-[#202522] truncate max-w-[110px] sm:max-w-[130px]">{frame.tag}</span>
                    <span className="text-[#648B72] font-semibold text-[8px] uppercase tracking-wider shrink-0">AI Found</span>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}