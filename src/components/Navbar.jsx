import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Camera, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Heart, 
  Building2, 
  GraduationCap, 
  PartyPopper, 
  Trophy, 
  Music,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ onOpenAuthModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsMegaOpen, setSolutionsMegaOpen] = useState(false);
  
  // Mobile accordion states
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsMegaOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // LEFT COLUMN: SOLUTIONS BY INDUSTRY
  const industrySolutions = [
    {
      name: 'Photographers & Studios',
      href: '/solutions/photographers',
      desc: 'Manage event photographs, organize galleries, and deliver memorable client experiences.',
      icon: Camera
    },
    {
      name: 'Wedding Professionals',
      href: '/solutions/wedding-studios',
      desc: 'Simplify wedding photo sharing and help guests discover their special moments.',
      icon: Heart
    },
    {
      name: 'Corporate Teams',
      href: '/solutions/corporate',
      desc: 'Organize corporate event photography and create convenient photo-sharing experiences.',
      icon: Building2
    },
    {
      name: 'Schools & Colleges',
      href: '/solutions/education',
      desc: 'Make campus events, annual functions, and graduation memories easier to discover.',
      icon: GraduationCap
    }
  ];

  // RIGHT COLUMN: SOLUTIONS BY EVENT
  const eventSolutions = [
    {
      name: 'Weddings & Engagements',
      href: '/use-cases/weddings',
      desc: 'Ceremony QR standees, sub-ceremony albums & couple proofing.',
      icon: Heart
    },
    {
      name: 'Birthdays & Celebrations',
      href: '/use-cases/celebrations',
      desc: 'Milestone birthdays, family gatherings & private party albums.',
      icon: PartyPopper
    },
    {
      name: 'Corporate Events & Conferences',
      href: '/use-cases/corporate-events',
      desc: 'Attendee badge QR matching, keynotes & same-day PR sharing.',
      icon: Building2
    },
    {
      name: 'School & College Functions',
      href: '/use-cases/education-events',
      desc: 'Graduation ceremonies, cultural fests & campus photo delivery.',
      icon: GraduationCap
    },
    {
      name: 'Sports Events',
      href: '/use-cases/sports',
      desc: 'High-speed action photography, tournaments & player discovery.',
      icon: Trophy
    },
    {
      name: 'Concerts & Festivals',
      href: '/use-cases/concerts-festivals',
      desc: 'Live stage performances, crowd photos & festival watermarks.',
      icon: Music
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || solutionsMegaOpen
            ? 'bg-white/98 backdrop-blur-md border-b border-[#E8EBE7] py-3.5 shadow-[0_4px_20px_-4px_rgba(32,37,34,0.05)]'
            : 'bg-white py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-8 h-8 rounded-lg bg-[#202522] flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105">
                <Camera className="w-4 h-4 text-[#E8EBE7]" />
              </div>
              <span className="font-bold text-lg tracking-tight text-[#202522] flex items-center">
                Lumina<span className="text-[#648B72] text-xl leading-none">.</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION WITH SINGLE UNIFIED SOLUTIONS MEGA MENU */}
            <nav className="hidden xl:flex items-center gap-8 text-xs font-medium text-[#737873]">
              
              <a href="/#features" className="hover:text-[#202522] transition-colors py-1">
                Features
              </a>

              <a href="/#how-it-works" className="hover:text-[#202522] transition-colors py-1">
                How It Works
              </a>

              {/* SINGLE UNIFIED SOLUTIONS NAVIGATION ITEM WITH TWO-COLUMN MEGA MENU */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionsMegaOpen(true)}
                onMouseLeave={() => setSolutionsMegaOpen(false)}
              >
                <Link
                  to="/solutions"
                  className={`flex items-center gap-1 py-1 transition-colors cursor-pointer focus:outline-none ${
                    solutionsMegaOpen || location.pathname.startsWith('/solutions') || location.pathname.startsWith('/use-cases')
                      ? 'text-[#202522] font-semibold'
                      : 'hover:text-[#202522]'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsMegaOpen ? 'rotate-180 text-[#648B72]' : ''}`} />
                </Link>

                {/* THE UNIFIED 2-COLUMN MEGA MENU CONTAINER */}
                {solutionsMegaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[880px] animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-3xl border border-[#E8EBE7] p-6 shadow-[0_25px_60px_-15px_rgba(32,37,34,0.14)]">
                      
                      {/* Mega Menu Top Header */}
                      <div className="pb-4 mb-5 border-b border-[#E8EBE7] flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-[#202522]">
                            Solutions for Every Moment
                          </h3>
                          <p className="text-xs text-[#737873]">
                            Discover smarter ways to manage, share, and experience event photographs.
                          </p>
                        </div>
                        <Link 
                          to="/solutions" 
                          className="text-xs font-bold text-[#648B72] hover:underline flex items-center gap-1"
                        >
                          <span>Explore All Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Two Column Layout: Industry (Left) & Event Type (Right) */}
                      <div className="grid grid-cols-12 gap-8 pb-5 border-b border-[#E8EBE7]">
                        
                        {/* LEFT COLUMN: SOLUTIONS BY INDUSTRY */}
                        <div className="col-span-5 space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#737873] block mb-2">
                            SOLUTIONS BY INDUSTRY
                          </span>

                          <div className="space-y-2">
                            {industrySolutions.map((item) => {
                              const Icon = item.icon;
                              const isActive = location.pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  className={`p-3 rounded-xl border transition-all flex items-start gap-3 group/item ${
                                    isActive 
                                      ? 'bg-[#FAFBF9] border-[#202522] ring-1 ring-[#202522]' 
                                      : 'bg-white hover:bg-[#F7F8F6] border-transparent hover:border-[#E8EBE7]'
                                  }`}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-[#F7F8F6] border border-[#E8EBE7] flex items-center justify-center shrink-0 text-[#202522] group-hover/item:bg-[#202522] group-hover/item:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-xs text-[#202522] group-hover/item:text-[#648B72] transition-colors">
                                      {item.name}
                                    </h4>
                                    <p className="text-[11px] text-[#737873] leading-snug mt-0.5 line-clamp-2">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* RIGHT COLUMN: SOLUTIONS BY EVENT (USE CASES) */}
                        <div className="col-span-7 space-y-3 pl-3 border-l border-[#E8EBE7]">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#737873] block mb-2">
                            SOLUTIONS BY EVENT
                          </span>

                          <div className="grid grid-cols-2 gap-2.5">
                            {eventSolutions.map((item) => {
                              const Icon = item.icon;
                              const isActive = location.pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  className={`p-2.5 rounded-xl border transition-all flex items-start gap-2.5 group/item ${
                                    isActive 
                                      ? 'bg-[#FAFBF9] border-[#202522] ring-1 ring-[#202522]' 
                                      : 'bg-white hover:bg-[#F7F8F6] border-transparent hover:border-[#E8EBE7]'
                                  }`}
                                >
                                  <div className="w-7 h-7 rounded-lg bg-[#F7F8F6] border border-[#E8EBE7] flex items-center justify-center shrink-0 text-[#202522] group-hover/item:bg-[#202522] group-hover/item:text-white transition-colors">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-[11px] text-[#202522] group-hover/item:text-[#648B72] transition-colors leading-tight">
                                      {item.name}
                                    </h4>
                                    <p className="text-[10px] text-[#737873] leading-snug mt-0.5 line-clamp-1">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* Mega Menu Bottom Callout */}
                      <div className="pt-3.5 flex items-center justify-between text-xs text-[#737873]">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#648B72]" /> Tailored neural face matching & instant QR distribution
                        </span>
                        <Link 
                          to="/solutions" 
                          className="font-bold text-[#202522] hover:text-[#648B72] flex items-center gap-1"
                        >
                          <span>Explore All Solutions →</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              <Link to="/solutions/photographers" className="hover:text-[#202522] transition-colors py-1">
                For Photographers
              </Link>

              <a href="/#pricing" className="hover:text-[#202522] transition-colors py-1">
                Pricing
              </a>

              <a href="/#faq" className="hover:text-[#202522] transition-colors py-1">
                FAQ
              </a>
            </nav>

            {/* RIGHT: Sign In & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => onOpenAuthModal('login')}
                className="text-xs font-semibold text-[#737873] hover:text-[#202522] transition-colors cursor-pointer px-2 py-1.5 focus:outline-none"
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuthModal('signup')}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#202522] hover:bg-[#333A36] transition-all duration-200 shadow-xs cursor-pointer active:scale-98 focus:outline-none"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8EBE7] transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#202522] hover:bg-[#F7F8F6] rounded-lg focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE COLLAPSIBLE DRAWER (Single Unified Solutions Accordion) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-white/98 backdrop-blur-md pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4 pt-2">
            
            <div className="flex flex-col space-y-1 border-b border-[#E8EBE7] pb-3">
              <a 
                href="/#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202522]"
              >
                Features
              </a>
              <a 
                href="/#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202522]"
              >
                How It Works
              </a>
            </div>

            {/* UNIFIED SOLUTIONS MOBILE ACCORDION */}
            <div className="border-b border-[#E8EBE7] pb-3">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full py-2 flex items-center justify-between text-sm font-bold text-[#202522]"
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180 text-[#648B72]' : ''}`} />
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-2 py-2 space-y-4">
                  {/* Category 1: By Industry */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#737873]">
                      BY INDUSTRY
                    </span>
                    {industrySolutions.map((sol) => (
                      <Link
                        key={sol.href}
                        to={sol.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-[#202522] font-medium hover:text-[#648B72]"
                      >
                        {sol.name}
                      </Link>
                    ))}
                  </div>

                  {/* Category 2: By Event */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E8EBE7]/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#737873]">
                      BY EVENT
                    </span>
                    {eventSolutions.map((uc) => (
                      <Link
                        key={uc.href}
                        to={uc.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-[#202522] font-medium hover:text-[#648B72]"
                      >
                        {uc.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block pt-2 text-xs font-bold text-[#648B72]"
                  >
                    Explore All Solutions →
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <Link 
                to="/solutions/photographers" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202522]"
              >
                For Photographers
              </Link>
              <a 
                href="/#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202522]"
              >
                Pricing
              </a>
              <a 
                href="/#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202522]"
              >
                FAQ
              </a>
            </div>

          </div>

          <div className="space-y-2.5 pt-6 border-t border-[#E8EBE7]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal('login');
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#202522] bg-[#F7F8F6] rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal('signup');
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#202522] rounded-lg flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8EBE7]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
