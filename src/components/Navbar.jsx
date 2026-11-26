import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Camera, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Heart, 
  Building2, 
  GraduationCap, 
  PartyPopper, 
  Trophy, 
  Music
} from 'lucide-react';

export default function Navbar({ onOpenAuthModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsMegaOpen, setSolutionsMegaOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      if (location.pathname === '/' && window.scrollY < 250) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Scroll-spy for homepage sections
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['features', 'how-it-works', 'pricing', 'faq'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsMegaOpen(false);
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
            ? 'bg-white/98 backdrop-blur-md border-b border-[#E8E8E8] py-3.5 shadow-[0_4px_20px_-4px_rgba(32,32,32,0.05)]'
            : 'bg-white py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-8 h-8 rounded-lg bg-[#C62828] group-hover:bg-[#A61F24] flex items-center justify-center text-white transition-all duration-200 group-hover:scale-105 shadow-xs">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-[#202020] flex items-center">
                Lumina<span className="text-[#C62828] text-xl leading-none">.</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION WITH SINGLE UNIFIED SOLUTIONS MEGA MENU */}
            <nav className="hidden xl:flex items-center gap-8 text-xs font-medium text-[#666666]">
              
              <a
                href="/#features"
                className={`transition-colors py-1 relative ${
                  activeSection === 'features'
                    ? 'text-[#C62828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C62828] after:rounded-full'
                    : 'hover:text-[#C62828]'
                }`}
              >
                Features
              </a>

              <a
                href="/#how-it-works"
                className={`transition-colors py-1 relative ${
                  activeSection === 'how-it-works'
                    ? 'text-[#C62828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C62828] after:rounded-full'
                    : 'hover:text-[#C62828]'
                }`}
              >
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
                  className={`flex items-center gap-1 py-1 transition-colors cursor-pointer focus:outline-none relative ${
                    solutionsMegaOpen ||
                    location.pathname === '/solutions' ||
                    (location.pathname.startsWith('/solutions/') && location.pathname !== '/solutions/photographers') ||
                    location.pathname.startsWith('/use-cases')
                      ? 'text-[#C62828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C62828] after:rounded-full'
                      : 'hover:text-[#C62828]'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsMegaOpen ? 'rotate-180 text-[#C62828]' : ''}`} />
                </Link>

                {/* THE UNIFIED 2-COLUMN MEGA MENU CONTAINER */}
                {solutionsMegaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[880px] animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-3xl border border-[#E8E8E8] p-6 shadow-[0_25px_60px_-15px_rgba(32,32,32,0.14)]">
                      
                      {/* Mega Menu Top Header */}
                      <div className="pb-4 mb-5 border-b border-[#E8E8E8] flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-[#202020]">
                            Solutions for Every Moment
                          </h3>
                          <p className="text-xs text-[#666666]">
                            Discover smarter ways to manage, share, and experience event photographs.
                          </p>
                        </div>
                        <Link 
                          to="/solutions" 
                          className="text-xs font-bold text-[#C62828] hover:text-[#A61F24] hover:underline flex items-center gap-1"
                        >
                          <span>Explore All Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Two Column Layout: Industry (Left) & Event Type (Right) */}
                      <div className="grid grid-cols-12 gap-8 pb-5 border-b border-[#E8E8E8]">
                        
                        {/* LEFT COLUMN: SOLUTIONS BY INDUSTRY */}
                        <div className="col-span-5 space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block mb-2">
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
                                      ? 'bg-[#FFF5F5] border-[#C62828] ring-1 ring-[#C62828]' 
                                      : 'bg-white hover:bg-[#FFF5F5]/60 border-transparent hover:border-[#FCEBEC]'
                                  }`}
                                >
                                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                                    isActive
                                      ? 'bg-[#C62828] border-[#C62828] text-white'
                                      : 'bg-[#F7F7F7] border-[#E8E8E8] text-[#202020] group-hover/item:bg-[#C62828] group-hover/item:border-[#C62828] group-hover/item:text-white'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className={`font-bold text-xs transition-colors ${
                                      isActive ? 'text-[#C62828]' : 'text-[#202020] group-hover/item:text-[#C62828]'
                                    }`}>
                                      {item.name}
                                    </h4>
                                    <p className="text-[11px] text-[#666666] leading-snug mt-0.5 line-clamp-2">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* RIGHT COLUMN: SOLUTIONS BY EVENT (USE CASES) */}
                        <div className="col-span-7 space-y-3 pl-3 border-l border-[#E8E8E8]">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block mb-2">
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
                                      ? 'bg-[#FFF5F5] border-[#C62828] ring-1 ring-[#C62828]' 
                                      : 'bg-white hover:bg-[#FFF5F5]/60 border-transparent hover:border-[#FCEBEC]'
                                  }`}
                                >
                                  <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                                    isActive
                                      ? 'bg-[#C62828] border-[#C62828] text-white'
                                      : 'bg-[#F7F7F7] border-[#E8E8E8] text-[#202020] group-hover/item:bg-[#C62828] group-hover/item:border-[#C62828] group-hover/item:text-white'
                                  }`}>
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <h4 className={`font-bold text-[11px] transition-colors leading-tight ${
                                      isActive ? 'text-[#C62828]' : 'text-[#202020] group-hover/item:text-[#C62828]'
                                    }`}>
                                      {item.name}
                                    </h4>
                                    <p className="text-[10px] text-[#666666] leading-snug mt-0.5 line-clamp-1">
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
                      <div className="pt-3.5 flex items-center justify-between text-xs text-[#666666]">
                        <span className="flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5 text-[#C62828]" /> Fast face matching &amp; instant QR photo sharing for every event
                        </span>
                        <Link 
                          to="/solutions" 
                          className="font-bold text-[#202020] hover:text-[#C62828] flex items-center gap-1 transition-colors"
                        >
                          <span>Explore All Solutions →</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/solutions/photographers"
                className={`transition-colors py-1 relative ${
                  location.pathname === '/solutions/photographers'
                    ? 'text-[#C62828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C62828] after:rounded-full'
                    : 'hover:text-[#C62828]'
                }`}
              >
                For Photographers
              </Link>

              <a
                href="/#pricing"
                className={`transition-colors py-1 relative ${
                  activeSection === 'pricing'
                    ? 'text-[#C62828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C62828] after:rounded-full'
                    : 'hover:text-[#C62828]'
                }`}
              >
                Pricing
              </a>

              <a
                href="/#faq"
                className={`transition-colors py-1 relative ${
                  activeSection === 'faq'
                    ? 'text-[#C62828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C62828] after:rounded-full'
                    : 'hover:text-[#C62828]'
                }`}
              >
                FAQ
              </a>
            </nav>

            {/* RIGHT: Sign In & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => onOpenAuthModal('login')}
                className="text-xs font-semibold text-[#666666] hover:text-[#C62828] transition-colors cursor-pointer px-2 py-1.5 focus:outline-none"
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuthModal('signup')}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] transition-all duration-200 shadow-xs cursor-pointer active:scale-98 focus:outline-none"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/90 transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#202020] hover:bg-[#F7F7F7] hover:text-[#C62828] rounded-lg focus:outline-none transition-colors"
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
            
            <div className="flex flex-col space-y-1 border-b border-[#E8E8E8] pb-3">
              <a 
                href="/#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202020] hover:text-[#C62828] transition-colors"
              >
                Features
              </a>
              <a 
                href="/#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202020] hover:text-[#C62828] transition-colors"
              >
                How It Works
              </a>
            </div>

            {/* UNIFIED SOLUTIONS MOBILE ACCORDION */}
            <div className="border-b border-[#E8E8E8] pb-3">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full py-2 flex items-center justify-between text-sm font-bold text-[#202020]"
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180 text-[#C62828]' : ''}`} />
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-2 py-2 space-y-4">
                  {/* Category 1: By Industry */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                      BY INDUSTRY
                    </span>
                    {industrySolutions.map((sol) => (
                      <Link
                        key={sol.href}
                        to={sol.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-[#202020] font-medium hover:text-[#C62828]"
                      >
                        {sol.name}
                      </Link>
                    ))}
                  </div>

                  {/* Category 2: By Event */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E8E8E8]/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                      BY EVENT
                    </span>
                    {eventSolutions.map((uc) => (
                      <Link
                        key={uc.href}
                        to={uc.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-[#202020] font-medium hover:text-[#C62828]"
                      >
                        {uc.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block pt-2 text-xs font-bold text-[#C62828]"
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
                className="py-2 text-sm font-semibold text-[#202020] hover:text-[#C62828]"
              >
                For Photographers
              </Link>
              <a 
                href="/#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202020] hover:text-[#C62828]"
              >
                Pricing
              </a>
              <a 
                href="/#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#202020] hover:text-[#C62828]"
              >
                FAQ
              </a>
            </div>

          </div>

          <div className="space-y-2.5 pt-6 border-t border-[#E8E8E8]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal('login');
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#202020] bg-white border border-[#E8E8E8] hover:border-[#C62828] hover:text-[#C62828] rounded-lg transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal('signup');
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
