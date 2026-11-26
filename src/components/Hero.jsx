import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroLivingMemories, { HeroMobileMemoryStrip } from './HeroLivingMemories';

export default function Hero({ onOpenAuthModal }) {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 34;
    const y = (clientY / innerHeight - 0.5) * 34;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-fit md:min-h-[86vh] lg:min-h-[91vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 bg-[#FFFFFF] overflow-hidden"
    >
      {/* EDITORIAL PHOTOGRAPHY BACKGROUND & FLOATING MEMORY FRAMES */}
      <HeroLivingMemories mousePos={mousePos} />

      {/* CENTRAL HERO CONTENT */}
      <div className="w-full max-w-[540px] md:max-w-[500px] lg:max-w-[660px] xl:max-w-[800px] 2xl:max-w-[880px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Clean Editorial Eyebrow Label */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#C62828] mb-4 sm:mb-5"
        >
          Event Photo Sharing for Studios &amp; Guests
        </motion.p>

        {/* Central Full-Width Headline with Fluid clamp() Typography */}
        <div className="space-y-1 sm:space-y-2 mb-5 sm:mb-7">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.85rem,4.9vw,4.5rem)] font-bold text-[#202020] tracking-tight leading-[1.08]"
          >
            Every Event. Every Photo.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.11, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.75rem,4.7vw,4.5rem)] font-serif italic font-normal text-[#C62828] tracking-tight leading-[1.12]"
          >
            Everyone Finds Their Moments.
          </motion.h2>
        </div>

        {/* Supporting Description with Fluid clamp() Typography */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.17, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(0.9375rem,1.45vw,1.1875rem)] text-[#666666] max-w-xl lg:max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10"
        >
          Share wedding and event galleries where guests find their own photos in seconds with a quick selfie—no scrolling through thousands of pictures.
        </motion.p>

        {/* CTA Buttons with Stagger & Magnetic Hover Response */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-8 sm:mb-12"
        >
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
            onClick={() => onOpenAuthModal('signup')}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] transition-all duration-200 shadow-xs cursor-pointer focus:outline-none"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 text-white/90 transform transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <motion.a
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#202020] bg-white hover:bg-[#FFF5F5] hover:text-[#C62828] border border-[#E8E8E8] hover:border-[#C62828] transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <span>Explore Features</span>
          </motion.a>
        </motion.div>

        {/* Minimal Horizontal Trust Indicators with Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.27, ease: [0.16, 1, 0.3, 1] }}
          className="pt-5 sm:pt-6 border-t border-[#E8E8E8] max-w-lg mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:gap-8 text-xs text-[#666666]"
        >
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#C62828] shrink-0" />
            <span>Zero guest app installation</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#C62828] shrink-0" />
            <span>Full original quality RAW/JPEG</span>
          </div>
        </motion.div>

        {/* Mobile Horizontal Memory Gallery Strip (Displayed below content on <768px) */}
        <HeroMobileMemoryStrip />

      </div>
    </section>
  );
}
