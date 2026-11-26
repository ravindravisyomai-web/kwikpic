import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Mail, Camera } from 'lucide-react';

export default function Footer({ onOpenAuthModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-[#888888] text-xs pt-16 sm:pt-24 pb-14 overflow-hidden relative border-t border-[#161618]">

      {/* 1. HUGE CINEMATIC RED EMBOSSED LUMINA WORDMARK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 select-none relative">
        {/* Subtle crimson ambient glow behind wordmark */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 58% 60% at 50% 48%, rgba(198, 40, 40, 0.22) 0%, rgba(166, 31, 36, 0.08) 48%, transparent 75%)',
          }}
        />

        <div className="w-full flex items-center justify-center overflow-hidden py-3 relative z-10">
          <div
            aria-label="Lumina"
            className="text-[clamp(4.25rem,17vw,12rem)] font-extrabold tracking-[-0.045em] leading-[0.95] text-center select-none transition-transform duration-500 hover:scale-[1.01]"
            style={{
              backgroundImage:
                'linear-gradient(180deg, #FF7A7A 0%, #E53935 28%, #C62828 60%, #6E1014 88%, #2B0507 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255, 138, 138, 0.28)',
              filter: 'drop-shadow(0 18px 36px rgba(198, 40, 40, 0.32))',
            }}
          >
            Lumina<span style={{ color: '#E53935', WebkitTextStroke: '0px' }}>.</span>
          </div>
        </div>

        {/* Subtle horizontal crimson gradient divider line under brand */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C62828]/45 to-transparent mt-6" />
      </div>

      {/* 2. STRUCTURED MULTI-COLUMN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#1A1A1C] gsap-fade-up">

          {/* Left Column: Brand Statement, Live Status & Social Icons */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3 text-xs text-[#888888] leading-relaxed max-w-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#C62828] flex items-center justify-center text-white shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-white font-bold text-sm tracking-tight">
                  Lumina<span className="text-[#E53935]">.</span>
                </p>
              </div>
              <p>
                Event photo sharing and instant guest photo matching. Built for photographers, studios, and event teams to deliver full-resolution galleries with zero friction.
              </p>
            </div>

            {/* "All systems normal" Semantic Live Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111113] border border-[#222226] text-[#A0A0A5] text-[11px] font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#43866A] animate-pulse shadow-[0_0_8px_rgba(67,134,106,0.7)]"></span>
                <span>All systems normal</span>
              </div>
            </div>

            {/* Rounded Social Icon Buttons */}
            <div className="flex items-center gap-2.5 pt-1 text-[#888888]">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#C62828]/70 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#C62828]/70 transition-all cursor-pointer"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#C62828]/70 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#C62828]/70 transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Columns: Solutions, Use Cases, Platform, Support */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 gsap-stagger-group">

            {/* Column 1: Solutions by Industry */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Solutions</h4>
              <ul className="space-y-2.5 text-xs text-[#888888]">
                <li><Link to="/solutions/photographers" className="hover:text-white transition-colors">Photographers & Studios</Link></li>
                <li><Link to="/solutions/wedding-studios" className="hover:text-white transition-colors">Wedding Professionals</Link></li>
                <li><Link to="/solutions/corporate" className="hover:text-white transition-colors">Corporate Teams</Link></li>
                <li><Link to="/solutions/education" className="hover:text-white transition-colors">Schools & Colleges</Link></li>
                <li><Link to="/solutions" className="text-[#E05252] hover:text-white transition-colors flex items-center gap-1 font-medium"><span>All Solutions</span><ArrowRight className="w-3 h-3" /></Link></li>
              </ul>
            </div>

            {/* Column 2: Event Use Cases */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Use Cases</h4>
              <ul className="space-y-2.5 text-xs text-[#888888]">
                <li><Link to="/use-cases/weddings" className="hover:text-white transition-colors">Weddings & Ceremonies</Link></li>
                <li><Link to="/use-cases/celebrations" className="hover:text-white transition-colors">Birthdays & Parties</Link></li>
                <li><Link to="/use-cases/corporate-events" className="hover:text-white transition-colors">Conferences & Summits</Link></li>
                <li><Link to="/use-cases/sports" className="hover:text-white transition-colors">Sports & Tournaments</Link></li>
                <li><Link to="/use-cases/concerts-festivals" className="hover:text-white transition-colors">Concerts & Festivals</Link></li>
              </ul>
            </div>

            {/* Column 3: Platform & Features */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Platform</h4>
              <ul className="space-y-2.5 text-xs text-[#888888]">
                <li><Link to="/#features" className="hover:text-white transition-colors">Product Showcase</Link></li>
                <li><Link to="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/#ai-matching" className="hover:text-white transition-colors">AI Face Recognition</Link></li>
                <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              </ul>
            </div>

            {/* Column 4: Support & Access */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Support</h4>
              <ul className="space-y-2.5 text-xs text-[#888888]">
                <li><Link to="/#faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><a href="mailto:support@lumina.ai" className="hover:text-white transition-colors flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#E05252]" /><span>Contact Support</span></a></li>
                <li>
                  <button onClick={() => onOpenAuthModal && onOpenAuthModal('login')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Studio Sign In
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenAuthModal && onOpenAuthModal('signup')} className="text-[#E05252] hover:text-white transition-colors cursor-pointer text-left font-medium">
                    Create Free Account
                  </button>
                </li>
                <li><span className="text-[#9A9A9E]">Privacy &amp; GDPR Compliant</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR: Copyright & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9A9E]">

          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Lumina Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Event Photo Sharing &amp; Delivery Platform.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#888888] hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-[#111113]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
