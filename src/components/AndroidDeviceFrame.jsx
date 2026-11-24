import React from 'react';
import { Wifi, Signal, Battery, Camera } from 'lucide-react';

/**
 * Premium Google Pixel / Android flagship smartphone frame.
 * Features:
 * - Center-aligned subtle punch-hole front camera
 * - Android Material You / Android 14 status bar with live time, network, WiFi, and battery
 * - Realistic slim uniform bezels & rounded corners
 * - Android gesture navigation bar pill at the bottom
 * - Subtle device edge highlights and soft ambient device shadow
 */
export default function AndroidDeviceFrame({
  children,
  className = '',
  time = '9:41',
  variant = 'dark', // 'dark' (obsidian) or 'light' (porcelain)
  showGestureBar = true,
  aspectRatio = 'aspect-[9/19.5]'
}) {
  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Smartphone Outer Chassis with premium bevel */}
      <div className="relative rounded-[44px] p-[10px] bg-gradient-to-b from-[#2B302D] via-[#1D211F] to-[#141715] shadow-[0_25px_60px_-15px_rgba(32,37,34,0.18),0_10px_25px_-5px_rgba(32,37,34,0.1),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.5)] border border-[#3A403C]/60 transition-transform duration-300 hover:-translate-y-1">
        
        {/* Subtle Side Button Accents (Power & Volume rocker) */}
        <div className="absolute -left-[12px] top-28 w-[3px] h-10 bg-[#353A37] rounded-l-sm" />
        <div className="absolute -right-[12px] top-24 w-[3px] h-8 bg-[#353A37] rounded-r-sm" />
        <div className="absolute -right-[12px] top-36 w-[3px] h-14 bg-[#353A37] rounded-r-sm" />

        {/* Screen Bezel & Display Viewport */}
        <div className="relative rounded-[34px] overflow-hidden bg-[#FAFBF9] border border-[#202522]/10 flex flex-col justify-between">
          
          {/* ANDROID STATUS BAR */}
          <div className="relative z-30 px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-medium text-[#202522] bg-white/95 backdrop-blur-xs select-none border-b border-[#E8EBE7]/50">
            {/* Left: Android Time */}
            <span className="font-semibold tracking-tight">{time}</span>

            {/* Center: Punch-Hole Camera */}
            <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#111413] ring-1 ring-[#2E3330] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A3127]/60" />
            </div>

            {/* Right: Android System Status Icons */}
            <div className="flex items-center gap-1.5 text-[#202522]">
              <Signal className="w-3 h-3 stroke-[2.2]" />
              <Wifi className="w-3 h-3 stroke-[2.2]" />
              <div className="flex items-center gap-0.5">
                <span className="text-[10px] font-bold">98%</span>
                <Battery className="w-3.5 h-3.5 stroke-[2.2] fill-[#202522]" />
              </div>
            </div>
          </div>

          {/* SCREEN APPLICATION CONTENT VIEWPORT */}
          <div className="relative flex-1 overflow-hidden bg-white text-[#202522]">
            {children}
          </div>

          {/* ANDROID BOTTOM GESTURE NAVIGATION PILL */}
          {showGestureBar && (
            <div className="relative z-30 py-2.5 bg-white/95 backdrop-blur-xs flex items-center justify-center border-t border-[#E8EBE7]/40">
              <div className="w-28 h-1 rounded-full bg-[#202522]/40" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
