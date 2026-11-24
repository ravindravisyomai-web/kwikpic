import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable GSAP Utility Functions
 */

export function revealHeading(target, options = {}) {
  if (!target) return;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.85,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: target,
        start: options.start || 'top 85%',
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
    { opacity: 0, y: 25 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: target,
        start: options.start || 'top 88%',
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
    { opacity: 0, scale: 1.06 },
    {
      opacity: 1,
      scale: 1,
      duration: options.duration || 1.1,
      ease: options.ease || 'power2.out',
      scrollTrigger: {
        trigger: target,
        start: options.start || 'top 85%',
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
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: target,
        start: options.start || 'top 85%',
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

  return gsap.fromTo(
    items,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.75,
      stagger: options.stagger || 0.1,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: groupTarget,
        start: options.start || 'top 85%',
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
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.9,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: target,
        start: options.start || 'top 82%',
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
 * - .gsap-scale-card
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
      gsap.fromTo(
        elem,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
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
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 86%',
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
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 88%',
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
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
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
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
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
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
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
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });
  }, scopeRef);

  return () => ctx.revert();
}

export { gsap, ScrollTrigger };
