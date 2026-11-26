import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Camera, CheckCircle2 } from 'lucide-react';

export function AuthModal({ isOpen, mode, onClose, onSwitchMode }) {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [studioName, setStudioName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202020]/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-2xl bg-white border border-[#E8E8E8] p-6 sm:p-7 soft-elevated-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#666666] hover:text-[#202020] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Brand */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-7 h-7 rounded-lg bg-[#C62828] flex items-center justify-center text-white shadow-xs">
            <Camera className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-base text-[#202020]">
            Lumina<span className="text-[#C62828]">.</span>
          </span>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#43866A]/15 text-[#43866A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#202020]">
              {mode === 'login' ? 'Welcome Back' : 'Account Ready'}
            </h4>
            <p className="text-xs text-[#666666]">
              Opening your studio workspace...
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-[#202020] mb-1">
              {mode === 'login' ? 'Sign In to Studio Workspace' : 'Create Photographer Account'}
            </h3>
            <p className="text-xs text-[#666666] mb-5">
              {mode === 'login'
                ? 'Manage active events, guest QR codes, and client selections.'
                : 'Get started with 1,000 free photos. No credit card required.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'signup' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#202020] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Arjun Kapoor"
                      className="w-full px-3 py-2 bg-[#F7F7F7] border border-[#E8E8E8] rounded-lg text-xs text-[#202020] placeholder-[#888888] focus:outline-none focus:border-[#C62828] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202020] mb-1">Studio / Brand Name</label>
                    <input
                      type="text"
                      required
                      value={studioName}
                      onChange={(e) => setStudioName(e.target.value)}
                      placeholder="e.g. Luminary Wedding Films"
                      className="w-full px-3 py-2 bg-[#F7F7F7] border border-[#E8E8E8] rounded-lg text-xs text-[#202020] placeholder-[#888888] focus:outline-none focus:border-[#C62828] focus:bg-white transition-colors"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#202020] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@studio.com"
                  className="w-full px-3 py-2 bg-[#F7F7F7] border border-[#E8E8E8] rounded-lg text-xs text-[#202020] placeholder-[#888888] focus:outline-none focus:border-[#C62828] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202020] mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3 py-2 bg-[#F7F7F7] border border-[#E8E8E8] rounded-lg text-xs text-[#202020] placeholder-[#888888] focus:outline-none focus:border-[#C62828] focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 rounded-lg font-semibold text-xs text-white bg-[#C62828] hover:bg-[#A61F24] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>{mode === 'login' ? 'Sign In' : 'Create Free Account'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-[#666666]">
              {mode === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={() => onSwitchMode('signup')}
                    className="text-[#C62828] font-semibold hover:underline cursor-pointer"
                  >
                    Start Free
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => onSwitchMode('login')}
                    className="text-[#C62828] font-semibold hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export function ImageModal({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202020]/80 backdrop-blur-xs animate-in fade-in duration-150" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden bg-white border border-[#E8E8E8] p-2 soft-elevated-shadow" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/90 text-[#202020] hover:bg-white transition-colors shadow-xs cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        <img src={photo.url} alt={photo.title} className="max-w-full max-h-[80vh] object-contain rounded-xl" />
        <div className="p-3 flex items-center justify-between text-xs">
          <div>
            <h4 className="font-bold text-[#202020]">{photo.title}</h4>
            <p className="text-[#666666]">{photo.location} • {photo.category}</p>
          </div>
          <span className="text-[#C62828] font-semibold">{photo.matches} Matches</span>
        </div>
      </div>
    </div>
  );
}
