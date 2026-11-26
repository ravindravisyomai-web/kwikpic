import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

const DEFAULT_EASE = 'power3.out';
const DEFAULT_START = 'top 95%';
const CARD_START = 'top 94%';

/**
 * Reusable GSAP Utility Functions
 */

export function revealHeading(target, options = {}) {
  if (!target) return;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.4,
      delay: options.delay || 0,
      ease: options.ease || DEFAULT_EASE,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: target,
        start: options.start || DEFAULT_START,
        once: true,
        ...options.scrollTrigger,
      },
    }
  );
}

export function revealText(target, options = {}) {
  if (!target) return;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 12 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.35,
      delay: options.delay ?? 0.06,
      ease: options.ease || DEFAULT_EASE,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: target,
        start: options.start || DEFAULT_START,
        once: true,
        ...options.scrollTrigger,
      },
    }
  );
}

export function revealImage(target, options = {}) {
  if (!target) return;
  return gsap.fromTo(
    target,
    { opacity: 0, scale: 1.03 },
    {
      opacity: 1,
      scale: 1,
      duration: options.duration || 0.5,
      ease: options.ease || 'power2.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: target,
        start: options.start || CARD_START,
        once: true,
        ...options.scrollTrigger,
      },
    }
  );
}

export function revealCard(target, options = {}) {
  if (!target) return;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 18 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.45,
      ease: options.ease || DEFAULT_EASE,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: target,
        start: options.start || CARD_START,
        once: true,
        ...options.scrollTrigger,
      },
    }
  );
}

export function revealStagger(groupTarget, itemSelector = '.gsap-stagger-item', options = {}) {
  if (!groupTarget) return;
  const items = groupTarget.querySelectorAll ? groupTarget.querySelectorAll(itemSelector) : [];
  if (!items.length) return;

  const staggerStep = options.stagger ?? (items.length > 5 ? 0.05 : 0.08);

  return gsap.fromTo(
    items,
    { opacity: 0, y: 18 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.45,
      stagger: staggerStep,
      ease: options.ease || DEFAULT_EASE,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: groupTarget,
        start: options.start || CARD_START,
        once: true,
        ...options.scrollTrigger,
      },
    }
  );
}

export function revealSection(target, options = {}) {
  if (!target) return;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 18 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.4,
      ease: options.ease || DEFAULT_EASE,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: target,
        start: options.start || DEFAULT_START,
        once: true,
        ...options.scrollTrigger,
      },
    }
  );
}

export function revealParallax(target, options = {}) {
  if (!target) return;
  const distance = options.distance || -40;
  return gsap.to(target, {
    y: distance,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: options.scrub || true,
      ...options.scrollTrigger,
    },
  });
}

/**
 * Initialize global scroll triggers and utility reveal classes:
 * - .gsap-fade-up
 * - .gsap-reveal-heading
 * - .gsap-reveal-text
 * - .gsap-stagger-group > .gsap-stagger-item
 * - .gsap-reveal-image
 * - .gsap-reveal-card
 * - .gsap-draw-line
 * - .gsap-parallax
 */
export function initGlobalScrollTriggers(scopeRef) {
  if (typeof window === 'undefined') return () => { };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return () => { };

  const ctx = gsap.context(() => {
    // 1. Standalone Fade Up Elements (.gsap-fade-up)
    const fadeUps = gsap.utils.toArray('.gsap-fade-up');
    fadeUps.forEach((elem) => {
      // Avoid double-animating wrapper divs that already contain heading/text reveals
      if (elem.querySelector('.gsap-reveal-heading, .gsap-reveal-text')) {
        return;
      }
      gsap.fromTo(
        elem,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: DEFAULT_EASE,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: elem,
            start: DEFAULT_START,
            once: true,
          },
        }
      );
    });

    // 2. Heading Reveals (.gsap-reveal-heading)
    const headings = gsap.utils.toArray('.gsap-reveal-heading');
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: DEFAULT_EASE,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: heading,
            start: DEFAULT_START,
            once: true,
          },
        }
      );
    });

    // 3. Text & Description Reveals (.gsap-reveal-text)
    const textBlocks = gsap.utils.toArray('.gsap-reveal-text');
    textBlocks.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          delay: 0.06,
          ease: DEFAULT_EASE,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: text,
            start: DEFAULT_START,
            once: true,
          },
        }
      );
    });

    // 4. Staggered Groups (.gsap-stagger-group > .gsap-stagger-item)
    const staggerGroups = gsap.utils.toArray('.gsap-stagger-group');
    staggerGroups.forEach((group) => {
      const items = group.querySelectorAll('.gsap-stagger-item');
      if (items.length > 0) {
        const staggerStep = items.length > 5 ? 0.05 : 0.08;
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: staggerStep,
            ease: DEFAULT_EASE,
            clearProps: 'transform',
            scrollTrigger: {
              trigger: group,
              start: CARD_START,
              once: true,
            },
          }
        );
      }
    });

    // 5. Individual Card Reveals (.gsap-reveal-card)
    const cards = gsap.utils.toArray('.gsap-reveal-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: DEFAULT_EASE,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: card,
            start: CARD_START,
            once: true,
          },
        }
      );
    });

    // 6. Image Scale & Clip Reveals (.gsap-reveal-image)
    const images = gsap.utils.toArray('.gsap-reveal-image');
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 1.03 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: img,
            start: CARD_START,
            once: true,
          },
        }
      );
    });

    // 7. Parallax Background & Accent Elements (.gsap-parallax)
    const parallaxes = gsap.utils.toArray('.gsap-parallax');
    parallaxes.forEach((p) => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        gsap.to(p, {
          y: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: p,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });

    // 8. Line Drawing Animations (.gsap-draw-line)
    const lines = gsap.utils.toArray('.gsap-draw-line');
    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.4,
          ease: DEFAULT_EASE,
          scrollTrigger: {
            trigger: line,
            start: DEFAULT_START,
            once: true,
          },
        }
      );
    });
  }, scopeRef);

  return () => ctx.revert();
}

export { gsap, ScrollTrigger };
