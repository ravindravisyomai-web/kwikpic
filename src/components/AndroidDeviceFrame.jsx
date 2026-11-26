import React from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

/**
 * Premium Google Pixel / Android flagship smartphone frame.
 */
export default function AndroidDeviceFrame({
  children,
  className = '',
  time = '9:41',
  showGestureBar = true
}) {
  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Smartphone Outer Chassis with neutral metallic bevel */}
      <div className="relative rounded-[44px] p-[10px] bg-gradient-to-b from-[#2A2A2A] via-[#1C1C1C] to-[#121212] shadow-[0_25px_60px_-15px_rgba(32,32,32,0.18),0_10px_25px_-5px_rgba(32,32,32,0.1),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.5)] border border-[#383838]/60 transition-transform duration-300 hover:-translate-y-1">
        
        {/* Subtle Side Button Accents (Power & Volume rocker) */}
        <div className="absolute -left-[12px] top-28 w-[3px] h-10 bg-[#333333] rounded-l-sm" />
        <div className="absolute -right-[12px] top-24 w-[3px] h-8 bg-[#333333] rounded-r-sm" />
        <div className="absolute -right-[12px] top-36 w-[3px] h-14 bg-[#333333] rounded-r-sm" />

        {/* Screen Bezel & Display Viewport */}
        <div className="relative rounded-[34px] overflow-hidden bg-[#FAFAFA] border border-[#202020]/10 flex flex-col justify-between">
          
          {/* ANDROID STATUS BAR */}
          <div className="relative z-30 px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-medium text-[#202020] bg-white/95 backdrop-blur-xs select-none border-b border-[#E8E8E8]/70">
            {/* Left: Android Time */}
            <span className="font-semibold tracking-tight">{time}</span>

            {/* Center: Punch-Hole Camera */}
            <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#141414] ring-1 ring-[#2E2E2E] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
            </div>

            {/* Right: Android System Status Icons */}
            <div className="flex items-center gap-1.5 text-[#202020]">
              <Signal className="w-3 h-3 stroke-[2.2]" />
              <Wifi className="w-3 h-3 stroke-[2.2]" />
              <div className="flex items-center gap-0.5">
                <span className="text-[10px] font-bold">98%</span>
                <Battery className="w-3.5 h-3.5 stroke-[2.2] fill-[#202020]" />
              </div>
            </div>
          </div>

          {/* SCREEN APPLICATION CONTENT VIEWPORT */}
          <div className="relative flex-1 overflow-hidden bg-white text-[#202020]">
            {children}
          </div>

          {/* ANDROID BOTTOM GESTURE NAVIGATION PILL */}
          {showGestureBar && (
            <div className="relative z-30 py-2.5 bg-white/95 backdrop-blur-xs flex items-center justify-center border-t border-[#E8E8E8]/50">
              <div className="w-28 h-1 rounded-full bg-[#202020]/35" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
