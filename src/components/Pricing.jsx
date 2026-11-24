import React, { useState } from 'react';
import { pricingPlans } from '../data/content';
import { Check } from 'lucide-react';

export default function Pricing({ onOpenAuthModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-24 bg-[#F7F8F6] border-y border-[#E8EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Viewport Entrance */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 gsap-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#648B72]">
            Straightforward Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202522] tracking-tight gsap-reveal-heading">
            Plans That Scale With Your Events
          </h2>
          <p className="text-sm sm:text-base text-[#737873] gsap-reveal-text">
            Start completely free. Upgrade when your client galleries and guest volume increase.
          </p>

          {/* Minimal Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className={`text-xs font-medium ${billingCycle === 'monthly' ? 'text-[#202522] font-semibold' : 'text-[#737873]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-11 h-6 bg-[#E8EBE7] rounded-full p-1 relative transition-colors focus:outline-none cursor-pointer"
            >
              <div
                className={`w-4 h-4 bg-[#202522] rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-[#202522] font-semibold' : 'text-[#737873]'}`}>
              Yearly <span className="text-[10px] bg-[#648B72]/15 text-[#648B72] font-bold px-1.5 py-0.5 rounded">Save 20%</span>
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
                  className={`bg-white rounded-2xl p-7 border flex flex-col justify-between relative soft-card-shadow h-full transition-all duration-300 hover:-translate-y-1.5 ${
                    plan.recommended
                      ? 'border-[#202522] ring-1 ring-[#202522] shadow-[0_15px_35px_-10px_rgba(32,37,34,0.1)]'
                      : 'border-[#E8EBE7]'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-6 bg-[#202522] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                      Recommended
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#202522]">{plan.name}</h3>
                      <span className="text-[10px] font-semibold uppercase text-[#737873] bg-[#F7F8F6] px-2 py-0.5 rounded border border-[#E8EBE7]">
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#737873] mt-2 min-h-[32px]">
                      {plan.description}
                    </p>

                    <div className="py-5 border-y border-[#E8EBE7] my-5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-[#202522]">
                          ${price}
                        </span>
                        <span className="text-xs text-[#737873]">
                          {plan.isFree ? '/ forever' : `/ month ${billingCycle === 'yearly' ? '(billed annually)' : ''}`}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#202522]">Included Features:</p>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#202522]">
                          <Check className="w-3.5 h-3.5 text-[#648B72] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8EBE7]">
                    <button
                      onClick={() => onOpenAuthModal('signup')}
                      className={`w-full py-2.5 rounded-lg font-semibold text-xs transition-all cursor-pointer ${
                        plan.recommended
                          ? 'bg-[#202522] hover:bg-[#333A36] text-white shadow-xs'
                          : 'bg-[#F7F8F6] hover:bg-[#ECEEEA] text-[#202522] border border-[#E8EBE7]'
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
