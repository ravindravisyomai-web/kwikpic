import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenAuthModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-[#7E7E82] text-xs pt-16 sm:pt-24 pb-14 overflow-hidden relative border-t border-[#161618]">

      {/* 1. HUGE CINEMATIC 3D EMBOSSED BRAND WATERMARK (RESEND-INSPIRED) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 select-none relative">
        <div className="w-full flex items-center justify-center overflow-hidden py-2">

          {/* Custom 3D Glossy Chrome / Beveled Typography */}
          <div className="relative w-full flex items-center justify-center">

            {/* SVG Filter for 3D Bevel and Specular Light Reflection */}
            <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
              <defs>
                <filter id="resend-chrome" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                  <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="24" lightingColor="#ffffff" result="specOut">
                    <fePointLight x="250" y="-100" z="220" />
                  </feSpecularLighting>
                  <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                  <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
              </defs>
            </svg>

            {/* Background deep dark ambient shadow */}
            <span
              className="absolute text-[21vw] sm:text-[20vw] lg:text-[220px] font-black tracking-tighter text-[#0A0A0C] leading-none pointer-events-none select-none text-center block w-full blur-sm"
            >
              Lumina
            </span>

            {/* Foreground 3D Chrome Embossed Glass Watermark */}
            <span
              className="text-[21vw] sm:text-[20vw] lg:text-[220px] font-black tracking-tighter leading-none pointer-events-none select-none text-center block w-full relative z-10"
              style={{
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                WebkitTextStroke: '1.8px rgba(255, 255, 255, 0.45)',
                color: 'transparent',
                backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(200, 205, 210, 0.25) 30%, rgba(30, 32, 35, 0.8) 65%, rgba(10, 10, 12, 0.98) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 35px rgba(255, 255, 255, 0.08)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.9))',
                textShadow: '0 2px 4px rgba(255,255,255,0.3)'
              }}
            >
              Lumina
            </span>
          </div>

        </div>

        {/* Subtle horizontal gradient divider line under brand */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#242426] to-transparent mt-4" />
      </div>

      {/* 2. STRUCTURED MULTI-COLUMN CONTENT (Faithful to Image 4) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#1A1A1C] gsap-fade-up">

          {/* Left Column: Address, System Status & Social Icons */}
          <div className="md:col-span-4 space-y-6">

            {/* Physical Address */}
            <div className="space-y-1.5 text-xs text-[#8E8E93] leading-relaxed">
              <p>2261 Market Street #5039</p>
              <p>San Francisco, CA 94114</p>
            </div>

            {/* "All systems normal" Live Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111113] border border-[#222226] text-[#A0A0A5] text-[11px] font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse shadow-[0_0_8px_rgba(48,209,88,0.7)]"></span>
                <span>All systems normal</span>
              </div>
            </div>

            {/* Rounded Social Icon Buttons */}
            <div className="flex items-center gap-2.5 pt-1 text-[#8E8E93]">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#3E3E44] transition-all cursor-pointer"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#3E3E44] transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111113] border border-[#222226] flex items-center justify-center hover:text-white hover:border-[#3E3E44] transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns: Documentation, Resources, Company, Legal */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 gsap-stagger-group">

            {/* Column 1: Documentation */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Documentation</h4>
              <ul className="space-y-2.5 text-xs text-[#8E8E93]">
                <li><Link to="/solutions/photographers" className="hover:text-white transition-colors">Getting Started</Link></li>
                <li><Link to="/solutions/wedding-studios" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link to="/solutions/corporate" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="/solutions/education" className="hover:text-white transition-colors">Examples</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">SDKs</Link></li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Resources</h4>
              <ul className="space-y-2.5 text-xs text-[#8E8E93]">
                <li><Link to="/use-cases/weddings" className="hover:text-white transition-colors">Changelog</Link></li>
                <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/#faq" className="hover:text-white transition-colors">Status</a></li>
                <li><Link to="/use-cases/corporate-events" className="hover:text-white transition-colors">Webhooks</Link></li>
                <li><Link to="/use-cases/concerts-festivals" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Company</h4>
              <ul className="space-y-2.5 text-xs text-[#8E8E93]">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="mailto:support@lumina.ai" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/#testimonials" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand</a></li>
                <li>
                  <button onClick={() => onOpenAuthModal && onOpenAuthModal('login')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Studio Sign In
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-3.5 gsap-stagger-item">
              <h4 className="font-semibold text-white text-xs tracking-tight">Legal</h4>
              <ul className="space-y-2.5 text-xs text-[#8E8E93]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Biometric Data Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security & SLA</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* 3. BOTTOM BAR: Visit site pill & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#636366]">

          {/* Visit site link pill (Faithful to lower-left in Resend screenshot) */}
          <div className="flex items-center gap-4">
            <a
              href="https://lumina.ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111113] border border-[#222226] text-[#A0A0A5] hover:text-white hover:border-[#3E3E44] transition-all cursor-pointer text-xs"
            >
              <span>Visit site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span>© {new Date().getFullYear()} Lumina Technologies Inc.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
