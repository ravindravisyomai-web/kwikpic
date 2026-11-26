import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { initGlobalScrollTriggers, ScrollTrigger } from './utils/gsapScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AiFaceRecognition from './components/AiFaceRecognition';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SolutionsShowcase from './components/SolutionsShowcase';
import { AuthModal, ImageModal } from './components/Modals';

const SolutionsHub = lazy(() => import('./pages/SolutionsHub'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const UseCasesPage = lazy(() => import('./pages/UseCasesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Homepage Component combining existing landing page sections with GSAP ScrollTrigger
function HomePage({ onOpenAuthModal, onOpenImageModal }) {
  const homeRef = useRef(null);

  useEffect(() => {
    document.title = 'Lumina | Event Photo Sharing & Guest Discovery Platform';
    const cleanup = initGlobalScrollTriggers(homeRef);
    return () => {
      cleanup();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <main ref={homeRef} className="overflow-hidden">
      {/* 1. Full-Width Typography Hero */}
      <Hero onOpenAuthModal={onOpenAuthModal} />

      {/* 2. Interactive Feature Bento Grid */}
      <ProductShowcase
        onOpenAuthModal={onOpenAuthModal}
        onOpenImageModal={onOpenImageModal}
      />

      {/* 3. How It Works 3-Step Visual Journey */}
      <HowItWorks onOpenAuthModal={onOpenAuthModal} />

      {/* 4. Guest Photo Discovery & On-Site QR Sharing */}
      <AiFaceRecognition
        onOpenAuthModal={onOpenAuthModal}
        onOpenImageModal={onOpenImageModal}
      />

      {/* 5. Solutions & Use Cases Showcase */}
      <SolutionsShowcase />

      {/* 6. Minimal Pricing Plans */}
      <Pricing onOpenAuthModal={onOpenAuthModal} />

      {/* 7. Chat-Pill FAQ Accordion */}
      <FAQ />

      {/* 8. Final Conversion CTA */}
      <FinalCTA onOpenAuthModal={onOpenAuthModal} />
    </main>
  );
}

// Scroll Manager: ensures page reloads start at Hero (0, 0) and route/hash changes scroll cleanly
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const resetToTop = () => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    resetToTop();

    if (document.readyState !== 'complete') {
      window.addEventListener('load', resetToTop, { once: true });
      return () => window.removeEventListener('load', resetToTop);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (hash) {
        const targetId = hash.slice(1);
        const timer = setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(timer);
      }
      return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const targetId = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 320);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

// Page Transition Animator Wrapper
function AnimatedRoutes({ onOpenAuthModal, onOpenImageModal }) {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col justify-between"
      >
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center bg-[#FFFFFF] text-xs font-medium text-[#666666]">
              Loading...
            </div>
          }
        >
          <Routes location={location}>
            {/* Main Homepage */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenAuthModal={onOpenAuthModal}
                  onOpenImageModal={onOpenImageModal}
                />
              }
            />

            {/* Solutions Hub: /solutions */}
            <Route
              path="/solutions"
              element={
                <SolutionsHub
                  onOpenAuthModal={onOpenAuthModal}
                />
              }
            />

            {/* Solutions Pages: /solutions/:slug */}
            <Route
              path="/solutions/:slug"
              element={
                <SolutionsPage
                  onOpenAuthModal={onOpenAuthModal}
                  onOpenImageModal={onOpenImageModal}
                />
              }
            />

            {/* Use Cases Pages: /use-cases/:slug */}
            <Route
              path="/use-cases/:slug"
              element={
                <UseCasesPage
                  onOpenAuthModal={onOpenAuthModal}
                  onOpenImageModal={onOpenImageModal}
                />
              }
            />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        {/* Cinematic Dark Watermark Footer */}
        <Footer onOpenAuthModal={onOpenAuthModal} />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signup' });
  const [activeImageModal, setActiveImageModal] = useState(null);

  const handleOpenAuth = (mode = 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-[#FFFFFF] text-[#202020] selection:bg-[#C62828]/15 selection:text-[#202020] relative flex flex-col justify-between">
        {/* Navigation Bar with Single Solutions Mega-Menu Item */}
        <Navbar onOpenAuthModal={handleOpenAuth} />

        {/* Animated Route Viewport */}
        <AnimatedRoutes
          onOpenAuthModal={handleOpenAuth}
          onOpenImageModal={(photo) => setActiveImageModal(photo)}
        />

        {/* Modals */}
        <AuthModal
          isOpen={authModal.isOpen}
          mode={authModal.mode}
          onClose={handleCloseAuth}
          onSwitchMode={(newMode) => setAuthModal({ isOpen: true, mode: newMode })}
        />

        <ImageModal
          photo={activeImageModal}
          onClose={() => setActiveImageModal(null)}
        />
      </div>
    </BrowserRouter>
  );
}
