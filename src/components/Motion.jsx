import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * AnimatedSection: Viewport-triggered fade & vertical slide reveal
 */
export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  threshold = 0.15 
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0, y: 0, x: 0 };
    switch (direction) {
      case 'up': return { opacity: 0, y: 35, x: 0 };
      case 'down': return { opacity: 0, y: -35, x: 0 };
      case 'left': return { opacity: 0, x: 35, y: 0 };
      case 'right': return { opacity: 0, x: -35, y: 0 };
      default: return { opacity: 0, y: 30, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ 
        duration: shouldReduceMotion ? 0.3 : 0.7, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer: Wraps children with staggered entrance timing
 */
export function StaggerContainer({ 
  children, 
  className = '', 
  staggerDelay = 0.1, 
  threshold = 0.15 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem: Child of StaggerContainer
 */
export function StaggerItem({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedText: Word-by-word reveal for headlines
 */
export function AnimatedText({ 
  text, 
  className = '', 
  highlightWords = [],
  highlightClassName = 'font-serif italic font-normal text-[#648B72]' 
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={index} className="inline-block overflow-hidden mr-[0.26em] last:mr-0 align-top">
            <motion.span
              className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.045,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/**
 * RevealImage: Smooth scale & clip-path entrance for images
 */
export function RevealImage({ src, alt, className = '', imgClassName = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: shouldReduceMotion ? 1 : 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          duration: 0.9, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-103 ${imgClassName}`}
      />
    </div>
  );
}

/**
 * MagneticButton: Gentle cursor-following or smooth hover tactile response
 */
export function MagneticButton({ children, className = '', onClick, type = 'button' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
