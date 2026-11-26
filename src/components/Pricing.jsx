import React, { useState } from 'react';
import { pricingPlans } from '../data/content';
import { Check } from 'lucide-react';

export default function Pricing({ onOpenAuthModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-24 bg-[#F7F7F7] border-y border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Viewport Entrance */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C62828]">
            Straightforward Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight gsap-reveal-heading">
            Plans That Scale With Your Events
          </h2>
          <p className="text-sm sm:text-base text-[#666666] gsap-reveal-text">
            Start completely free. Upgrade when your client galleries and guest volume increase.
          </p>

          {/* Minimal Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className={`text-xs font-medium ${billingCycle === 'monthly' ? 'text-[#202020] font-semibold' : 'text-[#666666]'}`}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={billingCycle === 'yearly'}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              aria-label="Toggle billing cycle"
              className={`w-11 h-6 rounded-full p-1 relative transition-colors focus:outline-none cursor-pointer ${
                billingCycle === 'yearly' ? 'bg-[#C62828]' : 'bg-[#E8E8E8]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-5 bg-white' : 'translate-x-0 bg-[#202020]'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-[#202020] font-semibold' : 'text-[#666666]'}`}>
              Yearly <span className="text-[10px] bg-[#FCEBEC] text-[#C62828] font-bold px-1.5 py-0.5 rounded">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Staggered Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch gsap-stagger-group">
          {pricingPlans.map((plan, idx) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <div key={idx} className="gsap-stagger-item h-full">
                <div
                  className={`bg-white rounded-2xl p-7 border flex flex-col justify-between relative soft-card-shadow h-full transition-all duration-300 hover:-translate-y-1.5 ${plan.recommended
                    ? 'border-[#C62828] ring-1 ring-[#C62828] shadow-[0_15px_35px_-10px_rgba(198,40,40,0.12)]'
                    : 'border-[#E8E8E8]'
                    }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-6 bg-[#C62828] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                      Recommended
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#202020]">{plan.name}</h3>
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded border ${
                        plan.recommended
                          ? 'text-[#C62828] bg-[#FFF5F5] border-[#FCEBEC]'
                          : 'text-[#666666] bg-[#F7F7F7] border-[#E8E8E8]'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#666666] mt-2 min-h-[32px]">
                      {plan.description}
                    </p>

                    <div className="py-5 border-y border-[#E8E8E8] my-5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-[#202020]">
                          ${price}
                        </span>
                        <span className="text-xs text-[#666666]">
                          {plan.isFree ? '/ forever' : `/ month ${billingCycle === 'yearly' ? '(billed annually)' : ''}`}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#202020]">Included Features:</p>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#202020]">
                          <Check className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8E8E8]">
                    <button
                      onClick={() => onOpenAuthModal('signup')}
                      className={`w-full py-2.5 rounded-lg font-semibold text-xs transition-all cursor-pointer ${plan.recommended
                        ? 'bg-[#C62828] hover:bg-[#A61F24] text-white shadow-xs'
                        : 'bg-white hover:bg-[#FFF5F5] text-[#202020] hover:text-[#C62828] border border-[#E8E8E8] hover:border-[#C62828]'
                        }`}
                    >
                      {plan.cta}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
