"use client";

import { useState } from "react";
import { CheckCircle2, X, CreditCard, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  duration: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const plans: Plan[] = [
  {
    id: "3-months",
    name: "Sofa Basic",
    subtitle: "Ideal for experiencing high-speed 4K IPTV streaming and live sports.",
    price: 35,
    duration: "/ 3 Months",
    saving: "Save 22%",
    features: [
      { text: "50,000+ Live HD & 4K Channels", included: true },
      { text: "200,000+ Movies & Series (VOD)", included: true },
      { text: "Fast Anti-Freeze v8.2 Servers", included: true },
      { text: "24/7 Dedicated Customer Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Order 3 Months IPTV",
  },
  {
    id: "12-months",
    name: "Sofa Ultimate",
    subtitle: "Our flagship annual pass — 12 months of premium 4K IPTV at maximum savings.",
    price: 69.99,
    oldPrice: 80,
    duration: "/ 12 Months",
    saving: "Save 61% (Best Value)",
    popular: true,
    features: [
      { text: "50,000+ Live HD & 4K Channels", included: true },
      { text: "200,000+ Movies & TV Shows (VOD)", included: true },
      { text: "Anti-Freeze v8.2 & 99.9% Uptime", included: true },
      { text: "24/7 VIP Priority Tech Support", included: true },
      { text: "Up to 3 simultaneous devices", included: true },
    ],
    buttonText: "Claim 12 Months + Best Value",
  },
  {
    id: "6-months",
    name: "Sofa Pro",
    subtitle: "Six months of buffer-free 4K television and massive on-demand entertainment.",
    price: 49.99,
    duration: "/ 6 Months",
    saving: "Save 44%",
    features: [
      { text: "50,000+ Live HD & 4K Channels", included: true },
      { text: "200,000+ Movies & Series (VOD)", included: true },
      { text: "Anti-Freeze v8.2 Technology", included: true },
      { text: "24/7 Fast Customer Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Order 6 Months IPTV",
  },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the SofaIPTV ${plan.name} plan (${plan.duration}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="pricing" className="relative bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <header className="mx-auto max-w-3xl text-center mb-10">
          <p className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600">SOFAIPTV SUBSCRIPTION PLANS</p>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl uppercase">
            Choose Your <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">SofaIPTV Subscription Plan</span>
          </h2>
          <p className="mt-5 text-xl font-bold tracking-wide text-slate-900 sm:text-2xl">Affordable, Buffer-Free 4K IPTV Streaming</p>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">Zero hidden fees. Instant automated activation. Unlock 50,000+ live channels and 200,000+ VOD titles today.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-10 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30" : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-start pt-4">
          {plans.map((plan) => (
            <article 
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 border-2 ${
                plan.popular 
                  ? "border-indigo-600 shadow-[0_15px_40px_-10px_rgba(79,70,229,0.25)] md:-mt-4" 
                  : "border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-b-xl rounded-t-sm bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 py-1.5 shadow-md whitespace-nowrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-white">Best Value · Most Popular</span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed min-h-[40px]">{plan.subtitle}</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-black tracking-tighter text-indigo-600">${priceFor(plan)}</span>
                <span className="ml-1 text-xs font-semibold text-slate-400">{plan.duration}</span>
              </div>
              
              <div className="min-h-[24px] mt-1 flex items-center gap-2">
                {plan.saving && (
                  <p className="text-xs font-bold text-cyan-600">{plan.saving}</p>
                )}
                {plan.oldPrice && (
                   <p className="text-xs font-semibold text-slate-400 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>
                )}
              </div>

              <ul className="mt-6 flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.popular ? "text-indigo-600" : "text-cyan-600"}`} strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-slate-300" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm font-medium ${feature.included ? "text-slate-700" : "text-slate-300"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                onClick={() => handleOrder(plan)}
                className={`mt-8 w-full rounded-xl py-4 text-sm font-bold text-white transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-cyan-500 hover:-translate-y-0.5" 
                    : "bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h4 className="text-base font-bold text-slate-950 flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                Secure Checkout &amp; Instant Automated IPTV Activation
              </h4>
              <p className="text-sm text-slate-500">Pay securely with Credit Card, PayPal, or Crypto. Receive your M3U and Xtream Codes credentials immediately after ordering.</p>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <CreditCard className="h-8 w-8 hover:text-indigo-600 transition-colors" />
              <Bitcoin className="h-8 w-8 hover:text-indigo-600 transition-colors" />
              <Wallet className="h-8 w-8 hover:text-indigo-600 transition-colors" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
