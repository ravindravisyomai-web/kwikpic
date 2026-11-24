import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroLivingMemories from './HeroLivingMemories';

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
      className="relative min-h-[86vh] lg:min-h-[91vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FFFFFF] overflow-hidden"
    >
      {/* CINEMATIC "LIVING MEMORIES" ANIMATED BACKGROUND */}
      <HeroLivingMemories mousePos={mousePos} />

      {/* CENTRAL HERO CONTENT (100% PRESERVED TYPOGRAPHY & LAYOUT) */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
        
        {/* Subtle Eyebrow Label with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F6]/90 backdrop-blur-xs border border-[#E8EBE7] text-[#648B72] text-xs font-medium mb-6 shadow-[0_1px_2px_rgba(32,37,34,0.02)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#648B72] animate-pulse"></span>
          <span>Intelligent Event Photo Sharing</span>
        </motion.div>

        {/* Central Full-Width Headline with Word-by-Word Reveal */}
        <div className="space-y-1 sm:space-y-2 mb-7">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#202522] tracking-tight leading-[1.08]"
          >
            Every Event. Every Photo.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-5xl md:text-6xl lg:text-[72px] font-serif italic font-normal text-[#648B72] tracking-tight leading-[1.12]"
          >
            Everyone Finds Their Moments.
          </motion.h2>
        </div>

        {/* Supporting Description with Gentle Fade-Up */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-[19px] text-[#737873] max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Share event photos effortlessly with intelligent photo discovery. Let wedding and event guests find their memories instantly without searching through thousands of photographs.
        </motion.p>

        {/* CTA Buttons with Stagger & Magnetic Hover Response */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12"
        >
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
            onClick={() => onOpenAuthModal('signup')}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#202522] hover:bg-[#333A36] transition-all duration-200 shadow-xs cursor-pointer focus:outline-none"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 text-[#E8EBE7] transform transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <motion.a
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#202522] bg-[#F7F8F6] hover:bg-[#ECEEEA] border border-[#E8EBE7] transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <span>Explore Features</span>
          </motion.a>
        </motion.div>

        {/* Minimal Horizontal Trust Indicators with Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 border-t border-[#E8EBE7]/80 max-w-lg mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#737873]"
        >
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#648B72] shrink-0" />
            <span>Zero guest app installation</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#648B72] shrink-0" />
            <span>Full original quality RAW/JPEG</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
