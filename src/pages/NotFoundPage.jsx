import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | Lumina';
  }, []);

  return (
    <main className="pt-32 pb-24 bg-[#FFFFFF] flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-3xl p-8 sm:p-12 soft-card-shadow">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-[#C62828]">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-[#666666] leading-relaxed">
          The page or event solution you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#C62828] hover:bg-[#A61F24] transition-colors shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#202020] bg-white border border-[#E8E8E8] hover:border-[#C62828] hover:text-[#C62828] hover:bg-[#FFF5F5] transition-colors shadow-xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
