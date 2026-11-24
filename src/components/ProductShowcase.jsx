import React, { useState } from 'react';
import AndroidDeviceFrame from './AndroidDeviceFrame';
import {
  Image as ImageIcon,
  Sparkles,
  QrCode,
  LayoutDashboard,
  Download,
  Share2,
  Search,
  Filter,
  ZoomIn,
  CheckCircle2,
  UploadCloud,
  Check,
  Eye,
  ArrowRight,
  FolderOpen,
  Calendar,
  Smartphone,
  Copy,
  ChevronRight,
  Heart,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function ProductShowcase({ onOpenAuthModal, onOpenImageModal }) {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'ai-discovery' | 'qr-sharing' | 'dashboard'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeViewRole, setActiveViewRole] = useState('guest'); // 'guest' | 'host'

  const tabs = [
    { id: 'gallery', label: 'Event Gallery', icon: ImageIcon },
    { id: 'ai-discovery', label: 'AI Discovery', icon: Sparkles },
    { id: 'qr-sharing', label: 'QR Sharing', icon: QrCode },
    { id: 'dashboard', label: 'Photographer Dashboard', icon: LayoutDashboard },
  ];

  const galleryCategories = ['All', 'Ceremony', 'Portraits', 'Candid', 'Decor'];

  const filteredGalleryPhotos = selectedCategory === 'All'
    ? samplePhotos.gallery.slice(0, 6)
    : samplePhotos.gallery.slice(0, 6).filter((_, idx) => (selectedCategory === 'Ceremony' ? idx % 2 === 0 : idx % 2 !== 0));

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="features" className="py-24 bg-[#FFFFFF] border-b border-[#E8EBE7] relative overflow-hidden">

      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#F7F8F6] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 gsap-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F6] border border-[#E8EBE7] text-[#648B72] text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#648B72]"></span>
            <span>Interactive Product Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#202522] tracking-tight leading-[1.15] gsap-reveal-heading">
            See the Platform in <span className="text-[#648B72] font-serif italic font-normal">Action</span>
          </h2>

          <p className="text-base sm:text-lg text-[#737873] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            Everything you need to capture, organize, discover, and share event memories — all in one place.
          </p>
        </div>

        {/* 2. INTERACTIVE PRODUCT NAVIGATION */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 no-scrollbar gsap-fade-up">
          <div className="inline-flex p-1.5 bg-[#F7F8F6] rounded-2xl border border-[#E8EBE7] shadow-[0_2px_8px_-2px_rgba(32,37,34,0.04)]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${isActive
                    ? 'bg-[#202522] text-white shadow-xs'
                    : 'text-[#737873] hover:text-[#202522] hover:bg-white/60'
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#648B72]' : 'text-[#737873]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. LARGE PREMIUM APPLICATION PREVIEW CONTAINER */}
        <div className="bg-white rounded-3xl border border-[#E8EBE7] soft-elevated-shadow overflow-hidden transition-all duration-300 gsap-reveal-card">

          {/* Minimal Application Window Header */}
          <div className="bg-[#FAFBF9] px-4 sm:px-6 py-3.5 border-b border-[#E8EBE7] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8EBE7]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8EBE7]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8EBE7]"></span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#737873] font-mono bg-white px-3 py-1 rounded-md border border-[#E8EBE7]">
                <span className="text-[#202522] font-semibold">lumina.app</span>
                <span>/</span>
                <span>events</span>
                <span>/</span>
                <span className="text-[#648B72] font-semibold">{activeTab}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#648B72] font-medium bg-[#648B72]/10 px-2.5 py-0.5 rounded-full border border-[#648B72]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#648B72] animate-pulse"></span>
                <span>Synced & Live</span>
              </span>
              <button
                onClick={() => onOpenAuthModal('signup')}
                className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-[#202522] hover:text-[#648B72] transition-colors"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* APPLICATION VIEW CONTENT */}
          <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-[520px]">

            {/* TAB 1: EVENT GALLERY */}
            {activeTab === 'gallery' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8EBE7] bg-[#F7F8F6]">
                  <div className="h-32 sm:h-44 w-full relative">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80"
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 sm:left-6 text-white flex flex-col sm:flex-row sm:items-end justify-between right-4 sm:right-6">
                      <div>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          Royal Destination Wedding
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                          Aarav & Meera Nuptials
                        </h3>
                        <p className="text-xs text-slate-200 flex items-center gap-2 mt-0.5">
                          <Calendar className="w-3.5 h-3.5" /> Udaipur Palace • 2,840 Original Photos • 640 Guests
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-3 sm:mt-0">
                        <button
                          onClick={handleCopyLink}
                          className="px-3 py-1.5 rounded-lg bg-white text-[#202522] text-xs font-semibold shadow-xs hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                        >
                          <Share2 className="w-3.5 h-3.5 text-[#648B72]" />
                          <span>{copiedLink ? 'Link Copied!' : 'Share Gallery'}</span>
                        </button>
                        <button
                          onClick={() => onOpenAuthModal('signup')}
                          className="px-3.5 py-1.5 rounded-lg bg-[#202522] text-white text-xs font-semibold shadow-xs hover:bg-[#333A36] transition-colors flex items-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5 text-[#E8EBE7]" />
                          <span className="hidden sm:inline">Download RAWs</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E8EBE7]">
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                    {galleryCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${selectedCategory === cat
                          ? 'bg-[#202522] text-white'
                          : 'bg-[#F7F8F6] text-[#737873] hover:text-[#202522] hover:bg-[#ECEEEA]'
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#737873]">
                    <span className="font-medium text-[#202522]">Showing 2,840 photos</span>
                    <span>•</span>
                    <span>Sorted by EXIF Time</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                  {filteredGalleryPhotos.map((photo, i) => (
                    <div
                      key={photo.id || i}
                      onClick={() => onOpenImageModal && onOpenImageModal(photo)}
                      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-[#F7F8F6] border border-[#E8EBE7] cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-between">
                        <div className="flex justify-end">
                          <span className="p-1.5 rounded-full bg-white/90 text-[#202522] shadow-xs">
                            <ZoomIn className="w-3.5 h-3.5" />
                          </span>
                        </div>
                        <div className="text-white">
                          <p className="text-xs font-semibold truncate">{photo.title}</p>
                          <p className="text-[10px] text-slate-300">{photo.location} • {photo.matches} matches</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: AI DISCOVERY */}
            {activeTab === 'ai-discovery' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-[#FAFBF9] p-4 rounded-2xl border border-[#E8EBE7] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#202522]">
                      Intelligent Facial Matching Engine
                    </h4>
                    <p className="text-xs text-[#737873]">
                      Edge neural geometry indexes 128 landmarks. Guests find their photos in under 3 seconds.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#648B72] bg-[#648B72]/15 px-3 py-1 rounded-full border border-[#648B72]/20">
                      99.4% Verified Precision
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 bg-[#F7F8F6] p-5 rounded-2xl border border-[#E8EBE7] text-center space-y-3">
                    <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-[#648B72] shadow-sm">
                      <img
                        src={samplePhotos.aiMatchingDemo.guestSelfie}
                        alt="Guest Selfie"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#648B72] text-white p-1 rounded-full shadow-xs">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-[#202522]">{samplePhotos.aiMatchingDemo.guestName}</h5>
                      <p className="text-[11px] text-[#737873]">Guest Selfie • Android Chrome</p>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl border border-[#E8EBE7] text-[11px] text-[#202522] font-medium flex items-center justify-between">
                      <span>Matching Query:</span>
                      <span className="text-[#648B72] font-bold">2.1s search</span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#202522]">
                        38 Matching Photographs Found Across 2,840 Event Shots
                      </span>
                      <span className="text-[#648B72] font-semibold text-[11px]">
                        Personal Album Ready
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {samplePhotos.aiMatchingDemo.matchedPhotos.map((item, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-xl overflow-hidden aspect-square bg-[#F7F8F6] border border-[#E8EBE7] group cursor-pointer"
                        >
                          <img
                            src={item.url}
                            alt="Matched"
                            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                          />
                          <div className="absolute top-1.5 right-1.5 bg-white text-[#202522] text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs border border-[#E8EBE7]">
                            {item.confidence}
                          </div>
                          <div className="absolute inset-x-0 bottom-0 bg-white/95 p-1.5 text-[9px] text-[#202522] font-medium truncate border-t border-[#E8EBE7]">
                            {item.tag}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 p-3 bg-[#FAFBF9] rounded-xl border border-[#E8EBE7] flex items-center justify-between text-xs">
                      <span className="text-[#737873] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#648B72]" />
                        <span>Facial embeddings created on-the-fly and strictly private.</span>
                      </span>
                      <button
                        onClick={() => onOpenAuthModal('signup')}
                        className="text-[#648B72] font-bold hover:underline cursor-pointer"
                      >
                        Try with Sample Selfie →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: QR SHARING PREVIEW WITH REALISTIC ANDROID SMARTPHONE */}
            {activeTab === 'qr-sharing' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8EBE7]">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-[#202522]">Frictionless Physical-To-Digital QR Access</h4>
                    <p className="text-xs text-[#737873]">Zero app download. Native Android camera scans open event gallery instantly.</p>
                  </div>

                  <div className="inline-flex p-1 bg-[#F7F8F6] rounded-lg border border-[#E8EBE7] text-xs">
                    <button
                      onClick={() => setActiveViewRole('guest')}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${activeViewRole === 'guest' ? 'bg-white text-[#202522] shadow-xs' : 'text-[#737873]'
                        }`}
                    >
                      Android Guest Screen
                    </button>
                    <button
                      onClick={() => setActiveViewRole('host')}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${activeViewRole === 'host' ? 'bg-white text-[#202522] shadow-xs' : 'text-[#737873]'
                        }`}
                    >
                      Table Standee Preview
                    </button>
                  </div>
                </div>

                {activeViewRole === 'guest' ? (
                  /* Authentic Android Mobile Viewport */
                  <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-3">

                    {/* Flagship Android Frame */}
                    <AndroidDeviceFrame className="w-72 sm:w-[290px]" time="9:41">
                      <div className="p-4 space-y-3 bg-white text-left">
                        {/* Android App Bar */}
                        <div className="flex items-center justify-between pb-2 border-b border-[#E8EBE7]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#648B72]" />
                            <span className="text-xs font-bold text-[#202522]">Lumina Android</span>
                          </div>
                          <span className="text-[9px] font-semibold text-[#648B72] bg-[#648B72]/15 px-2 py-0.5 rounded-full">
                            QR Verified
                          </span>
                        </div>

                        <div className="space-y-0.5">
                          <p className="text-[9px] font-semibold uppercase text-[#737873]">Event Gallery</p>
                          <h5 className="text-xs font-bold text-[#202522]">Aarav & Meera Wedding</h5>
                        </div>

                        {/* Guest Matching Card */}
                        <div className="p-3 bg-[#F7F8F6] rounded-xl border border-[#E8EBE7] text-center space-y-2">
                          <div className="w-14 h-14 rounded-full mx-auto overflow-hidden border-2 border-[#648B72] shadow-xs">
                            <img src={samplePhotos.aiMatchingDemo.guestSelfie} alt="Guest" className="w-full h-full object-cover" />
                          </div>
                          <p className="text-[10px] font-bold text-[#202522]">38 Photos Ready for You</p>
                          <button
                            onClick={() => onOpenAuthModal('signup')}
                            className="w-full py-1.5 bg-[#202522] text-white text-[10px] font-semibold rounded-lg shadow-xs hover:bg-[#333A36]"
                          >
                            Save to Device Gallery
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          <img src={samplePhotos.aiMatchingDemo.matchedPhotos[0].url} alt="t" className="rounded-lg aspect-square object-cover" />
                          <img src={samplePhotos.aiMatchingDemo.matchedPhotos[1].url} alt="t" className="rounded-lg aspect-square object-cover" />
                        </div>
                      </div>
                    </AndroidDeviceFrame>

                    {/* Benefit Points */}
                    <div className="max-w-md space-y-3 text-left">
                      <div className="p-4 bg-[#F7F8F6] rounded-xl border border-[#E8EBE7]">
                        <h5 className="text-xs font-bold text-[#202522] flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-[#648B72]" /> Android Chrome Progressive Experience
                        </h5>
                        <p className="text-[11px] text-[#737873] mt-1 leading-relaxed">
                          Guests point their Android camera at the QR standee. Instant load without entering app stores or downloading APKs.
                        </p>
                      </div>

                      <div className="p-4 bg-[#F7F8F6] rounded-xl border border-[#E8EBE7]">
                        <h5 className="text-xs font-bold text-[#202522] flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-[#648B72]" /> Lossless High-Resolution Saves
                        </h5>
                        <p className="text-[11px] text-[#737873] mt-1 leading-relaxed">
                          Photos save in master quality directly to the guest's Android device gallery and Google Photos.
                        </p>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
                    <div className="w-56 bg-white rounded-2xl p-5 border border-[#E8EBE7] soft-elevated-shadow text-center space-y-3">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#202522]">
                        AARAV & MEERA
                      </div>
                      <div className="p-3 bg-[#F7F8F6] rounded-xl border border-[#E8EBE7] inline-block">
                        <QrCode className="w-28 h-28 text-[#202522]" />
                      </div>
                      <p className="text-xs font-bold text-[#202522]">Scan for Event Photos</p>
                      <p className="text-[10px] text-[#737873]">Take a selfie • Find yourself instantly</p>
                    </div>

                    <div className="max-w-md space-y-3">
                      <h4 className="text-sm font-bold text-[#202522]">Print-Ready High-DPI Vector Standee Templates</h4>
                      <p className="text-xs text-[#737873] leading-relaxed">
                        Lumina automatically exports ready-to-print acrylic standee cards, table tents, and badge inserts customized with your studio brand logo and event dates.
                      </p>
                      <button
                        onClick={() => onOpenAuthModal('signup')}
                        className="px-4 py-2 bg-[#202522] text-white text-xs font-semibold rounded-lg hover:bg-[#333A36] transition-colors"
                      >
                        Download Sample Standee PDF
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* TAB 4: PHOTOGRAPHER DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                  <div className="bg-[#F7F8F6] p-4 rounded-xl border border-[#E8EBE7]">
                    <span className="text-[11px] text-[#737873]">Total Events Hosted</span>
                    <div className="text-xl sm:text-2xl font-bold text-[#202522] mt-0.5">42 Events</div>
                    <span className="text-[10px] text-[#648B72] font-semibold">+6 scheduled</span>
                  </div>
                  <div className="bg-[#F7F8F6] p-4 rounded-xl border border-[#E8EBE7]">
                    <span className="text-[11px] text-[#737873]">Delivered Photos</span>
                    <div className="text-xl sm:text-2xl font-bold text-[#202522] mt-0.5">68,400</div>
                    <span className="text-[10px] text-[#202522] font-medium">100% loss-free</span>
                  </div>
                  <div className="bg-[#F7F8F6] p-4 rounded-xl border border-[#E8EBE7]">
                    <span className="text-[11px] text-[#737873]">Guest QR Scans</span>
                    <div className="text-xl sm:text-2xl font-bold text-[#202522] mt-0.5">14,210</div>
                    <span className="text-[10px] text-[#648B72] font-semibold">88.4% engagement</span>
                  </div>
                  <div className="bg-[#F7F8F6] p-4 rounded-xl border border-[#E8EBE7]">
                    <span className="text-[11px] text-[#737873]">Cloud Storage</span>
                    <div className="text-xl sm:text-2xl font-bold text-[#202522] mt-0.5">214 GB / 1 TB</div>
                    <div className="w-full bg-[#E8EBE7] h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-[#648B72] h-full w-[21%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="border border-[#E8EBE7] rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-[#FAFBF9] border-b border-[#E8EBE7] flex items-center justify-between text-xs font-semibold text-[#202522]">
                    <span className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-[#648B72]" /> Active Studio Events
                    </span>
                    <button
                      onClick={() => onOpenAuthModal('signup')}
                      className="px-3 py-1 bg-[#202522] text-white text-[11px] font-semibold rounded-md hover:bg-[#333A36] cursor-pointer"
                    >
                      + Create New Event
                    </button>
                  </div>

                  <div className="divide-y divide-[#E8EBE7] text-xs">
                    {[
                      { name: 'Aarav & Meera Wedding (3 Days)', status: 'Live & Scanning', photos: 2840, guests: 640, date: 'Nov 22, 2026' },
                      { name: 'Google Cloud Developer Conclave', status: 'Indexing Done', photos: 1420, guests: 890, date: 'Nov 19, 2026' },
                      { name: 'Siddharth & Rhea Engagement', status: 'Client Proofing', photos: 950, guests: 180, date: 'Nov 15, 2026' },
                    ].map((evt, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#FAFBF9] transition-colors">
                        <div>
                          <p className="font-semibold text-[#202522]">{evt.name}</p>
                          <p className="text-[11px] text-[#737873]">{evt.date} • {evt.photos} RAW/JPEGs</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#648B72]/15 text-[#648B72] border border-[#648B72]/20">
                            {evt.status}
                          </span>
                          <span className="text-[#737873] text-[11px]">{evt.guests} guests connected</span>
                          <ChevronRight className="w-4 h-4 text-[#737873]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* 4. SUPPORTING FEATURE BENEFIT ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#202522]">Effortless Distribution</h4>
            <p className="text-xs text-[#737873] leading-relaxed">
              No manual image sorting or WhatsApp sharing. Every guest receives their personal photos automatically.
            </p>
          </div>

          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#202522]">Full Original Quality</h4>
            <p className="text-xs text-[#737873] leading-relaxed">
              Preserve original EXIF metadata and high-DPI resolution for print-ready wedding albums.
            </p>
          </div>

          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#202522]">Studio Branding</h4>
            <p className="text-xs text-[#737873] leading-relaxed">
              Add your custom watermark, custom domain, and acrylic standees to turn every guest into your next booking.
            </p>
          </div>
        </div>

        {/* 5. PRODUCT INTERACTION CTA */}
        <div className="pt-12 text-center">
          <p className="text-xs sm:text-sm text-[#737873] mb-3">
            Experience smarter event photo sharing.
          </p>
          <a
            href="#photographers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-[#202522] hover:bg-[#333A36] transition-all duration-200 shadow-xs cursor-pointer active:scale-98"
          >
            <span>Explore All Features</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8EBE7]" />
          </a>
        </div>

      </div>
    </section>
  );
}
