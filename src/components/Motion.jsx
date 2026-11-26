import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const DEFAULT_VIEWPORT = { once: true, amount: 0.05, margin: '0px 0px -40px 0px' };

/**
 * AnimatedSection: Viewport-triggered fade & vertical slide reveal
 */
export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  threshold = 0.05 
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0, y: 0, x: 0 };
    switch (direction) {
      case 'up': return { opacity: 0, y: 16, x: 0 };
      case 'down': return { opacity: 0, y: -16, x: 0 };
      case 'left': return { opacity: 0, x: 16, y: 0 };
      case 'right': return { opacity: 0, x: -16, y: 0 };
      default: return { opacity: 0, y: 16, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: threshold, margin: '0px 0px -40px 0px' }}
      transition={{ 
        duration: shouldReduceMotion ? 0.15 : 0.4, 
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
  staggerDelay = 0.08, 
  threshold = 0.05 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold, margin: '0px 0px -40px 0px' }}
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
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.15 : 0.45,
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
  highlightClassName = 'font-serif italic font-normal text-[#C62828]' 
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
              viewport={DEFAULT_VIEWPORT}
              transition={{
                duration: 0.4,
                delay: index * 0.025,
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
 * RevealImage: Smooth scale & opacity entrance for images
 */
export function RevealImage({ src, alt, className = '', imgClassName = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: shouldReduceMotion ? 1 : 1.03, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={DEFAULT_VIEWPORT}
        transition={{ 
          duration: shouldReduceMotion ? 0.15 : 0.5, 
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
