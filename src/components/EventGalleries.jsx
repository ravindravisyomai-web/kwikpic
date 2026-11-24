import React, { useState } from 'react';
import { samplePhotos } from '../data/content';
import { ZoomIn, Eye, Heart } from 'lucide-react';

export default function EventGalleries({ onOpenImageModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Corporate', 'Festivals', 'Birthdays', 'Engagements'];

  const filteredPhotos = selectedCategory === 'All'
    ? samplePhotos.gallery
    : samplePhotos.gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#F7F8F6] border-y border-[#E8EBE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
            Visual Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202522] tracking-tight">
            Designed for Editorial Event Photography
          </h2>
          <p className="text-sm sm:text-base text-[#737873]">
            Present your master photography in an uncluttered, magazine-style layout where each image shines.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#202522] text-white shadow-xs'
                  : 'bg-white text-[#737873] hover:text-[#202522] border border-[#E8EBE7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo)}
              className="group bg-white rounded-xl overflow-hidden border border-[#E8EBE7] soft-card-shadow cursor-pointer smooth-hover hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#F7F8F6] relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover smooth-hover group-hover:scale-103"
                  loading="lazy"
                />
                
                {/* Clean hover overlay */}
                <div className="absolute inset-0 bg-[#202522]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 rounded-full p-2 text-[#202522] shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-3.5 space-y-1">
                <div className="flex items-center justify-between text-[10px] text-[#737873]">
                  <span>{photo.category}</span>
                  <span className="text-[#648B72] font-semibold">{photo.matches} matches</span>
                </div>
                <h4 className="text-xs font-bold text-[#202522] truncate">{photo.title}</h4>
                <p className="text-[11px] text-[#737873]">{photo.location}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
