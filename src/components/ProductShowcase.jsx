import React, { useState } from 'react';
import {
  QrCode,
  ZoomIn,
  Check,
  FolderOpen,
  Calendar,
  Sparkles,
  UploadCloud,
  ScanFace,
  Images,
  ArrowUpRight
} from 'lucide-react';
import { samplePhotos } from '../data/content';

export default function ProductShowcase({ onOpenAuthModal, onOpenImageModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryCategories = ['All', 'Ceremony', 'Portraits', 'Candid'];

  const filteredGalleryPhotos =
    selectedCategory === 'All'
      ? samplePhotos.gallery.slice(0, 6)
      : samplePhotos.gallery
          .slice(0, 6)
          .filter((_, idx) => (selectedCategory === 'Ceremony' ? idx % 2 === 0 : idx % 2 !== 0));

  const matchedPhotos = samplePhotos.aiMatchingDemo.matchedPhotos.slice(0, 4);

  const studioEvents = [
    {
      name: 'Aarav & Meera Wedding',
      meta: 'Nov 22, 2026 • 2,840 Photos',
      status: 'Live & Scanning',
      progress: 100
    },
    {
      name: 'Google Cloud Developer Conclave',
      meta: 'Nov 19, 2026 • 1,420 Photos',
      status: 'Indexing Done',
      progress: 100
    },
    {
      name: 'Siddharth & Rhea Engagement',
      meta: 'Nov 15, 2026 • 950 Photos',
      status: 'Uploading RAWs',
      progress: 78
    }
  ];

  return (
    <section
      id="features"
      className="py-20 sm:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F5] border border-[#FCEBEC] text-[#C62828] text-xs font-semibold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]"></span>
            <span>Platform Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#202020] tracking-tight leading-[1.15] gsap-reveal-heading">
            Everything{' '}
            <span className="text-[#C62828] font-serif italic font-normal">
              Your Event Needs.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed gsap-reveal-text">
            From organizing event photos to discovering and sharing memories, everything works together in one seamless platform.
          </p>
        </div>

        {/* 2. ASYMMETRICAL FEATURE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 gsap-stagger-group">
          {/* FEATURE 01: SMART EVENT GALLERY (~60% -> 7 cols on desktop) */}
          <article className="md:col-span-1 lg:col-span-7 bg-white rounded-3xl border border-[#E8E8E8] hover:border-[#C62828]/40 soft-card-shadow hover:soft-elevated-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden gsap-stagger-item">
            {/* Visual Product Preview */}
            <div className="p-4 sm:p-6 pb-0">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#F7F7F7] overflow-hidden">
                {/* Album Cover Banner */}
                <div className="relative h-28 sm:h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Aarav & Meera Nuptials album cover"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between gap-2 text-white">
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                        Event Album
                      </span>
                      <p className="text-sm sm:text-base font-bold truncate mt-1">
                        Aarav & Meera Nuptials
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] font-medium text-white/95 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>2,840 Photos</span>
                    </span>
                  </div>
                </div>

                {/* Category Filter Bar */}
                <div className="px-3.5 py-2.5 bg-white border-b border-[#E8E8E8] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                    {galleryCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-[#C62828] text-white'
                            : 'bg-[#F7F7F7] text-[#666666] hover:text-[#C62828] hover:bg-[#FFF5F5]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <span className="hidden sm:inline text-[11px] text-[#888888] shrink-0">
                    Original Quality
                  </span>
                </div>

                {/* Organized Photo Grid */}
                <div className="p-3 sm:p-3.5 grid grid-cols-3 gap-2.5 bg-white">
                  {filteredGalleryPhotos.map((photo, idx) => (
                    <div
                      key={photo.id || idx}
                      onClick={() => onOpenImageModal && onOpenImageModal(photo)}
                      className="group/img relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F7F7] border border-[#E8E8E8] cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="p-1.5 rounded-full bg-white/95 text-[#C62828] shadow-xs">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Copy & Status */}
            <div className="p-5 sm:p-6 pt-5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C62828] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FCEBEC]">
                  <Images className="w-3 h-3" />
                  <span>2,840 Photos • 4 Categories</span>
                </span>
                <span className="text-[11px] font-medium text-[#888888]">01</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
                Every Moment, Beautifully Organized.
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Keep all your event photographs organized in one beautiful gallery. Browse, manage and share memories effortlessly.
              </p>
            </div>
          </article>

          {/* FEATURE 02: AI PHOTO DISCOVERY (~40% -> 5 cols on desktop) */}
          <article className="md:col-span-1 lg:col-span-5 bg-white rounded-3xl border border-[#E8E8E8] hover:border-[#C62828]/40 soft-card-shadow hover:soft-elevated-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden gsap-stagger-item">
            {/* Visual Product Preview */}
            <div className="p-4 sm:p-6 pb-0">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#F7F7F7] p-3.5 sm:p-4 space-y-3.5">
                {/* Guest Selfie Query Bar */}
                <div className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-[#E8E8E8]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-[#C62828] shrink-0">
                      <img
                        src={samplePhotos.aiMatchingDemo.guestSelfie}
                        alt={samplePhotos.aiMatchingDemo.guestName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#202020] truncate">
                        {samplePhotos.aiMatchingDemo.guestName}
                      </p>
                      <p className="text-[11px] text-[#666666] flex items-center gap-1">
                        <ScanFace className="w-3 h-3 text-[#C62828]" />
                        <span>Face indexed in 2.1s</span>
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold text-[#C62828] bg-[#FFF5F5] px-2 py-1 rounded-lg border border-[#FCEBEC]">
                    38 Found
                  </span>
                </div>

                {/* Matched Event Photographs Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {matchedPhotos.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/match relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E8E8E8]"
                    >
                      <img
                        src={item.url}
                        alt={item.tag}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/match:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-white/95 border border-[#E8E8E8] text-[9px] font-bold text-[#202020] flex items-center gap-1 shadow-2xs">
                        <Check className="w-2.5 h-2.5 text-[#43866A]" />
                        <span>{item.confidence}</span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                        <p className="text-[10px] font-medium text-white truncate">{item.tag}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Copy & Status */}
            <div className="p-5 sm:p-6 pt-5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C62828] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FCEBEC]">
                  <Sparkles className="w-3 h-3" />
                  <span>99.4% AI Match Precision</span>
                </span>
                <span className="text-[11px] font-medium text-[#888888]">02</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
                Find Your Photos Instantly.
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Let guests discover their personal event photographs using intelligent AI-powered face matching.
              </p>
            </div>
          </article>

          {/* FEATURE 03: QR PHOTO SHARING (6 cols on desktop) */}
          <article className="md:col-span-1 lg:col-span-6 bg-white rounded-3xl border border-[#E8E8E8] hover:border-[#C62828]/40 soft-card-shadow hover:soft-elevated-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden gsap-stagger-item">
            {/* Visual Product Preview */}
            <div className="p-4 sm:p-6 pb-0">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#F7F7F7] p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                {/* Left: Event QR Standee Card */}
                <div className="bg-white rounded-2xl p-4 border border-[#E8E8E8] soft-card-shadow text-center space-y-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#202020]">
                    Aarav & Meera
                  </p>
                  <div className="inline-flex p-2.5 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                    <QrCode className="w-20 h-20 text-[#202020]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#202020]">Scan for Event Photos</p>
                    <p className="text-[10px] text-[#666666]">Opens directly in browser</p>
                  </div>
                </div>

                {/* Right: Smartphone Gallery Preview */}
                <div className="bg-white rounded-2xl border-2 border-[#202020] p-3 shadow-sm space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
                    <span className="text-[10px] font-bold text-[#202020]">Lumina Gallery</span>
                    <span className="text-[9px] font-semibold text-[#43866A] bg-[#43866A]/10 px-2 py-0.5 rounded-full">
                      QR Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                    <img
                      src={samplePhotos.aiMatchingDemo.guestSelfie}
                      alt="Guest match preview"
                      className="w-8 h-8 rounded-full object-cover border border-[#C62828] shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-[#202020] truncate">
                        38 Photos Ready
                      </p>
                      <p className="text-[9px] text-[#666666]">No app required</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <img
                      src={samplePhotos.aiMatchingDemo.matchedPhotos[0].url}
                      alt="Matched event preview 1"
                      className="w-full aspect-square object-cover rounded-lg"
                      loading="lazy"
                    />
                    <img
                      src={samplePhotos.aiMatchingDemo.matchedPhotos[1].url}
                      alt="Matched event preview 2"
                      className="w-full aspect-square object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Copy & Status */}
            <div className="p-5 sm:p-6 pt-5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C62828] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FCEBEC]">
                  <QrCode className="w-3 h-3" />
                  <span>QR Verified • Zero App Install</span>
                </span>
                <span className="text-[11px] font-medium text-[#888888]">03</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
                One Scan. Every Memory.
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Give guests instant access to event galleries through a simple QR code. No app installation required.
              </p>
            </div>
          </article>

          {/* FEATURE 04: PHOTOGRAPHER DASHBOARD (6 cols on desktop) */}
          <article className="md:col-span-1 lg:col-span-6 bg-white rounded-3xl border border-[#E8E8E8] hover:border-[#C62828]/40 soft-card-shadow hover:soft-elevated-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden gsap-stagger-item">
            {/* Visual Product Preview */}
            <div className="p-4 sm:p-6 pb-0">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#F7F7F7] p-3.5 sm:p-4 space-y-3">
                {/* Compact Studio Analytics Row */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8]">
                    <p className="text-[10px] text-[#666666]">Delivered</p>
                    <p className="text-sm sm:text-base font-bold text-[#202020] mt-0.5">68,400</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8]">
                    <p className="text-[10px] text-[#666666]">QR Scans</p>
                    <p className="text-sm sm:text-base font-bold text-[#202020] mt-0.5">14,210</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8]">
                    <div className="flex items-center justify-between text-[10px] text-[#666666]">
                      <span>Storage</span>
                      <span className="font-semibold text-[#202020]">21%</span>
                    </div>
                    <div className="w-full bg-[#E8E8E8] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#C62828] h-full w-[21%] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Active Event Collections List */}
                <div className="bg-white rounded-xl border border-[#E8E8E8] overflow-hidden">
                  <div className="px-3.5 py-2 bg-[#FAFAFA] border-b border-[#E8E8E8] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#202020] flex items-center gap-1.5">
                      <FolderOpen className="w-3.5 h-3.5 text-[#C62828]" />
                      <span>Active Studio Events</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenAuthModal && onOpenAuthModal('signup')}
                      className="text-[10px] font-semibold text-[#C62828] hover:text-[#A61F24] transition-colors inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>Open Studio</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="divide-y divide-[#E8E8E8]">
                    {studioEvents.map((evt, idx) => (
                      <div key={idx} className="px-3.5 py-2.5 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#202020] truncate">{evt.name}</p>
                          <p className="text-[10px] text-[#666666] truncate">{evt.meta}</p>
                        </div>

                        <div className="shrink-0 flex items-center gap-2">
                          {evt.progress < 100 && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-[#666666]">
                              <UploadCloud className="w-3 h-3 text-[#C62828]" />
                              <span>{evt.progress}%</span>
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#FFF5F5] text-[#C62828] border border-[#FCEBEC]">
                            {evt.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Copy & Status */}
            <div className="p-5 sm:p-6 pt-5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C62828] bg-[#FFF5F5] px-2.5 py-0.5 rounded-full border border-[#FCEBEC]">
                  <UploadCloud className="w-3 h-3" />
                  <span>42 Active Events • Live Sync</span>
                </span>
                <span className="text-[11px] font-medium text-[#888888]">04</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
                Your Studio. Under Control.
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Manage events, organize photographs and monitor gallery activity from one professional dashboard.
              </p>
            </div>
          </article>
        </div>

        {/* 3. SUPPORTING FEATURE BENEFIT ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#202020]">Effortless Distribution</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              No manual image sorting or WhatsApp sharing. Every guest receives their personal photos automatically.
            </p>
          </div>

          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#202020]">Full Original Quality</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Preserve original EXIF metadata and high-DPI resolution for print-ready wedding albums.
            </p>
          </div>

          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#202020]">Studio Branding</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Add your custom watermark, domain, and QR standees to turn every guest into a studio referral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
