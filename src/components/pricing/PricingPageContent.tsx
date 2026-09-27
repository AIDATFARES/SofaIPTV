"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, X, CreditCard, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap, Bitcoin, Wallet } from "lucide-react";

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

const includedFeatures = [
  { icon: Tv, title: "50,000+ Live Channels", text: "Stream 50,000+ global channels covering live sports, news, and entertainment in 4K UHD and FHD 60FPS." },
  { icon: MonitorSmartphone, title: "200,000+ VOD Titles", text: "Enjoy a massive, continuously refreshed on-demand entertainment library of the latest blockbuster movies and complete series." },
  { icon: Zap, title: "Anti-Freeze v8.2 Technology", text: "Our dedicated high-speed server infrastructure prevents buffering during high-traffic live sporting events." },
  { icon: Headphones, title: "24/7 Priority Support", text: "SofaIPTV technical specialists are available around the clock via WhatsApp and email for instant setup help." },
  { icon: Sparkles, title: "Instant 5-Minute Activation", text: "Receive your SofaIPTV Xtream Codes and M3U playlist credentials within minutes of completing your order." },
  { icon: CreditCard, title: "Synchronized TV Guide (EPG)", text: "Effortlessly browse channel schedules with an interactive, regularly updated electronic program guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options include major Credit Cards, PayPal, and Cryptocurrency. <Link className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="/contact">Contact SofaIPTV support</Link> if you need assistance.</> },
  { question: "2. Is my payment protected?", answer: "Yes, all transactions are processed through 256-bit SSL encrypted gateways. We never store your payment card details." },
  { question: "3. Will my subscription renew automatically?", answer: <>No automatic unwanted billing. You have total control and can renew manually whenever you choose. <Link className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="/contact">Contact support</Link> if you have questions.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes! <Link className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="/contact">Message our support team</Link> with your order email and we will adjust your active account immediately.</> },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the SofaIPTV ${plan.name} plan (${plan.duration}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-600">SofaIPTV Pricing</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-slate-950 uppercase">Choose Your Premium</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent uppercase">SofaIPTV Subscription Plan</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Select the ideal SofaIPTV subscription package for your household. Enjoy instant automated activation, 50,000+ live channels, 200,000+ VODs, and 24/7 priority support.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">New to IPTV? Explore our complete <Link className="font-semibold text-indigo-600 hover:text-indigo-700" href="/channels">channel directory</Link> or follow our simple <Link className="font-semibold text-indigo-600 hover:text-indigo-700" href="/installation">device setup guide</Link>.</p>
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

        {/* Bottom Security Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200 border-l-4 border-l-indigo-600">
            <div>
              <h4 className="text-lg font-bold text-slate-950">Secure 256-Bit SSL Ordering &amp; Instant IPTV Delivery</h4>
              <p className="mt-1 text-sm text-slate-500 font-medium">Pay safely using Credit Card, PayPal, or Crypto. Receive your M3U and Xtream Codes credentials immediately.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-slate-600">
              <CreditCard className="h-7 w-7 hover:text-indigo-600 transition-colors" strokeWidth={1.5} />
              <Bitcoin className="h-7 w-7 hover:text-indigo-600 transition-colors" strokeWidth={1.5} />
              <Wallet className="h-7 w-7 hover:text-indigo-600 transition-colors" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold text-slate-950 uppercase">Every SofaIPTV Plan Includes</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm" key={title}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-slate-950 uppercase">SofaIPTV Billing &amp; Subscription FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-indigo-300 transition-colors" key={item.question}>
                <div className="bg-slate-50 border-b border-slate-100 px-5 py-4 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-5 text-sm text-slate-600 leading-relaxed bg-white flex-1">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-slate-600">
          <ShieldCheck className="h-5 w-5 text-emerald-500" />
          <span className="font-semibold text-slate-950">100% Secure Ordering</span> and 24/7 dedicated SofaIPTV customer care.
        </div>
      </div>
    </section>
  );
}
